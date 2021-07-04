import React from 'react';

import './../styles/App.css';


function GenericTop(props) {


  return (
    <section className="genericTop">
        <div className="container">
            <div className="purpleBorder"></div>
        	<div class="topHeader">
            	<h1>{props.header}</h1>
            	<h2>{props.description}</h2>
            </div>
            {props.children}
        </div>
    </section>
  );
}

export default GenericTop;
