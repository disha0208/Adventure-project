import React from 'react';
import '../../App.css';
import './SignUp.css';

import { useFormik } from 'formik';

import  axios  from 'axios';
 import { useNavigate } from 'react-router-dom';
import Footer from '../../Footer/Footer';

const ValidateForm= (formValue)=> {
 

 
  const errors={};
  const reg_exp=/^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,10})$/

  if(!formValue.username){
    errors.username="please enter username"
 }else if (formValue.username.length<5){
 errors.username="minlength 5";
}

if(!formValue.email){
  errors.email="please enter email"
}else if(!reg_exp.test(formValue.email)){
errors.email="invalid email";
}
console.log("Error:" , errors);
return errors;
};

export default function SignUp() {
   const navigate=useNavigate();
  // const [initialValues,setChangeState]=useState();
  
  const formik=useFormik({
    initialValues:{
      username:'',
      email:'',
      password:''
    },

    validate:ValidateForm,
    onSubmit: (values)=>{
      console.log("Received values:",values);
      axios.post('https://node-project-storage.herokuapp.com/postUserData',values)
    .then(res=>{
        console.log("Axios res:", res.data);
      navigate('/about');
        
    })
    .catch(err=>{
        console.log("Axios error:", err)
    })
    } });
  return <div>
      <form className='signup' onSubmit={formik.handleSubmit}>
        <br/>
          <input type="text" name="username" placeholder="Enter user name" 
          value={formik.values.username} onChange={formik.handleChange}
            onBlur={formik.handleBlur}/>
            {formik.touched.username && formik.errors.username?
          (<span style={{color:'red'}}>{formik.errors.username}</span>):null}
           <br/>

          <input type="text" name="email"  placeholder="Enter user email"
          value={formik.values.email} onChange={formik.handleChange}
              onBlur={formik.handleBlur}/>
            {formik.touched.email && formik.errors.email?
          (<span style={{color:'red'}}>{formik.errors.email}</span>):null}
          <br/>

          <input type="text" name="password" placeholder="Enter user password"
          value={formik.values.password} onChange={formik.handleChange}
          onBlur={formik.handleBlur}/>
          {formik.touched.password && formik.errors.password?
        (<span style={{color:'red'}}>{formik.errors.password}</span>):null}
          <br/>


           <button type="submit" disabled={!(formik.isValid && formik.dirty)} >submit</button>
      </form>
     <Footer/> 
  </div>;
}

 



 

