import React from 'react';
import './Calculator.css';
import {useEffect, useState} from 'react';


function Calculator(props) {

    const input = document.getElementsByClassName('input');
    const [formulaCount, setFormulaCount] = useState(0);

    const [formula, setFormula] = useState([]);


    // setFormula is one step behind, work in progress
    const addInput = (e) => {
        const newVal = [...formula, e];
        console.log(newVal);
        setFormula(newVal);
        setFormulaCount(formulaCount + 1);
        console.log(formula);
        console.log(formula.join(''));
    };

    useEffect(() => {
        input.innerHTML = formula.join('');
        console.log('called');
    }, [formulaCount]);
    
    if (props.calc === 1) {
        return (
            <div className='calc'>
                <div className='input'></div>
                <div className='output'></div>
                <div className='del'>del</div>
                <div 
                    className='divide'
                    onClick={() => {addInput('/')}}
                >/</div>
                <div 
                    className='multiply'
                    onClick={() => {addInput('*')}}
                >*</div>
                <div 
                    className='sub'
                    onClick={() => {addInput('-')}}
                >-</div>
                <div 
                    className='7'
                    onClick={() => {addInput('7')}}
                >7</div>
                <div 
                    className='8'
                    onClick={() => {addInput('8')}}
                >8</div>
                <div 
                    className='9'
                    onClick={() => {addInput('9')}}
                >9</div>
                <div 
                    className='4'
                    onClick={() => {addInput('4')}}
                >4</div>
                <div 
                    className='5'
                    onClick={() => {addInput('5')}}
                >5</div>
                <div 
                    className='6'
                    onClick={() => {addInput('6')}}
                >6</div>
                <div 
                    className='1'
                    onClick={() => {addInput('1')}}
                >1</div>
                <div 
                    className='2'
                    onClick={() => {addInput('2')}}
                >2</div>
                <div 
                    className='3'
                    onClick={() => {addInput('3')}}
                >3</div>
                <div className='clr'>clr</div>
                <div 
                    className='0'
                    onClick={() => {addInput('0')}}
                >0</div>
                <div    
                    className='.'
                    onClick={() => {addInput('.')}}
                >.</div>
                <div 
                    className='add'
                    onClick={() => {addInput('+')}}
                >+</div>
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
