import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import CustomerRow from "./CustomerRow";
const DashBoardComponent = () => {

  const navigate=useNavigate();

  //go to add food component
  const addFoodPage=()=>{
    navigate("/gotoaddfood");
  }

  //GO TO ORDER FOOD
  const GoToOrderFood=()=>{
    navigate("/orderfood");
  }

  //go to login by clicking on logout
  const logout=()=>{
    navigate("/");
  }
  //get list
  const [stateCustomer, setCustomerState] = useState([]);

  useEffect(() => {
    getCustomer();
  }, []);

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


  //DELETE BY ID
  const deleteCustomerByIds = () => {
    let arrayids = [];
    stateCustomer.forEach(d => {
      if (d.select) {
        arrayids.push(d.id);
      }
    });
    axios
      .delete(`http://localhost:8080/deleteFood/${arrayids}`)
      .then(data => {
        console.log(data);
        getCustomer();
      })
      .catch(err => alert(err));
  };

  return (
    <div>
      <div className="text-center text-uppercase text-white bg-dark"><h1 >Active Menu List</h1></div>
      
    <div className="bg-success">
     
      <br/><br/><br/><br/>
      <div className="row">
  <div className="col-sm-2">
    <div className="card border-info bg-dark mx-4 rounded border-3" >
      <div className="card-body text-center ">
      <button type="button" className="btn btn-primary text-center" onClick={addFoodPage}>&nbsp;&nbsp;Add Food&nbsp;&nbsp;&nbsp;&nbsp;</button><br/><br/><br/><br/>
      {/* <button type="button" className="btn btn-warning">Update Food&nbsp;</button><br/><br/><br/><br/> */}
      <button type="button" className="btn btn-danger" onClick={() => {
          deleteCustomerByIds();
        }}>Delete Food&nbsp;&nbsp;</button><br/><br/><br/><br/>

      <button type="button" className="btn btn-secondary" onClick={GoToOrderFood}>Order Food&nbsp;&nbsp;&nbsp;</button><br/><br/><br/><br/>
      <button type="button" className="btn btn-info" onClick={logout}>&nbsp;&nbsp;Log Out&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
        <p className="card-text"/>
        
      </div>
    </div>
  </div>
  
  <div className="col-sm-9">
    <div className="card border-info bg-dark mx-4 rounded border-3 ">
      <div className="card-body">
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
            {/* <th scope="col">Food Id</th> */}
            <th scope="col">Food Name</th>
            <th scope="col">Food Category</th>
            <th scope="col">Food Prize</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          <CustomerRow
            stateCustomer={stateCustomer}
            setCustomerState={setCustomerState}
          />
        </tbody>
      </table>  
      </div>
    </div>
  </div>
</div>
<br/><br/><br/><br/><br/><br/><br/>
    </div></div>
  )
}

export default DashBoardComponent
