import React from 'react';
import Product from './Product';

export default function Main(props){
    const {products} = props;
    return <main className="block col-1 center">
        <h2>Produtos</h2>
    <div className="table row center">
        {products.map((product) =>(<Product key={products.id} product={product}></Product>
        ))}
    </div>



    </main>
}
