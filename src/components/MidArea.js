import React, { useState } from "react";

export default function MidArea() {
  const [droppedItems, setDroppedItems] = useState([]);
  const [draggingItem, setDraggingItem] = useState(null);
  const [draggingPosition, setDraggingPosition] = useState({ top: 0, left: 0 });

  const handleDrop = (e) => {
    e.preventDefault();
    if (draggingItem) {
      // Add the dragging item to the dropped items
      setDroppedItems([...droppedItems, draggingItem]);
      setDraggingItem(null);
    } else {
      // Handle dropping items from the sidebar
      const droppedItemData = JSON.parse(e.dataTransfer.getData("text/plain"));
      setDroppedItems([...droppedItems, droppedItemData]);
    }
  };

  
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragStart = (e, item) => {
    // When an item is dragged within the MidArea, store its data for the drag-and-drop operation
    e.dataTransfer.setData("text/plain", JSON.stringify(item));
    // Remove the item from the MidArea while dragging
    setDroppedItems(droppedItems.filter((dItem) => dItem !== item));
    setDraggingItem(item);
  };

  const handleMouseMove = (e) => {
    if (draggingItem) {
      setDraggingPosition({ top: e.clientY, left: e.clientX });
    }
  };

  return (
    <div
      className="flex-1 h-full overflow-auto"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onMouseMove={handleMouseMove}
    >
      {droppedItems.map((item, index) => (
        <div
          key={index}
          draggable
          onDragStart={(e) => handleDragStart(e, item)}
          className={`${item.className} mt-2 p-2 border border-gray-300 bg-white`}
        >
          {item.icon && (
            <i className={`fa fa-${item.icon} text-green-600 mx-2`} />
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

      {draggingItem && (
        <div
          className={`${draggingItem.className} mt-2 p-2 border border-gray-300 bg-white`}
          style={{
            position: "fixed",
            top: draggingPosition.top + "px",
            left: draggingPosition.left + "px",
          }}
        >
          {draggingItem.icon && (
            <i className={`fa fa-${draggingItem.icon} text-green-600 mx-2`} />
          )}
          {draggingItem.title}
          {draggingItem.input && (
            <input
              type="text"
              defaultValue={draggingItem.input}
              className="block-input"
              style={{ color: "black", width: "24px", marginLeft: "20px" }}
            />
          )}
        </div>
      )}
    </div>
  );
}