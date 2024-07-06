"use client"
import React, { useState } from 'react';

function CareerChoiceGame() {
  const [area, setArea] = useState('');
  const [subArea, setSubArea] = useState('');
  const [especializacao, setEspecializacao] = useState('');
  const [tecnologias, setTecnologias] = useState([]);
  const [tempTech, setTempTech] = useState('');

  const handleAreaChange = (e) => {
    setArea(e.target.value);
    setSubArea(''); // Reset subArea when area changes
  };

  const handleSubAreaChange = (e) => {
    setSubArea(e.target.value);
  };

  const handleEspecializacaoChange = (e) => {
    setEspecializacao(e.target.value);
  };

  const handleTechChange = (e) => {
    setTempTech(e.target.value);
  };

  const addTechnology = () => {
    if (tempTech.toLowerCase() !== 'sair' && tempTech !== '') {
      setTecnologias([...tecnologias, tempTech]);
      setTempTech('');
    }
  };

  const finishGame = () => {
    alert("Obrigado por jogar! Vamos ver suas escolhas:\n" +
        "Você escolheu " + area + ".\n" +
        "Você optou por " + subArea + ".\n" +
        "Você escolheu se " + (especializacao === 'Especialização' ? "especializar" : "tornar-se Fullstack") + ".\n" +
        "Tecnologias que você deseja aprender:\n" + tecnologias.join('\n'));        
  };

  return (
    <div>
      <h1>Bem-vindo ao Jogo de Escolhas de Carreira em Programação!</h1>
      <label>
        Escolha sua área:
        <select value={area} onChange={handleAreaChange}>
          <option value="">Selecione uma Área</option>
          <option value="Front-End">Front-End</option>
          <option value="Back-End">Back-End</option>
        </select>
      </label>
      
      {area && (
        <label>
          Agora escolha:
          <select value={subArea} onChange={handleSubAreaChange}>
            <option value="">Selecione uma Subárea</option>
            {area === 'Front-End' ? (
              <>
                <option value="React">React</option>
                <option value="Vue">Vue</option>
              </>
            ) : (
              <>
                <option value="C#">C#</option>
                <option value="Java">Java</option>
              </>
            )}
          </select>
        </label>
      )}

      {subArea && (
        <label>
          Você quer se especializar na área escolhida ou se tornar Fullstack?
          <select value={especializacao} onChange={handleEspecializacaoChange}>
            <option value="">Selecione</option>
            <option value="Especialização">Especialização</option>
            <option value="Fullstack">Fullstack</option>
          </select>
        </label>
      )}

      {especializacao && (
        <>
          <label>
            Digite uma tecnologia que você gostaria de aprender ou conhecer (ou digite 'sair' para finalizar):
            <input type="text" value={tempTech} onChange={handleTechChange} />
            <button onClick={addTechnology}>Adicionar Tecnologia</button>
          </label>
                <ul>
                {tecnologias.map((tech, index) => (
                <li key={index}>{tech}</li>
                ))}
                </ul>
                <button onClick={finishGame}>Finalizar Jogo</button>
                </>
            )}
        </div>
    );
}

export default CareerChoiceGame;
