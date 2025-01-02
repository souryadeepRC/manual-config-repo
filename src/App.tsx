import { memo, useState } from "react";
const App: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const addNewComponent = (): void => {
    setCounter((counter) => counter + 1);
  };
  return (
    <main>
      <header>React App Component {counter}</header>
      <button data-testid="add-component-btn" onClick={addNewComponent}>
        Add New Component
      </button>
    </main>
  );
};

export default memo(App);
