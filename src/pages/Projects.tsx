import { useState } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 70%;
  background-color: #f4f1e9;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    width:100%;
    height: 100vh;
  }
`;

const Title = styled.h3`
  margin: 2vw 0;
  text-align: center;
  font-size: calc(2px + 2vw);
  color: #2b463c;

  @media screen and (max-width: 900px) {
    text-align: center;
    color: maroon;
  }
`;

const CalculatorContainer = styled.div`
  padding: 20px;
  width: 50%;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const Label = styled.label`
  font-weight: bold;
  font-size: calc(2px + 2vw);
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin: 8px auto 16px;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: calc(2px + 2vw);

  @media screen and (max-width: 900px) {
    margin: 0;
  }
`;

const CalcBtns = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    display: block;
  }
`;

const Button = styled.button`
  width: 60px;
  height: 60px;
  font-size: calc(2px + 2vw);
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #688f4e;
  color: white;
  transition: background 0.3s;
  margin-top: 8px;

  &:hover {
    background-color: #2b463c;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 30px;
  }
`;

const Output = styled.h3`
  font-size: calc(2px + 2vw);
  font-weight: bold;
  margin-top: 15px;
  color: #333;
`;

function Projects() {
    useEffect(() => {
        document.title = "Projects | Resume";
    }, []);

    const [firstNumber, setFirstNumber] = useState<string>('');
    const [secondNumber, setSecondNumber] = useState<string>('');
    const [output, setOutput] = useState<string>('0');
    const [outputColor, setOutputColor] = useState<string>('black');

    function displayResult(result: number) {
        setOutput(result.toString());
        if (result < 0) {
        setOutputColor('red');
        } else {
        setOutputColor('black');
        }
    }

    function addition() {
        const first = Number(firstNumber);
        const second = Number(secondNumber);
        const result = first + second;
        displayResult(result);
    }

    function subtraction() {
        const first = Number(firstNumber);
        const second = Number(secondNumber);
        const result = first - second;
        displayResult(result);
    }

    function multiplication() {
        const first = Number(firstNumber);
        const second = Number(secondNumber);
        const result = first * second;
        displayResult(result);
    }

    function division() {
        const first = Number(firstNumber);
        const second = Number(secondNumber);
        const result = first / second;
        displayResult(result);
    }

    function power() {
        const first = Number(firstNumber);
        const second = Number(secondNumber);
        let result = 1;
        for (let i = 0; i < second; i++) {
        result *= first;
        }
        displayResult(result);
    }

    function clearFields() {
        setFirstNumber('');
        setSecondNumber('');
        setOutput('0');
        setOutputColor('black');
    }

    return (
        <Main>
        <Title>Calculator</Title>
        <CalculatorContainer>
            <Label htmlFor="first-number">First Number:</Label>
            <Input
            id="first-number"
            type="number"
            value={firstNumber}
            onChange={(e) => setFirstNumber(e.target.value)}
            />
            <Label htmlFor="second-number">Second Number:</Label>
            <Input
            id="second-number"
            type="number"
            value={secondNumber}
            onChange={(e) => setSecondNumber(e.target.value)}
            />
            <CalcBtns>
            <Button onClick={addition}>+</Button>
            <Button onClick={subtraction}>-</Button>
            <Button onClick={multiplication}>*</Button>
            <Button onClick={division}>/</Button>
            <Button onClick={power}>**</Button>
            <Button onClick={clearFields}>C</Button>
            </CalcBtns>
            <Output style={{ color: outputColor }}>
            {output}
            </Output>
        </CalculatorContainer>
        </Main>
    );
}

export default Projects;
