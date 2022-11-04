import React from 'react'


const Register = () => {
  return (
      <div class="row">
        
          <div class="w-50 mx-auto mt-5">
              <h1>Register</h1>
            <form>
              <div class="mt-4">
                  <label class="form-label">First Name</label>
                  <input class="form-control" type="text" placeholder="Enter First Name" />
              </div>
              <div class="mt-4">
                  <label class="form-label">Last Name</label>
                  <input class="form-control" type="text" placeholder="Enter Last Name" />
              </div>
              <div class="mt-4">
                  <label class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div class="mt-4">
                  <label class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" />
              </div>
              <div class="mt-4">
                  <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </form>
        </div>
         
        </div>
  )
}

export default Register