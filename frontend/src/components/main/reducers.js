import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'
import app from '../app/reducers'
import sessions from '../sessions/reducers'

const appReducer = combineReducers({
    app,
    sessions,
    form: formReducer,
    toastr: toastrReducer
})

const rootReducer = (state, action) => {
 return appReducer(state, action)
}

export default rootReducer