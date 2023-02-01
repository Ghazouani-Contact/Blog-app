import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import './registre.css'
import { publicRequest } from "../../requestMethods";
import Navba from "../../components/navbar/Navbar";
import Announcement from "../../components/announcement/Announcement";
const Registre = () => {
const initialValues = {
   username: '',
   email: '',
   phone: '',
   address: '',
   dob: '',
   password:'',
  
}


const validationSchema = Yup.object({
  username: Yup.string()
             .required('*')
             .min(3)
             .max(30),
    email: Yup.string()
              .required('*'),
    phone: Yup.string()
                .required('*')
                .max(20)
                .min(8),
    address: Yup.string()
                .required('*')
                .max(50),
    dob: Yup.date()
            .required('*'),
    password: Yup.string()
            .required('*')
            .max(20,"Password must shorter than 20 characters")
            .min(6 ,"Password must be longer than 6 characters"),
});
const registerHandler = async (values, { setSubmitting }) => {
  const payload = {
    // make payload here using values
    username :values.username,
    email :values.email,
    phone :values.phone,
    address :values.address,
    password :values.password,
    dob :values.dob,

  }
  try {
    const response = await publicRequest.post('/auth/register', payload)
    console.log(response.data)
   await response.data && window.location.replace("/login")
  } catch (e) {
    console.log(e)
  } finally {
    setSubmitting(false)
  }
}
const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (registerHandler)
    
});
return (
  <div>
     <Announcement/>
    <Navba/>
    <div className ="containe">
   <form onSubmit={formik.handleSubmit}>
   <h3 className="h3">Inscription</h3>
   <div className="box">
       <label htmlFor="Username" className="fl fontLabel">Username</label>
       <div className="fr">
       <input
         id="username"
         name="username"
         type="text"
         className ="textBox"
         onChange={formik.handleChange}
         value={formik.values.username}
       />
       </div>
       </div>
      {formik.errors.username ? 
       <p className="p">{formik.errors.username}</p> : null}
   <div className="box">
      <label htmlFor="email" className="fl fontLabel">Email</label>
      <div className="fr">
      <input
        id="email"
        name="email"
        type="email"
        className ="textBox"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      </div>
      </div>
      {formik.errors.email ? 
      <p className='p'>{formik.errors.email}</p> : null}

   <div className="box">
      <label htmlFor="address" className="fl fontLabel">Address</label>
      <div className="fr">
      <input
      type="text"
         id="address"
         name="address"
         className ="textBox"
         onChange={formik.handleChange}
         value={formik.values.address}
      />
       </div>
      </div>

      {formik.errors.address ? 
      <p className='p'>{formik.errors.address}</p> : null}

         <div className="box">
       <label htmlFor="phone" className="fl fontLabel">Phone</label>
       <div className="fr">
      <input
         type="number"
         id="phone"
         name="phone"
         className ="textBox"
         onChange={formik.handleChange}
         value={formik.values.phone}
      />
      </div>
      </div>

      {formik.errors.phone ? 
      <p className='p'>{formik.errors.phone}</p> : null}

         <div className="box">
     <label htmlFor="dob"className="fl fontLabel">Date of Birth</label>
     <div className="fr">
      <input
         id="dob"
         name="dob"
         type="date"
         className ="textBox"
         onChange={formik.handleChange}
         value={formik.values.dob}
      />
       </div>
        </div>

      {formik.errors.dob ? 
      <p className='p'>{formik.errors.dob}</p> : null}

   <div className="box">
       <label htmlFor="password" className="fl fontLabel">Password</label>
       <div className="fr">
      <input
         type="text"
         id="password"
         name="password"
         className ="textBox"
         onChange={formik.handleChange}
         value={formik.values.password}
      />
       </div>
      </div>

      {formik.errors.password ? 
      <p className='p'>{formik.errors.password}</p> : null}

      <button type="submit"  className="submit">Submit</button>
      </form>
      </div>
      </div>
);
};
export default Registre;