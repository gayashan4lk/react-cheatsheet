import React from 'react';

function Header(props) {
  return (
    <div className="header">
      <p>This is Header</p>
      <p>props : </p>
      <p>firstName : {props.info.firstName}</p>
      <p>lastName : {props.info.lastName}</p>
      <p>age : {props.info.age}</p>
      <p>homeTown : {props.info.homeTown}</p>
      {console.log(props)}
    </div>
  );
}

export default Header;