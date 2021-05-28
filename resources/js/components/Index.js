import React from 'react';
import ReactDOM from 'react-dom';
import Router from "./Router";

function Index() {
    return (
        <>
            <Router></Router>
        </>
    );
}

export default Index;

if (document.getElementById('example')) {
    ReactDOM.render(<Index />, document.getElementById('example'));
}
