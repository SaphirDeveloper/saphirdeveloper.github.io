import React from "react";
import "./textfield.css";

export const Textfield = ({type, label, id}) => {
    
    return (
      <div className="textfield">
        <label> {label} </label>             
          <input type={type} id={id}/>
                                            
      </div>
    );
}
