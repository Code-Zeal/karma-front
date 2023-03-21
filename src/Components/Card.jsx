import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className="max-w-sm">
      <img src={`${props.image}`} alt="imagen" />
      <a href="#">
        {props.laptop ? (
          <h5>{`${props.brand} ${props.model} ${props.laptop.name}`}</h5>
        ) : (
          <></>
        )}
        {props.tablet ? (
          <h5>{`${props.brand} ${props.model} ${props.tablet.name}`}</h5>
        ) : (
          <></>
        )}
        {props.celulares ? (
          <h5>{`${props.brand} ${props.model} ${props.celulares.name}`}</h5>
        ) : (
          <></>
        )}
        {props.television ? (
          <h5>{`${props.brand} ${props.model} ${props.television.name}`}</h5>
        ) : (
          <></>
        )}
      </a>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          {props.price}
        </span>
        {/* {props.laptop ? ( */}
        <Link to={`/detail/${props.idDetailProduct}`}>
          {" "}
          Ver detalles del producto
        </Link>
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
      <div>categoria</div>
    </div>
  );
}
