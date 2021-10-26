import React from 'react';


function Calculator(props) {
    if (props.calc === 1) {
        return (
            <div>
                I am Calculator
            </div>
            );
        } else {
            return (
                <div></div>
            );
        };
};

export default Calculator;
