import { useCallback, useState } from "react";
import Button from "./components/Button";
import "./styles/app.scss";

const sizes = ["28px", "36px", "56px"];
const styledsButton = [
  {
    color: "white",
    backgroundColor: "#FF7700",
  },
  {
    color: "black",
    backgroundColor: "#8366561f",
  },
];
const sizesCount = [
  { minSize: "24px", horizontalPadding: "6px", fontSize: "15px" },
  { minSize: "20px", horizontalPadding: "4px", fontSize: "13px" },
  { minSize: "16px", horizontalPadding: "4px", fontSize: "11px" },
  { size: "12px", fontSize: "0px" },
  { size: "8px", fontSize: "0px" },
];
const statedBtn = ["enable", "pressed", "loading", "disabled"];
const nameStyledsCount = ["primary", "secondary"];
const styledsCount = [
  { color: "white", backgroundColor: "#FFFFFF1F" },
  { color: "black", backgroundColor: "#8366561F" },
];
function App() {
  const [size, setSize] = useState("36px");
  const [counter, setCounter] = useState(true);
  const [focused, setFocused] = useState(true);
  const [stated, setStated] = useState("enable");
  const [styled, setStyled] = useState({
    color: "black",
    backgroundColor: "#8366561f",
  });
  const changeSize = (arg: string) => {
    setSize(arg);
  };
  const changeCounter = (arg: boolean) => {
    setCounter(arg);
  };
  const changeFocused = (arg: boolean) => {
    setFocused(arg);
  };
  const changeStated = useCallback((arg: string) => {
    setStated(arg);
  }, []);
  const changeStyled = (arg: { color: string; backgroundColor: string }) => {
    setStyled(arg);
  };

  const [sizeCount, setSizeCount] = useState<{
    minSize?: string;
    horizontalPadding?: string;
    size?: string;
    fontSize: string;
  }>({ minSize: "24px", horizontalPadding: "6px", fontSize: "15px" });

  const [styledCount, setStyledCount] = useState({
    color: "black",
    backgroundColor: "#8366561f",
  });

  const [pulse, setPulse] = useState(true);

  const changePulse = (arg: boolean) => {
    setPulse(arg);
  };

  const changeSizeCount = (arg: {
    minSize?: string;
    horizontalPadding?: string;
    size?: string;
    fontSize: string;
  }) => {
    setSizeCount(arg);
  };
  const changeStyledCount = (arg: {
    color: string;
    backgroundColor: string;
  }) => {
    setStyledCount(arg);
  };
  const [textBtn, setTextBtn] = useState("Что сделать");
  const [textCount, setTextCount] = useState(1);
  const changeTextCount = (arg: string) => {
    setTextCount(Number(arg));
  };
  return (
    <>
      <div className="checkList">
        <h1 style={{ textAlign: "center", fontFamily: '"Exo 2", sans-serif' }}>
          Параметры
        </h1>
        <h1>
          <br />
          Стилизация кнопки
        </h1>
        {/* STYLED BUTTON*/}
        <div className="checkList__btns">
          <h2>styled</h2>
          <div className="checkList__btns--info">
            <h3>
              Отвечает за комбинацию цветовых токенов, присвоенных компоненту
            </h3>
            <div className="btn__list">
              {styledsButton.map((item, i) => {
                return (
                  <button
                    onClick={() => {
                      changeStyled(item);
                    }}
                  >
                    {nameStyledsCount[i]}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        {/* SIZE */}
        <div className="checkList__btns">
          <h2>size</h2>
          <div className="checkList__btns--info">
            <h3>
              Отвечает за исходный размер кнопки и значения, которые идут в
              комбинации с этим размером
            </h3>
            <div className="btn__list">
              {sizes.map((item) => {
                return (
                  <button
                    onClick={() => {
                      changeSize(item);
                    }}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        {/* COUNTER */}
        <div className="checkList__btns">
          <h2>counter of on</h2>
          <div className="checkList__btns--info">
            <h3>Отвечает за отображение иконки справа от label</h3>
            <div className="btn__list">
              <button
                onClick={() => {
                  changeCounter(false);
                }}
              >
                false
              </button>
              <button
                onClick={() => {
                  changeCounter(true);
                }}
              >
                true
              </button>
            </div>
          </div>
        </div>
        {/* FOCUSED */}
        <div className="checkList__btns">
          <h2>focused on of</h2>
          <div className="checkList__btns--info">
            <h3>Отвечает за отображение фокуса</h3>
            <div className="btn__list">
              <button
                onClick={() => {
                  changeFocused(false);
                }}
              >
                false
              </button>
              <button
                onClick={() => {
                  changeFocused(true);
                }}
              >
                true
              </button>
            </div>
          </div>
        </div>
        {/* STATED */}
        <div className="checkList__btns">
          <h2>stated</h2>

          <div className="checkList__btns--info">
            <h3>
              Отвечает за состояние компонента, основанное на комбинации
              включенных/выключенных параметров
            </h3>
            <div className="btn__list">
              {statedBtn.map((item) => (
                <button
                  onClick={() => {
                    changeStated(item);
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        <h1>
          <br />
          Стилизация счетчика
          <br />
        </h1>
        {/* SIZE count */}
        <div className="checkList__btns">
          <h2>size count</h2>
          <div className="checkList__btns--info">
            <h3>
              Отвечает за исходный размер индикатора и значения, которые идут в
              комбинации с этим размером
            </h3>
            <div className="btn__list">
              {sizesCount.map((item) => {
                return (
                  <button
                    onClick={() => {
                      changeSizeCount({ ...item });
                    }}
                  >
                    {item?.minSize || item.size}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        {/* styled count */}
        <div className="checkList__btns">
          <h2>style count</h2>
          <div className="checkList__btns--info">
            <h3>Отвечает за отображение иконки справа от label</h3>
            <div className="btn__list">
              {styledsCount.map((item, index) => {
                return (
                  <button
                    onClick={() => {
                      changeStyledCount(item);
                    }}
                  >
                    {nameStyledsCount[index]}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        {/* PULSE COUNT */}
        <div className="checkList__btns">
          <h2>pulse on of</h2>
          <div className="checkList__btns--info">
            <h3>Отвечает за включение анимации pulse</h3>
            <div className="btn__list">
              <button
                onClick={() => {
                  changePulse(false);
                }}
              >
                false
              </button>
              <button
                onClick={() => {
                  changePulse(true);
                }}
              >
                true
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="prevBtn">
        <div className="prevBtn__inputs">
          <div className="prevInput">
            <span>текст кнопки</span>
            <input
              value={textBtn}
              onChange={(e) => setTextBtn(e.target.value)}
              type="text"
              placeholder="что сделать"
            />
          </div>
          <div className="prevInput">
            <span>число счетчика</span>
            <input
              value={textCount}
              onChange={(e) => changeTextCount(e.target.value)}
              type="number"
              placeholder="что сделать"
            />
          </div>
        </div>
        <Button
          size={size}
          counter={counter}
          focused={focused}
          stated={stated}
          setStated={changeStated}
          styled={styled}
          sizeCount={sizeCount}
          styledCount={styledCount}
          pulse={pulse}
          textBtn={textBtn}
          textCount={textCount}
        />
      </div>
    </>
  );
}

export default App;
