import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  const [diasRestantes, setDiasRestantes] = useState(null);
  useEffect(() => {
    if (props.card?.ProductDiscount) {
      const hoy = new Date();
      const fechaObjetivoEnTiempo = new Date(
        props.card.ProductDiscount.endingDate
      );
      const diferenciaEnTiempo = fechaObjetivoEnTiempo - hoy;
      const diasRestantes = Math.ceil(diferenciaEnTiempo / (1000 * 3600 * 24)); // convertir a días y redondear hacia arriba
      setDiasRestantes(diasRestantes);
    }
  }, [props]);

  return (
    <Link to={`/detail/${props.card.id}`} className="m-4">
      <div className="max-w-sm overflow-hidden shadow-lg border border-neutral-600 h-[600px]">
        <div className="h-[350px] w-[350px] flex items-center justify-center">
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
        <hr />
        <div className="flex flex-col justify-between items-center p-4">
          {props.card.ProductDiscount && diasRestantes > -1 ? (
            <div className="flex flex-col justify-center items-center">
              <div className="flex justify-center items-center space-x-2">
                <span className="text-gray-500 line-through">
                  ${props.card.price}
                </span>
                <div className="bg-red-500 text-white rounded-md py-1 px-2 text-sm">
                  {props.card.ProductDiscount.discountValue}%
                </div>
                <span className="font-bold text-green-500">
                  $
                  {(
                    props.card.price -
                    (props.card.price *
                      props.card.ProductDiscount.discountValue) /
                      100
                  ).toFixed(2)}
                </span>
              </div>
              <p className="text-gray-500 mt-2">
                {diasRestantes === 0
                  ? `¡Esta oferta termina hoy!`
                  : diasRestantes === 1
                  ? `¡Esta oferta termina mañana!`
                  : `¡Esta oferta termina en ${diasRestantes} dias`}
              </p>
            </div>
          ) : (
            <span className="font-bold text-gray-500">${props.card.price}</span>
          )}
          <button className="bg-neutral-900 text-white rounded-md py-2 px-4 mt-4 hover:bg-neutral-500">
            Ver producto
          </button>
        </div>
      </div>
    </Link>
  );
}
