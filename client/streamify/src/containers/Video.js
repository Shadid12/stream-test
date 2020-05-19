import React from 'react';
import {
    Container,
    Paper,
    Background,
    Forground
} from '../components/styled';
import { useParams } from "react-router-dom";
import { ReactFlvPlayer } from 'react-flv-player';
import styled from 'styled-components';

function Video() {
    const {id} = useParams();
    if(!id) {
        return <div>Loading....</div>
    }
    return (
        <Container className="container">
            <Paper>
                <Background>
                <Forground>
                    <VideoWraper>
                        <h3>Title of this video</h3>
                        <ReactFlvPlayer
                            url = {`http://localhost:8000/live/${id}.flv`}
                            heigh = "400px"
                            width = "400px"
                            isMuted={true}
                        />
                    </VideoWraper>
                </Forground>
                </Background>
            </Paper>
        </Container>
    )
}


const VideoWraper = styled.div`
    display: flex;
    flex-direction: column;
`


export default Video;
