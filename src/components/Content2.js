import React, { useEffect, useState } from "react";
import { DisplayBox } from "./BoxDisplay";

const Content2 = ({ displayTask }) => {
  const [taskDetailsArray, setTaskDetailsArray] = useState([]);

  useEffect(() => {
    updateTaskDetailsArray();
  }, [displayTask]);

  const updateTaskDetailsArray = () => {
    const updatedDetailsArray = [
      ...taskDetailsArray,
      { value1: displayTask.title },
      { value2: displayTask.Description },
      {
        value3: displayTask.labels && displayTask.labels.join(", "),
      },
    ];

    setTaskDetailsArray(updatedDetailsArray);
  };

  return (
    <div>
      <DisplayBox />
      {taskDetailsArray.map((detail, index) => (
        <div key={index}>
          <h2>{detail.value1}</h2>
          <p>{detail.value2}</p>
          <p>{detail.value3}</p>
        </div>
      ))}
    </div>
  );
};

export default Content2;
