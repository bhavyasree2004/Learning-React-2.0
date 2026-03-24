import './items.css';
import Card from "./card.js";

function Items(props) {
  const data = props.data;
  return (
    <>
    <div className="display-items">
      {data.map((item) => (
        <Card displayItem={item}></Card>
      ))}
    </div>
    </>
  );
}

export default Items;
