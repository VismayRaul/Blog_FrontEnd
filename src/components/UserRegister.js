import React from 'react'
import {Link} from 'react-router-dom'

const UserRegister = () => {
  return (
    <>
      <div className='maindiv'>
        <div className='RegisterationContainer'> 
              <h2 className='heading'> Registration </h2><br/><br/>
              <label className='labels'> Username </label>
              <span className='Inputs usernameinput'><input type='text' className='RegisterationInputs' name='registeredusername'/></span><br/><br/>
              <label className='labels'> Email</label>
              <span className='Inputs emailinput'><input type='email' className='RegisterationInputs' name='registeredemail'/></span><br/><br/>
              <label className='labels passwordlabel'> Password </label>
              <span className='Inputs passwordinput'><input type='password' className='RegisterationInputs' name='registeredpassword'/></span><br/><br/>
              <label className='labels'> Confirm Password </label>
              <span className='Inputs confirmpasswordinput'><input type='password' className='RegisterationInputs' name='registeredpassword1'/></span><br/><br/>
              <button className='registerbutton'> Register </button>
        </div>
        </div>

    </>
  )
}

export default UserRegister