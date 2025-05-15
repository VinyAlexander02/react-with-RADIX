import { Popover } from "radix-ui";
import "./style.css";

const PopoverDemo = () => {
  return (
    <Popover.Root>
      <Popover.Trigger className="PopoverTrigger">
        Mais informações
      </Popover.Trigger>
      {/* Como se fosse um botão que é renderizado na tela quando é clicado */}
      <Popover.Portal>
        <Popover.Content className="PopoverContent">
          Mais algumas informações
          <Popover.Arrow className="PopoverArrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default PopoverDemo;
