import React from 'react'
import Header from '../../components/Header/Header'
import LoginForm from '../../components/LoginForm/LoginForm'
import Footer from '../../components/Footer/Footer'
export default class LoginComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };


    loginUser = (e) => {
            const { email, password} = this.state;
            alert(email+" "+password);
   
   
   
   
            e.preventDefault();

    }


    render(){
        return(
            <div>
                <Header />
                    <div className="container" style={{marginTop: -20,padding: 60, backgroundColor: '#ccc', borderRadius: 50/2}}>
                    <h3>Welcome back! Please Logged In  </h3>
                        <div className="row">
                          <div className="col-sm-4">
                          </div>
                          <div className="col-sm-5">
                          <LoginForm 
                               buttonText="Log in"
                               emailLabel="Email Address"
                               passwordLabel="Password" 
                               onemailChange={this.handleChange}
                               onpasswordChange={this.handleChange}
                               onClick={this.loginUser}
                               valueEmail={this.state.email}
                               valuePassword={this.state.password}
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