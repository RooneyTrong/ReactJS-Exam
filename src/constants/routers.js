import { Routes, Route, Navigate } from "react-router-dom";

import TodoList from "../Todolist";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="todolist" />} />
      <Route path="todolist" element={<TodoList />} />
    </Routes>
  );
};

export default Routers;
