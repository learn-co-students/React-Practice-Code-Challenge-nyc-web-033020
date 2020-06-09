import React, { Fragment } from "react";
import Form from "../components/form";

const Table = (props) => {
  const renderPlates = (array) => {
    return array.map((x, index) => {
      return (
        <div
          key={props.plates[index].id}
          className="empty-plate"
          style={{ top: -7 * index }}
        />
      );
    });
  };

  return (
    <Fragment>
      <h1 className="remaining">You have: ${props.money} remaining!</h1>
      <div className="table">
        <div className="stack">{renderPlates(props.plates)}</div>
      </div>
      <Form depositMoney={props.depositMoney} />
    </Fragment>
  );
};

export default Table;

