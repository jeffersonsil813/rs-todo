import Text from "./components/text";
import TrashIcon from "./assets/icons/Trash-Regular.svg?react";

const App = () => {
  return (
    <div className="grid gap-3">
      <div className="flex flex-col gap-1">
        <Text variant="body-sm-bold" className="text-pink-base">
          Hello World!
        </Text>
      </div>

      <div className="flex gap-1">
        <TrashIcon className="fill-pink-base" />
      </div>
    </div>
  );
};

export default App;
