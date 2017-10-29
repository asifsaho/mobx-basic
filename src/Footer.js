import React from 'react'
import axios from 'axios'

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }


    loadData = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                this.props.store.addPosts(res.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }


    render() {
        return (
            <div>
                <button onClick={this.loadData}>Load Data</button>
            </div>
        )
    }
}

export default Footer;