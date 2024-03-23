import React from "react";
import Content1 from "./Content1";
import Content2 from "./Content2";
import { useState } from "react";

const MainPage = () => {
  const [displayTaskDetails, setDisplayTaskDetails] = useState("");
  const handlePassedObjectValues = (displayTask) => {
    console.log(displayTask);
    setDisplayTaskDetails(displayTask);
  };
  return (
    <React.Fragment>
      <section>
        <div className="layout">
          <div className="content1">
            <Content1 passingObject={handlePassedObjectValues} />
          </div>
          <div className="content2 centered">
            <Content2 displayTask={displayTaskDetails} />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default MainPage;
