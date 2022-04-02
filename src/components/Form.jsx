import { Component } from "react";
export class Form extends Component {

  state = {
    firstName: "",
    email: "",
  };

  // если одно поле - то ок
  // handleChange = (event) => {
  //   this.setState({ firstName: event.target.value });
  // };

  // но если больше полей то можно сделать динамическую обработку если у полей указан name       [event.target.name]
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value });
  };

  validateName = () => {
    if (this.state.firstName.length < 8) {
      alert('Sorry, short name, you need add name more 8 length')
    }
  }
  
  validateEmail = () => {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
        alert('Not valid email address')
      }
  }

  render() {
    const { firstName, email } = this.state;

    return (
      <div class="form">
        <div className="">
        <input
          type="text"
          placeholder="first name"
          name="firstName"
          className="field"
          value={firstName}
          onChange={this.handleChange}
          onBlur={this.validateName}
        />  {this.state.firstName.length ? <span className="field-msg">{this.state.firstName.length}</span> : ''}

        </div>
        
        <input
          type="text"
          placeholder="e-mail"
          name="email"
          className="field"
          value={email}
          onChange={this.handleChange}
          onBlur={this.validateEmail}
        />

        {/* <div>Your input: {firstName}</div> */}
      </div>
    );
  }
}
