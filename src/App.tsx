import { useState } from "react";
import Modal from "./components/Modal";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <NavBar />
      <div className="flex justify-evenly items-center gap-7 p-3 my-5 rounded-full bg-blue-200/40 max-w-2xl m-auto">
        <div className="text-blue-500">Refer</div>
        <div>Benefits</div>
        <div>FAQs</div>
        <div>Support</div>
      </div>
      <HeroSection setOpen={setOpen} />
      {open && <Modal setOpen={setOpen} />}
    </div>
  );
}

export default App;
