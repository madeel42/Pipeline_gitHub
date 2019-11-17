import React from 'react'

import Header from '../../components/Header/Header'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import Footer from '../../components/Footer/Footer'
export default class RegisterComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""

        }
    }



    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };



    registerUser = (e) => {
        const axios = require('axios');
            const {username, email, password} = this.state;
           // alert(username+" "+email+" "+password);

            // fetch('http://localhost:5000/api/user/register', {
            //     method: 'POST',
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({
            //         name: username,
            //         email: email,
            //         password: password,
            //         password2: password,
            //     }),
            // })
            // .then(responseJSon => responseJSon.json())
            // .then(response => alert(response))
            // .catch(err => {
            //     console.error(err);
            // })

       

            axios.post('http://localhost:5000/api/user/register', {
                name: username,
                email: email,
                password: password,
                password2: password
              })
              .then(function (response) {
                alert(response);
              })
              .catch(function (error) {
                console.log(error);
              });






                e.preventDefault();
    }





    render(){
        return(
            <div>
                <Header />
                    <div className="container" style={{marginTop: -20,padding: 60, backgroundColor: '#ccc', borderRadius: 50/2}}>
                    <h3>Please Signup For New Registration</h3>
                        <div className="row">
                          <div className="col-sm-4">
                          </div>
                          <div className="col-sm-5">
                          <RegisterForm 
                            buttonText="Sign Up" 
                            nameLabel="Full Name"
                            valueName={this.state.username}
                            oneNameChange={this.handleChange}
                            emailLabel="Email:" 
                            valueEmail={this.state.email}
                            onemailChange={this.handleChange}
                            passwordLabel="Password" 
                            valuePassword={this.state.password}
                            onpasswordChange={this.handleChange}
                            onClick={this.registerUser}
                          />
                          </div>
                          <div className="col-sm-3">
                          </div>  
                        </div>
                </div>
          
           <Footer title="Meo-Sartawi App" description="Copyright&copy;2019, Moe Sartawi Corporation"/>
            </div>
        ); 
    }
} 