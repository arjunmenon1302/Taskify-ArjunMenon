import React, { SetStateAction } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<SetStateAction<string>>;
}
const InputField = ({ todo, setTodo }: Props) => {
  return (
    <form className="input">
      <input
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="enter a task"
        className="input__box"
      />
      <button className="input_submit" type="submit">
        GO
      </button>
    </form>
  );
};

export default InputField;
