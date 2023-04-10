import Card from "./Card";

export default function Cards(props) {
  return (
    <div class="flex flex-wrap p-16 gap-8">
      {props.product && props.product.map((product) => <Card card={product} />)}
    </div>
  );
}
