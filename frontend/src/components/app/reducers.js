import {
        HANDLE_HISTORY
} from './constants'

const INITIAL_STATE = {
        history: {},
        endpoints: {
                api: {
                        host: 'http://67.205.161.202/jumpparkapi/public/api',
                        token: null
                }
        }
}
        
export default (state = INITIAL_STATE, action) => {

        switch (action.type) {
                case HANDLE_HISTORY:
                        return { ...state, history: action.payload }
                default:
                        return state
        }
}
