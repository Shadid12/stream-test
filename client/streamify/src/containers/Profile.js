import React from 'react';
import {
    Container,
    Paper,
    Background,
    Forground
} from '../components/styled';
import axios from 'axios';
import styled from 'styled-components';

const ProfileForground = styled(Forground)`
    flex-direction: column;
    padding: 0px 40px;
`

function Profile() {
    const [key, setKey] = React.useState('');

    const getkey = async () => {
        let accessToken = sessionStorage.getItem('stremify');
        const config = {
            headers: { Authorization: `Bearer ${accessToken}` }
        };
        let res = await axios.get('http://localhost:5000/api/v1/users/key', config)
        console.log('--->>>', res.data.streamKey)
        setKey(res.data.streamKey)
    }

    return (
        <Container className="container">
        <h3>My Profile</h3>
        <Paper>
            <Background>
            <ProfileForground>
                <button class="button button-outline" onClick={getkey}>Generate Key</button>
                <div>
                <pre>
                <code>{key}</code>
                </pre>
                </div>
            </ProfileForground>
            </Background>
        </Paper>
        </Container>
    );
}

export default Profile;
