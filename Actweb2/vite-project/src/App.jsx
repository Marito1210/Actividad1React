import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Contador from "./Component/Contador";
import Card from "./Component/Card";
import { BarbieCharacter } from "./data";
import "./App.css";

function App() {
  const [count, setcount] = useState(0)
  const [data, setData] = useState([])

  const onClickIncrementar = () => {
    setcount((prevState) => prevState + 1);
  };

  const onClickDescrementar = () => {
    setcount((prevState) => (prevState > 0 ? prevState - 1 : 0));
  };

  const onClickReset = () => {
    setcount(0);
  };


   useEffect(() => {
    setData(BarbieCharacter);
  }, []);

  return (
    <>
      <div style={{ marginTop: "2rem" }}>
        <div className="row">
          {data.map((x) => (
            <div className="col" key={x.id}>
              <Card dataList={x} count={count} />
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
        }}

        
      >
          <Contador
          count={count}
          data={data}
          onClickIncrementar={onClickIncrementar}
          onClickDescrementar={onClickDescrementar}
          onClickReset={onClickReset}
        />
      </div>
    </>
  );
}

export default App;
