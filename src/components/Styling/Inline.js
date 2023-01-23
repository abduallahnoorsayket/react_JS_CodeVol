import React from "react";

const heading = {
  fontSize: "72px",
  color: "orange",
};

const Inline = () => {
  return (
    <div>
      <h1 style={heading}>Inline</h1>
      <h1 className="error">Error</h1>
      {/* <h1 className={Style.success}>Success</h1> */}
    </div>
  );
};

export default Inline;
