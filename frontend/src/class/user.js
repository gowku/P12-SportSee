import { Component } from "react";

class User extends Component {
  constructor(data) {
    super(data);
    console.log(data);
    this.data = data;
  }
}
export default User;
