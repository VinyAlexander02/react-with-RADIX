import { Switch } from "radix-ui";
import "./style.css";

interface SwitchDemoProps {
  labelText: string;
  id: string;
}

const SwitchDemo = ({ labelText, id }: SwitchDemoProps) => {
  return (
    <form>
      <div className="SwitchWrapper">
        <Switch.Root className="SwitchRoot" id={id}>
          <Switch.Thumb className="SwitchThumb" />
        </Switch.Root>
        <label className="Label" htmlFor=" opcoes">
          {labelText}
        </label>
      </div>
    </form>
  );
};

export default SwitchDemo;
