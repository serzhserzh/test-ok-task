import { useEffect, useState } from "react";
import style from "../../styles/ui/ButtonLoader.module.scss";
const LoaderBtn: React.FC<{
  size: string;
  styled: {
    color: string;
    backgroundColor: string;
  };
}> = ({ size, styled }) => {
  const [svgSize, setSvgSize] = useState("40px");
  const changeSizeSvg = (arg: string) => {
    setSvgSize(arg);
  };
  useEffect(() => {
    switch (size) {
      case "28px":
        changeSizeSvg("40px");
        break;
      case "36px":
        changeSizeSvg("45px");
        break;
      case "56px":
        changeSizeSvg("50px");
        break;
      default:
        changeSizeSvg("40px");
    }
  }, [size]);
  return (
    <>
      <svg
        className={style.svg}
        x="0px"
        y="0px"
        width={svgSize}
        viewBox="0 0 50 50"
      >
        <path
          fill={styled.color}
          d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
        >
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="0.5s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </>
  );
};

export default LoaderBtn;
