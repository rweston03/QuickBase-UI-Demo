import '../../stylesheets/App.css';
import React from "react";
import { Choice } from "./Choice";

export function ChoiceList(props) {
  return (
    <>
      {props.choices.map(c => (
          <Choice key={c} choice={c} />
      ))}
    </>
  );
}