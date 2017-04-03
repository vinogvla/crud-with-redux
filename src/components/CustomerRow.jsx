import React from 'react'
import CustomerForm from './CustomerForm'

export default class CustomerRow extends React.Component {
  render() {
    const { customer, id, toggleEdit, deleteCustomer, saveCustomer } = this.props
    if (customer.editing) {
      return (
        <tr>
          <td colSpan='5'>
            <CustomerForm
              defaultValues={{...customer, id}}
              saveCustomer={saveCustomer}
            />
          </td>
        </tr>
      )
    }
    return (
      <tr>
        <td>{id}</td>
        <td>{customer.name}</td>
        <td>{customer.email}</td>
        <td>{customer.phone}</td>
        <td>
          <button onClick={e=> {e.preventDefault; toggleEdit()}}>e</button>
          <button onClick={e=> {e.preventDefault; deleteCustomer(id)}}>x</button>
        </td>
      </tr>
    )
  }
}
