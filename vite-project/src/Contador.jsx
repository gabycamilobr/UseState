import { useState } from 'react';

export default function Contador() {
 const [textoBotao, settextoBotao] = useState('Rebeca')

  function handleClick(){
    settextoBotao(textoBotao === "Rebeca" ? "Ouro" : "Rebeca")
//     setContador((anterior) => (
//     anterior + 1
// ))
    console.log(contador)
  }

  return (
    <>
      <p>{contador}</p>
      <button onClick={handleClick}>{textoBotao}</button>
    </>
  )
}

