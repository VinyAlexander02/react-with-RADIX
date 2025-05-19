import "./App.css";
import PopoverDemo from "./components/Popover";
import SwitchDemo from "./components/Switch";

function App() {
  return (
    <>
      <PopoverDemo />
      <SwitchDemo labelText="Opção 1" id="opção 1" />
      <SwitchDemo labelText="Opção 2" id="opção 2" />
    </>
  );
}

export default App;
