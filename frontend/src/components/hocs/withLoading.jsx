import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { ScaleLoader } from 'react-spinners'

export const withLoading = Component => {
  const WithLoading = ({ props }) => console.info(_.size(props.dataLoading)) &&
  _.size(props) ? (
    <Component {...props} />
  ) : (
    <center>
      {console.warn(props)}
      {typeof props.dataLoading === 'boolean' && (
        <ScaleLoader sizeUnit="px" size={250} color="#07bed5" loading={true} />
      )}
      {typeof props.dataLoading === 'object' && (
        <span>Não existem dados em base</span>
      )}
    </center>
  )
  WithLoading.propTypes = {
    data: PropTypes.bool
  }

  return WithLoading
}
