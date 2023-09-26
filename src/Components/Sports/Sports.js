
import React, { useEffect, useState } from 'react';
import './Sports.css';
import Newscard from '../Newscard';
function Sports() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fecthNews();
    }, []);

    const fecthNews = async () => {
        
        const response=await fetch('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=58ad93a2578640c4bd7db21f6823a4f0');
        const data=await response.json();
        setNews(data.articles);   
        //console.log(data);
    }
  return (
    <div>
        <div>
            <div className='topic'>Sports</div>
            <div className='news'>News</div>
           <div>
            <Newscard newsarr={news}/>
           </div>
        </div>
    </div>
  )
}

export default Sports