import React, { useState } from "react";
import Button from "./Button";

export default function CreateNew() {
  return (
    <div className="createNewCard">
        <ul>
          <li>
            <input type="number" /> d2
          </li>
          <li>
            <input type="number" /> d4
          </li>
          <li>
            <input type="number" /> d6
          </li>
          <li>
            <input type="number" /> d8
          </li>
          <li>
            <input type="number" /> d10
          </li>
          <li>
            <input type="number" /> d12
          </li>
          <li>
            <input type="number" /> d20
          </li>
          <li>
            <input type="number" /> d100
          </li>
          <div className="buttons">
          <Button className="btn1" message="Submit" />
          <Button className="btn1" message="Save" />
          <Button className="btn1" message="Quick Roll" />
        </div>
        </ul>
    </div>
  );
}
