const CheckOutCard = (props) => {
  return (
    <li class="flex items-center gap-4 m-2 w-full border border-neutral-900">
      <img src={props.images} alt="" class="h-20 w-20 object-cover" />

      <div>
        <h3 class="text-sm text-black  font-light">{props.model}</h3>
      </div>

      <div class="flex flex-1 items-center justify-end gap-8 mr-2">
        <label className="text-sm font-light">
          Cantidad:{" "}
          <span className="m-2 bg-white border border-neutral-900 text-neutral-900 py-1 px-2 rounded-sm hover:bg-neutral-900 hover:text-white">
            {props.amount}
          </span>
        </label>
      </div>
    </li>
  );
};

export default CheckOutCard;
