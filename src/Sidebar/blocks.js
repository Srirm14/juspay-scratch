// blocks.js
import React from "react";
import Icon from "../components/Icon";

export function MotionBlock({ title, icon, onClick }) {
  return (
    <div
      draggable
      className="flex flex-row flex-wrap  rounded-md bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      onClick={onClick}
    >
      {title}
      {icon && <Icon name={icon} size={15} className="text-white mx-2" />}
    </div>
  );
}
export function LooksBlock({ title, icon, onClick }) {
  return (
    <div
      className="flex flex-row flex-wrap rounded-md bg-indigo-700 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      onClick={onClick}
    >
      {title}
      {icon && <Icon name={icon} size={15} className="text-green-600 mx-2" />}
    </div>
  );
}
export function ControlBlock({ title, icon, onClick }) {
  return (
    <div
      className="flex flex-row flex-wrap rounded-md bg-red-600 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      onClick={onClick}
    >
      {title}
      {icon && <Icon name={icon} size={15} className="text-green-600 mx-2" />}
    </div>
  );
}

export function EventBlock({ title, icon, onClick }) {
  return (
    <div
      className="flex flex-row flex-wrap bg-yellow-500  rounded-mdtext-white px-2 py-1 my-2 text-sm cursor-pointer"
      onClick={onClick}
    >
      {title}
      {icon && <Icon name={icon} size={15} className="text-green-600 mx-2" />}
    </div>
  );
}
