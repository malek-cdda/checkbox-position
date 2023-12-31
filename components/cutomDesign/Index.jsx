import CheckBtn from "./CheckBtn";
import RadioBtn from "./RadioBtn";

const Index = () => {
  const data = [
    {
      type: "checkbox",
      style: {
        display: "flex",
        justifyContent: "space-between",
      },
      select: "",
      data: [
        {
          name: "checkbox-1",
          value: "checkbox-1",
          type: "checkbox",
          img: "/blackhole.jpg",
          style: {
            position: {
              bottom_right: {
                value: "bottom-right",
                bottom: "0%",
                right: "0",
                transform: "translate(0, 0)",
              },
              center: {
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              },
              bottom_left: {
                bottom: "0%",
                left: "0",
                transform: "translate(0, 0)",
              },
              top_left: {
                top: "0%",
                left: "0",
                transform: "translate(0, 0)",
              },
              top_right: {
                top: "0%",
                right: "0",
                transform: "translate(0, 0)",
              },
            },
            containerStyle: {
              display: "block",
              position: "relative",
              padding: "5px 5px",
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
              value: "top_left",
              height: "40px",
              width: "40px",
              backgroundColor: ["green", "red"],
              borderRadius: "50%",
              border: "2px black solid",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },

            checkmarkHoverStyle: {
              backgroundColor: "#ccc",
            },

            checkmarkAfterStyle: {
              content: "''",
              position: "absolute",
              display: "block",
              width: "10px",
              height: "15px",
              border: " solid rgb(204, 204, 204)",
              borderWidth: " 0 5px 5px 0",
              transform: " rotate(45deg)",
            },
          },
        },
        {
          name: "checkbox-2",
          value: "checkbox-2",
          type: "checkbox",
          img: "/blackhole.jpg",
          style: {
            position: {
              bottom_right: {
                value: "bottom-right",
                bottom: "0%",
                right: "0",
                transform: "translate(0, 0)",
              },
              center: {
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              },
              bottom_left: {
                bottom: "0%",
                left: "0",
                transform: "translate(0, 0)",
              },
              top_left: {
                top: "0%",
                left: "0",
                transform: "translate(0, 0)",
              },
              top_right: {
                top: "0%",
                right: "0",
                transform: "translate(0, 0)",
              },
            },
            containerStyle: {
              display: "block",
              position: "relative",
              padding: "5px 5px",
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
              value: "top_right",
              height: "40px",
              width: "40px",
              backgroundColor: ["green", "red"],
              borderRadius: "50%",
              border: "2px black solid",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },

            checkmarkHoverStyle: {
              backgroundColor: "#ccc",
            },

            checkmarkAfterStyle: {
              content: "''",
              position: "absolute",
              display: "block",
              width: "10px",
              height: "15px",
              border: " solid rgb(204, 204, 204)",
              borderWidth: " 0 5px 5px 0",
              transform: " rotate(45deg)",
            },
          },
        },
        {
          name: "checkbox-3",
          value: "checkbox-2",
          type: "checkbox",
          img: "/blackhole.jpg",
          style: {
            position: {
              bottom_right: {
                value: "bottom-right",
                bottom: "0%",
                right: "0",
                transform: "translate(0, 0)",
              },
              center: {
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              },
              bottom_left: {
                bottom: "0%",
                left: "0",
                transform: "translate(0, 0)",
              },
              top_left: {
                top: "0%",
                left: "0",
                transform: "translate(0, 0)",
              },
              top_right: {
                top: "0%",
                right: "0",
                transform: "translate(0, 0)",
              },
            },
            containerStyle: {
              display: "block",
              position: "relative",
              padding: "5px 5px",
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
              value: "bottom_right",
              height: "40px",
              width: "40px",
              backgroundColor: ["green", "red"],
              borderRadius: "50%",
              border: "2px black solid",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },

            checkmarkHoverStyle: {
              backgroundColor: "#ccc",
            },

            checkmarkAfterStyle: {
              content: "''",
              position: "absolute",
              display: "block",
              width: "10px",
              height: "15px",
              border: " solid rgb(204, 204, 204)",
              borderWidth: " 0 5px 5px 0",
              transform: " rotate(45deg)",
            },
          },
        },
        {
          name: "checkbox-4",
          value: "checkbox-2",
          type: "checkbox",
          img: "/blackhole.jpg",
          style: {
            position: {
              bottom_right: {
                value: "bottom-right",
                bottom: "0%",
                right: "0",
                transform: "translate(0, 0)",
              },
              center: {
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              },
              bottom_left: {
                bottom: "0%",
                left: "0",
                transform: "translate(0, 0)",
              },
              top_left: {
                top: "0%",
                left: "0",
                transform: "translate(0, 0)",
              },
              top_right: {
                top: "0%",
                right: "0",
                transform: "translate(0, 0)",
              },
            },
            containerStyle: {
              display: "block",
              position: "relative",
              padding: "5px 5px",
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
              value: "bottom_left",
              height: "40px",
              width: "40px",
              backgroundColor: ["green", "red"],
              borderRadius: "50%",
              border: "2px black solid",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },

            checkmarkHoverStyle: {
              backgroundColor: "#ccc",
            },

            checkmarkAfterStyle: {
              content: "''",
              position: "absolute",
              display: "block",
              width: "10px",
              height: "15px",
              border: " solid rgb(204, 204, 204)",
              borderWidth: " 0 5px 5px 0",
              transform: " rotate(45deg)",
            },
          },
        },
        {
          name: "checkbox-5",
          value: "checkbox-2",
          type: "checkbox",
          img: "/blackhole.jpg",
          style: {
            position: {
              bottom_right: {
                value: "bottom-right",
                bottom: "0%",
                right: "0",
                transform: "translate(0, 0)",
              },
              center: {
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              },
              bottom_left: {
                bottom: "0%",
                left: "0",
                transform: "translate(0, 0)",
              },
              top_left: {
                top: "0%",
                left: "0",
                transform: "translate(0, 0)",
              },
              top_right: {
                top: "0%",
                right: "0",
                transform: "translate(0, 0)",
              },
            },
            containerStyle: {
              display: "block",
              position: "relative",
              padding: "5px 5px",
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
              height: "40px",
              width: "40px",
              backgroundColor: ["green", "red"],
              borderRadius: "50%",
              border: "2px black solid",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },

            checkmarkHoverStyle: {
              backgroundColor: "#ccc",
            },

            checkmarkAfterStyle: {
              content: "''",
              position: "absolute",
              display: "block",
              width: "10px",
              height: "15px",
              border: " solid rgb(204, 204, 204)",
              borderWidth: " 0 5px 5px 0",
              transform: " rotate(45deg)",
            },
          },
        },
      ],
    },
    {
      type: "radio",
      select: "multipl",
      style: {
        display: "grid",
        gridGap: "3px",
        gridTemplateColumns: "repeat(3, 1fr)",
      },
      data: [
        {
          name: "radio-1",
          value: "radio-2",
          type: "radio",
          img: "/blackhole.jpg",
          style: {
            position: {
              bottom_right: {
                value: "bottom-right",
                bottom: "0%",
                right: "0",
                transform: "translate(0, 0)",
              },
              center: {
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              },
              bottom_left: {
                bottom: "0%",
                left: "0",
                transform: "translate(0, 0)",
              },
              top_left: {
                top: "0%",
                left: "0",
                transform: "translate(0, 0)",
              },
              top_right: {
                top: "0%",
                right: "0",
                transform: "translate(0, 0)",
              },
            },
            containerStyle: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              padding: "5px 5px",
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
              value: "top_right",
              height: "45px",
              width: "45px",
              backgroundColor: ["green", "red"],
              borderRadius: "50%",
              border: "2px black solid",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },

            checkmarkHoverStyle: {
              backgroundColor: "#ccc",
            },

            checkmarkAfterStyle: {
              content: "''",
              position: "absolute",
              display: "block",
              width: "15px",
              height: "15px",
              border: " solid rgb(204, 204, 204)",
              borderWidth: " 5px 5px 5px 5px",
              borderRadius: "50%",
              backgroundColor: "rgb(204, 204, 204)",
            },
          },
        },
        {
          name: "radio-2",
          value: "radio-2",
          type: "radio",
          img: "/blackhole.jpg",
          style: {
            position: {
              bottom_right: {
                value: "bottom-right",
                bottom: "0%",
                right: "0",
                transform: "translate(0, 0)",
              },
              center: {
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              },
              bottom_left: {
                bottom: "0%",
                left: "0",
                transform: "translate(0, 0)",
              },
              top_left: {
                top: "0%",
                left: "0",
                transform: "translate(0, 0)",
              },
              top_right: {
                top: "0%",
                right: "0",
                transform: "translate(0, 0)",
              },
            },
            containerStyle: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              padding: "5px 5px",
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
              value: "top_left",
              height: "45px",
              width: "45px",
              backgroundColor: ["green", "red"],
              borderRadius: "50%",
              border: "2px black solid",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },

            checkmarkHoverStyle: {
              backgroundColor: "#ccc",
            },

            checkmarkAfterStyle: {
              content: "''",
              position: "absolute",
              display: "block",
              width: "15px",
              height: "15px",
              border: " solid rgb(204, 204, 204)",
              borderWidth: " 5px 5px 5px 5px",
              borderRadius: "50%",
              backgroundColor: "rgb(204, 204, 204)",
            },
          },
        },
        {
          name: "radio-3",
          value: "radio-2",
          type: "radio",
          img: "/blackhole.jpg",
          style: {
            position: {
              bottom_right: {
                value: "bottom-right",
                bottom: "0%",
                right: "0",
                transform: "translate(0, 0)",
              },
              center: {
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              },
              bottom_left: {
                bottom: "0%",
                left: "0",
                transform: "translate(0, 0)",
              },
              top_left: {
                top: "0%",
                left: "0",
                transform: "translate(0, 0)",
              },
              top_right: {
                top: "0%",
                right: "0",
                transform: "translate(0, 0)",
              },
            },
            containerStyle: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              padding: "5px 5px",
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
              value: "bottom_left",
              height: "45px",
              width: "45px",
              backgroundColor: ["green", "red"],
              borderRadius: "50%",
              border: "2px black solid",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },

            checkmarkHoverStyle: {
              backgroundColor: "#ccc",
            },

            checkmarkAfterStyle: {
              content: "''",
              position: "absolute",
              display: "block",
              width: "15px",
              height: "15px",
              border: " solid rgb(204, 204, 204)",
              borderWidth: " 5px 5px 5px 5px",
              borderRadius: "50%",
              backgroundColor: "rgb(204, 204, 204)",
            },
          },
        },
        {
          name: "radio-4",
          value: "radio-2",
          type: "radio",
          img: "/blackhole.jpg",
          style: {
            position: {
              bottom_right: {
                value: "bottom-right",
                bottom: "0%",
                right: "0",
                transform: "translate(0, 0)",
              },
              center: {
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              },
              bottom_left: {
                bottom: "0%",
                left: "0",
                transform: "translate(0, 0)",
              },
              top_left: {
                top: "0%",
                left: "0",
                transform: "translate(0, 0)",
              },
              top_right: {
                top: "0%",
                right: "0",
                transform: "translate(0, 0)",
              },
            },
            containerStyle: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              padding: "5px 5px",
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
              value: "bottom_right",
              height: "45px",
              width: "45px",
              backgroundColor: ["green", "red"],
              borderRadius: "50%",
              border: "2px black solid",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },

            checkmarkHoverStyle: {
              backgroundColor: "#ccc",
            },

            checkmarkAfterStyle: {
              content: "''",
              position: "absolute",
              display: "block",
              width: "15px",
              height: "15px",
              border: " solid rgb(204, 204, 204)",
              borderWidth: " 5px 5px 5px 5px",
              borderRadius: "50%",
              backgroundColor: "rgb(204, 204, 204)",
            },
          },
        },
        {
          name: "radio-5",
          value: "radio-2",
          type: "radio",
          img: "/blackhole.jpg",
          style: {
            position: {
              bottom_right: {
                value: "bottom-right",
                bottom: "0%",
                right: "0",
                transform: "translate(0, 0)",
              },
              center: {
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              },
              bottom_left: {
                bottom: "0%",
                left: "0",
                transform: "translate(0, 0)",
              },
              top_left: {
                top: "0%",
                left: "0",
                transform: "translate(0, 0)",
              },
              top_right: {
                top: "0%",
                right: "0",
                transform: "translate(0, 0)",
              },
            },
            containerStyle: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              padding: "5px 5px",
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
              height: "45px",
              width: "45px",
              backgroundColor: ["green", "red"],
              borderRadius: "50%",
              border: "2px black solid",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },

            checkmarkHoverStyle: {
              backgroundColor: "#ccc",
            },

            checkmarkAfterStyle: {
              content: "''",
              position: "absolute",
              display: "block",
              width: "15px",
              height: "15px",
              border: " solid rgb(204, 204, 204)",
              borderWidth: " 5px 5px 5px 5px",
              borderRadius: "50%",
              backgroundColor: "rgb(204, 204, 204)",
            },
          },
        },
      ],
    },
  ];
  const showAllField = (key, data) => {
    switch (key) {
      case "checkbox":
        return <CheckBtn data={data} />;
      case "radio":
        return <RadioBtn data={data} />;
      default:
        break;
    }
  };
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>{showAllField(item?.type, item)}</div>
      ))}
    </div>
  );
};
export default Index;
