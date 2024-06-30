import LoaderBtn from "./ui/LoaderBtn";
import styles from "../styles/ui/Button.module.scss";
import Count from "./Count";
import Shimer from "./ui/Shimer";
const Button: React.FC<{
  size: string;
  counter: boolean;
  focused: boolean;
  stated: string;
  setStated: (arg: string) => void;
  styled: {
    color: string;
    backgroundColor: string;
  };
  sizeCount: {
    minSize?: string;
    horizontalPadding?: string;
    size?: string;
    fontSize: string;
  };
  styledCount: {
    color: string;
    backgroundColor: string;
  };
  pulse: boolean;
  textBtn: string;
  textCount: number;
}> = ({
  size,
  counter,
  focused,
  stated,
  setStated,
  styled,
  sizeCount,
  styledCount,
  pulse,
  textBtn,
  textCount,
}) => {
  console.log(textCount);
  const clickBtn = (arg: string) => {
    setStated("loading");
    setInterval(() => {
      setStated(arg);
    }, 5000);
  };
  const sizes = {
    padding: "16px",
  };
  switch (size) {
    case "28px":
      sizes.padding = "10px";
      break;
    case "36px":
      sizes.padding = "12px";
      break;
    case "56px":
      sizes.padding = "16px";
      break;
  }

  return (
    <button
      disabled={stated === "disabled" ? true : false}
      className={`${styles.btn} ${focused ? styles.focus : ""} ${
        stated === "pressed" ? styles.actives : ""
      }`}
      style={{ ...styled, ...sizes }}
      onClick={() => {
        clickBtn(stated);
      }}
    >
      <p className={stated === "loading" ? `${styles.loading}` : ""}>
        {textBtn.length > 0 ? textBtn : "Что сделать"}
      </p>

      {counter && (
        <Count
          stated={stated}
          sizeCount={sizeCount}
          styledCount={styledCount}
          pulse={pulse}
          textCount={textCount}
        />
      )}
      {stated === "loading" && <Shimer styled={styled} />}
      {stated === "loading" && <LoaderBtn size={size} styled={styled} />}
    </button>
  );
};

export default Button;
