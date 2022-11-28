import React from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginApi } from '../../redux/productReducer/userReducer';
import LoginFacebook from '../../Components/LoginFacebook/LoginFacebook';
export default function Login() {
  const dispatch = useDispatch();
  const frm = useFormik({
    initialValues: {
      email:'',
      password:''
    },
    validationSchema: yup.object().shape({
      email: yup.string().email('Email không đúng định dạng !'),
      // password: 
    }),
    onSubmit:(values) => {
        console.log(values)
        const action = loginApi(values);
        dispatch(action)

    }
  })


  return (
    <form className='container mt-2' onSubmit={frm.handleSubmit}>
      <h3>Login</h3>
      <div className='form-group'>
        <p>Email</p>
        <input className='form-control' id="email" name="email" onChange={frm.handleChange} onBlur={frm.handleBlur} />
        {frm.errors.email ? <p className='text text-danger'>{frm.errors.email}</p> : ''}
      </div>
      <div className='form-group'>
        <p>Password</p>
        <input className='form-control' id="password" name="password" type={"password"}  onChange={frm.handleChange} />
      </div>
      <div className='form-group'>
        <button className='btn btn-success mt-2' type='submit'>Login</button>
      </div>
      <LoginFacebook />
    </form>
  )
}
