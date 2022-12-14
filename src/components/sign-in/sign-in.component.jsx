import React from 'react';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import './sign-in.styles.scss'

class SignIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

hanldeSubmit = (e)=> {
  e.preventDefault()
  this.setState({email: '', password: ''})
}

hanldeChange = (e)=> {
  const {name, value} = e.target;
  this.setState({[name]:value})
}

  render(){
    return(
      <div className='signin'>
      <h2 className='title'>Account Already Exits</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={this.hanldeSubmit}>
        <FormInput
         name='email'
         type='email'
         value={this.state.email}
         handleChange={this.handleChange}
         label='Email'
         required
         />
        <FormInput
         name='password'
         type='password'
         value={this.state.email}
         hanldeChange={this.handleChange}
         label='Password'
         required
         />

        <CustomButton type='submit'>Sign in </CustomButton>
      </form>
  </div>
    )
  }
}

export default SignIn;
