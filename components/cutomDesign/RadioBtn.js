import { typeDataCheck } from "@/hooks/typeCheck";
import Image from "next/image";

import { useState } from "react";
import { useSelector } from "react-redux";

const RadioBtn = ({ data }) => {
  const check = useSelector((state) => state.checkBoxData.checkBoxData);

  return (
    <div style={data?.style}>
      {data?.data?.map((item, index) => (
        <RadioItem item={item} data={data} key={index} />
      ))}
    </div>
  );
};
export default RadioBtn;

const RadioItem = ({ item, data }) => {
  const check = useSelector((state) => state.checkBoxData.checkBoxData);
  //  destructure the style  property
  let {
    position,
    containerStyle,
    inputStyle,
    checkmarkStyle,
    checkmarkAfterStyle,
    checkmarkHoverStyle,
  } = item?.style;
  //  value distructure from checkmarkStyle for using checkbox position
  const { value } = checkmarkStyle;
  let activeBg = {};
  // selcted item background set color
  if (check?.some((items) => items.name == item.name)) {
    activeBg = { backgroundColor: "red" };
  }
  return (
    <label style={containerStyle} className="border-2 bg-green-900">
      <Image
        src={item?.img}
        width="100"
        height="100"
        alt="loading"
        className="w-full"
      />

      <input
        type={item.type}
        onClick={(e) => {
          typeDataCheck({ ...item, selectType: data.select });
        }}
        style={inputStyle}
      />
      {/* selcted item background set color  */}
      {check.some((items) => items.name == item.name) ? (
        <span
          style={{
            ...checkmarkStyle,
            ...position[value],
            ...checkmarkHoverStyle,
            ...activeBg,
          }}>
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
