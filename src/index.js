import React from 'react';
import ReactDom from 'react-dom';
import MyNavBar from './myNavBar.js'



ReactDom.render(
    <div>
    <h2>Hello REACT !!</h2>
    <MyNavBar name="dexter" />
    </div>,
    document.getElementById("root")
);


