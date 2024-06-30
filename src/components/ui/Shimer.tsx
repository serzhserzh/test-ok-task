import ContentLoader from "react-content-loader";
import React from "react";
const MyLoader: React.FC<{
  styled: {
    color: string;
    backgroundColor: string;
  };
}> = ({ styled }) => (
  <ContentLoader
    style={{ position: "absolute", left: "-5px", opacity: "0.12" }}
    speed={1}
    width={280}
    height={50}
    foregroundColor={styled.color}
    backgroundColor={styled.backgroundColor}
  >
    <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
  </ContentLoader>
);

export default MyLoader;
