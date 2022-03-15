import React from 'react';

function Header(props) {
  return (
    <div className="header">
      <h1>This is Header</h1>
      <h1>props : </h1>
      <h4>firstName : {props.info.firstName}</h4>
      <h4>lastName : {props.info.lastName}</h4>
      <h4>age : {props.info.age}</h4>
      <h4>homeTown : {props.info.homeTown}</h4>
      {console.log(props)}
    </div>
  );
}

export default Header;