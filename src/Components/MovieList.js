import React from 'react'

const MovieList =(props)=> {
                    
                    return (
                                        <>
                                                            {props.movies.map((movie, index) => (  
                                                            <div key ={index} className='caontainer-liste'>
                                                            <img src={movie.posterUrl} alt='movies' style={{width:'200', height:'200px'}} />
                                                            <h4> {movie.title} </h4>
                                                            <p>{movie.description}</p>
                                                            <span>   </span>
                                                            </div>
                                                            ))}                                

                                        </>
                    );


};
export default MovieList;