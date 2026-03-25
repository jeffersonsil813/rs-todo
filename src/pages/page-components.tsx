import Badge from "../components/bagde";
import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import Container from "../components/container";
import Icon from "../components/icon";
import InputCheckbox from "../components/input-checkbox";
import InputText from "../components/input-text";
import Skeleton from "../components/skeleton";
import Text from "../components/text";
import PLusIcon from "../assets/icons/Plus-Regular.svg?react";
import SpinnerIcon from "../assets/icons/Spinner.svg?react";
import TrashIcon from "../assets/icons/Trash-Regular.svg?react";

const PageComponents = () => {
  return (
    <Container>
      <div className="grid gap-10">
        <div className="flex flex-col gap-1">
          <Text variant="body-sm-bold" className="text-pink-base">
            Hello World!
          </Text>
        </div>

        <div className="flex gap-1">
          <Icon svg={TrashIcon} className="fill-pink-base" />
          <Icon svg={SpinnerIcon} animate className="fill-pink-base" />
        </div>

        <div className="flex gap-1">
          <Badge variant={"secondary"}>5</Badge>
          <Badge variant={"primary"}>2 de 5</Badge>
          <Badge loading>8</Badge>
        </div>

        <div>
          <Button icon={PLusIcon}>Nova tarefa</Button>
        </div>

        <div className="flex gap-1">
          <ButtonIcon icon={TrashIcon} />
          <ButtonIcon icon={PLusIcon} variant="secondary" />
          <ButtonIcon icon={SpinnerIcon} variant="tertiary" />
          <ButtonIcon icon={TrashIcon} loading />
        </div>

        <div className="flex gap-1">
          <InputText />
        </div>

        <div className="flex gap-1">
          <InputCheckbox />
          <InputCheckbox loading />
        </div>

        <div>
          <Card size="md">Card teste</Card>
        </div>

        <div className="space-y-2">
          <Skeleton className="h-6" />
          <Skeleton className="h-6" />
          <Skeleton className="h-6 w-96" />
        </div>
      </div>
    </Container>
  );
};

export default PageComponents;
