"use client"
import React, { useState } from 'react';

function InteractiveComponent() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [linguagem, setLinguagem] = useState('');
  const [gosta, setGosta] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const mainMessage = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`;
    alert(mainMessage); // ou substituir por uma exibição na tela
    if (gosta === '1') {
      alert("Muito bom! Continue estudando e você terá muito sucesso.");
    } else if (gosta === '2') {
      alert("Ahh que pena... Já tentou aprender outras linguagens?");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <form onSubmit={handleSubmit}>
        <label>
          Qual o seu nome?
          <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
        </label>
        <label>
          Quantos anos você tem?
          <input type="number" value={idade} onChange={e => setIdade(e.target.value)} />
        </label>
        <label>
          Qual linguagem de programação você está estudando?
          <input type="text" value={linguagem} onChange={e => setLinguagem(e.target.value)} />
        </label>
        <label>
          Você gosta de estudar {linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.
          <input type="text" value={gosta} onChange={e => setGosta(e.target.value)} />
        </label>
        <button type="submit">Enviar</button>
      </form>
      {message && <div>{message}</div>}
    </div>
  );
}

export default InteractiveComponent;
