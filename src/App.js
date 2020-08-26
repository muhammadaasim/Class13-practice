import React, { useRef, useEffect } from "react";
import useWebAnimations from "@wellyshen/use-web-animations";

const App = () => {
  const element = useRef(null);
  const { ref, playState } = useWebAnimations({
    keyframes: {
      transform: ["translateX(500px)"], // Move by 500px
      background: ["red", "blue", "green"], // Go through three colors
    },
    timing: {
      delay: 500, // Start with a 500ms delay
      duration: 1000, // Run for 1000ms
      iterations: 2, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
    // onReady: ({ playState, animate, animation }) => {
    //   // Triggered when the animation is ready to play (Google Chrome: available in v84+)
    // },
    // onUpdate: ({ playState, animate, animation }) => {
    //   // Triggered when the animation enters the running state or changes state
    // },
    // onFinish: ({ playState, animate, animation }) => {
    //   // Triggered when the animation enters the finished state (Google Chrome: available in v84+)
    // },
    // More useful options...
  });

  return (
    <div>
      <div className="target" ref={ref}>
        Hello World!
      </div>
    </div>
  );
};
export default App;