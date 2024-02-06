import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CreateNew() {
  return (
    <div className="createNewCard">
      <ul>
        <li>d2<input type="text" /></li>
        <li>d4<input type="text" /></li>
        <li>d6<input type="text" /></li>
        <li>d8<input type="text" /></li>
        <li>d10<input type="text" /></li>
        <li>d12<input type="text" /></li>
        <li>d20<input type="text" /></li>
        <li>d100<input type="text" /></li>
      </ul>
    </div>
  );
}
