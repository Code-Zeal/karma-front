export default function Card(props) {
  return (
    <div class="max-w-sm overflow-hidden shadow-lg border border-neutral-600">
      <div class="h-[300px] bg-white flex items-center justify-center">
        <img
          class="object-contain p-16"
          src={`${props.images}`}
          alt="Product Image"
        />
      </div>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{props.brand}</div>
        <p class="text-gray-700 text-base">{props.model}</p>
        <p class="text-gray-700 text-base mt-2">${props.price}</p>
      </div>
    </div>
  );
}
