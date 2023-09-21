"use client";

import { Cagliostro } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const data = [
    {
      name: "checkbox-5",
      img: "next.svg",
      description:
        "my first react and next project . Allah help me to complete this5",
      style: {
        containerStyle: {
          display: "block",
          position: "relative",
          padding: "35px 35px",
          marginBottom: "12px",
          cursor: "pointer",
          fontSize: "22px",
          userSelect: "none",
          border: "4px solid red",
        },

        inputStyle: {
          position: "absolute",
          opacity: "0",
          cursor: "pointer",
          height: "0",
          width: "0",
        },

        checkmarkStyle: {
          position: "absolute",
          value: "center",
          height: "35px",
          width: "35px",
          backgroundColor: ["green", "red"],
          borderRadius: "50%",
          border: "2px black solid",
        },

        checkmarkHoverStyle: {
          backgroundColor: "#ccc",
        },

        checkmarkAfterStyle: {
          content: "''",
          position: "absolute",
          display: "block",
          left: "11px",
          top: "5px",
          width: "10px",
          height: "15px",
          border: " solid white",
          borderWidth: " 0 5px 5px 0",
          transform: " rotate(45deg)",
        },
      },
    },
    {
      name: "checkbox-2",
      img: "next.svg",
      description:
        "my first react and next project . Allah help me to complete this5",
      style: {
        containerStyle: {
          display: "block",
          position: "relative",
          padding: "35px 35px",
          marginBottom: "12px",
          cursor: "pointer",
          fontSize: "22px",
          userSelect: "none",
          border: "4px solid red",
        },

        inputStyle: {
          position: "absolute",
          opacity: "0",
          cursor: "pointer",
          height: "0",
          width: "0",
        },

        checkmarkStyle: {
          position: "absolute",
          value: "left",
          height: "35px",
          width: "35px",
          backgroundColor: ["green", "red"],
          borderRadius: "50%",
          border: "2px black solid",
        },

        checkmarkHoverStyle: {
          backgroundColor: "#ccc",
        },

        checkmarkAfterStyle: {
          content: "''",
          position: "absolute",
          display: "block",
          left: "11px",
          top: "5px",
          width: "10px",
          height: "15px",
          border: " solid white",
          borderWidth: " 0 5px 5px 0",
          transform: " rotate(45deg)",
        },
      },
    },
  ];
  const [singleActive, setSingleActive] = useState({});
  return (
    <main className="fl  p-24">
      <div className="grid grid-cols-3 gap-4">
        {data.map((item, index) => (
          <Item
            item={item}
            singleActive={singleActive}
            setSingleActive={setSingleActive}
            key={index}
            isChecked
          />
        ))}
      </div>
      <button onClick={(e) => setValues("center")}> center </button>
    </main>
  );
}

const Item = ({ item, singleActive, setSingleActive }) => {
  let {
    containerStyle,
    inputStyle,
    checkmarkStyle,
    checkmarkAfterStyle,
    checkmarkHoverStyle,
  } = item?.style;

  const { value } = checkmarkStyle;

  let positions = {};
  if (value == "left") {
    positions = { top: "0", left: "0", transform: "translate(0, 0)" };
  } else if (value == "center") {
    positions = {
      top: "50%",
      left: "50%",
      transform: "translate(50%, -50%)",
    };
  }
  let activeBg = {};
  if (singleActive.name) {
    const { backgroundColor } = singleActive?.style?.checkmarkStyle;
    activeBg = { backgroundColor: backgroundColor[0] };
  }
  return (
    <label style={containerStyle}>
      <Image src={item.img} width="100" height="100" alt="loading" />
      <p>{item.description}</p>
      <input
        type="checkbox"
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
