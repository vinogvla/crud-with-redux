const customer = (state = {
  name: '',
  email: '',
  phone: '',
  editing: true,
  archived: false
}, action) => {
  switch(action.type) {
    case 'ADD_CUSTOMER':
      return {
        name: '',
        email: '',
        phone: '',
        editing: true,
        archived: false
      }

    case 'SAVE_CUSTOMER':
      if (state.id == action.id) {
        return {
					name: action.name,
					email: action.email,
					phone: action.phone,
					editing: false,
					archived: false
				}
      }
      return state;

    case 'EDIT_CUSTOMER':
      if (state.id === action.id) {
        return {
          ...state,
          editing: !state.editing
        }
      }
      return state;


    default:
      return state;
  }
}

const initialState = [
  { name: 'vlad', email: 'vinogvla', phone: '12345' },
  { name: 'igor', email: 'frenkigo', phone: '65432' },
  { name: 'bria', email: 'isenbri', phone: '65432' }
]

const customers = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_CUSTOMER':
      return [
        ...state,
        customer(undefined, action)
      ]

    case 'EDIT_CUSTOMER':
    case 'SAVE_CUSTOMER':
      return state.map((i, id)=>
        customer({...i, id}, action)  
      )

    case 'DELETE_CUSTOMER':
      return state.filter((i, index)=> {
        return index !== action.id
      })

    default:
      return state;
  }
}

export default customers;
