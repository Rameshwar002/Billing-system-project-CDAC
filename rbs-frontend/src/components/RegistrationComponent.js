
import React,{useState} from 'react'
import "./registerStyle.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const RegistrationComponent = () => {
 
    const navigate=useNavigate();
  


    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [EmailId, setEmailId] = useState("");
    const [UserName, setUserName] = useState("");
    const [PassWord, setPassWord] = useState("");
  
  

    async function handleSubmit(event)
     {
         event.preventDefault();
     try
         {
          await axios.post("http://localhost:8080/sendregister",
         {
         
         firstName: FirstName,
         lastName : LastName,
         emailId : EmailId,
         userName : UserName,
         passWord :PassWord
         });
           alert("User Registation Successfully");
           navigate("/");
           setFirstName("");
           setLastName("");
           setEmailId("");
           setUserName("");
           setPassWord("");
          
         
         }
     catch(err)
         {
           alert("User Registation Failed");
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
              <h2 className="text-uppercase text-center mb-5">Registration Form</h2>

              <form onSubmit={handleSubmit}>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example1cg" className="form-control form-control-lg" 
                  name="FirstName" 
                  placeholder='Enter First Name'
                  
                  onChange={(event) =>
                    {
                        setFirstName(event.target.value);      
                        console.log(FirstName);
                    }}
                 />
                  <label className="form-label" htmlFor="form3Example1cg">First Name</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example1cg" className="form-control form-control-lg"
                  name='LastName'
                  placeholder='Enter Last Name' 
                  onChange={(event) =>
                    {
                        setLastName(event.target.value);      
                    }}/>
                  <label className="form-label" htmlFor="form3Example1cg">Last Name</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3cg" className="form-control form-control-lg"
                  name='EmailId'
                  placeholder='Enter Email-Id'
                  onChange={(event) =>
                    {
                        setEmailId(event.target.value);      
                    }} />
                  <label className="form-label" htmlFor="form3Example3cg">Your EmailId</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3cg" className="form-control form-control-lg" 
                  name='UserName'
                  placeholder='Enter UserName'
                  onChange={(event) =>
                    {
                        setUserName(event.target.value);      
                    }}/>
                  <label className="form-label" htmlFor="form3Example3cg">Username</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4cg" className="form-control form-control-lg"
                  name='PassWord' 
                  placeholder='Enter Password'
                  onChange={(event) =>
                    {
                        setPassWord(event.target.value);      
                    }}/>
                  <label className="form-label" htmlFor="form3Example4cg">Password</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4cdg" className="form-control form-control-lg"
                  name='repeatPassword' 
                  placeholder='Re-Enter Password'/>
                  <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
                </div>

                <div className="form-check d-flex justify-content-center mb-5">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label className="form-check-label" htmlFor="form2Example3g">
                    I agree all statements in <a href="/" className="text-body"><u>Terms of service</u></a>
                  </label>
                </div>

                <div className="d-flex justify-content-center">
                  <button 
                    type="Submit"
                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" >Register</button>
                </div>
                
                
                
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

export default RegistrationComponent
