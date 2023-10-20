import React, { useRef, useState, useEffect } from "react";
import CatSprite from "./CatSprite";

export default function PreviewArea(props) {
  const catSpriteRef = useRef(0);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [angle, setAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [looksMessage, setLooksMessage] = useState(" ");
  const [isLooksVisible, setIsLooksVisible] = useState(false);

  const initialLeft = 1157; // Initial left position
  const initialTop = 50; // Initial top position

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const catSprite = catSpriteRef.current;
    const boundingBox = catSprite.getBoundingClientRect();
    setOffsetX(e.clientX - boundingBox.left);
    setOffsetY(e.clientY - boundingBox.top);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const catSprite = catSpriteRef.current;
      catSprite.style.left = e.clientX - offsetX + "px";
      catSprite.style.top = e.clientY - offsetY + "px";
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetCatSpritePosition = () => {
    // resetting the catSprite position
    const catSprite = catSpriteRef.current;
    catSprite.style.left = initialLeft + "px";
    catSprite.style.top = initialTop + "px";
    catSprite.style.transform = `rotate(${0}deg)`;
  };

  const interpretCommand = (action, value) => {
    switch (action) {
      case "MOTION_MOVE":
        moveSprite(value);
        break;
      case "MOTION_TURN_LEFT":
        changeAngleLeft(value);
        break;
      case "MOTION_TURN_RIGHT":
        changeAngleRight(value);
        break;
      case "LOOKS_HELLO":
        sayHello(value);
        break;
      case "LOOKS_HMM":
        sayHmm(value);
        break;
      case "LOOKS_THINK_HMM":
        thinkHmm(value);
        break;

      case "CONTROL_WAIT":
        controlWait(value);
        break;
      case "CONTROL_REPEAT":
        controlRepeat(value);
      default:
        // Handle other actions if needed
        break;
    }
  };

  const moveSprite = (steps) => {
    const catSprite = catSpriteRef.current;
    const left = parseFloat(catSprite.style.left) || 1157;
    const top = parseFloat(catSprite.style.top) || 50;
    const radians = (angle * Math.PI) / 180;
    const newX = left + steps * Math.cos(radians);
    const newY = top + steps * Math.sin(radians);
    catSprite.style.left = newX + "px";
    catSprite.style.top = newY + "px";
  };

  const changeAngleLeft = (degrees) => {
    setAngle((angle) => angle + -degrees);
    const catSprite = catSpriteRef.current;
    catSprite.style.transform = `rotate(${angle + -degrees}deg)`;
  };

  const changeAngleRight = (degrees) => {
    setAngle((angle) => angle + degrees);
    const catSprite = catSpriteRef.current;
    catSprite.style.transform = `rotate(${angle + degrees}deg)`;
  };

  const sayHello = (seconds) => {
    const helloMessage = "Hello!";
    queueMessage(helloMessage, seconds);
  };

  const sayHmm = (seconds) => {
    const hmmMessage = "Hmm...";
    queueMessage(hmmMessage, seconds);
  };

  const thinkHmm = (seconds) => {
    const thinkMessage = "juspay...";
    queueMessage(thinkMessage, seconds);
  };

  const controlWait = (seconds) => {
    setTimeout(() => {
      try {
        // This code block will run after the specified seconds
      } catch (error) {}
    }, seconds * 1000);
  };

  const controlRepeat = (times) => {
    if (Array.isArray(props.blockClicked)) {
      // Filter out "CONTROL_REPEAT" commands
      const filteredCommands = props.blockClicked.filter(
        (blockItem) => blockItem.code !== "CONTROL_REPEAT"
      );

      const executeCommandsSequentially = (commands, index) => {
        if (index < commands.length) {
          const blockItem = commands[index];
          interpretCommand(blockItem.code, blockItem.input);

          setTimeout(() => {
            executeCommandsSequentially(commands, index + 1);
          }, 1000); // Adjust the delay as needed (e.g., 1000ms for 1 second)
        }
      };

      for (let i = 0; i < times; i++) {
        executeCommandsSequentially(filteredCommands, 0);
      }
    }
  };

  const queueMessage = (message, seconds) => {
    setIsLooksVisible(true);
    setLooksMessage(message); // Show the message

    setTimeout(() => {
      setIsLooksVisible(false);
      setLooksMessage(""); // Empty the message after the specified seconds
    }, seconds * 1000); // Convert seconds to milliseconds
  };

  const toggleRunning = () => {
    setIsRunning(!isRunning);
    handleCommand();
  };
  const handleCommand = () => {
    if (Array.isArray(props.blockClicked)) {
      executeCommandsSequentially(props.blockClicked, 0);
    }
  };

  const executeCommandsSequentially = (commands, index) => {
    if (index < commands.length) {
      const blockItem = commands[index];
      interpretCommand(blockItem.code, blockItem.input);

      setTimeout(() => {
        executeCommandsSequentially(commands, index + 1);
      }, 1000); // Adjust the delay as needed (e.g., 1000ms for 1 second)
    }
  };

  useEffect(() => {
    console.log(
      "useEffect triggered with updateCounter: ",
      props.updateCounter
    );
    handleCommand();
  }, [props.updateCounter]);

  const resetStyle = {
    marginLeft: "28rem",
  };
  const addSpiritStyle = {
    marginTop: "700px",
    marginLeft:"400px",
    padding:"30px",
  };

  return (
    <div onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      <button
        onClick={toggleRunning}
        className={`${
          isRunning ? "bg-green-500" : "bg-green-500"
        } absolute top-2 right-2 text-white px-2 py-1 rounded`}
      >
        {isRunning ? "Start" : "Start"}
      </button>

      <button
        className="bg-pink-300 mt-2 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded flex items-center space-x-2"
        style={resetStyle}
        type="button"
        onClick={resetCatSpritePosition}
      >
        Reset
      </button>
      <div
        ref={catSpriteRef}
        className="absolute"
        onMouseDown={handleMouseDown}
      >
        <CatSprite />
        {isLooksVisible && (
          <input
            id="looks"
            type="text"
            className="absolute bottom-20 left-20 w-24 border border-gray-300 rounded-md px-2 py-1"
            value={looksMessage}
            onChange={(e) => setLooksMessage(e.target.value)}
          />
        )}
      </div>
      <div className="add-spirit">
        <button style={addSpiritStyle} className="bg-green-500  mt-200 rounded-full w-8 h-8 flex items-center justify-center text-white font-semibold text-lg font-extrabold">
          +
        </button>
      </div>
    </div>
  );
}
