import React from 'react'
import {observer} from 'mobx-react'

@observer
class Header extends React.Component {
    constructor(props){
        super(props)
    }
        render(){
            return(
            <header className="App-header">
                <h1>{this.props.store.title}</h1>
                <img src={this.props.logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
            </header>
        )
        }
}

export default Header;