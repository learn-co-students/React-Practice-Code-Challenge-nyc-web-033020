import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = (props) => {
  const sushi = props.sushi;
  return (
    <Fragment>
      <div className="belt">
        {sushi.map((sushi) => (
          <Sushi key={sushi.id} sushi={sushi} handleTable={props.handleTable} />
        ))}
        <MoreButton moreSushi={props.moreSushi} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;

