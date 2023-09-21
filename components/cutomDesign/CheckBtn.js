import Image from "next/image";
import { useState } from "react";

const CheckBtn = ({ data }) => {
  return (
    <div style={data?.style}>
      {data?.data?.map((item, index) => (
        <Item item={item} key={index} />
      ))}
    </div>
  );
};
export default CheckBtn;

const Item = ({ item }) => {
  const [singleActive, setSingleActive] = useState({});
  let {
    containerStyle,
    inputStyle,
    checkmarkStyle,
    checkmarkAfterStyle,
    checkmarkHoverStyle,
  } = item?.style;
  const { value } = item?.style?.checkmarkStyle;

  let positions = {};
  if (value == "top-right") {
    positions = { top: "0", right: "0", transform: "translate(0, 0)" };
  } else if (value == "top-left") {
    positions = { top: "0", left: "0", transform: "translate(0, 0)" };
  } else if (value == "bottom-left") {
    positions = { top: "0", left: "0", transform: "translate(0, 0)" };
  } else if (value == "center") {
    positions = {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    };
  }
  let activeBg = {};
  if (singleActive.name) {
    const { backgroundColor } = singleActive?.style?.checkmarkStyle;
    activeBg = { backgroundColor: backgroundColor[0] };
  }
  console.log(singleActive);
  return (
    <label style={containerStyle}>
      <Image
        src={item?.img}
        width="100"
        height="100"
        alt="loading"
        className="w-full"
      />
      <div>
        <p>{item?.label}</p>
        <p>{item?.description}</p>
      </div>
      <input
        type={item.type}
        // checked={item.name == singleActive.name}
        onChange={() => setSingleActive(item)}
        style={inputStyle}
      />
      {item.name == singleActive.name ? (
        <span
          style={{
            ...checkmarkStyle,
            ...positions,
            ...checkmarkHoverStyle,
            ...activeBg,
          }}
        >
          {singleActive.name}
          <span style={checkmarkAfterStyle}></span>
        </span>
      ) : (
        <span
          style={{
            ...checkmarkStyle,
            ...positions,
            ...checkmarkHoverStyle,
          }}
        >
          <span style={checkmarkAfterStyle}></span>
        </span>
      )}
    </label>
  );
};
