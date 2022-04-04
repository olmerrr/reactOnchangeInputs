import {Component} from "react";
import React from 'react'

export class Form extends Component {
    constructor() {
        super();
        this.state = {
            card: '',
            name: ''
        }
        this.nameRef = React.createRef();
        this.emailRef = React.createRef();
    }

    state = {
        name: "",
        email: "",
        message: "",
        gender: "",
        subscription: "",
        versionOS: "",
    };

    // если одно поле - то ок
    // handleChange = (event) => {
    //   this.setState({ name: event.target.value });
    // };

    // но если больше полей то можно сделать динамическую обработку если у полей указан name       [event.target.name]
    componentDidMount() {
        this.nameRef.current.focus();
    }


    handleChange = (event) => {
        this.setState( () => ({[event.target.name]: event.target.value}) , () => {
            // I can add in setState callback fn
            if (this.state.name.length >= 8 ) {
                this.emailRef.current.focus();
            }
        });
    };
    // для чекбоксов нужно следить за параметров checked а не value
    handleCheckboxChange = (event) => {
        this.setState({[event.target.name]: event.target.checked});
    };
    // для чекбоксов нужно следить за параметров checked а не value

    validateName = () => {
        if (this.state.name.length < 8) {
            alert("Sorry, short name, you need add name more 8 length");
        }
    };

    validateEmail = () => {
        if (
            !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)
        ) {
            alert("Not valid email address");
        }
    };

    validateMessage = () => {
        if (this.state.message.length < 50) {
            alert("Sorry, short name, you need add name more 50 length");
        }
    };

    render() {
        const {firstName, email, message, gender, subscription, versionOS} =
            this.state;

        return (
            <div className="form">
                <div className="first-name-container">
                    <input
                        type="text"
                        placeholder="name"
                        name="name"
                        className="field"
                        value={firstName}
                        onChange={this.handleChange}
                        onBlur={this.validateName}
                        ref={this.nameRef}
                    />
                    {this.state.name.length ? (
                        <span className="name-help">{this.state.name.length}</span>
                    ) : (
                        ""
                    )}
                </div>

                <input
                    type="text"
                    placeholder="e-mail"
                    name="email"
                    className="field"
                    value={email}
                    onChange={this.handleChange}
                    onBlur={this.validateEmail}
                    ref={this.emailRef}
                />

                <textarea
                    placeholder="write your message (min 50 letters)"
                    name="message"
                    className="field field-msg"
                    value={message}
                    rows="10"
                    onChange={this.handleChange}
                    onBlur={this.validateMessage}
                />

                <select
                    className="field field-select"
                    name="gender"
                    placeholder="your gender"
                    value={gender}
                    onChange={this.handleChange}
                >
                    <option disabled value="">
                        your gender
                    </option>
                    <option value="male">male</option>
                    <option value="famale">famale</option>
                </select>

                <label className="field-subscription">
                    <input
                        type="checkbox"
                        name="subscription"
                        checked={subscription}
                        onChange={this.handleCheckboxChange}
                    />
                    Subscrible
                </label>

                <div className="version-os">
                    <div className="title">Your version OS:</div>
                    <div>
                        <input
                            type="radio"
                            name="versionOS"
                            value="mac"
                            onChange={this.handleChange}
                        />
                        Mac
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="versionOS"
                            value="linux"
                            onChange={this.handleChange}
                        />
                        Linux
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="versionOS"
                            value="windows"
                            onChange={this.handleChange}
                        />
                        Windows
                    </div>
                </div>

                {/* <div>Your input: {firstName}</div> */}
            </div>
        );
    }
}
