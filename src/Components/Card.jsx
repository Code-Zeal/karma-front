import { Link } from "react-router-dom";

export default function Card(props) {
  console.log(props);
  return (
    <div className="max-w-sm">
      <img src={`${props.card.images[0]}`} alt="imagen" />
      <a href="#">
        {props.card.Laptop ? <h5>{` ${props.card.Laptop.name}`}</h5> : <></>}
        {props.card.Tablet ? <h5>{` ${props.card.Tablet.name}`}</h5> : <></>}
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
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          ${props.card.price}
        </span>
        {/* {props.laptop ? ( */}
        <Link to={`/detail/${props.card.id}`}> Ver detalles del producto</Link>
        {/* ) : (
          <></>
        )} */}
        {/* {props.tablet ? (
          <Link to={`/detail/${props.tablet.ProductId}`}>
            {" "}
            Ver detalles del producto
          </Link>
        ) : (
          <></>
        )}
        {props.celulares ? (
          <Link to={`/detail/${props.celulares.ProductId}`}>
            {" "}
            Ver detalles del producto
          </Link>
        ) : (
          <></>
        )}
        {props.tv ? (
          <Link to={`/detail/${props.tv.ProductId}`}>
            {" "}
            Ver detalles del producto
          </Link>
        ) : (
          <></>
        )} */}
      </div>
      <div>
        {props.card.Laptop ? <span>{`Laptop`}</span> : <></>}
        {props.card.Tablet ? <span>{`Tablet`}</span> : <></>}
        {props.card.CellPhone ? <span>{`Celulares`}</span> : <></>}
        {props.card.Television ? <span>{`Television`}</span> : <></>}
      </div>
    </div>
  );
}
