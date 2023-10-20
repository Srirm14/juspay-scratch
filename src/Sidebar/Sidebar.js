import React from "react";
import Block from "./block";
import BLOCK_DATA from "./block-data";

export default function Sidebar() {
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-300">
      {BLOCK_DATA.map((categoryData, index) => (
        <Block key={index} title={categoryData.title} data={categoryData.data} className={categoryData.blockCss} />
      ))}
    </div>
  );
}
