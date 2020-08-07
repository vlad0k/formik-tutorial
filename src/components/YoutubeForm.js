import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';

const initialValues = {
  name: 'Vlad',
  email: '',
  channel: ''
}

const onSubmit = values => {
  console.log(values);
}

// const validate = values => {
//   let errors = {}
//
//   if (!values.name) {
//     errors.name = 'Required'
//   }
//   if (!values.email) {
//     errors.email = 'Required'
//   }
//   if (!values.channel) {
//     errors.channel = 'Required'
//   }
//   return errors
// }

const validationSchema = Yup.object ({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  channel: Yup.string().required('Required')
})

const YoutubeForm = () => {

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
    // validate
  });

  console.log('Form errors', formik.errors);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          { (formik.errors.name && formik.touched.name) && <div className='error'>{formik.errors.name}</div> }
        </div>

        <div className='form-control'>
          <label htmlFor='name'>E-mail</label>
          <input
            type='email'
            id='email'
            name='email'
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          { (formik.errors.email && formik.touched.email) &&<div className='error'>{formik.errors.email}</div> }
        </div>

        <div className='form-control'>
          <label htmlFor='channel'>Channel</label>
          <input
            type='text'
            id='channel'
            name='channel'
            onChange={formik.handleChange}
            value={formik.values.channel}
            onBlur={formik.handleBlur}
          />
          { (formik.errors.channel && formik.touched.channel) && <div className='error'>{formik.errors.channel}</div> }
        </div>

        <button className='submit'>Submit</button>
      </form>
    </div>
  )
}

export default YoutubeForm;
