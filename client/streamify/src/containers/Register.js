import React from 'react';
import {
    Container,
    Paper,
    Background,
    Forground
} from '../components/styled';
import axios from 'axios';
import {
    withRouter
} from "react-router-dom";

function Register(props) {
    const [state, setState] = React.useState({
        username: '',
        email: '',
        password: ''
    })
    const handleInput = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/v1/auth/register', {
                "name": state.username,
                "email": state.email,
                "role": "publisher",
                "password": state.password
            })
            props.history.push('/')
        } catch (error) {
            console.log('--->>>', error)
        }
    }

    return (
        <Container className="container">
            <h3>Register to get started</h3>
            <Paper>
                <Background>
                <Forground>
                    <form onSubmit={handleSubmit}>
                    <fieldset>
                        <label for="nameField">Name</label>
                        <input type="text" id="nameField" name="username" onChange={handleInput}/>
                        <label for="emailField">Email</label>
                        <input 
                            type="text" 
                            placeholder="example@email.com" 
                            id="emailField" 
                            name="email" 
                            onChange={handleInput}
                        />
                        <label for="passField">Password</label>
                        <input type="password" id="passField" name="password" onChange={handleInput}/>
                        <input class="button-primary" type="submit" value="Register" />
                    </fieldset>
                    </form>
                </Forground>
                </Background>
            </Paper>
        </Container>
    );
}

export default withRouter(Register);
