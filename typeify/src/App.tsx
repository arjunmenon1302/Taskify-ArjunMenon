import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import "./components/styles.css";
import { Todo } from "./models/model";

interface Props {
  todo: string;
  setTodo: Dispatch<SetStateAction<string>>;
}

const App: React.FC = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<Array<Todo>>([]);

  console.log(todo);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
