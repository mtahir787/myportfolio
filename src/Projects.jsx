import React, { useDebugValue } from "react";
import Card from "./Card";
import CardsData from "./CardsData";

const Projects = () => {
  return (
    <>
      <h1 className="projheading">My Projects List</h1>
      <div className="container projectPage">
        {CardsData.map((value) => {
          return (
            <Card
              imgsrc={value.imgsrc}
              title={value.title}
              desc={value.description}
              gitlink={value.gitlink}
              livedemolink={value.livedemolink}
            />
          );
        })}
      </div>
    </>
  );
};

export default Projects;
