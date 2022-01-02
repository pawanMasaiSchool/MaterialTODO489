import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import Paper from "@mui/material/Paper";

function TodoItem({ title, status }) {
  return (
    <Box style={{ margin: "auto" }}>
      <Paper
        style={{
          margin: "auto",
          border: "2px solid black",
          borderRadius: "10px",
          width: "350px",
          padding: "5px",
          marginTop: "5px"
        }}
      >
        <b>Title:</b> {title} <b>Status:</b> {String(status)}
        <Button
          size="small"
          variant="outlined"
          endIcon={<DeleteIcon />}
        ></Button>
      </Paper>
    </Box>
  );
}

export default TodoItem;
