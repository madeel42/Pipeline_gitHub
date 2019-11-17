
import React from 'react'
import {Form, Button,FormGroup,FormControl} from 'react-bootstrap'
const LoginForm = ({emailLabel, passwordLabel ,buttonText, tagline,onemailChange,onpasswordChange,onClick,valueEmail,valuePassword}) => {

return(
            <Form>
                <FormGroup controlId="email">
                    <label>{emailLabel}</label>
                    <FormControl
                            autoFocus
                            type="email"
                            value={valueEmail}
                            onChange={onemailChange}
                            style={{
                            color: 'black'
                            }}
                            autoComplete="email"
                            />
                </FormGroup>
                <FormGroup controlId="password">
                    <label>{passwordLabel}</label>
                    <FormControl
                            autoFocus
                            type="password"
                            value={valuePassword}
                            onChange={onpasswordChange}
                            style={{
                            color: 'black'
                            }}
                            autoComplete="password"
                            />
                </FormGroup>
                
                <div style={{textAlign: 'center'}}>
                    <Button variant="primary" type="submit" onClick={onClick}>
                        {buttonText}
                    </Button>
                </div>
        </Form>
);


}

export default LoginForm