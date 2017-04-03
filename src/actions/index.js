export const addCustomer = () => {
  return {
    type: 'ADD_CUSTOMER'
  }
}

export const deleteCustomer = (id) => {
  return {
    type: 'DELETE_CUSTOMER',
    id
  }
}

export const editCustomer = (id) => ({
  type: 'EDIT_CUSTOMER',
  id
})

export const saveCustomer = ({id, name, email, phone}) => {
  return {
    type: 'SAVE_CUSTOMER',
    id,
		name,
		email,
		phone
  }
}


export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}
