import React from 'react'
import CustomerRow from './CustomerRow';

const CustomerTable= ({
  customers,
  editCustomer,
  saveCustomer,
  deleteCustomer,
  addCustomer
}) => (
  <table>
    <thead>
      <tr>
        <td>id</td>
        <td>Name</td>
        <td>Email</td>
        <td>Phone</td>
        <td>
          <button onClick={()=>addCustomer()}>+</button>
        </td>
      </tr>
    </thead>
    <tbody>
      {customers.map((customer, index)=>
        <CustomerRow
          key={index}
          id={index}
          customer={customer}
          toggleEdit={(e)=>editCustomer(index)}
          deleteCustomer={(e)=>deleteCustomer(index)}
          saveCustomer={saveCustomer}
        />
      )}
    </tbody>
  </table>
);

export default CustomerTable
