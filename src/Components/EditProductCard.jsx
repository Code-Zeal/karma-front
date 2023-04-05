import React from "react";

export default function EditProductCard(props) {
  return (
    <section>
      <h3>{props.name}</h3>
      <p>{props.price}</p>
    </section>
  );
}
