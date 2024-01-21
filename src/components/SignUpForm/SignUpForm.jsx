import { Component } from "react";
import { signUp } from '../../utilities/users-service';
import { Navigate } from "react-router-dom";

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  formErrors = {}

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!this.state.name) {
      errors.username = "Username is required!";
    }
    if (!this.state.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(this.state.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!this.state.password) {
      errors.password = "Password is required";
    }
    // else if (values.password.length < 4) {
    //   errors.password = "Password must be more than 4 characters";
    // } else if (values.password.length > 10) {
    //   errors.password = "Password cannot exceed more than 10 characters";
    // }
    return errors;
  };


  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = { ...this.state };
      delete formData.confirm;
      delete formData.error;
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      // Baby step
      this.props.setUser(user);
      console.log(user)
    } catch (error) {
      // An error happened on the server
      this.setState({
        error: 'Sign Up Failed - Try Again'
      })
    }
  };

  // We must override the render method
  // The render method is the equivalent to a function-based component
  // (its job is to return the UI)
  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className={this.props.mode}>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            <label>Email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <label>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <label>Confirm</label>
            <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            <button type="submit" disabled={disable}>SIGN UP</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}