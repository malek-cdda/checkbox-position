"use client";
import Index from "@/components/cutomDesign/Index";
export default function Home() {
  // const data = [
  //   {
  //     name: "checkbox-5",
  //     img: "/world.jpg",
  //     label: "worldlevel",
  //     value: "worldlevel",
  //     description: "my first react and next project  ",
  //     type: "checkbox",
  //     style: {
  //       containerStyle: {
  //         display: "block",
  //         position: "relative",
  //         padding: "5px 5px",
  //         marginBottom: "12px",
  //         cursor: "pointer",
  //         fontSize: "22px",
  //         userSelect: "none",
  //         border: "4px solid red",
  //       },

  //       inputStyle: {
  //         position: "absolute",
  //         opacity: "0",
  //         cursor: "pointer",
  //         height: "0",
  //         width: "0",
  //       },

  //       checkmarkStyle: {
  //         position: "absolute",
  //         value: "top-right",
  //         height: "40px",
  //         width: "40px",
  //         backgroundColor: ["green", "red"],
  //         borderRadius: "50%",
  //         border: "2px black solid",
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //       },

  //       checkmarkHoverStyle: {
  //         backgroundColor: "#ccc",
  //       },

  //       checkmarkAfterStyle: {
  //         content: "''",
  //         position: "absolute",
  //         display: "block",
  //         width: "10px",
  //         height: "15px",
  //         border: " solid rgb(204, 204, 204)",
  //         borderWidth: " 0 5px 5px 0",
  //         transform: " rotate(45deg)",
  //       },
  //     },
  //   },
  //   {
  //     name: "checkbox-2",
  //     img: "/blackhole.jpg",
  //     label: "blacklevel2",
  //     value: "blacklevel12",
  //     type: "checkbox",
  //     style: {
  //       containerStyle: {
  //         display: "block",
  //         position: "relative",
  //         padding: "5px 5px",
  //         marginBottom: "12px",
  //         cursor: "pointer",
  //         fontSize: "22px",
  //         userSelect: "none",
  //         border: "4px solid red",
  //       },

  //       inputStyle: {
  //         position: "absolute",
  //         opacity: "0",
  //         cursor: "pointer",
  //         height: "0",
  //         width: "0",
  //       },

  //       checkmarkStyle: {
  //         position: "absolute",
  //         value: "top-left",
  //         height: "35px",
  //         width: "35px",
  //         backgroundColor: ["green", "red"],
  //         borderRadius: "50%",
  //         border: "2px black solid",
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //       },

  //       checkmarkHoverStyle: {
  //         backgroundColor: "#ccc",
  //       },

  //       checkmarkAfterStyle: {
  //         content: "''",
  //         position: "absolute",
  //         display: "block",
  //         width: "10px",
  //         height: "15px",
  //         border: " solid rgb(204, 204, 204)",
  //         borderWidth: " 0 5px 5px 0",
  //         transform: " rotate(45deg)",
  //       },
  //     },
  //   },
  //   {
  //     name: "checkbox-3",
  //     img: "/blackhole.jpg",
  //     value: "blacklevel3",
  //     type: "checkbox",
  //     style: {
  //       containerStyle: {
  //         display: "block",
  //         position: "relative",
  //         padding: "5px 5px",
  //         marginBottom: "12px",
  //         cursor: "pointer",
  //         fontSize: "22px",
  //         userSelect: "none",
  //         border: "4px solid red",
  //       },

  //       inputStyle: {
  //         position: "absolute",
  //         opacity: "0",
  //         cursor: "pointer",
  //         height: "0",
  //         width: "0",
  //       },

  //       checkmarkStyle: {
  //         position: "absolute",
  //         value: "center",
  //         height: "135px",
  //         width: "135px",
  //         backgroundColor: ["green", "red"],
  //         borderRadius: "50%",
  //         border: "2px black solid",
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //       },

  //       checkmarkHoverStyle: {
  //         backgroundColor: "#ccc",
  //       },
  //       checkmarkAfterStyle: {
  //         content: "''",
  //         position: "absolute",
  //         display: "block",
  //         width: "10px",
  //         height: "15px",
  //         border: " solid rgb(204, 204, 204)",
  //         borderWidth: " 0 5px 5px 0",
  //         transform: " rotate(45deg)",
  //         // backgroundColor: "rgb(204, 204, 204)",
  //       },
  //     },
  //   },
  //   {
  //     name: "checkbox-6",
  //     img: "/blackhole.jpg",
  //     value: "blacklevel3",
  //     type: "radio",
  //     label: "worldlevel",

  //     description: "my first react and next project  ",
  //     style: {
  //       containerStyle: {
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         position: "relative",
  //         padding: "5px 5px",
  //         marginBottom: "12px",
  //         cursor: "pointer",
  //         fontSize: "22px",
  //         userSelect: "none",
  //         border: "4px solid red",
  //       },

  //       inputStyle: {
  //         position: "absolute",
  //         opacity: "0",
  //         cursor: "pointer",
  //         height: "0",
  //         width: "0",
  //       },

  //       checkmarkStyle: {
  //         position: "absolute",
  //         value: "center",
  //         height: "45px",
  //         width: "45px",
  //         backgroundColor: ["green", "red"],
  //         borderRadius: "50%",
  //         border: "2px black solid",
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //       },

  //       checkmarkHoverStyle: {
  //         backgroundColor: "#ccc",
  //       },

  //       checkmarkAfterStyle: {
  //         content: "''",
  //         position: "absolute",
  //         display: "block",
  //         width: "15px",
  //         height: "15px",
  //         border: " solid rgb(204, 204, 204)",
  //         borderWidth: " 5px 5px 5px 5px",
  //         borderRadius: "50%",
  //         backgroundColor: "rgb(204, 204, 204)",
  //       },
  //     },
  //   },
  //   {
  //     name: "checkbox-8",
  //     // img: "/blackhole.jpg",
  //     value: "blacklevel3",
  //     label: "cometo",
  //     description: "come to my website",
  //     type: "checkbox",
  //     style: {
  //       containerStyle: {
  //         display: "flex",
  //         position: "relative",
  //         padding: "5px 5px",
  //         marginBottom: "12px",
  //         cursor: "pointer",
  //         fontSize: "22px",
  //         userSelect: "none",
  //         border: "4px solid red",
  //         justifyContent: "justify-end",
  //       },

  //       inputStyle: {
  //         position: "absolute",
  //         opacity: "0",
  //         cursor: "pointer",
  //         height: "0",
  //         width: "0",
  //       },

  //       checkmarkStyle: {
  //         position: "absolute",
  //         value: "center",
  //         height: "35px",
  //         width: "35px",
  //         backgroundColor: ["green", "red"],
  //         borderRadius: "50%",
  //         border: "2px black solid",
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //       },

  //       checkmarkHoverStyle: {
  //         backgroundColor: "#ccc",
  //       },

  //       checkmarkAfterStyle: {
  //         content: "''",
  //         position: "absolute",
  //         display: "block",
  //         width: "10px",
  //         height: "15px",
  //         border: " solid rgb(204, 204, 204)",
  //         borderWidth: " 0 5px 5px 0",
  //         transform: " rotate(45deg)",
  //         // backgroundColor: "rgb(204, 204, 204)",
  //       },
  //     },
  //   },
  // ];
  // const [singleActive, setSingleActive] = useState({});
  // function showCase(key) {
  //   switch (key) {
  //     case "radio":
  //       return <RadioBtn />;
  //     case "checkbox":
  //       return <CheckBtn />;
  //     default:
  //       break;
  //   }
  // }
  // const use = useSelector((state) => state);

  return (
    <main className="fl  p-24">
      <Index />
    </main>
  );
}

// const Item = ({ item, singleActive, setSingleActive }) => {
//   let {
//     containerStyle,
//     inputStyle,
//     checkmarkStyle,
//     checkmarkAfterStyle,
//     checkmarkHoverStyle,
//   } = item?.style;

//   const { value } = checkmarkStyle;

//   let positions = {};
//   if (value == "top-right") {
//     positions = { top: "0", right: "0", transform: "translate(0, 0)" };
//   } else if (value == "top-left") {
//     positions = { top: "0", left: "0", transform: "translate(0, 0)" };
//   } else if (value == "bottom-left") {
//     positions = { top: "0", left: "0", transform: "translate(0, 0)" };
//   } else if (value == "center") {
//     positions = {
//       top: "50%",
//       left: "50%",
//       transform: "translate(-50%, -50%)",
//     };
//   }
//   let activeBg = {};
//   if (singleActive.name) {
//     const { backgroundColor } = singleActive?.style?.checkmarkStyle;
//     activeBg = { backgroundColor: backgroundColor[0] };
//   }
//   return (
//     <label style={containerStyle}>
//       <Image
//         src={item?.img}
//         width="100"
//         height="100"
//         alt="loading"
//         className="w-full"
//       />
//       <div>
//         <p>{item?.label}</p>
//         <p>{item?.description}</p>
//       </div>
//       <input
//         type={item.type}
//         checked={item.name == singleActive.name}
//         onChange={() => setSingleActive(item)}
//         style={inputStyle}
//       />
//       {item.name == singleActive.name ? (
//         <span
//           style={{
//             ...checkmarkStyle,
//             ...positions,
//             ...checkmarkHoverStyle,
//             ...activeBg,
//           }}
//         >
//           <span style={checkmarkAfterStyle}></span>
//         </span>
//       ) : (
//         <span
//           style={{
//             ...checkmarkStyle,
//             ...positions,
//             ...checkmarkHoverStyle,
//           }}
//         >
//           <span style={checkmarkAfterStyle}></span>
//         </span>
//       )}
//     </label>
//   );
// };
