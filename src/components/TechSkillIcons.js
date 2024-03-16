import React from "react";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const SkillTooltip = styled(({ className, ...props }) => (
  <Tooltip arrow {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#2cbaf5",
    color: "#ededed",
    boxShadow: theme.shadows[2],
    fontSize: 20,
  },
}));

const TechSkillIcons = () => {
  return (
    <div className="skills-icons">
      <div style={{ background: "white", color: "#007acc" }}>
        <SkillTooltip title="Typescript">
          <i className="bx bxl-typescript"></i>
        </SkillTooltip>
      </div>

      <div style={{ background: "transparent", color: "#F0DB4F" }}>
        <SkillTooltip title="Javascript">
          <i className="bx bxl-javascript"></i>
        </SkillTooltip>
      </div>

      <div style={{ background: "white", color: "#2965f1" }}>
        <SkillTooltip title="CSS3">
          <i className="bx bxl-css3"></i>
        </SkillTooltip>
      </div>

      <div style={{ background: "white", color: "#E34C26" }}>
        <SkillTooltip title="HTML5">
          <i className="bx bxl-html5"></i>
        </SkillTooltip>
      </div>

      <div style={{ background: "white", color: "#5382a1" }}>
        <SkillTooltip title="Java">
          <i className="bx bxl-java"></i>
        </SkillTooltip>
      </div>

      <div style={{ background: "white", color: "#ffde57" }}>
        <SkillTooltip title="Python">
          <i className="bx bxl-python"></i>
        </SkillTooltip>
      </div>

      <div style={{ background: "white", color: "#61dbfb" }}>
        <SkillTooltip title="React">
          <i className="bx bxl-react"></i>
        </SkillTooltip>
      </div>

      <div style={{ background: "white", color: "#004482" }}>
        <SkillTooltip title="C++">
          <i className="bx bxl-c-plus-plus"></i>
        </SkillTooltip>
      </div>

      <div style={{ background: "white", color: "#3c873a" }}>
        <SkillTooltip title="NodeJS">
          <i className="bx bxl-nodejs"></i>
        </SkillTooltip>
      </div>

      <div style={{ background: "white", color: "#0769ad" }}>
        <SkillTooltip title="JQuery">
          <i className="bx bxl-jquery"></i>
        </SkillTooltip>
      </div>

      <div style={{ background: "white", color: "#0078d7" }}>
        <SkillTooltip title="Visual Studio Code">
          <i className="bx bxl-visual-studio"></i>
        </SkillTooltip>
      </div>

      <div style={{ background: "white", color: "#4DB33D" }}>
        <SkillTooltip title="MongoDB">
          <i className="bx bxl-mongodb"></i>
        </SkillTooltip>
      </div>

      <div style={{ background: "white", color: "#F1502F" }}>
        <SkillTooltip title="Git">
          <i className="bx bxl-git"></i>
        </SkillTooltip>
      </div>

      <div>
        <SkillTooltip title="JSON">
          <i className="bx bxs-file-json"></i>
        </SkillTooltip>
      </div>
    </div>
  );
};

export default TechSkillIcons;
