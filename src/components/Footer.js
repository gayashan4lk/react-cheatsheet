import { React, Component } from "react";

class Footer extends Component {
  render() { 
    return (
      <div className="Footer">
        <h1>This is Footer</h1>
        <h1>props : {this.props.data}</h1>
      </div>
    );
  }
}
 
export default Footer;