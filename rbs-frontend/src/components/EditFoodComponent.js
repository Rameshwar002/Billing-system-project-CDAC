import React, {  useState,useEffect } from 'react'
// import { Navigate } from "react-router-dom";

import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";

const EditFoodComponent = () => {
const {id}=useParams();

 
    const navigate=useNavigate();
    const [stateCust, setstateCust] = useState({});
  useEffect(() => {
    let ids=id;
    console.log("INSIDE EDIT PAGE"+ids);
    getCustomerById(ids);
    
    
  },[]);
  const getCustomerById = (ids) => {
    axios
      .get(`http://localhost:8080/getFood/${ids}`)
      .then(d => {
        let customer = d.data;
        setstateCust({
          foodId:       customer.foodId,
          foodName:     customer.foodName,
          foodCategory: customer.foodCategory,
          foodPrize:    customer.foodPrize
          
        });
        console.log(customer);
      })
      .catch(err => alert(err));
  };
    
  const putCustomer = e => {
    console.log(stateCust);
    axios
      .put(`http://localhost:8080/updateFood/${stateCust.foodId}`, stateCust)
      .then(d => {
        
        navigate("/dashboard");
      })
      .catch(err => alert(err));
  };

  return (
    <div className="bg-dark">
    <br></br><br></br><br></br>
       <div className = "container ">
            <div className = "row">
                <div className = "card col-md-6 offset-md-3 offset-md-3 bg-secondary text-white">
                    <h3 className="text-center my-3">Update Food  </h3>
                    <div className = "card-body">
                        <form 
                        onSubmit={e => {
                            e.preventDefault();
                            putCustomer(e);
                          }}
                      >
                            <div className = "form-group">
                                <label> Food Name: </label>
                                <input placeholder="Food Name" name="foodname" id="foodname" className="form-control" 
                                 value={stateCust.foodName}
                                    onChange={e => {
                                    let value = e.target.value;
                                    setstateCust({
                                        foodName: value,
                                        foodId: stateCust.foodId,
                                        foodCategory: stateCust.foodCategory,
                                        foodPrize: stateCust.foodPrize
                                    });
                                    }}   
                                />
                            </div><br></br>
                            <div className = "form-group">
                                <label> Food Category: </label>
                                <input placeholder="Food Category" name="foodcategory" id="foodcategory" className="form-control" 
                                   value={stateCust.foodCategory}
                                   onChange={e => {
                                     let value = e.target.value;
                                     setstateCust({
                                       foodCategory: value,
                                       foodName: stateCust.foodName,
                                       foodId: stateCust.foodId,
                                       foodPrize: stateCust.foodPrize
                                     });
                                   }} 
                                />
                            </div><br></br>
                            <div className = "form-group">
                                <label> Food Prize: </label>
                                <input placeholder="Food Prize" name="foodprize"  type='number' id="foodprize " className="form-control" 
                                    value={stateCust.foodPrize}
                                    onChange={e => {
                                        let value = e.target.value;
                                        setstateCust({
                                          foodPrize: value,
                                          foodName: stateCust.foodName,
                                          foodId: stateCust.foodId,
                                          foodCategory: stateCust.foodCategory
                                        });
                                      }}
                                      />
                            </div><br></br>

                            <button className="btn btn-success" type='submit' >Save</button>
                            <button className="btn btn-danger"  style={{marginLeft: "10px"}}  >Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
       </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
</div>
  )
}

export default EditFoodComponent
