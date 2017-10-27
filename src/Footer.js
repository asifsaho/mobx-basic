import React from 'react'

class Footer extends React.Component {
    constructor(props){
        super(props)
    }

    changeValue = (event) => {
        this.props.store.changeTitle('This is new title')
    }

    render(){
        return(
            <div>
                <button onClick={this.changeValue}>Change</button>
            </div>
        )
    }
}

export default Footer;