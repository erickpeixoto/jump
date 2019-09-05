import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Row, Col } from 'react-materialize'
import { TextField } from 'redux-form-material-ui'
import _ from 'lodash'

class InputSearch extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Row>
          <Col m={12} s={12}>
            <Field
              name="conditionPatient"
              component={TextField}
              hintText="Descreva o quadro do paciente"
              floatingLabelText="Quadro do Paciente"
              locale="pt-BR"
              required={true}
              style={{ width: '95%' }}
            />
          </Col>
        </Row>
      </form>
    )
  }
}

function validate(values) {
  const { when } = values,
    errors = {
      when: {
        day: '',
        hour: ''
      }
    }

  return errors
}

export default reduxForm({
  form: 'search',
  enableReinitialize: true,
  validate
})(InputSearch)
