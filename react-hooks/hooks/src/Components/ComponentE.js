import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { UserContext, CourseContext } from "../App";

// with context hook

function ComponentE() {
  let user = useContext(UserContext);
  let course = useContext(CourseContext);
  return (
    <div>
      {user} - {course}
      {/* <ComponentF /> */}
    </div>
  );
}

export default ComponentE;
