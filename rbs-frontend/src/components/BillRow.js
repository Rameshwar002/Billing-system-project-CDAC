import React, { useState } from "react";
import { Link } from "react-router-dom";

function BillRow(props) {

    const[Value,setValue]=useState(0);
    
  return props.stateForBill.map(d => (
    <tr key={d.id}>
      {/* <td>
        <input
          type="checkbox"
          checked={d.select}
          onChange={e => {
            let value = e.target.checked;
            props.setForBillstate(
              props.stateForBill.map(sd => {
                if (sd.id === d.id) {
                  sd.select = value;
                }
                return sd;
              })
            );
          }}
        />
      </td> */}
      {/* <th scope="row">{d.id}</th> */}
      <td>{d.name}</td>
      {/* <td>{d.category}</td> */}
      <td >{d.prize}</td>
      <td><input  type="number" min="1" max="10" /></td>
      
      {/* <td>
        <Link to={`/dashboard/edit/${d.id}`}>
          <button className="btn btn-primary btn-sm" >Update </button>
        </Link>
      </td> */}
    </tr>

   
  ));
 
}

export default BillRow;