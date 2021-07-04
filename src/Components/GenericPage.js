import React from 'react';

import './../styles/App.css';


function GenericPage(props) {


  return (
    <section className="genericPage">
        {props.children}
    </section>
  );
}

export default GenericPage;
