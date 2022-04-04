import { Component } from "react";
export class SubScribeForm extends Component {
  state = {
    email: "",
    emailValid: false,
    isAgreeWithTerms: false,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCheckboxChange = (event) => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  emailValidation = () => {
      if (
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email.toLocaleLowerCase())
      ) {
        alert("Not valid email address");
      }
  }

  agreeValidation = () => {
   if (!this.state.isAgreeWithTerms) {
     alert('You  need agree')
   }
}

// submitForm = () => {
//   if (
//     !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email.toLocaleLowerCase())
//   ) {
//     alert("Not valid email address");
//   } else this.state.emailValid = true;

//   if (this.state.emailValid && isAgreeWithTerms) {
//     alert('All Ok, your data send on server! Have are nice day!')
//   }

// }
  render() {
    const { email, isAgreeWithTerms } = this.state;
    return (
      <div>
        <input 
          type="email" 
          name="email" 
          placeholder="email"
          className="field" 
          value={email}
          onChange={this.handleChange} 
          onBlur={this.emailValidation}
        />

        <br />
        <label>
          <input
             type="checkbox"
             name="isAgreeWithTerms"
             checked={isAgreeWithTerms}
             onChange={this.handleCheckboxChange}
             onBlur={this.agreeValidation}
          /> I agree with terms and conditions
        </label>
        <br/>
        {(email && isAgreeWithTerms) ?  <button className="btn">
          Send
        </button> : ''}
        
        {/* <button 
          className="btn"
          onClick={this.submitForm}>
          Submit
        </button> */}
      </div>
    );
  }
}
