import { React, Component } from "react";

class Footer extends Component {
  render() { 
    return (
      <div className="footer">
        <p>This is Footer</p>
        <p>props : {this.props.data}</p>
      </div>
    );
  }
}
 
export default Footer;