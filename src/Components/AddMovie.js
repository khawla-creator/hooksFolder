import {Button,Modal,Form,FormControl} from 'react-bootstrap'
import {useState} from 'react'
function Example({AddNewmovie}) {
                    const [show, setShow] = useState(false);
                  
                    const handleClose = () => setShow(false);
                    const handleShow = () => setShow(true);
                    const[title,setTitle]=useState('');
                    const[posterUrl,setpostUrl]=useState('');
                    const[description,setdescriptin]=useState('');
                    const[rate,setrate]=useState('');
                  
                    return (
                      <>
                        <Button variant="primary" onClick={handleShow}>
                          Add Movie 
                        </Button>
                      
                        <Modal show={show} onHide={handleClose} className='w-3'>
                          <Form  className='p-4'style={{display:'flex',flexDirection:'Column', whidth:'200px'}}>
                          <Modal.Title>TITLE </Modal.Title>
                          <FormControl  type='text' placeholder=' Add film' onChange= { e => setTitle(e.target.value)} value={title} />
                          <Modal.Title> POSTURL </Modal.Title>
                          <FormControl type='text' placeholder=' URL' onChange= { e => setpostUrl(e.target.value)} value={posterUrl} />
                          <Modal.Title> DESCRIPTION </Modal.Title>
                          <FormControl type='text' placeholder='Description' onChange= { e => setdescriptin(e.target.value)} value={description}/>
                         <Modal.Title> RATE </Modal.Title>
                         <FormControl type='text' placeholder='Rate' onChange= { e => setrate(e.target.value)} value={rate} />
                          </Form>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              Close
                            </Button>
                            <Button onClick={()=>AddNewmovie({id:Math.random(), title, description, posterUrl,rate})}>
                            Save Changes
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </>
                    );
                  }
                  export default Example