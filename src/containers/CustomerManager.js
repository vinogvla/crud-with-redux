import { connect } from 'react-redux'
import CustomerTable from '../components/CustomerTable'
import {
  editCustomer,
  saveCustomer,
  deleteCustomer,
  addCustomer
} from '../actions'

const mapStateToProps = (state) => ({
   customers: state.customers 
})

const mapDispatchToProps = (dispatch) => ({
  editCustomer: (id) => dispatch(
    editCustomer(id)
  ),
  deleteCustomer: (id) => dispatch(
    deleteCustomer(id)
  ),
  saveCustomer: (customer) => dispatch(
    saveCustomer(customer)
  ),
  addCustomer: () => dispatch(
    addCustomer()
  ),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerTable)
