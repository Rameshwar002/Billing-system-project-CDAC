import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "./registerStyle.css"
import axios from 'axios'
const ForgotPwdComponent = () => {

    const navigate=useNavigate();
  
    const [UName, setName] = useState("");
    const [PWord, setWord] = useState("");
    // const[obj,setObj]=useState([]);
    async function changepwd(event)
     {
         event.preventDefault();
     try
         {
          await axios.put(`http://localhost:8080/forforgot/${UName}`,
          {
            userName : UName,
            passWord : PWord
          });
          
           alert("Password Changed Successfully");
           navigate("/");
         
         }
     catch(err)
         {
           alert("Please Check UserName..");
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
              <h2 className="text-uppercase text-center mb-5">Changed Password</h2>

              <form >
                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3cg" className="form-control form-control-lg" 
                  name='UserName'
                  placeholder='Enter UserName'
                  required
                  onChange={(event) =>
                    {
                        setName(event.target.value);      
                    }}
                  />
                  <label className="form-label" htmlFor="form3Example3cg">Username</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4cg" className="form-control form-control-lg"
                  name='PassWord' 
                  placeholder='Enter New-Password'
                  required
                  onChange={(event) =>
                    {
                        setWord(event.target.value);      
                    }}
                    />
                  <label className="form-label" htmlFor="form3Example4cg">New Password</label>
                </div>

                <div className="d-flex justify-content-center">
                  <button 
                    type="Submit"
                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={changepwd}>Change Pasword</button>
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

export default ForgotPwdComponent
