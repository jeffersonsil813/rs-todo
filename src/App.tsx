import PLusIcon from "./assets/icons/Plus-Regular.svg?react";
import SpinnerIcon from "./assets/icons/Spinner.svg?react";
import TrashIcon from "./assets/icons/Trash-Regular.svg?react";
import Badge from "./components/bagde";
import Button from "./components/button";
import ButtonIcon from "./components/button-icon";
import Icon from "./components/icon";
import Text from "./components/text";

const App = () => {
  return (
    <div className="grid gap-3">
      <div className="flex flex-col gap-1">
        <Text variant="body-sm-bold" className="text-pink-base">
          Hello World!
        </Text>
      </div>

      <div className="flex gap-1">
        <Icon svg={TrashIcon} className="fill-pink-base" />
        <Icon svg={SpinnerIcon} animate className="fill-pink-base" />
      </div>

      <div>
        <Badge variant={"secondary"}>5</Badge>
        <Badge variant={"primary"}>2 de 5</Badge>
      </div>

      <div>
        <Button icon={PLusIcon}>Nova tarefa</Button>
      </div>
      
      <div className="flex gap-1">
        <ButtonIcon icon={TrashIcon} />
        <ButtonIcon icon={PLusIcon} variant="secondary" />
        <ButtonIcon icon={SpinnerIcon} variant="tertiary" />
      </div>
    </div>
  );
};

export default App;
