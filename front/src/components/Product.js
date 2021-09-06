import React from 'react'

export default function Product(props) {
    const{product} = props; 
    return (
        <div className="product-block">
            <h3>{product.name}</h3>
            <img className="small" src={product.image} alt={product.name}></img>
            <div>R${product.price}</div>
            <div>
                <button className="btn-refresh">Atualizar</button>
                <button className="btn-delete">Deletar</button>


            </div>
        </div>
    )
}
