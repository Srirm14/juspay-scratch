// block-data.js
const BLOCK_DATA = [
  {
    title: "Motion",
    blockCss:
      "flex flex-row flex-wrap rounded-md bg-blue-500 text-white px-2 py-1 my-2 text-sm w-48 cursor-pointer",
    data: [
      { title: "Move steps", input: 10 },
      { title: "Turn degrees", input: 15, icon: "undo" },
      { title: "Turn degrees", input: 15, icon: "redo" },
    ],
  },
  {
    title: "Looks",
    blockCss:
      "flex flex-row flex-wrap rounded-md bg-indigo-700 text-white px-2 py-1 my-2 text-sm w-48 cursor-pointer",
    data: [
      { title: "Say hello for seconds", input: 5 },
      { title: "Say hmm... for 2 seconds", input: 2 },
      { title: "Think hmm..." },
    ],
  },
  {
    title: "Control",
    blockCss:
      "flex flex-row flex-wrap rounded-md bg-red-600 text-white px-2 py-1 my-2 text-sm w-48 cursor-pointer",
    data: [
      { title: "Wait 1 second", input: 1 },
      { title: "Repeat", input: 10 },
    ],
  },
  {
    title: "Events",
    blockCss:
      "flex flex-row flex-wrap bg-yellow-500 rounded-md text-white px-2 py-1 my-2 text-sm w-48 cursor-pointer",
    data: [
      { title: "When clicked", icon: "flag" },
      { title: "When space key pressed" },
      { title: "When this sprite clicked" },
      { title: "When backdrop switches to backdrop1" },
      { title: "When loudness >", input: 10 },
      { title: "When I receive message", input: 1 },
      { title: "Broadcast message", input: 1 },
    ],
  },
];

export default BLOCK_DATA;
