import React, { useEffect, useState } from 'react';
import './Homepage.css';
import Newscard from '../Components/Newscard';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

function Homepage() {
    const [news, setNews] = useState([]);
   

    useEffect(() => {
        fecthNews();
    }, []);
    
   // console.log(process.en)
    const fecthNews = async () => {
        
        const response=await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=58ad93a2578640c4bd7db21f6823a4f0');
        const data=await response.json();
        setNews(data.articles);   
        //console.log(data);
    }
    //console.log(news);
    return (
        
        <div>
            <React.Fragment>
                <CssBaseline />
                <Container fixed>
            <div className='topic'>CountDown</div>
            <div className='news'>News</div>
           <div>
            <Newscard newsarr={news} />
           </div>
           </Container>
            </React.Fragment>
        </div>
    )
}

export default Homepage