import React from 'react'
import Layout from '../components/Layout'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function Signup () {
  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
      password: ''
    },
    onSubmit: values => {
      console.log('enviando')
      console.log(values)
    }
  })
  return (
    <>
      <Layout>
        <h1 className='text-center text-2xl text-white font-light'>Nueva Cuenta</h1>
        <div className='flex justify-center mt-5'>
          <div className='w-full max-w-sm'>
            <form className='bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4' onSubmit={formik.handleSubmit}>
              <div className='mb-4'>
                <label htmlFor='name' className='block text-gray-700 text-sm font-bold mb-2'>Nombre</label>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='name'
                  type='text'
                  name='name'
                  placeholder='Nombre Usuario'
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='lastName' className='block text-gray-700 text-sm font-bold mb-2'>Apellido</label>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='lastName'
                  type='text'
                  name='lastName'
                  placeholder='Apellido Usuario'
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='email' className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='email'
                  type='email'
                  name='email'
                  placeholder='Email Usuario'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='password' className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='password'
                  type='password'
                  name='password'
                  placeholder='*****'
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </div>
              <input
                type='submit'
                className='bg-gray-800 w-full mt-5 p-2 text-white uppercase hover:bg-gray-900'
                value='Crear Cuenta'
              />
            </form>
          </div>
        </div>
      </Layout>
    </>
  )
}
