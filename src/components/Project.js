import React from "react";
import css from "./Project.module.css";
import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
import { falink, faFileLines } from "@fontawesome/free-solid-svg-icons";

function Project(props) {
  return (
    <div className="container row">
      <div className="col s12">
        {props.Projects.map((Project) => {
          return (
            <div key={Project.id} className="col s12 m6 14">
              <div className={`card medium ${css.cardColor}`}>
                <h4 className={`card-title white-text ${css.padding}`}>
                  {Project.title}
                </h4>
                <div className="card-image">
                  <img
                    alt={Project.title}
                    className={` ${css.ProjectImg}`}
                    src={`${process.env.PUBLIC_URL}${Project.image}`}
                  ></img>
                </div>
                <div className={`${css.padding}`}>
                  <a
                    className={`white-text green btn ${css.hovering}`}
                    href={Project.github}
                    target=" blank"
                    rel="noreferrer"
                  >
                    GitHub Repo
                    <FontAwesomeIcon icon={faFileLines} />
                  </a>
                </div>
                <div>
                  <a
                    className={`white-text blue btn ${css.hovering}`}
                    href={Project.deployment}
                    target=" blank"
                    rel="noreferrer"
                  >
                    Deployment Link <FontAwesomeIcon icon={falink} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
