const BLOCK_DATA = [
  {
    title: "Motion",
    blockCss:
      "flex flex-row flex-wrap rounded-md bg-blue-500 text-white px-2 py-1 my-2 text-sm w-48 cursor-pointer",
    data: [
      { title: "Move steps", input: 10, code: "MOTION_MOVE" },
      { title: "Turn degrees", input: 15, icon: "undo", code: "MOTION_TURN_LEFT" },
      { title: "Turn degrees", input: 15, icon: "redo", code: "MOTION_TURN_RIGHT" },
    ],
  },
  {
    title: "Looks",
    blockCss:
      "flex flex-row flex-wrap rounded-md bg-indigo-700 text-white px-2 py-1 my-2 text-sm w-48 cursor-pointer",
    data: [
      { title: "Say hello for seconds", input: 2, code: "LOOKS_HELLO" },
      { title: "Say hmm... for seconds", input: 2, code: "LOOKS_HMM" },
      { title: "think something", code: "LOOKS_THINK_HMM" ,input:2 },
    ],
  },
  {
    title: "Control",
    blockCss:
      "flex flex-row flex-wrap rounded-md bg-red-600 text-white px-2 py-1 my-2 text-sm w-48 cursor-pointer",
    data: [
      { title: "Wait 1 second", input: 1, code: "CONTROL_WAIT" },
      { title: "Repeat", input: 2, code: "CONTROL_REPEAT" },
    ],
  },
  {
    title: "Events",
    blockCss:
      "flex flex-row flex-wrap bg-yellow-500 rounded-md text-white px-2 py-1 my-2 text-sm w-48 cursor-pointer",
    data: [
      { title: "When clicked", icon: "flag", code: "EVENT_ON_CLICK" },
      { title: "When space key pressed", code: "EVENT_ON_SPACE" },
    ],
  },
];

export default BLOCK_DATA;
