import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deleteAlbum } from '../actions'

import Grid from '@material-ui/core/Grid'
import { confirmAlert } from 'react-confirm-alert' // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import Pagination from 'react-js-pagination'
import Helmet from './public/styles/helmet'
import moment from 'moment'
import _ from 'lodash'

const Header = props => (
  <Grid key={1} container xs={12} className={'item header-sessions'}>
    <Grid xs={6} className={'count'}>
      <span className={'sum title'}>Operador</span>
    </Grid>
    <Grid xs={3} className={'count'}>
      <span className={'sum'}>Abertura de Sessão</span>
    </Grid>
    <Grid xs={3} className={'count'}>
      <span className={'sum'}>Fechamento de Sessão</span>
    </Grid>
  </Grid>
)

class ListSessions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activePage: 1,
      itemsPerPage: 10
    }
    this.handlePageChange = this.handlePageChange.bind(this)
  }

  submit(value) {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="react-confirm-alert-body">
            <h5>Confirma a exclusão?</h5>
            <p>
              {' '}
              <small>Você deseja realmente excluir o álbum?</small>
            </p>
            <button className={'button-recuse'} onClick={onClose}>
              Cancelar
            </button>
            <button
              className={'button-confirm'}
              onClick={() => {
                this.props.deleteAlbum(value)
                onClose()
              }}
            >
              Sim, excluir!
            </button>
          </div>
        )
      }
    })
  }

  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber })
  }

  listItems(items, pageActual, limitItems) {
    let result = []
    let totalPage = Math.ceil(items.length / limitItems)
    let count = pageActual * limitItems - limitItems
    let delimiter = count + limitItems

    if (pageActual <= totalPage) {
      for (let i = count; i < delimiter; i++) {
        if (items[i] != null) {
          result.push(items[i])
        }
        count++
      }
    }
    return result
  }

  renderRows() {
    const {
      sessions: { all }
    } = this.props
    const list = this.listItems(
      all,
      this.state.activePage,
      this.state.itemsPerPage
    )

    return list.map(session => (
      <Grid key={session._id} container xs={12} className={'item'}>
        <Grid xs={6} className={'count'}>
          <span className={'sum title'}>{_.get(session, 'userName')}</span>
        </Grid>
        <Grid xs={3} className={'count'}>
          <span className={'sum'}>
            {moment(_.get(session, 'startDateTime') ).format('DD/MM/YYYY (HH[h]mm)')}
          </span>
        </Grid>
        <Grid xs={3} className={'count'}>
          <span className={'sum'}>{_.get(session, 'userName')}</span>
        </Grid>
      </Grid>
    ))
  }
  render() {
    const {
      sessions: { all }
    } = this.props
    return (
      <div>
        <Grid xs={12} className={'container-companies'}>
          <Grid xs={12} className={'data-sessions'}>
            <p>
              <strong>Quantidade em base: </strong>{' '}
              <big>{all && all.length}</big> -
              <span className={'time-day'}>
                {new Intl.DateTimeFormat('pt-BR', {
                  year: 'numeric',
                  month: 'long',
                  day: '2-digit'
                }).format(new Date())}
              </span>
            </p>
            <Header />
          </Grid>

          {all && all.length > 0 ? (
            this.renderRows()
          ) : (
            <p className={'center-align t10'}> Não há álbuns cadastrados. </p>
          )}
        </Grid>
        {all && all.length > 0 && (
          <Grid className={'align-right box-pagination'}>
            <Pagination
              activePage={this.state.activePage}
              itemsCountPerPage={this.state.itemsPerPage}
              totalItemsCount={all && all.length}
              pageRangeDisplayed={5}
              onChange={this.handlePageChange}
            />
          </Grid>
        )}

        <Helmet />
      </div>
    )
  }
}

const mapStateToProps = state => ({ sessions: state.sessions })

const mapDispatchToProps = dispatch =>
  bindActionCreators({ deleteAlbum }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListSessions)
