import React from 'react';
import { Link } from 'react-router-dom';


function Newscard(newsarr = []) {

    //  console.log(newsarr.newsarr[0]);
    // console.log(newsarr.articles);

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            newsarr.newsarr.map((article) => {
                                //console.log(article);
                                let str = article.publishedAt;
                                let date = str.substring(0, 10);
                                let desc = article.description;
                                let descr=null;
                                if(desc!==null){
                                    descr=desc.substring(0,150);
                                }

                                

                                return (
                                    <Link to='/news' state={{
                                        id:article.source.id,
                                        name: article.source.name,
                                        author: article.author,
                                        title: article.title,
                                        description:article.description,
                                        url: article.url,
                                        urlToImage: article.urlToImage,
                                        publishedAt:article.publishedAt,
                                        content:article.content
                                    }} class="p-4 md:w-1/3">
                                        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">

                                            <div class="p-6">
                                                <h1 class="title-font text-lg font-semibold text-left text-gray-900 mb-3">{article.title}</h1>
                                                <h2 class="tracking-widest text-xs text-left title-font font-medium text-gray-400 mb-1">{article.author}</h2>
                                                <h2 class="tracking-widest text-xs text-left title-font font-medium text-gray-400 mb-1">{date}</h2>


                                                <div class="flex items-center flex-wrap ">
                                                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                                                        <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={article.urlToImage} alt="blog" />
                                                    </a>
                                                    <h1 class="title-font text-lg font-medium text-left text-gray-900 mb-3">{descr}...</h1>
                                                </div>
                                            </div>
                                        </div>

                                    </Link>

                                )
                            })
                        }
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Newscard