import React from "react";
function NumberList() {
    const numbers = [2, 3, 4, 5, 2];
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>
        {number}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }


  export default NumberList;


