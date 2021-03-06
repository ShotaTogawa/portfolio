import React from 'react';
import { Link } from 'react-router-dom';
import classes from './app-detail.css';
import { appsDetail } from '../../utils';

const renderCard = () => {
  return appsDetail.map((app, i) => {
    if (i % 2 === 0) {
      return (
        <div className="AppContainer" key={i} style={classes.FormContainer}>
          <div className="AppImage">
            <img src={app.image} alt={app.name} className="DetailImage" />
          </div>
          <div className="Description">
            <h1>{app.name}</h1>
            <h3>Descriptipm</h3>
            <p>{app.description}</p>
            <h3>Stack</h3>
            <p>{app.stuck}</p>
            <button
              type="button"
              className="GoPageBtn"
              style={classes.GoPageBtn}
            >
              <a href={app.link} target="_blank" rel="noreferrer noopener">
                Go Page
              </a>
            </button>
          </div>
        </div>
      );
    }
    return (
      <div className="AppContainer" style={classes.FormContainer}>
        <div className="Description">
          <h1>{app.name}</h1>
          <h3>Descriptipm</h3>
          <p>{app.description}</p>
          <h3>Stack</h3>
          <p>{app.stuck}</p>
          <button type="button" className="GoPageBtn" style={classes.GoPageBtn}>
            <a href={app.link} target="_blank" rel="noreferrer noopener">
              Go Page
            </a>
          </button>
        </div>
        <div className="AppImage">
          <img src={app.image} alt={app.name} className="DetailImage" />
        </div>
      </div>
    );
  });
};

const AppDetailCard = () => {
  return (
    <div className="Container" style={classes.Container}>
      {renderCard()}
      <Link to="/">
        <div className="Xbtn" style={classes.Xbtn}>
          &#10005;
        </div>
      </Link>
    </div>
  );
};
export default AppDetailCard;
