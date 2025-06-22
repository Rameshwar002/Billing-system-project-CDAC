import React, {  useState } from 'react'
import "./registerStyle.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const LoginComponent = () => {
  
  const navigate=useNavigate();
  
  const GoToRegister=()=>{
    navigate("/register");
  }

  const GoToForgotPage=()=>{
    navigate("/forgot");
  }

  const[username,setUserName]=useState("");
  const[password,setPssword]=useState("");
  
  async function verify(event)
     {
         event.preventDefault();
     try
         {
            let res= await axios.get(`http://localhost:8080/fetchbyusername/${username}`);
           var check=res.data;
            if( check === password){
              alert("User Login Successfully");
              navigate("/dashboard");  
            }
            else{
              alert("User Login Failed");
            }   
         }
     catch(err)
         {
           alert("User Login Failed");
         }
    }
  return (
    <div>
      <section className="vh-100 bg-image" style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')", backgroundSize: 'cover',
      overflow: 'hidden' }}>
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{borderRadius : '15px'}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Login</h2>

              <form >
                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3cg" className="form-control form-control-lg" 
                  name='UName'
                  placeholder='Enter UserName'
                  onChange={(event) =>
                    {
                        setUserName(event.target.value);      
                        
                    }}
                  />
                  <label className="form-label" htmlFor="form3Example3cg">Username</label>
                  
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4cg" className="form-control form-control-lg"
                  name='Pwd' 
                  placeholder='Enter Password'
                  onChange={(event) =>
                    {
                      setPssword(event.target.value);      
                        
                    }}
                  />
                  <label className="form-label" htmlFor="form3Example4cg">Password</label>
                </div>

                <button type="button" className="btn btn-link l" onClick={GoToForgotPage}>Forgot Password</button>

                <div className="d-flex justify-content-center">
                
                  <button 
                    type="Submit"
                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={verify} >Login</button>
                </div>
                
                <p className="text-center text-muted mt-5 mb-0"> Not a Member?<button type="button" className="btn btn-link" onClick={GoToRegister}>Sign Up</button> </p>
                
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
  )
}

export default LoginComponent
