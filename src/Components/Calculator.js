import React from 'react';
import './Calculator.css';


function Calculator(props) {
    if (props.calc === 1) {
        return (
            <div className='calc'>
                <div className='input'>Input</div>
                <div className='output'>Output</div>
                <div className='del'>del</div>
                <div className='/'>/</div>
                <div className='*'>*</div>
                <div className='-'>-</div>
                <div className='7'>7</div>
                <div className='8'>8</div>
                <div className='9'>9</div>
                <div className='4'>4</div>
                <div className='5'>5</div>
                <div className='6'>6</div>
                <div className='1'>1</div>
                <div className='2'>2</div>
                <div className='3'>3</div>
                <div className='clr'>clr</div>
                <div className='0'>0</div>
                <div className='.'>.</div>
                <div className='add'>+</div>
                <div className='ent'>ent</div>
            </div>
            );
        } else {
            return (
                <div></div>
            );
        };
};

export default Calculator;
