import React from 'react';
import ReactStars from "react-rating-stars-component";

const MovieList =({movies,searchmovie,rating})=> {
                    
                    return (
                                        <>

                                                            {movies.filter(movie=> movie.title.toLowerCase().includes(searchmovie.toLowerCase()) && movie.rate>=rating)
                                                            .map((movie, index) => (  
                                                            <div key ={index} className='caontainer-liste d-flex justify-content-between'>
                                                            <img src={movie.posterUrl} alt='movies' style={{width:'200', height:'200px'}} />
                                                            <h4> {movie.title} </h4>
                                                            <p>{movie.description}</p>
                                                            <ReactStars
                                                            classNames='reactStars'
                                                            style={{marginBottom:'5px'}}
                                                            count={5}
                                                            value={movie.rate}
                                                            size={24}
                                                            activeColor="#ffd700"
                                                            />
                                                            </div>
                                                            
                                                            ))}                                
                                        </>
                    );


};
export default MovieList;



//                                                             