import { useContext } from "react";
import { DemoContext } from "@/Context/demoContext";

const ContextDemo = () => {
  const { count, setCount } = useContext(DemoContext);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Context API</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div>Count: {count}</div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default ContextDemo;
