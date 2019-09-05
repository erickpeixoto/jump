import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { handleHistory } from './actions'
import * as actions from '../sessions/actions'

import './public/styles/app.css'
import './public/styles/toastr.css'
import Helmet from 'react-helmet'


import { injectGlobal } from 'styled-components'
import mainFont from './public/fonts/Poiret_One/PoiretOne-Regular.ttf'
import fontComfortaa from './public/fonts/Comfortaa/Comfortaa-Regular.ttf'
import fontComfortaaBold from './public/fonts/Comfortaa/Comfortaa-Bold.ttf'
import Grid from '@material-ui/core/Grid'

import SessionsList from  '../sessions/list'


/* eslint no-unused-expressions: 0 */
injectGlobal`
    @font-face {
      font-family: 'Poiret One';
      src: url(${mainFont}) format('truetype');
      font-weight: normal;
      font-style: normal;
    }
      @font-face {
      font-family: 'Comfortaa-Regular';
      src: url(${fontComfortaa}) format('truetype');
      font-weight: normal;
      font-style: normal;
    }
      @font-face {
      font-family: 'Comfortaa-Bold';
      src: url(${fontComfortaaBold}) format('truetype');
      font-weight: normal;
      font-style: normal;
    }
   `;

class App extends Component {

    componentWillMount() {
        
        const { handleHistory, fetchSessions } = this.props
        handleHistory(this.props.history)
        fetchSessions()
        if(this.props.match.path === '/sessions/dump'){
            this.props.handleDump()
        }
    }

    

    render() {
        return (
            <section>
                <Grid container spacing={24}>
                    <Grid item xs={12} className={'centerAlign'}>
                        <Grid item xs={12} className="list-sessions">
                             <SessionsList/> 
                        </Grid>
                     </Grid>
                </Grid>
                 <Helmet
                    title="Jump Park "
                        style={[{
                            "cssText": `
                            body {
                                    min-height: 100%;
                                    background: #c3ddf4;
                                    padding: 15px;
                                    font-family: 'Comfortaa-Regular'
                                }
                                #root{
                                    padding: 7px;
                                    margin: 0px auto;
                                    box-shadow: -2px 11px 40px rgba(4, 0, 0, 0.22);
                                    background: #f2f4f8;
                              }
                          
                            `
                        }]}
            />
            </section>
        );
    }
}
const mapStateToProps = state => ({ 
                                    settings: state.settings, 
                                    sessions: state.sessions  })
const mapDispatchToProps = dispatch => bindActionCreators({ handleHistory, 
                                                            ...actions }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(App)