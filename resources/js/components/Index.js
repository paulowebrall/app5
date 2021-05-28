import React from 'react';
import ReactDOM from 'react-dom';

import TopoCards from './TopoCard';
import Cards from './card';
import ListDog from './crud/ListDog';


function Index() {
    return (
        <>
            <TopoCards titulo="Primeiro Título" />
            <TopoCards titulo="SEgundo Título" />
            <Cards>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </Cards>
            <ListDog />
        </>
    );
}

export default Index;

if (document.getElementById('example')) {
    ReactDOM.render(<Index />, document.getElementById('example'));
}
