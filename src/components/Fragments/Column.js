import React from "react";

function Column() {
  const items = [
    { id: 1, title: "lorem ipsom" },
    { id: 2, title: " Sit Ament" },
  ];
  return (
    <React.Fragment>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <h1>Title</h1>
          <p>{item.title}</p>
        </React.Fragment>
      ))}
      {/* <td>Abdullah</td>
      <td>sayket</td>
      <td>Noor</td> */}
    </React.Fragment>
  );
}

export default Column;
