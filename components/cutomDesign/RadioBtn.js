const RadioBtn = ({ data }) => {
  return (
    <div style={data?.style}>
      {data?.data?.map((item, index) => (
        <div key={index}>
          <h1>{item.name}</h1>
        </div>
      ))}
    </div>
  );
};
export default RadioBtn;
