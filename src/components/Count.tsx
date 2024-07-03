import styles from "../styles/ui/Counter.module.scss";

const styledsCount = [
  { color: "white", backgroundColor: "#FFFFFF1F" },
  { color: "black", backgroundColor: "#8366561F" },
];

const Count: React.FC<{
  stated: string;
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
  textCount: number;
}> = ({ stated, sizeCount, styledCount, pulse, textCount }) => {
  const count = textCount;
  if (count > 0) {
    return count < 99 ? (
      <div
        style={{
          ...(styledCount.color === "black"
            ? {
                ...styledsCount[1],
              }
            : {
                ...styledsCount[0],
              }),
          ...(sizeCount.size === undefined
            ? {
                fontSize: sizeCount.fontSize,
                minHeight: sizeCount.minSize,
                minWidth: sizeCount.minSize,
                paddingLeft: sizeCount.horizontalPadding,
                paddingRight: sizeCount.horizontalPadding,
              }
            : {
                fontSize: sizeCount.fontSize,
                width: sizeCount.size,
                height: sizeCount.size,
              }),
        }}
        className={
          stated === "loading"
            ? `${styles.loading} ${styles.liveIndicator}`
            : `${styles.liveIndicator}`
        }
      >
        {count}
        {sizeCount.size !== undefined && pulse && (
          <>
            <div
              className={`${styles.pulse} ${styles.one}`}
              style={{
                ...styledCount,
                width: sizeCount.size,
                height: sizeCount.size,
              }}
            ></div>
            <div
              className={`${styles.pulse} ${styles.two}`}
              style={{
                ...styledCount,
                width: sizeCount.size,
                height: sizeCount.size,
              }}
            ></div>
          </>
        )}
      </div>
    ) : (
      <div
        style={{
          ...(styledCount.color === "black"
            ? {
                ...styledsCount[1],
              }
            : {
                ...styledsCount[0],
              }),
          ...(sizeCount.size === undefined
            ? {
                fontSize: sizeCount.fontSize,
                minHeight: sizeCount.minSize,
                minWidth: sizeCount.minSize,
                paddingLeft: sizeCount.horizontalPadding,
                paddingRight: sizeCount.horizontalPadding,
              }
            : {
                fontSize: sizeCount.fontSize,
                width: sizeCount.size,
                height: sizeCount.size,
              }),
        }}
        className={
          stated === "loading"
            ? `${styles.loading} ${styles.liveIndicator}`
            : `${styles.liveIndicator}`
        }
      >
        {count}
        {sizeCount.size !== undefined && pulse && (
          <>
            <div
              className={`${styles.pulse} ${styles.one}`}
              style={{
                ...styledCount,
                width: sizeCount.size,
                height: sizeCount.size,
              }}
            ></div>
            <div
              className={`${styles.pulse} ${styles.two}`}
              style={{
                ...styledCount,
                width: sizeCount.size,
                height: sizeCount.size,
              }}
            ></div>
          </>
        )}
      </div>
    );
  }
};

export default Count;
