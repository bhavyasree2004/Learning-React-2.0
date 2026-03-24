import { useState } from "react";
export default function Input() {
  const [name, changeName] = useState("");
  const [lastName, changeLastName] = useState("");
  const handleLastName = (e) => {
    changeLastName(e.target.value);
  };

  const handleName = (e) => {
    changeName(e.target.value);
  };
  return (
    <>
      <div className="section">
        <Row label="Name">
          <input className="input" onChange={handleName} />
        </Row>
        <Row label="Last Name">
          <input className="input" onChange={handleLastName} />
        </Row>
        <div className="blog-btn">
          <button className="btn">Submit</button>
        </div>
      </div>

      <h2>
        Hello, {name} {lastName}{" "}
      </h2>
    </>
  );
}

function Row(props) {
  const { label } = props;
  return (
    <>
      <lable>
        {label}
        <br />
      </lable>
      {props.children}
      <hr />
    </>
  );
}
