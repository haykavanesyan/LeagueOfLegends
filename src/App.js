import React from "react";
import "./App.css";
import ReduxSearchForm from "./form/form";
import {
  searchThunk,
  chosenThunk,
  removed,
  deleteResult,
} from "./redux/appReducer";
import { connect } from "react-redux";
import Results from "./form/results";
import Chosen from "./form/chosen";

let App = (props) => {
  let onSubmit = (value) => {
    props.searchThunk(value.search);
  };

  return (
    <div>
      <div className="App">
        <ReduxSearchForm onSubmit={onSubmit} />
        {props.result.length == 0 ? (
          ""
        ) : (
          <div className="results">
            {props.result.length > 0 ? (
              <div>
                <button
                  onClick={() => {
                    props.deleteResult();
                  }}
                  className="button"
                >
                  X
                </button>
                <Results {...props} />
              </div>
            ) : (
              <div></div>
            )}
          </div>
        )}
      </div>
      <div>
        <Chosen {...props} />
      </div>
    </div>
  );
};

let mapStateToProps = (state) => ({
  result: state.app.result,
  chosen: state.app.chosen,
  adden: state.app.adden,
});

export default connect(mapStateToProps, {
  searchThunk,
  chosenThunk,
  removed,
  deleteResult,
})(App);
