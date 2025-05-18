import type { ReactNode, SyntheticEvent } from "react";
import React from "react";

class LoginClassForm extends React.Component {
  state = {
    email: "",
    password: "",
  };
  submitForm(ev: SyntheticEvent) {
    ev.preventDefault();
    const target = ev.target as HTMLFormElement;
    console.log(target, this.state);
  }
  render(): ReactNode {
    return (
      <form
        className="flex flex-col gap-4"
        onSubmit={this.submitForm.bind(this)}
      >
        <input type="email" name="" id="" placeholder="Enter Email" 
        onChange={(ev)=>{
            this.setState({
                email:ev.target.value,
            })
        }}/>
        <input type="password" onChange={(ev)=>{
            this.setState({
                password:ev.target.value,
            })
        }} placeholder="Enter Password" />
        <button>Submit</button>
      </form>
    );
  }
}

export default LoginClassForm;
