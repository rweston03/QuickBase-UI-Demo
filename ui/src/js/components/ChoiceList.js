import '../../stylesheets/App.css';
import React from "react";
import { Choice } from "./Choice";

export function ChoiceList(props) {
    console.log(props.choices)
  if(props.choices == undefined)
  {
      return (<>Hell</>);
  } else {
    return (
        <>
          fuck
        </>
      );  
  }
}