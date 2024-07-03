import { useCallback, useState } from "react";
import Button from "./components/Button";
import "./styles/app.scss";

const sizes = ["28px", "36px", "56px"];
const styledsButton = [
  {
    id: "1",
    color: "white",
    backgroundColor: "#FF7700",
  },
  {
    id: "2",
    color: "black",
    backgroundColor: "#8366561f",
  },
];
const sizesCount = [
  { id: "1", minSize: "24px", horizontalPadding: "6px", fontSize: "15px" },
  { id: "2", minSize: "20px", horizontalPadding: "4px", fontSize: "13px" },
  { id: "3", minSize: "16px", horizontalPadding: "4px", fontSize: "11px" },
  { id: "4", size: "12px", fontSize: "0px" },
  { id: "5", size: "8px", fontSize: "0px" },
];
const statedBtn = ["enable", "pressed", "loading", "disabled"];
const nameStyledsCount = ["primary", "secondary"];
function App() {
  const [size, setSize] = useState("56px");
  const [counter, setCounter] = useState(true);
  const [focused, setFocused] = useState(false);
  const [stated, setStated] = useState("enable");
  const [styled, setStyled] = useState({
    id: "1",
    color: "white",
    backgroundColor: "#FF7700",
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
  const changeStyled = (arg: {
    id: string;
    color: string;
    backgroundColor: string;
  }) => {
    setStyled(arg);
  };

  const [sizeCount, setSizeCount] = useState<{
    id: string;
    minSize?: string;
    horizontalPadding?: string;
    size?: string;
    fontSize: string;
  }>({ id: "1", minSize: "24px", horizontalPadding: "6px", fontSize: "15px" });

  const [pulse, setPulse] = useState(true);

  const changePulse = (arg: boolean) => {
    setPulse(arg);
  };

  const changeSizeCount = (arg: {
    id: string;
    minSize?: string;
    horizontalPadding?: string;
    size?: string;
    fontSize: string;
  }) => {
    setSizeCount(arg);
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
                    className={item.id == styled.id ? "active" : ""}
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
                    className={item == size ? "active" : ""}
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
                className={counter == false ? "active" : ""}
                onClick={() => {
                  changeCounter(false);
                }}
              >
                false
              </button>
              <button
                className={counter == true ? "active" : ""}
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
                className={focused == false ? "active" : ""}
                onClick={() => {
                  changeFocused(false);
                }}
              >
                false
              </button>
              <button
                className={focused == true ? "active" : ""}
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
                  className={item == stated ? "active" : ""}
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
                    className={item.id === sizeCount.id ? "active" : ""}
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
        {/* PULSE COUNT */}
        <div className="checkList__btns">
          <h2>pulse on of</h2>
          <div className="checkList__btns--info">
            <h3>Отвечает за включение анимации pulse</h3>
            <div className="btn__list">
              <button
                className={pulse == false ? "active" : ""}
                onClick={() => {
                  changePulse(false);
                }}
              >
                false
              </button>
              <button
                className={pulse == true ? "active" : ""}
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
          styledCount={styled}
          pulse={pulse}
          textBtn={textBtn}
          textCount={textCount}
        />
      </div>
    </>
  );
}

export default App;
