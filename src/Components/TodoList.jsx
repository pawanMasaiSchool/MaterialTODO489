import Box from "@mui/material/Box";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import TodoItem from "./TodoItem";

function TodoList() {
  const { data } = useContext(AppContext);

  return (
    <Box>
      {data.map((item) => (
        <TodoItem key={item.id} title={item.title} status={item.status} />
      ))}
    </Box>
  );
}

export default TodoList;
