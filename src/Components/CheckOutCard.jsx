const CheckOutCard = (props) => {
  return (
    <li class="flex items-center gap-4">
      <img src={props.images} alt="" class="h-16 w-16 rounded object-cover" />

      <div>
        <h3 class="text-sm text-gray-900">{props.model}</h3>
      </div>

      <div class="flex flex-1 items-center justify-end gap-8">
        <label>
          Cantidad:{" "}
          <span className="font-semibold bg-black text-white px-2 py-1 rounded-lg">
            {props.amount}
          </span>
        </label>
      </div>
    </li>
  );
};

export default CheckOutCard;
