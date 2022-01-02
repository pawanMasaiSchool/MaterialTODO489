import Box from "@mui/material/Box";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function Todo() {
  return (
    <Box>
      <TodoInput />
      <TodoList />
    </Box>
  );
}

export default Todo;
