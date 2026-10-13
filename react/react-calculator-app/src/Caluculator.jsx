import "./App.css";
import { useState } from "react";

export function Calculator() {
  const [display, setDisplay] = useState("");

  const handleClick = (btn) => {
    if (btn === "=") {
      setDisplay(calculate(display));
      return;
    } else if (btn === "C") {
      setDisplay("");
      return;
    }
    setDisplay(display + btn);
  };

  const calculate = (expression) => {
    // 「整数 演算子 整数」の形式のみ許可
    const validExpression = /^(\d+)([+\-*/])(\d+)$/;

    // 有効な式であるかチェック
    const match = expression.match(validExpression);
    if (!match) {
      setDisplay("エラー");
      throw new Error("無効な式です。");
    }

    const num1 = Number(match[1]);
    const operator = match[2];
    const num2 = Number(match[3]);

    let result;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
    }
    return result;
  };

  // ボタンの配置を表す配列（記述順に表示）
  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    "C",
    "=",
    "+",
  ];

  return (
    <>
      <h2>電卓アプリ</h2>
      <div className="calculator">
        <div className="calculator-container">{display}</div>
        <div className="button-grid">
          {buttons.map((btn) => (
            <button key={btn} onClick={() => handleClick(btn)}>
              {btn}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
