import React, { useState } from 'react';
import {Form,Button} from 'react-bootstrap';
import Footer from '../../Footer/Footer';
import './Feedback.css'
// import { useNavigate } from 'react-router-dom';

const NewForm = () => {

    // const navigate=useNavigate();

    const validateEmail=RegExp('^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,10})$');
    const validatePassword=RegExp("^(?=.*[@!#$])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,15}$"
    );
      const validatePhoneNumber=RegExp('^[6789]\d{10}$');

    const [inputState,setInputState]=useState({isError:{
        FirstName:"",LastName:"",Email:"",Password:"",PhoneNumber:""
    }
    });

    const handleChange=(event)=>{
        event.persist();
        // console.log("Event:", event);
        let {name,value}= event.target;
        let errMsg={...inputState.isError};
        switch(name)
        {
                case 'First Name': errMsg.FirstName=value.length<3 ?"Atleast 3 characters required" :"";
                
                break;
                case 'Last Name':errMsg.LastName=value.length<3 ?"Atleast 4 characters required" :"";  
                
                                     break;
                case 'Email':errMsg.Email=validateEmail.test(value)?"":"wrong Pattern";
                
                    break;
                case 'Password':errMsg.Password=validatePassword.test(value)?"":"wrong Pattern";
                  
                    break;
                case'Phone Number':errMsg.PhoneNumber= validatePhoneNumber.test(value)?"":"wrong Pattern";
                 
               default: break;
                
        }
        setInputState ({...inputState,[name]:value,isError:errMsg})
            console.log("InputState:", inputState);
    }
    const submitHandler=(event)=>
    event.preventDefault();
    console.log("After submit ,value:", inputState);

    // navigate('/logout');

    return(
        //step 1
 <>
<Form className='myform' onsubmit={submitHandler} >
        <h1 className='data'>Enter your data</h1>
        

             <Form.Group className="mb-3" controled="formBasicFirstname">

                 <Form.Label>First Name:</Form.Label>
                 <Form.Control className='box' type="text" placeholder="Enter user Fname" name="First Name" onChange={handleChange}/>
                 {inputState.isError.FirstName.length>0 && (<span>{inputState.isError.FirstName}</span>)} 
             </Form.Group>

             
             <Form.Group className="mb-3" controled="formBasicLastName">

                 <Form.Label>Last Name:</Form.Label>
                 <Form.Control className='box' type="text" placeholder="Enter user Lname" name="Last Name " onChange={handleChange}/>
                 {inputState.isError.LastName.length>0 && (<span>{inputState.isError.LastName}</span>)} 
             </Form.Group>

             
             <Form.Group className="mb-3" controled="formBasicEmail">

                 <Form.Label>Email address:</Form.Label>
                 <Form.Control className='box' type="email" placeholder="Enter user email" name="Email" OnChange={handleChange}/>
                 {inputState.isError.Email.length>0 && (<span>{inputState.isError.Email}</span>)}
             </Form.Group>

             <Form.Group className="mb-3" controled="formBasicPassword">

                 <Form.Label>Password:</Form.Label>
                 <Form.Control className='box' type="text" placeholder="Enter password" name="Password" OnChange={handleChange}/>
                 {inputState.isError.Password.length>0 && (<span>{inputState.isError.Password}</span>)}
             </Form.Group>

             <Form.Group className="mb-3" controled="formBasicPhoneNumber">

                 <Form.Label>Phone Number:</Form.Label>
                 <Form.Control  className='box' type="text" placeholder="Enter user Phone Number" name="Phone Number" OnChange={handleChange}/>
                 {inputState.isError.PhoneNumber.length>0 && (<span>{inputState.isError.PhoneNumber}</span>)}
             </Form.Group>

             <Button className='sub' varient="primary" type="submit"> submit </Button>
        </Form>
        
        <Footer/>
        
    </>
    )}

    export default NewForm;