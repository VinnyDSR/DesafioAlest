import React from 'react';

export default function Header(props){
    return (
        <header className="block center">
        <div>
            <a className="center">
              <h1>Produtos</h1>  
            </a>
            <button className="btn-add">Adicionar mais produtos</button>
        </div>
        
        </header>
    );
}
