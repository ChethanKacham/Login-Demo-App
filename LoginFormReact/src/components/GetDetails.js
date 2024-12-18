import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class GetDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            details: []
        }
    }
    handleBack = (event) =>{
       event.preventDefault()
       this.props.history.push("/home")
    }
    componentDidMount() {
        axios.get('http://localhost:9000/login')
            .then(response => {
                console.log(response)
                this.setState({ details: response.data })
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        const { details } = this.state;
        return (
            <div>
                <h2>You have successfully submitted the below details</h2>
                <h3>{
                    details.map(detail => <div key={detail._id}>
                        Username : {detail.username} <br></br>
                        Mobile number : {detail.mobilenumber} <br></br>
                        Course : {detail.course}
                    </div>)}</h3>
                    <button onClick={this.handleBack}>Home Page</button>
            </div>
        )

    }

}

export default withRouter(GetDetails)