import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from "./src/components/calculator";

ReactDOM.render(
    <Calculator/>,
    document.getElementById('app')
);

module.hot.accept();
