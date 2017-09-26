import React from 'react';
import '../styles/panel.css';
import Search from './Search';
import Results from './Results';

const body = title => {
  if (title === "Search") {
    return <Search />
  } else if (title === "Results") {
    return <Results />
  } else if (title === "Saved Articles") {
    return "<SavedArticles />"
  } else {
    return "Error Loading";
  }
};

const Panel = props => (
  <div className="card bg-light mb-3">
    <div className="card-header">
      <h4 className="card-title">{ props.title }</h4>
    </div>
    <div className="card-body">
      {body(props.title)}
    </div>
  </div>
);

export default Panel;
