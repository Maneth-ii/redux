import React from "react";
import "./style.css";
import {useSelector} from 'react-redux'

export default function App() {
  const number = useSelector()

  return (
    <div>
      <h1>{number}</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
