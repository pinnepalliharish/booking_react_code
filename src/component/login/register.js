import React,{Component} from 'react';
import './reg.css'

const url = "https://booking-login.herokuapp.com/api/auth/register"

class Register extends Component {
    constructor(props){
        super(props)

        this.state={
            name:'',
            email:'',
            password:'',
            phone:''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = () => {
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/'))
    }

    render(){
        return(
            <>
                <div id="registerForm">

                    <div id="title">
                        <h4>Booking.im</h4>
                    </div>

                        <h3>Register Form</h3>
                        <center>
                            <label for="name" style={{marginLeft: '50px', fontSize: '20px'}}> <b>Name </b> </label>
                            <input id="name" name="name" required/>
                            

                            <label for="phone" style={{marginLeft: '50px', fontSize: '20px'}}> <b>Phone </b> </label>
                            <input id="phone"  name="phone"/>
                            <br/>
                            <br/>
                            <label for="email" style={{marginLeft: '50px', fontSize: '20px'}}> <b>Email </b> </label>
                            <input id="email" type="email" name="email"/>
                            


                            <label for="password" style={{marginLeft: '50px', fontSize: '20px'}}> <b>Password</b> </label>
                            <input id="password" type="password" name="password"/>
                            <br/>
                            <br/>
                        </center>

                        <button id="register_button"> <b>Register</b> </button>

                    </div>
            </>
        )
    }

}

export default Register