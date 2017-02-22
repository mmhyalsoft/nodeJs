import React from 'react';
import ReactDOM from 'react-dom';

var color = Math.random() > 0.5 ? "green" : "red";


const App = (props) => {
  return(
    <h2 className="text-center" style={{color: color}}>
      Hello React compontes!
    </h2>
  );
};


ReactDOM.render(
  //React.createElement('h3',null, 'Hello React' ), //what to render = html type, attribute, childer to have

  //oppure possiare usare jsx
  // <h2 className="text-center" style={{color: color}}>
  //   Hello React with JSX !!!
  // </h2>,

  //usally componets are used with react
  <App />,


  document.getElementById('root')  //where to render
);
