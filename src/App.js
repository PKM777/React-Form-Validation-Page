import FormInput from "./compos/FormInput";
import './app.css'
import { useState } from "react";


function App() {
  const handleSubmit =(e)=>{
    e.preventDefault();
  }
  
   const [values, setValues]= useState({
     username:"",
     password:"",
     email:"",
     number:""
   })
   
    const inputs = [
    {
      name:"username",
      label:"username",
      placeholder:"username",
      type:"text",
      pattern:"^[a-zA-Z0-9]{3,16}$",
      required:"true",
      errorMessage:"username should be 3-16 characters long and should'nt include any special characters",
      id:1
    },
    {
      name:"date",
      label:"date",
      placeholder:"username",
      type:"date",
      pattern:"",
      required:"",
      errorMessage:"",
      id:2
    },
    {
      name:"password",
      label:"password",
      placeholder:"password",
      type:"text",
      pattern:"^(?=.*[a-zA-Z])(?=.*d)(?=.*[!@#$%^&*()_+])[A-Za-zd!@#$%^&*()_+]{8,20}",
      required:"true",
      errorMessage:"should be 8-20 characters long should include 1 letter, 1 number, 1 special character",
      id:3
    },
    {
      name:"confirm password",
      label:" confirm password",
      placeholder:"password",
      type:"password",
      pattern:"",
      required:"true",
      errorMessage:"passwords don't match",
      id:4
    },
    {
      name:"email",
      label:"email",
      placeholder:"email",
      type:"text",
      pattern:"",
      required:"true",
      errorMessage:"please provide valid email address",
      id:5
    },
    {
      name:"number",
      label:"number",
      placeholder:"number",
      type:"number",
      pattern:"",
      required:"true",
      errorMessage:"enter valid phone number",
      id:6
    }
  ]
 
const onChange = (e)=>{
  setValues({...values, [e.target.name]: e.target.value })
}
  console.log(values)

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      {inputs.map((input)=>{
        return <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
      })}
     
      
      <button>submit</button>
      </form>
    </div>
  );
}

export default App;
