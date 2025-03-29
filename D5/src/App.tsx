import { useState } from "react";
import { AnimatedListDemo } from "./components/AnimatedListDemo"; // Tambahkan impor Header
import { TerminalDemo } from "./components/TerminalDemo";
import ThemeToggle from "./components/ThemeToggle";
import { Marquee3D } from "./components/Marquee";


function App() {

  return (
    <>
      <ThemeToggle />
      <AnimatedListDemo />
      <TerminalDemo />
      <Marquee3D></Marquee3D>
    </>
  );
}

export default App;
