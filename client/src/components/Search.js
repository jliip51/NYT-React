import React from 'react';
import '../styles/panel.css'

const Search = () => (
  <form className="searchForm">
    <div className="form-group row">
      <label className="form-control-label col-md-2" for="SearchTopic">Topic</label>
      <input type="text" className="form-control col-md-9" id="formGroupExampleInput" placeholder="Type Search Topic Here" />
    </div>
    <div className="form-group row">
      <label className="form-control-label col-md-2" for="SearchStartYear">Start Year</label>
      <input type="text" className="form-control col-md-9" id="formGroupExampleInput2" placeholder="ex. 2016" />
    </div>
    <div className="form-group row">
      <label className="form-control-label col-md-2" for="SearchEndYear">End Year</label>
      <input type="text" className="form-control col-md-9" id="formGroupExampleInput2" placeholder="ex. 2017" />
    </div>
    <div className="form-group row">
      <div className="col-md-2">
        <button type="submit" className="btn btn-default">Search</button>
      </div>
    </div>
  </form>
);

export default Search;
