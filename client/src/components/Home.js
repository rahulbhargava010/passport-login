import React, { PureComponent } from 'react'

import Nav from "./Home/Nav"
import  Content from "./Home/Content"
import Footer from "./Home/Footer"

class Home extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        this.setState({
            email: e.target.email.value,
            password: e.target.password.value
        })
        console.log(this.state)
    }

    render() {
        return (
            <div className="">
                <Nav />
                <Content handleSubmit = {this.handleSubmit} />
                <Footer />
            </div>
        )
    }
}

export default Home