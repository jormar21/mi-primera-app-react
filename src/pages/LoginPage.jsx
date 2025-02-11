import React, { useState } from "react";

export default function LoginPage() {
  /// Asigna texto a variable a partir de un parametro
  const [textoIngresado, setText] = useState();
  const textOnChange = (event) => {
    setText(event.target.value);
  };

  /// Al dar click asignar el valor de la variable ''
  const [textoGuardado, setUpdated] = useState();
  const buttonOnClick = () => {
    setUpdated(textoIngresado);
  };

  return (
    <div class="fondo">
      <h1>LOGIN</h1>
      <input type="text" value={textoIngresado} onChange={textOnChange}></input>
      <button onClick={buttonOnClick}>Actualizar</button>
      <p>
        <strong>Texto Input:</strong> {textoIngresado}
      </p>
      <p>
        <strong>Texto Actualizado:</strong> {textoGuardado}
      </p>
    </div>
  );
}
