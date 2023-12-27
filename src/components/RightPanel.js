import React from "react";

const Content2 = (props) => {
  const { tasks } = props;
  return (
    <div>
      {tasks.priority} {tasks.title}
    </div>
  );
};

export default Content2;
