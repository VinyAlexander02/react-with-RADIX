import "./App.css";
import CheckBoxDemo from "./components/checkBox";
import PopoverDemo from "./components/Popover";
import SliderDemo from "./components/slider";
import SwitchDemo from "./components/Switch";
import DialogDemo from "./Dialog";

function App() {
  return (
    <>
      <PopoverDemo />
      <SwitchDemo labelText="Opção 1" id="opção 1" />
      <SwitchDemo labelText="Opção 2" id="opção 2" />
      <SliderDemo />
      <CheckBoxDemo />
      <DialogDemo />
    </>
  );
}

export default App;
