import React, { useState } from "react";
import Button from "./Button";

export default function CreateNew() {
  return (
    <div className="createNewCard">
      <div>
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
          <li>
            <input type="number" /> Modifier
          </li>
        </ul>
        <div className="buttons">
          <Button className="btn" message="Submit" />
          <Button className="btn" message="Save" />
          <Button className="btn" message="Quick Roll" />
        </div>
      </div>
    </div>
  );
}
