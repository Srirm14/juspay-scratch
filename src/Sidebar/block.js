import React from "react";
import Icon from "../components/Icon";
import { Draggable } from "react-beautiful-dnd";

export default function Block(props) {
  const handleDragStart = (e, item) => {
    e.dataTransfer.setData(
      "text/plain",
      JSON.stringify({ ...item, className: props.className })
    );
  };

  return (

    <div onClick={props.onClick}>
      <h2>{props.title}</h2>
      {props.data.map((item, index) => (
    
          <div className={` ${props.className}`} key={index} draggable onDragStart={(e) => handleDragStart(e, item)}>
            {item.icon && (
              <Icon name={item.icon} size={15} className="#e2e8f0 mx-2" />
            )}

            {item.title}
            {item.input && (
              <input
                type="text"
                defaultValue={item.input}
                className="block-input"
                style={{ color: "black", width: "24px", marginLeft: "20px" }}
              />
            )}
          </div>
  
      ))}
    </div>

  );
}
