import React from 'react';
import {
    Container,
    Paper,
    Background,
    Forground
} from '../components/styled';
import axios from 'axios';

function Login() {
    const [state, setState] = React.useState({
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
            let res = await axios.post('http://localhost:5000/api/v1/auth/login', {
                "email": state.email,
                "password": state.password
            })
            sessionStorage.setItem('stremify', res.data.token);
        } catch (error) {
            console.log('--->>>', error)
        }
    }
    return (
        <Container className="container">
        <h3>Login</h3>
        <Paper>
            <Background>
            <Forground>
                <form onSubmit={handleSubmit}>
                <fieldset>
                    <label for="emailField">Email</label>
                    <input 
                        type="text" 
                        placeholder="example@email.com" 
                        id="emailField" 
                        name="email"
                        onChange={handleInput}
                    />
                    <label for="passField">Password</label>
                    <input type="password"  id="passField" name="password" onChange={handleInput}/>
                    <input class="button-primary" type="submit" value="Login" />
                </fieldset>
                </form>
            </Forground>
            </Background>
        </Paper>
        </Container>
    );
}

export default Login;
