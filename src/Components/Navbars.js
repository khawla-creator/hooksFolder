import React,{useState} from 'react';
import popMovies from '../Logo.png';
import {Form,FormControl,Button,Navbar} from 'react-bootstrap';
// import MovieList from './MovieList'


function Navbars() {
                    const [serchValeu, setserchValeu] = useState(['']);
                    
                    // const filtre = MovieList.filtre(title => {
                    //                      return title.title.toLowerCase().inclusdes(serchValeu.toLowerCase())
                    // }) 
                    return (
                                        <div >
                                        <Navbar className="bg-light justify-content-between">
                                        <div className='Logo-Title'> 
                                        <img src={popMovies} alt= 'logo' height={'45px'} style={{backgroundColor:'white',marginLeft:'40px', padding:'8px', borderRadius:'10px'}}/>
                                        <h1> Pop Movies </h1>
                                        </div>
                                        <Form inline>
                                        {serchValeu}
                                        <FormControl
                                        type="text"
                                        placeholder="Search"
                                        className=" mr-sm-2"
                                        id='serchbar'
                                        onChange= { e => setserchValeu(e.target.valeu)}
                                        />
                                        <Button type="submit">Submit</Button>
                                        </Form>
                                        </Navbar>
                                        </div>
                                        
                    )
}

export default Navbars
