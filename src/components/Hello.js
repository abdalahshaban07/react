import React from 'react';

const Hello = () => {
    // return (
    //     <div className: 'dumyClass'>
    //         <h1>Hello Abdalah</h1>
    //     </div>
    // )

    // write this code without using JSX

    return React.createElement(
        'div',
        { id: 'hello', className: 'dumyClass' },
        React.createElement('h1', null, 'Hello Abdalah')
    );
};

export default Hello;
