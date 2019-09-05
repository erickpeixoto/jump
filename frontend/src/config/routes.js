
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Main from '../components/main'
import App from '../components/app'
import newAlbum from '../components/sessions/new'
import UpdateAlbum from '../components/sessions/update'
 
class Routes extends Component {

    render() {
        
        return (
            <Router>
                <section>
                    <Main>
                        <Route exact path="/" component={App} />
                        <Route exact path="/sessions/dump" component={App} />
                        <Route exact path="/sessions/new" component={newAlbum} />
                        <Route exact path="/sessions/update/:id" component={UpdateAlbum}/>
                   </Main>    
               </section>
            </Router>
      )
    }
}
const mapStateToProps = state => ({ settings: state.settings })
export default connect(mapStateToProps)(Routes)
