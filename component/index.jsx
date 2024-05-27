import {
  handleGetTodoData,
  handleGetTodoDataById,
  handleToggleSidebar,
} from "@/store/services/app";
import { useSelector } from "@/store/store";
import React from "react";

const DemoRedux = () => {
  const { data } = useSelector((state) => ({
    data: state.app,
  }));

  return (
    <div>
      <button
        onClick={() => {
          handleToggleSidebar();
        }}
      >
        Toggle
      </button>
      <button
        onClick={() => {
          handleGetTodoData();
        }}
      >
        Get All data
      </button>
      <button
        onClick={() => {
          handleGetTodoDataById(1);
        }}
      >
        get by id
      </button>
    </div>
  );
};

export default DemoRedux;
