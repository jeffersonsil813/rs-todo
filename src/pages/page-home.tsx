import Container from "../components/container";
import Taskslist from "../core-components/tasks-list";
import TasksSummary from "../core-components/tasks-summary";

const PageHome = () => {
  return (
    <Container as="article" className="space-y-3">
      <header className="flex items-center justify-between">
        <TasksSummary />
      </header>

      <Taskslist />
    </Container>
  );
};

export default PageHome;
