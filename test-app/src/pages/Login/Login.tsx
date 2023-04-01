import { Button, TextField } from '@mui/material'
import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div className='p-6'>
      
        <div className='mt-3 border border-spacing-5 justify-center w-1/2 h-1/2'>
          <form className=' py-8 px-32 space-y-3'>
             <TextField 
             
               label="UserName"
               type="userName"
               variant='outlined'
               placeholder='Enter Your Email here'
               fullWidth={true}
               required
             />

            <TextField 
             label="Password"
             type="password"
             variant='outlined'
             placeholder='Enter Your Email here'
             fullWidth={true}
             required
             />

             <Button variant="contained" color="success">
                Log In
             </Button>
          </form>
        </div>
      </div>
    )
  }
}
