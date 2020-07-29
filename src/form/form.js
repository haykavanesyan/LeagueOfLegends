import React from "react";
import { reduxForm, Field } from "redux-form";
import style from "./result.module.css";

let SearchForm = (props) => {
  return (
    <form onChange={props.handleSubmit} onSubmit={props.handleSubmit}>
      <Field
        placeholder="Search"
        className={style.input}
        name={"search"}
        component="input"
      />
    </form>
  );
};

let ReduxSearchForm = reduxForm({ form: "app" })(SearchForm);

export default ReduxSearchForm;
