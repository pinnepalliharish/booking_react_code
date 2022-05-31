import React,{Component} from 'react';
import './login.css';

const url = "https://booking-login.herokuapp.com/api/auth/login"

class Login extends Component {
    constructor(props){
        super(props)

        this.state={
            email:'',
            password:'',
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
        .then((res)=>res.json())
        .then((data)=>{
            if(data.auth===false){
                this.setState({message:data.token})
            }
            else{
                sessionStorage.setItem('ltk',data.token)
                this.props.history.push('/')
            }
        })
    }

    render(){
        return(
            <>
               <div id="loginForm">
                    <div id="title">
                        <h4>Booking.im</h4>
                    </div>

                    <h3>Login Form</h3>
                    <center>
                        <label for="email" style={{marginLeft: '50px', fontSize: '20px'}}> <b>Email </b> </label>
                        <input id="email" type="email" name="email"/>
                        <br/>
                        <br/>


                        <label for="password" style={{marginLeft: '50px', fontSize: '20px'}}> <b>Password</b> </label>
                        <input id="password" type="password" name="password"/>
                        <br/>
                        <br/>
                    </center>
            
                    <button id="login_button">Login</button>
                </div>
                
            </>
        )
    }

}

export default Login