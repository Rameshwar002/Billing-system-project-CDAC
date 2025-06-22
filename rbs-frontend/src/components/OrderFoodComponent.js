import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import OrderRow from './OrderRow';
import { useNavigate } from 'react-router-dom';
import BillRow from './BillRow';
const OrderFoodComponent = () => {
const navigate=useNavigate(); 
   
    const [stateCustomer, setCustomerState] = useState([]);
    const [stateForBill, setForBillstate] = useState([]);

    const[customerName,setcustomerName]=useState("");
    const[customerMobile,setcustomerMobile]=useState("");
   
    
 //********************************RETURN TO DASHBOARD********************************* */   
const gotodashboard=()=>{
  navigate("/dashboard");
}
  useEffect(() => {
    getCustomer();
  }, []);

  //************************************LEFT SIDE CARD****************DONT TOUCH HERE****************************** */
  const getCustomer = () => {
    axios
      .get("http://localhost:8080/getAllFood")
      .then(data => {
        let customer = data.data;
        console.log(customer);
        setCustomerState(
          customer.map(d => {
            return {
              select: false,
              id: d.foodId,
              name: d.foodName,
              category: d.foodCategory,
              prize: d.foodPrize
            };
          })
        );
      })
      .catch(err => alert(err));
  };

//************************************FOR RIGHT SIDE CARD****************************************  */
const Getbyid=()=>{
  
  let arrid = [];
  stateCustomer.forEach(d => {
    if (d.select) {
      arrid.push(d.id);
      console.log("INSIDE PUSH");
    }
  });   
  axios
      .get(`http://localhost:8080/getFoodByArray/${arrid}`)
      .then(data => {
        let billobj = data.data;
        console.log(billobj);
        setForBillstate(Array.isArray(billobj) ? 
          billobj.map(d => {
            return {
              
              id: d.foodId,
              name: d.foodName,
              category: d.foodCategory,
              prize: d.foodPrize, 
              
            }; 
          }) : null
        );
      })

      
      
};
  
  return (
    <div>
      <div className="text-center text-uppercase text-white bg-dark"><h1 ><b>Order Menu </b></h1></div>
      
      <div className="bg-success vh-100"><br/>
      <button type="button" className="btn btn-info mx-5" onClick={Getbyid}>Add TO Bill</button>
        <br/><br/><br/><br/>
        <div className="row">
        
    {/* FIRST CARD ***************************/}
    
    <div className="col-sm-4">
      <div className="card border-info bg-dark mx-4 rounded border-3 ">
        <div className="card-body"><h2 className='text-center text-white'>Active List</h2>
        <table className="table text-white">
          <thead>
            <tr>
            <th>
              <input
                type="checkbox"
                onChange={e => {
                  let value = e.target.checked;
                  setCustomerState(
                    stateCustomer.map(d => {
                      d.select = value;
                      return d;
                    })
                  );
                }}
              />
            </th>
              <th scope="col">Food Id</th>
              <th scope="col">Food Name</th>
              <th scope="col">Food Category</th>
              <th scope="col">Food Prize</th>
              {/* <th scope="col">Edit</th> */}
            </tr>
          </thead>
          <tbody>
            <OrderRow
              stateCustomer={stateCustomer}
              setCustomerState={setCustomerState}
            />
          </tbody>
        </table>  
        </div>
      </div>
    </div>


{/* SECOND CARD */}
    <div className = "card col-md-3  offset-md-1 bg-dark text-white border-info border-3">
                    <h3 className="text-center my-3">Customer Details </h3>
                    <div className = "card-body">
                        <form 
                        onSubmit={e => {
                            e.preventDefault();
                            // getbyid(e);
                          }}
                      >
                            <div className = "form-group">
                                <label> Customer Name: </label>
                                <input placeholder="Customer Name" name="customer_name" id="foodname" className="form-control" 
                                
                                 onChange={(event) =>
                                  {
                                    setcustomerName(event.target.value);      
                                      console.log(customerName);
                                  }}
                                    
                                />
                            </div><br></br>
                            <div className = "form-group">
                                <label> Customer Mobile: </label>
                                <input placeholder="Customer Mobile" name="customer_mobile" id="foodcategory" className="form-control" 
                                 onChange={(event) =>
                                  {
                                    setcustomerMobile(event.target.value);      
                                      console.log(customerMobile);
                                  }}
                                />
                            </div>
                            <br></br>
                            

                            <button className="btn btn-success" type='submit' >Save</button>
                            <button className="btn btn-danger"  style={{marginLeft: "10px"}} onClick={gotodashboard}  >Cancel</button>
                        </form>
                    </div>
                </div>
          
          {/* THIRDS CARD */}
          <div className="col-sm-3 offset-md-1">
      <div className="card border-info bg-dark mx-4 rounded border-3 "><h3 className="text-center my-3 text-white">Order List </h3>
        <div className="card-body">
        <table className="table text-white">
          <thead>
            <tr>
            {/* <th>
              <input
                type="checkbox"
                onChange={e => {
                  let value = e.target.checked;
                  setCustomerState(
                    stateCustomer.map(d => {
                      d.select = value;
                      return d;
                    })
                  );
                }}
              />
            </th> */}
              {/* <th scope="col">Food Id</th> */}
              <th scope="col">Food Name</th>
              {/* <th scope="col">Food Category</th> */}
              <th scope="col">Food Prize</th>
              <th scope="col">Qty</th>
            </tr>
          </thead>
          <tbody>
            <BillRow
              stateForBill={stateForBill}
              setForBillstate={setForBillstate}

              customerName={customerName}
              setcustomerName={setcustomerName}

              customerMobile={customerMobile}
              setcustomerMobile={setcustomerMobile}


            />
          </tbody>
        </table>  
        </div>
      </div>
    </div>

  </div>
  <br/><br/><br/><br/><br/><br/><br/>
      </div>
    </div>
  )
}

export default OrderFoodComponent
