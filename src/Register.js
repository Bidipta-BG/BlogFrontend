import React, { useEffect } from 'react'
import { useState } from 'react'


const Register =  () => {
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const submit = async ()=>{
        let result = fetch("localhost:4000/authors",{
            method:'post',
            body:JSON.stringify(firstName,lastName,email,password),
            headers:{
                'Content-type' : 'application/json'
            }  
        })
        result = await result.json()
        console.log(result);
    }
  return (
      <div class="row">
        
          <div class="w-50 mx-auto mt-5">
              <h1>Register</h1>
            <form>
              <div class="mt-4">
                  <label class="form-label">First Name</label>
                  <input class="form-control" type="text" placeholder="Enter First Name"
                  value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
              </div>
              <div class="mt-4">
                  <label class="form-label">Last Name</label>
                  <input class="form-control" type="text" placeholder="Enter Last Name" 
                  value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
              </div>
              <div class="mt-4">
                  <label class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" 
                  value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              <div class="mt-4">
                  <label class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" 
                  value={password} onChange={(e)=>setPassword(e.target.value)}/>
              </div>
              <div class="mt-4">
                  <button onClick={submit} type="submit" class="btn btn-primary">Submit</button>
              </div>
            </form>
        </div>
         
        </div>
  )
}

export default Register