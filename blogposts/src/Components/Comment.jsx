import React from "react";
import Singlecomment from "./Singlecomment";
import profile1 from "../img/man1.png";
import profile2 from "../img/women.png";
import profile3 from "../img/developer.png";
import Usercard from "./Usercard";

export default function Comment() {
  return (
    <div className="ui comments">
      <Usercard>
        <Singlecomment
          Name="Sakib"
          Date="Today 12:20 PM"
          Comment="You are amazing."
          Picture={profile1}
        />
      </Usercard>
      <Usercard>
        <Singlecomment
          Name="Emhy"
          Date="2-05-2023"
          Comment="Hahahaha."
          Picture={profile2}
        />
      </Usercard>

      <Usercard>
        {" "}
        <Singlecomment
          Name="Developer"
          Date="15-04-2023"
          Comment="Thank you."
          Picture={profile3}
        />
      </Usercard>
    </div>
  );
}
