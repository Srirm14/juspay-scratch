import React, { useState } from "react";

export default function MidArea(props) {
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

  const handleClick = () => {
    props.blockClicked(droppedItems);
    //  props.arrayOfBlockClicked(event);
  };

  const handleArrayClick = (event) => {
    console.log("eventData", event);
  };

  const handleInputChange = (index, newValue) => {
    // Create a copy of the dropped items array to update the specific input value
    const updatedDroppedItems = [...droppedItems];
    updatedDroppedItems[index].input = newValue;
    // Update the state with the new input value
    setDroppedItems(updatedDroppedItems);
  };

  return (
    <>
      <div
        className="flex-1 h-full overflow-auto mt-50"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onMouseMove={handleMouseMove}
      >
        {droppedItems.map((item, index) => (
          <div
            onClick={(event) => {
              handleClick();
            }}
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, item)}
            className={`${item.className}`}
          >
            {item.icon && <i className={`fa fa-${item.icon} `} />}
            {item.title}
            {item.input && (
              <input
                type="text"
                defaultValue={item.input}
                className="block-input"
                style={{ color: "black", width: "24px", marginLeft: "20px" }}
                onChange={(e) => {
                  handleInputChange(index, e.target.value);
                }}
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
    </>
  );
}
