"use client"
import React, { useEffect, useState } from 'react';
import '../styles/styles.css';

const Project1 = () => {
  const [comparisons, setComparisons] = useState([]);
  const [inputValues, setInputValues] = useState({
    numeroUm: '',
    stringUm: '',
    numeroTrinta: '',
    stringTrinta: '',
    numeroDez: '',
    stringDez: ''
  });

  useEffect(() => {
    const results = [];

    // Comparação entre numeroUm e stringUm
    if (parseInt(inputValues.numeroUm) === parseInt(inputValues.stringUm)) {
      results.push('As variáveis numeroUm e stringUm têm o mesmo valor e mesmo tipo.');
    } else if (inputValues.numeroUm == inputValues.stringUm) {
      results.push('As variáveis numeroUm e stringUm têm o mesmo valor, mas tipos diferentes.');
    } else {
      results.push('As variáveis numeroUm e stringUm não têm o mesmo valor.');
    }

    // Comparação entre numeroTrinta e stringTrinta
    if (parseInt(inputValues.numeroTrinta) === parseInt(inputValues.stringTrinta)) {
      results.push('As variáveis numeroTrinta e stringTrinta têm o mesmo valor e mesmo tipo.');
    } else {
      results.push('As variáveis numeroTrinta e stringTrinta não têm o mesmo tipo.');
    }

    // Comparação entre numeroDez e stringDez
    if (parseInt(inputValues.numeroDez) === parseInt(inputValues.stringDez)) {
      results.push('As variáveis numeroDez e stringDez têm o mesmo valor e mesmo tipo.');
    } else if (inputValues.numeroDez == inputValues.stringDez) {
      results.push('As variáveis numeroDez e stringDez têm o mesmo valor, mas tipos diferentes.');
    } else {
      results.push('As variáveis numeroDez e stringDez não têm o mesmo valor.');
    }

    setComparisons(results);
  }, [inputValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Verifica se o valor digitado é um número e atualiza os estados
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  return (
    <div className="container">
      <h2 className="title">Comparações de Variáveis</h2>
      <p>Digite valores nos campos abaixo para comparar variáveis. O sistema automaticamente explica a comparação.</p>
      <form className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <label>Numero Um</label>
          <input
            type="text"
            name="numeroUm"
            value={inputValues.numeroUm}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label>String Um</label>
          <input
            type="text"
            name="stringUm"
            value={inputValues.stringUm}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label>Numero Trinta</label>
          <input
            type="text"
            name="numeroTrinta"
            value={inputValues.numeroTrinta}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label>String Trinta</label>
          <input
            type="text"
            name="stringTrinta"
            value={inputValues.stringTrinta}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label>Numero Dez</label>
          <input
            type="text"
            name="numeroDez"
            value={inputValues.numeroDez}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label>String Dez</label>
          <input
            type="text"
            name="stringDez"
            value={inputValues.stringDez}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
      </form>
      <ul>
        {comparisons.map((item, index) => (
          <li key={index} className="list-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project1;