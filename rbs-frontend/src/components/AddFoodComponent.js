import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddFoodComponent = (props) => {
  
    const navigate=useNavigate();
    
    const submit = e => {
        let foodName = e.target[0].value;
        let foodCategory = e.target[1].value;
        let foodPrize = e.target[2].value;
        let data = {
            foodName,
            foodCategory,
            foodPrize
        };
        postFood(data);
      };
    
      const postFood = data => {
       
       try{
        axios
          .post("http://localhost:8080/sendFood", data)
          .then(d => {
        //    props.history.push("/dashboard");
           navigate("/dashboard");
          });
       } 
       catch(err){
        alert("Food Not Added ")
       }
      };

    

    const gotoDashboard=()=>{
        navigate("/dashboard");
    }
  
    return (
   
      
      
    <div className="bg-dark">
    <br></br><br></br><br></br>
       <div className = "container">
            <div className = "row">
                <div className = "card col-md-6 offset-md-3 offset-md-3 bg-secondary text-white">
                    <h3 className="text-center my-3"><b>Add Food To Active List</b></h3>
                    <div className = "card-body">
                        <form 
                       onSubmit={e => {
                        e.preventDefault();
                        submit(e);
                      }}>
                            <div className = "form-group">
                                <label> Food Name: </label>
                                <input placeholder="Food Name" name="firstName" className="form-control" 
                                    />
                            </div><br></br>
                            <div className = "form-group">
                                <label> Food Category: </label>
                                <input placeholder="Food Category" name="lastName" className="form-control" 
                                    />
                            </div><br></br>
                            <div className = "form-group">
                                <label> Food Prize: </label>
                                <input placeholder="Food Prize" name="number"  type='number' className="form-control" 
                                   />
                            </div><br></br>

                            <button className="btn btn-success" type='submit' >Save</button>
                            <button className="btn btn-danger"  style={{marginLeft: "10px"}} onClick={gotoDashboard} >Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
       </div>
       <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
</div>
    
  )
}

export default AddFoodComponent
