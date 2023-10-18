import React, { useState } from "react";
import CatSprite from "./CatSprite";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"; 

export default function PreviewArea() {
  const [items, setItems] = useState([{ id: "item-1", content: "cat", position: { x: 1258, y: 153 } }]);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    // Check if the destination droppable is "preview-area"
    if (result.destination.droppableId === "preview-area") {
      const updatedItems = [...items];
      const [movedItem] = updatedItems.splice(result.source.index, 1);
      updatedItems.splice(result.destination.index, 0, movedItem);
      setItems(updatedItems);
    } else {
      // Reset the position to the default if dropped outside "preview-area"
      const updatedItems = items.map((item) => {
        if (item.id === result.draggableId) {
          item.position = { x: 1258, y: 153 };
        }
        return item;
      });
      setItems(updatedItems);
    }
  };

  return (
    <div className="flex-none h-full overflow-y-auto p-2" id="preview-area">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="CHARACTERS" type="PREVIEW_AREA">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {items.map((item, index) => (
                <Draggable draggableId={item.id} key={item.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <CatSprite charac_id={item.id} position={item.position} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
