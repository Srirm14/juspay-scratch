import React, { useState, useCallback } from "react";
import Sidebar from "./Sidebar/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function App() {
  const [selectedBlockData, setSelectedBlockData] = useState({});
  const [updateCounter, setUpdateCounter] = useState(0);

  const [arrayOfBlocksData, setArrayOfBlocksData] = useState({});
  const [arrayOfBlocksCounter, setArrayOfBlocksCounter] = useState(0);

  const blockDataHandler = useCallback(
    (blockData) => {
      setSelectedBlockData(blockData);
      setUpdateCounter(updateCounter + 1);
    },
    [updateCounter]
  );

  const blocksDataHandler = useCallback(
    (blockData) => {
      setArrayOfBlocksData(arrayOfBlocksData);
      setArrayOfBlocksCounter(arrayOfBlocksCounter + 1);
    },
    [arrayOfBlocksCounter]
  );

  return (
    <DragDropContext>
      <div className="bg-blue-100 pt-12 font-sans">
        <div className="h-screen overflow-hidden flex flex-row  ">
          <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
            <Sidebar />
            <MidArea blockClicked={blockDataHandler} arrayOfBlockClicked = {blocksDataHandler}/>
          </div>
          <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
            <PreviewArea
              arrayOfBlocksData={arrayOfBlocksData}
              arrayOfBlocksCounter={arrayOfBlocksCounter}
              blockClicked={selectedBlockData}
              updateCounter={updateCounter}
            />
          </div>
        </div>
      </div>
    </DragDropContext>
  );
}
