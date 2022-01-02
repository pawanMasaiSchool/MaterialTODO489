import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";

export default function TodoInput() {
  const [inp, setInp] = useState("");

  const { handleAddingTask } = useContext(AppContext);

  const handleChange = (e) => {
    setInp(e.target.value);
  };

  const handleSubmit = () => {
    handleAddingTask(inp);
  };

  return (
    <Box>
      <TextField value={inp} label="Add a task" onChange={handleChange} />
      <br />
      <br />
      <Button onClick={handleSubmit} variant="contained">
        ADD
      </Button>
    </Box>
  );
}
