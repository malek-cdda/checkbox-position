import Image from "next/image";
import { useState } from "react";

const Index = () => {
  const [value, setValues] = useState();
  const data = [
    {
      label: "radio",
      type: "checkbox",
      styles: {
        display: "flex",
        justifyContent: "space-between",
      },
      data: [
        {
          img: "next.svg",
          name: "radio1",
          value: "radio1",
        },
        {
          img: "next.svg",
          name: "radio2",
          value: "radio2",
        },
        {
          img: "next.svg",
          name: "radio3",
          value: "radio3",
        },
      ],
    },
    {
      label: "myradio",
      type: "checkbox",
      styles: {
        display: "grid",
        gridTemplateColumns: "auto auto auto auto",
      },
      data: [
        {
          img: "next.svg",
          name: "radio5",
          value: "radio5",
        },
        {
          img: "next.svg",
          name: "radio6",
          value: "radio6",
        },
        {
          img: "next.svg",
          name: "radio7",
          value: "radio7",
        },
        {
          img: "next.svg",
          name: "radio8",
          value: "radio8",
        },
      ],
    },
    {
      label: "myradiobtn",
      type: "checkbox",
      styles: {
        display: "grid",
        gridTemplateColumns: "auto auto auto auto",
      },
      data: [
        {
          img: "next.svg",
          name: "radio19",
          value: "radio19",
        },
        {
          img: "next.svg",
          name: "radio18",
          value: "radio18",
        },
      ],
    },
  ];
  const [checkValue, setCheckValue] = useState([]);
  console.log(checkValue);
  const handleCheckValue = (e) => {
    if (checkValue.some((item) => item.label === e.label)) {
      const newValue = checkValue.map((item) => {
        if (item.label == e.label) {
          return e;
        }
        return item;
      });
      setCheckValue(newValue);
    } else {
      setCheckValue([...checkValue, e]);
    }
  };

  return (
    <div className="container mx-auto">
      {data.map((items, index) => (
        <div style={items.styles} key={index}>
          {items.data.map((item, index) => (
            <div key={index} className="border border-2 w-full mt-5">
              <Image src={item.img} alt="loading..." width={100} height={100} />
              <p>{item.name}</p>
              <input
                type="radio"
                onChange={(e) => {
                  handleCheckValue({ ...item, label: items.label });
                }}
                checked={checkValue.some((i) => i.name === item.name)}
                className="bg-red-900 color-red-800 border-red border checked:bg-red-500"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default Index;
