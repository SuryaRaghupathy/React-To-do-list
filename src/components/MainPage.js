import React, { useState } from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

const MainPage = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (data) => {
    setTasks(data);
  };

  return (
    <section>
      <div className="layout">
        <div className="content1">
          <LeftPanel addTask={addTask} />
        </div>
        <div className="content2 centered">
          <RightPanel tasks={tasks} />
        </div>
      </div>
    </section>
  );
};

export default MainPage;
