import React from 'react';
import axios from 'axios';
import {
    Container, 
    ListContainer
} from '../components/styled';
import { Link } from "react-router-dom";


function Home() {
    const [streamKeys, setStreamKeys] = React.useState([]);

    React.useEffect(() => {

        const fetchData = async () => {
            const result = await axios(
                'http://localhost:8000/api/streams',
            );
            console.log('000sudaw', result.data)
            if(result.data.live) {
                setStreamKeys(Object.keys(result.data.live));
            }
        };
        fetchData();

    },[]);


    return (
        <Container>
            <ListContainer className="row">
                <div className="column">
                    <h3>Currently Live</h3>
                    <ul>
                        {
                            streamKeys.map(s => (<li>
                            <Link to={`/video/${s}`}>
                                {s.split('-')[0]}
                            </Link>
                            </li>))
                        }
                    </ul>
                </div>
            </ListContainer>
        </Container>
    );
}

export default Home;