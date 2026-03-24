import "./heading.css";

function Heading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className="main-heading">Trip Planner</h1>
    </div>
  );
}

export default Heading;
