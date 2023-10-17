// Sidebar.js
import React from "react";
import { EventBlock, LooksBlock, MotionBlock, ControlBlock } from "./blocks";

export default function Sidebar() {
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold">{"Motion"}</div>
      <MotionBlock title="Move 10 steps" />
      <MotionBlock title="Turn 15 degrees" icon="undo" />
      <MotionBlock title="Turn 15 degrees" icon="redo" />

      <div className="font-bold">{"Looks"}</div>
      <LooksBlock title="Say hello for 5 seconds" />
      <LooksBlock title="Say hmm... for 2 seconds" />
      <LooksBlock title="Think hmm..." />

      <div className="font-bold">{"Control"}</div>
      <ControlBlock title="Wait 1 seconds" />
      <ControlBlock title="Repeat 10 " />

      <div className="font-bold">{"Events"}</div>
      <EventBlock title="When clicked" icon="flag" />
      <EventBlock title="When space key pressed" />
      <EventBlock title="When this sprite clicked" />
      <EventBlock title="When backdrop switches to backdrop1" />
      <EventBlock title="When loudness > 10" />
      <EventBlock title="When I receive message 1" />
      <EventBlock title="Broadcast message 1" />
      <EventBlock title="Broadcast message 1 and wait" />
    </div>
  );
}
