import React,{ Component } from 'react';
import axios from 'axios';
import{ withRouter } from 'react-router-dom'
class Form extends Component {
    constructor(props){
        super(props)
            this.state={
                username: '',
                mobilenumber: '',
                course: 'React',
                //details:[]
            }
        }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        }

        )
    }

    handleMobilenumberChange = (event) => {
        this.setState({
            mobilenumber: event.target.value
        }

        )
    }

    handleCourseChange = (event) => {
        this.setState({
            course: event.target.value
        }

        )
    }
    handleSubmit = (event) =>{
         alert(`Successfully Submitted 
         Username : ${this.state.username} 
         Mobile Number : ${this.state.mobilenumber} 
         Course : ${this.state.course}`)
        event.preventDefault()
        axios.post('http://localhost:9000/login/details', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
         
        this.props.history.push("/details")
        
        /*axios.get('http://localhost:9000/login')
        .then(response => {
            console.log(response)
            this.setState({details: response.data})
        })
        .catch(error => {
            console.log(error)
        })*/
    }

    render(){
            const { username , mobilenumber , course , details } = this.state;
        return(
            //<div>
            <form onSubmit={this.handleSubmit}>
                 <div>
                     <label>Username: </label>
                     <input type='text' 
                        value={username} 
                        onChange={this.handleUsernameChange} required></input>
                 </div>
                 <br></br>
                 <div>
                     <label>Mobile Number: </label>
                     <input type='number' 
                        value={mobilenumber} 
                        onChange={this.handleMobilenumberChange} required></input>
                 </div>
                 <br></br>
                 <div>
                     <label>Course: </label>
                     <select value={course} 
                        onChange={this.handleCourseChange} required>
                            <option value="React">React</option>
                            <option value="MongoDB">MongoDB</option>
                            <option value="Node">Node</option>
                    </select>
                 </div>
                 <br></br>
                 <button type="submit">Submit</button>
            </form>
            //<h2>{details.map(detail => <div key={detail._id}>  {detail.username} {detail.mobilenumber} {detail.course}</div>)}</h2>
            //</div>
        )
    }
    
  }

  export default withRouter(Form);