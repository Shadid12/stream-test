import React from 'react';
import {
    Container,
    Paper,
    Background,
    Forground
} from '../components/styled';

function Register() {
  return (
    <Container className="container">
      <h3>Register to get started</h3>
      <Paper>
        <Background>
          <Forground>
            <form>
              <fieldset>
                <label for="emailField">Email</label>
                <input type="text" placeholder="example@email.com" id="emailField" />
                <label for="emailField">Password</label>
                <input type="password" placeholder="example@email.com" id="emailField" />
                <input class="button-primary" type="submit" value="Register" />
              </fieldset>
            </form>
          </Forground>
        </Background>
      </Paper>
    </Container>
  );
}

export default Register;
