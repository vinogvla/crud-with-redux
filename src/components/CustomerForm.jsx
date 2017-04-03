import React from 'react'

export default class CustomerForm extends React.Component {
  handleSubmit(e){
    e.preventDefault();
    this.props.saveCustomer({
      id: e.target.id.value,
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value
    })
  }

  handleDelete(e){
    e.preventDefault();
    console.log({
      id: e.target.id.value,
      name: '',
      email: '',
      phone: ''
    })
  }

  handleCancel(e){
    e.preventDefault();
		this.props.saveCustomer({
			...this.props.defaultValues,
			editing: false
		})
  }

  render() {
    const { defaultValues } = this.props;
    const { name, email, phone, id } = defaultValues;
    return (
      <form onSubmit={e=>this.handleSubmit(e)}>
        <input type="text" name="id" defaultValue={id} disabled />
        <input type="text" name="name" defaultValue={name} />
        <input type="text" name="email" defaultValue={email} />
        <input type="text" name="phone" defaultValue={phone} />
        <button type="submit">save</button>
        <button onClick={e=>this.handleCancel(e)}>cancel</button>
      </form>
    )
  }
}
            
            
