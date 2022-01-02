import { createContext, useState } from "react";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [data, setData] = useState([]);

  const handleAddingTask = (task) => {
    const payload = {
      title: task,
      status: false
    };
    setData([...data, payload]);
  };
  // console.log(data);

  const values = { data, handleAddingTask };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
