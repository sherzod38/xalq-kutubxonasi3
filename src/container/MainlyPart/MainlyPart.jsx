import './MainlyPart.scss';

import BookCard from '../../components/BookCard'

import axios from 'axios'



import {useState, useEffect} from 'react'





const MainlyPart = () => {

                const [bookList, setBookList] = useState({
                        isFetched: false,
                        data: [],
                        error: null
                    });


              useEffect(() => {
                axios.get('https://api.themoviedb.org/3/movie/popular?page=1', {
                        params: {
                            api_key: '8d08d31e1b08de961a19e2ae293de867'
                        }
                    })
                    .then(function (response) {
                        console.log(response.data.results)
                        setBookList({
                            isFetched: true,
                            data: response.data.results,
                            error: false,
                        })

                        
                    })
                    .catch(function (error) {
                        setBookList({
                            isFetched: true,
                            data: [],
                            error: error,
                        })
                    })
                    .then(function () {
                        // always executed
                    });
                }, [])


    return (
        
            
           <div className="">
               {
                        bookList.isFetched ? (
                         <div className="container">
                             <div className="cards-wrapper">
                                    {
                                            bookList.data.map((item) => (
                                                    <BookCard
                                                    title={item.title}
                                                    key={item.id}
                                                    author={item.vote_average}
                                                    bookImg={item.poster_path}
                                                    
                                                    
                                                    />

                                                ))
                                    }
                                </div>

                                <div className="btn-wrapper">
                                    <button className="opener-btn">
                                            Yana
                                    </button>

                                </div>
                         </div>
                        ) : (
                            <></>
                        )
               }
           </div>
            
        
    )
}


export default MainlyPart; 