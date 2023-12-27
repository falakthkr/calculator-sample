import React, { useState, useRef } from "react";
import "./App.css";

const Calculator = () => {
  // states
  const [calculatorVal, setCalculatorVal] = useState(0);

  // refs
  let calculatorVals = useRef({
    currentValueArr: [],
    operator: "",
    lhsVal: 0,
  });

  // render functions
  const renderCalculatorScreen = () => {
    return (
      <div className="screenWrapper">
        <h1>{calculatorVal}</h1>
      </div>
    );
  };

  const renderCalculatorKeys = () => {
    let numsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    return (
      <div className="numbersWrapper">
        {numsArray.map((num) => {
          return (
            <div
              key={`${num}-keyVal`}
              onClick={() => {
                calculatorVals.current.currentValueArr.push(num);
                setCalculatorVal(
                  calculatorVals.current.currentValueArr.join("")
                );
              }}
              className="numbers"
            >
              {num}
            </div>
          );
        })}
      </div>
    );
  };

  const renderOperators = () => {
    const operators = [
      {
        label: "+",
        value: "add",
        function: addition,
      },
      {
        label: "-",
        value: "minus",
        function: subtraction,
      },
      {
        label: "x",
        value: "multiply",
        function: multiplication,
      },
      {
        label: "/",
        value: "divide",
        function: division,
      },
      {
        label: "=",
        value: "sum",
        function: sum,
      },
    ];

    return (
      <div className="operatorsWrapper">
        {operators.map((item) => {
          return (
            <div
              key={item.value}
              className="operators"
              onClick={() => item.function()}
            >
              {item.label}
            </div>
          );
        })}
      </div>
    );
  };

  // helper functions
  const addition = () => {
    calculatorVals.current.lhsVal =
      calculatorVals.current.currentValueArr.join("");
    calculatorVals.current.currentValueArr = [];
    calculatorVals.current.operator = "add";
    setCalculatorVal("+");
  };
  const subtraction = () => {
    calculatorVals.current.lhsVal =
      calculatorVals.current.currentValueArr.join("");
    calculatorVals.current.currentValueArr = [];
    calculatorVals.current.operator = "minus";
    setCalculatorVal("-");
  };
  const multiplication = () => {
    calculatorVals.current.lhsVal =
      calculatorVals.current.currentValueArr.join("");
    calculatorVals.current.currentValueArr = [];
    calculatorVals.current.operator = "multiply";
    setCalculatorVal("x");
  };
  const division = () => {
    calculatorVals.current.lhsVal =
      calculatorVals.current.currentValueArr.join("");
    calculatorVals.current.currentValueArr = [];
    calculatorVals.current.operator = "divide";
    setCalculatorVal("/");
  };
  const sum = () => {
    switch (calculatorVals.current.operator) {
      case "add":
        setCalculatorVal(
          Number(calculatorVals.current.lhsVal) +
            Number(calculatorVals.current.currentValueArr.join(""))
        );
        break;
      case "minus":
        setCalculatorVal(
          Number(calculatorVals.current.lhsVal) -
            Number(calculatorVals.current.currentValueArr.join(""))
        );
        break;
      case "multiply":
        setCalculatorVal(
          Number(calculatorVals.current.lhsVal) *
            Number(calculatorVals.current.currentValueArr.join(""))
        );
        break;
      case "divide":
        setCalculatorVal(
          Number(calculatorVals.current.lhsVal) /
            Number(calculatorVals.current.currentValueArr.join(""))
        );
        break;
      default:
        break;
    }
  };

  return (
    <div className="CalculatorWrapper">
      {renderCalculatorScreen()}
      {renderCalculatorKeys()}
      {renderOperators()}
    </div>
  );
};

const CalulatorPage = () => {
  return <Calculator />;
};

export default CalulatorPage;
