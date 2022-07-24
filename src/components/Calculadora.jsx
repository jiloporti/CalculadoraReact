import React, {useState} from 'react'
import './Calculadora.css'
import Container from '@mui/material/Container';
import {Box} from "@mui/system";

export default function Calculator(){
    const [num,setNum] = useState(0);
    const [oldnum, setOldNum] = useState(0);
    const [operator, setOperator] = useState();

    function inputNum(e){
        var input = e.target.value;
        setNum(num + input);
        if(num===0){
            setNum(input);
        } else{
            setNum(num + input)
        }
    }

    function clear(){
        setNum(0)
    }

    function porcentagem(){
        setNum(num / 100);
    }

    function mudarSinal(){
        if(num>0){
            setNum(-num);
        }else{
            setNum(Math.abs(num));
        }
    }

    function operatorCalc(e){
        var operator = e.target.value;
        setOperator(operator);
        setOldNum(num);
        setNum(0);

    }

    function resultado(e){
        if(operator==="/"){
            setNum(parseFloat(oldnum) / parseFloat(num));
        }else if(operator==="x"){
            setNum(parseFloat(oldnum) * parseFloat(num));
        }else if(operator==="-"){
            setNum(parseFloat(oldnum) - parseFloat(num));
        }else if(operator==="+"){
            setNum(parseFloat(oldnum) + parseFloat(num));
        }

    }
    return (
        <div>
        <Box m={5}/>
            <Container maxWidth="xs">
                <div className='wrapper'>
                    <h1 className='Result'>{num}</h1>
                    <button onClick={clear}>AC</button>
                    <button onClick={mudarSinal}>+/-</button>
                    <button onClick={porcentagem}>%</button>
                    <button className="Orange" onClick={operatorCalc} value="/">/</button>
                    <button className="Gray" onClick={inputNum} value={7}>7</button>
                    <button className="Gray" onClick={inputNum} value={8}>8</button>
                    <button className="Gray" onClick={inputNum} value={9}>9</button>
                    <button className="Orange" onClick={operatorCalc} value="x">X</button>
                    <button className="Gray" onClick={inputNum} value={4}>4</button>
                    <button className="Gray" onClick={inputNum} value={5}>5</button>
                    <button className="Gray" onClick={inputNum} value={6}>6</button>
                    <button className="Orange" onClick={operatorCalc} value="-">-</button>
                    <button className="Gray" onClick={inputNum} value={1}>1</button>
                    <button className="Gray" onClick={inputNum} value={2}>2</button>
                    <button className="Gray" onClick={inputNum} value={3}>3</button>
                    <button className="Orange" onClick={operatorCalc} value="+">+</button>
                    <button className="Gray double" onClick={inputNum} value={0}>0</button>
                    <button className="Gray" onClick={inputNum} value={"."}>.</button>
                    <button className="Orange" onClick={resultado}>=</button>
                </div>
            </Container>
        </div>
    )
}