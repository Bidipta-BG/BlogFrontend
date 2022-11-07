import React, { useState } from 'react'
import { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  useEffect(() => { submitButton() }, [])

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    let navigate = useNavigate()
    const  submitButton = async ()=>
    {
        // alert('submit called')
        console.log(email,password);
        let result = await fetch("http://localhost:4000/loginUser",{
          method:'post',
          body:JSON.stringify({email,password}),
          headers:{
            'Content-Type' : 'application/json'
          }
        })
        result = await result.json()
        console.log(result);
        if(result.data){
          localStorage.setItem("user",JSON.stringify(result))
          navigate("/profile")
        }else{
          alert("plz provide valid details")
        }
    }
  return (
      <div class="row">
        
          <div class="w-50 mx-auto mt-5">
              <h1>Login</h1>
              <form>
                  <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Email address</label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}/>
                          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">Password</label>
                      <input type="password" class="form-control" id="exampleInputPassword1" 
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}/>
                  </div>
                  <div class="mb-3 form-check">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                          <label class="form-check-label" for="exampleCheck1">Check me out</label>
                  </div>
                  <button onClick={submitButton} type="submit" class="btn btn-primary">Submit</button>
              </form>
           </div>

    </div>
  )
}

export default Login