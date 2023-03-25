import { Button, TextField } from '@mui/material'
import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div className='p-6'>
        <span className='flex flex-col space-y-3 text-center'>
        <h3 className=''>Contact Us</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis commodi error enim, sequi architecto beatae quo dolores consectetur quasi itaque. Animi expedita at eligendi quisquam blanditiis et. Iure, velit tempore!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto labore ea, facilis veritatis neque repellendus eveniet quaerat, deserunt commodi autem quas voluptates dolor inventore omnis vitae minima unde error fugiat.
        </p>
        </span>
        

        <div className='mt-3'>
          <form className='w-full py-8 px-32 flex flex-col space-y-3'>
             <TextField 
               label="Enail"
               type="email"
               variant='filled'
               placeholder='Enter Your Email here'
               fullWidth={true}
               required
             />

            <TextField 
               label="Massage"
               type="text"
               variant='outlined'
               placeholder='Enter your Massage here'
               fullWidth={true}
               minRows={10}
               multiline
               maxRows={Infinity}
               required
             />

             <Button variant="contained" color="success">
                Success
             </Button>
          </form>
        </div>
      </div>
    )
  }
}
