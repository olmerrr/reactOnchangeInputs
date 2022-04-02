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
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { firstName, email } = this.state;

    return (
      <div class="form">
        <input
          type="text"
          placeholder="first name"
          name="firstName"
          className="field"
          value={firstName}
          onChange={this.handleChange}
        />

        <input
          type="text"
          placeholder="e-mail"
          name="email"
          className="field"
          value={email}
          onChange={this.handleChange}
        />

        {/* <div>Your input: {firstName}</div> */}
      </div>
    );
  }
}
