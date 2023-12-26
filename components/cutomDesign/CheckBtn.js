import { typeDataCheck } from "@/hooks/typeCheck";
import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";

const CheckBtn = ({ data }) => {
  console.log(data);
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
    position,
    containerStyle,
    inputStyle,
    checkmarkStyle,
    checkmarkAfterStyle,
    checkmarkHoverStyle,
  } = item?.style;
  const { value } = item?.style?.checkmarkStyle;

  let positions = {};
  console.log(position[value]);
  if (value == "top-right") {
    positions = { top: "0", right: "0", transform: "translate(0, 0)" };
  } else if (value == "top-left") {
    positions = { top: "0", left: "0", transform: "translate(0, 0)" };
  } else if (value == "bottom-left") {
    positions = { bottom: "0%", left: "0", transform: "translate(0, 0)" };
  } else if (value == "bottom-right") {
    positions = { bottom: "0%", right: "0", transform: "translate(0, 0)" };
  } else if (value == "center") {
    positions = {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    };
  }
  let activeBg = {};
  const checked = useSelector((state) => state.checkBoxData.checkBoxData);
  let content;
  if (checked?.some((items) => items.name == item.name)) {
    activeBg = { backgroundColor: "red" };
  }
  return (
    <label className="relative" style={containerStyle}>
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
        onChange={() => typeDataCheck(item)}
        style={inputStyle}
      />
      {content}
      {checked.some((items) => items.name == item.name) ? (
        <span
          style={{
            ...checkmarkStyle,
            ...position[value],
            ...checkmarkHoverStyle,
            ...activeBg,
          }}>
          {singleActive.name}
          <span style={checkmarkAfterStyle}></span>
        </span>
      ) : (
        <span
          style={{
            ...checkmarkStyle,
            ...position[value],
            ...checkmarkHoverStyle,
          }}>
          <span style={checkmarkAfterStyle}></span>
        </span>
      )}
    </label>
  );
};
