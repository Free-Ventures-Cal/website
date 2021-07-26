import React from 'react';

import './../styles/App.css';


function GenericPage(props) {


  return (
    <section className="genericPage" id={props.id}>
        {props.children}
    </section>
  );
}

export default GenericPage;
