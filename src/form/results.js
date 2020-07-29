import React from "react";
import { connect } from "react-redux";
import style from "./result.module.css";
import add from "../png/add.png";
import deleted from "../png/deleted.png";

let Result = (props) => {
  return (
    <div>
      {props.result.map((e) => {
        return (
          <div className={style.result}>
            <div>
              <img src={e.image} />
            </div>
            <div className={style.title}>
              <b className={style.b}>{e.title}</b>
              <p className={style.p}>{e.description}</p>
            </div>
            <div>
              {props.adden.some((id) => id === e.id) ? (
                <img src={deleted} />
              ) : (
                <a
                  onClick={() => {
                    props.chosenThunk(e);
                  }}
                >
                  <img src={add} />
                </a>
              )}
            </div>{" "}
          </div>
        );
      })}
    </div>
  );
};

export default Result;
