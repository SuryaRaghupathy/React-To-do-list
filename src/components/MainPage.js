import React from "react";
import Content1 from "./Content1";
import Content2 from "./Content2";

const MainPage = () => {
  return (
    <React.Fragment>
      <section>
        <div className="layout">
          <div className="content1">
            <Content1 />
          </div>
          <div className="content2 centered">
            <Content2 />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default MainPage;
