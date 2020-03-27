import React from "react";


function NoMatch() {

  let styles = {
    textAlign: 'center'
  };

  return (
    <div>
      <h1 style={styles}>404 Page Not Found</h1>
      <h1 style={styles}>
        <img src="https://media.giphy.com/media/xDQ3Oql1BN54c/giphy.gif" />
      </h1>
    </div>
  );
}

export default NoMatch;