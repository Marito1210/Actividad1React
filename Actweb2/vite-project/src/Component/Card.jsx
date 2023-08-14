// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

export default function Card({ dataList, count }) {
  return (
    <div className="card" style={{ width: "12rem" }}>
      <img
        src={dataList.image}
        className="card-img-top"
        style={{ width: "100%", objectFit: "cover", height: "300px" }}
        alt="..."
      />
      <div className="card-body">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "14px" }}>{dataList.title}</p>
          <p style={{ fontSize: "10px" }}>Contador : {count}</p>
        </div>
        <p style={{ fontSize: "12px", textAlign: "justify" }}>
          {dataList.description}
        </p>
        <a href="#" className="btn btn-info" title="VER MAS">
          Ver más..
        </a>
      </div>
    </div>
  );
}
// Validación de PropTypes
Card.propTypes = {
    dataList: PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
    count: PropTypes.number.isRequired,
  };