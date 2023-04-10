import { Link } from "react-router-dom";

export default function Card(props) {
  console.log(props);
  return (
    <Link to={`/detail/${props.card.id}`} className="m-4">
      <div className="max-w-sm overflow-hidden shadow-lg border border-neutral-600">
        <div className="h-[400px] w-[400px] flex items-center justify-center">
          <img
            src={`${props.card.images[0]}`}
            alt="imagen"
            className="object-contain h-full items-center justify-center p-16 transform hover:scale-125 transition duration-300"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.card.brand}</div>
          <a href="#">
            {props.card.Laptop ? <h5>{` ${props.card.model}`}</h5> : <></>}
            {props.card.Tablet ? <h5>{` ${props.card.model}`}</h5> : <></>}
            {props.card.CellPhone ? (
              <h5>
                {` ${props.card.CellPhone.name} `} <br></br>{" "}
              </h5>
            ) : (
              <></>
            )}
            {props.card.Television ? (
              <h5>{` ${props.card.Television.name}`}</h5>
            ) : (
              <></>
            )}
          </a>
        </div>
        <div className="flex items-center justify-between px-6 py-4">
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            ${props.card.price}
          </span>
          Ver producto
        </div>
      </div>
    </Link>
  );
}
