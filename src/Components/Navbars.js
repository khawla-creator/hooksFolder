import React,{useState} from 'react';
import popMovies from '../Logo.png';
import {Form,FormControl,Button,Navbar} from 'react-bootstrap';


function Navbars({setsearchmovie}) {

                    return (
                                        <div >
                                        <Navbar className="bg-light justify-content-between">
                                        <div className='Logo-Title'> 
                                        <img src={popMovies} alt= 'logo' height={'45px'} style={{backgroundColor:'white',marginLeft:'40px', padding:'8px', borderRadius:'10px'}}/>
                                        <h1> Pop Movies </h1>
                                        </div>
                                        <Form inline>
                                        <FormControl
                                        type="text"
                                        placeholder="Search"
                                        className=" mr-2"
                                        id='serchbar'
                                        onChange= { e => setsearchmovie(e.target.value)}
                                        />
                                        <Button type="submit">Submit</Button>
                                        </Form>
                                        </Navbar>
                                        </div>
                                        
                    )
}

export default Navbars
