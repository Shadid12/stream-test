import React from 'react';
import axios from 'axios';
import {
    Container, 
    ListContainer
} from '../components/styled';
import {ReactFlvPlayer} from 'react-flv-player'


function Home() {
    const [streamKeys, setStreamKeys] = React.useState([]);

    React.useEffect(() => {
        let livenow =  getLiveNow();
        if(livenow.data && livenow.data.live) {
            setStreamKeys(Object.keys(livenow.data.live))
        }
    },[]);

    const getLiveNow = async() => {
        try {
            const response = await axios.get('http://localhost:8000/api/streams');
            return response;
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Container>
            <ListContainer className="row">
                <div className="column">
                    <h3>Title of this video</h3>
                    <ReactFlvPlayer
                        url = "http://localhost:8000/live/8db9fbb0-930f-11ea-929e-a9375828abb4.flv"
                        heigh = "400px"
                        width = "400px"
                        isMuted={true}
                    />
                </div>
                <div className="column column-50">
                    <h3>Currently Live</h3>
                    <ul>
                        {
                            streamKeys.map(s => (<li>
                            <button class="button button-outline">
                                {s.split('-')[0]}
                            </button>
                            </li>))
                        }
                    </ul>
                </div>
            </ListContainer>
        </Container>
    );
}

export default Home;