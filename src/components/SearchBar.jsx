import React from "react";

const SearchBar = ({onChange, onSubmit}) => {
    return (
        <div className="input-form" style={{ marginTop: "1vh", textAlign: "center" }}>
          <div style={{ paddingRight: "1px" }}>
            <label style={{ paddingRight: "10px" }}>Enter a zipcode: </label>
            <input
              placeholder="Try 10065"
              onChange={onChange}
              id="zip"
            />
          </div>
          <br></br>
          <button
            className="btn btn-primary"
            onClick={(e) => onSubmit(e)}
          >
            Search by zip
          </button>
        </div>
      );
    };

export default SearchBar;