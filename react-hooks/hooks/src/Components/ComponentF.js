import React from "react";
import { UserContext, CourseContext } from "../App";

// without usecontext hook

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <CourseContext.Consumer>
              {(course) => {
                return (
                  <div>
                    Username is {user} and course name is {course}
                  </div>
                );
              }}
            </CourseContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;
