import '../../stylesheets/App.css';
import { React, useContext } from "react";
import { FormContext } from './FieldForm';
import { Choice } from "./Choice";

export function ChoiceList(props) {
    let {formdata, setFormData} = useContext(FormContext);
    let choices = []
    if (formdata != undefined && formdata.choices !== undefined && formdata.choices != []) {
      choices = [...formdata.choices];
    }
    console.log(choices);
  if(choices == undefined)
  {
      return (<>No Choices Entered</>);
  } else {
    return (
        <>
          {choices.map(c => {return <Choice key={c} choice={c} />})}
        </>
      );  
  }
}