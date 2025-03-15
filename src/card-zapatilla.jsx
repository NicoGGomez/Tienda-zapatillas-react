import './card-zapatilla.css'

export function CardZapatilla ({img, nombre, descripcion, precio}) {
    return (
        <>
        <div className="container">
            <p className='nombreProd'>{nombre}</p>
            <img src={img} alt="" />
            <p>{precio} $</p>
            <p>{descripcion}</p>
            <button>comprar</button>
        </div>
        </>
    )
}