import React from "react";

// CSS en globals, pero afecta a el resto

/* styles/globals.css */
// * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }
  
//   body, html {
//     height: 100%;
//     overflow: hidden;
//     font-family: Arial, sans-serif;
//   }
  
//   /* Contenedor principal */
//   .container {
//     position: relative;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     height: 80vh;
//     width: 700px;
//     background-color: white;
//     overflow: hidden;
//   }
  
//   /* Título principal */
//   .title {
//     font-size: 6rem;
//     color: #333;
//     position: relative;
//     z-index: 0;
//   }
  
//   /* Superposición de cuadrados */
//   .overlay {
//     position: absolute;
//     top: 0;
//     left: 0;
//     display: grid;
//     grid-template-columns: repeat(auto-fill, 200px);
//     grid-template-rows: repeat(auto-fill, 200px);
//     width: 100%;
//     height: 100%;
//     z-index: 1;
//   }
  
//   /* Cuadrados animados */
//   .square {
//     width: 200px;
//     height: 200px;
//     background-color: red;
//     opacity: 0;
//     animation: fadeIn 1s ease-in-out forwards; /* Duración de la animación de cada cuadrado */
//   }
  
//   /* Definición de la animación */
//   @keyframes fadeIn {
//     0% { opacity: 0; }
//     100% { opacity: 1; }
//   }
  

const PruebaRectangulos = () => {
    const numRows = 10; // Número de filas de cuadrados
    const numCols = 10; // Número de columnas de cuadrados
    const squares = Array.from({ length: numRows * numCols });
  
    return (
      <div className="container">
        <h1 className="title">GING</h1>
        <div className="overlay">
          {squares.map((_, i) => (
            <div
              key={i}
              className="square"
              style={{
                animationDelay: `${(i % numCols) * 0.2 + Math.floor(i / numCols) * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>
    );
};

export default PruebaRectangulos;
