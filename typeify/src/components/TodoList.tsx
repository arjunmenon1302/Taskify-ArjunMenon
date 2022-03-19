import React from "react";
import { Todo } from "../models/model";
import "./styles.css";

interface Props {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  //   setCompletedTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  //   CompletedTodos: Array<Todo>;
}

const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  //   CompletedTodos,
  //   setCompletedTodos,
}) => {
  return <div></div>;
};

export default TodoList;
