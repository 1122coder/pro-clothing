import React from 'react';

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
      <h2>Account Already Exits</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={this.hanldeSubmit}>
        <input
         name='email'
         type='email'
         value={this.state.email}
         required
         />
        <label>Email</label>
        <input
         name='password'
         type='password'
         value={this.state.email}
         onChange={this.handleChange}
         required
         />
        <label>Password</label>

        <input type='submit' value='Submit Form' />
      </form>
  </div>
    )
  }
}

export default SignIn;
