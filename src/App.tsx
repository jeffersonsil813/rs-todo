import Text from "./components/text";
import TrashIcon from "./assets/icons/Trash-Regular.svg?react";
import SpinnerIcon from "./assets/icons/Spinner.svg?react";
import Icon from "./components/icon";

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
    </div>
  );
};

export default App;
