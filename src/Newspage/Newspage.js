import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { useLocation, useParams } from 'react-router-dom';
import './Newspage.css'
function Newspage() {
    const location=useLocation();
    console.log(location);
    let date=location.state.publishedAt;
    let subdate=date.substring(0,10);
    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                <Container fixed>
                    <h1 className='title'>{location.state.title}</h1>
                    <h2 className='auth'>{location.state.author}</h2>
                    <h2 className='auth'>{subdate}</h2>
                    <div className='img'>
                    <img src={location.state.urlToImage}></img>
                    </div>
                    <p className='auth'>{location.state.content}</p>
                    <div></div>
                    
                </Container>
            </React.Fragment>
        </div>
    )
}

export default Newspage