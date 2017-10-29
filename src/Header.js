import React from 'react'
import {observer} from 'mobx-react'
import {autorun} from 'mobx'

@observer
class Header extends React.Component {
    constructor(props) {
        super(props)

        autorun(() => {
            let posts = this.props.store.posts;
            setTimeout(function() {
                this.consolePrint('Autorun works!');
            }.bind(this), 0)
        })
    }

    consolePrint = (input) => {
        console.log(input);
    }

    render() {
        return (
            <header className="App-header">
                <p>{this.props.store.bmi}</p>
                {this.props.store.posts.map(
                    (post, i) =>
                        <p key={i}>{post.title}</p>
                )}
                <img src={this.props.logo} className="App-logo" alt="logo"/>
            </header>
        )
    }
}

export default Header;