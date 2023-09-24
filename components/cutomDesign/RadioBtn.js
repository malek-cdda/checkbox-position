import { typeDataCheck } from "@/hooks/typeCheck";
import Image from "next/image";

import { useState } from "react";
import { useSelector } from "react-redux";

const RadioBtn = ({ data }) => {
  const check = useSelector((state) => state.checkBoxData.checkBoxData);

  return (
    <div style={data?.style}>
      {data?.data?.map((item, index) => (
        <Item item={item} data={data} key={index} />
      ))}
    </div>
  );
};
export default RadioBtn;

const Item = ({ item, data }) => {
  const check = useSelector((state) => state.checkBoxData.checkBoxData);

  let {
    containerStyle,
    inputStyle,
    checkmarkStyle,
    checkmarkAfterStyle,
    checkmarkHoverStyle,
  } = item?.style;

  const { value } = checkmarkStyle;

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

  if (check?.some((items) => items.name == item.name)) {
    activeBg = { backgroundColor: "red" };
  }
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
        <p>{item?.type}</p>
        <p>{item?.description}</p>
      </div>
      <input
        type={item.type}
        // checked={item.name == singleActive.name}
        onClick={(e) => {
          typeDataCheck({ ...item, selectType: data.select });
        }}
        style={inputStyle}
      />
      {check.some((items) => items.name == item.name) ? (
        <span
          style={{
            ...checkmarkStyle,
            ...positions,
            ...checkmarkHoverStyle,
            ...activeBg,
          }}
        >
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
