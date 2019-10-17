import React from "react";
const SearchForm = props => {
  return (
    <div className="row">
      <div className="col-12 mt-4">
        <div className="input-group">
          <input
            className="form-control mt-1"
            type="text"
            placeholder="Player Name"
          />
          <button
            className="btn btn-light text-muted search"
            onClick={() => {
              props.onHandlePlayerFinder(document.querySelector("input").value);
            }}
          >
            <i className="fas fa-search" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
