import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
const initialValues={
     name:'',
email:'',
password:''
}
// const  validate=values=>{
//     let errors={}
//     if (!values.name){
//         errors.name='Name is Required'
//     }
//     if (!values.email){
//         errors.email='Email is Required'
//     }
//     if (!values.password){
//         errors.password='Password is Required'
//     }
//     return errors
// }
const onSubmit=values=>{

}
const validationSchema =Yup.object({
    name:Yup.string().required("Name is required !"),
    email:Yup.string().email("Invalid email input").required("required !"),
    password:Yup.string().required("Password is required !").min(6,"password should be of minimum 6 character").max(8,"password should be of maximum 8 character")
})
export default function RegistrationForm() {
    const formik=useFormik({
      initialValues,
        onSubmit,
        validationSchema
    })
    console.log(" Visited field:", formik.touched)
    return (
        <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label><br></br>
            <input 
                type="text" 
                onChange={formik.handleChange} 
                value={formik.values.name}
                 name="name"
                 onBlur={formik.handleBlur}
            >
            </input>
            <br></br>
            {formik.touched.name &&formik.errors.name?(
            <div>{formik.errors.name}</div>)
            :null}
            <br></br>
            <label htmlFor="email">Email</label><br></br>
            <input 
                type="text" 
                onChange={formik.handleChange} 
                value={formik.values.email} 
                name="email"
                onBlur={formik.handleBlur}
            >
            </input>
            <br></br>
            {formik.touched.email && formik.errors.email?(<div>{formik.errors.email}</div>):null}<br></br>
            <label htmlFor="password">Password</label><br></br>
            <input 
                type="password" 
                onChange={formik.handleChange} 
                value={formik.values.password} 
                name="password"
                onBlur={formik.handleBlur}
            >
            </input>
            <br></br>
            {formik.touched.password && formik.errors.password?(<div>{formik.errors.password}</div>):null}<br></br>
            <button type="submit">Submit</button>
      </form> 
    )
}
