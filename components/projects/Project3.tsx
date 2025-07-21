"use client";

import React, { useState } from "react";

interface GameState {
  area: string;
  subArea: string;
  especializacao: string;
  tecnologias: string[];
}

const Project3: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    area: "",
    subArea: "",
    especializacao: "",
    tecnologias: [],
  });
  const [tempTech, setTempTech] = useState("");
  const [isGameComplete, setIsGameComplete] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  // Handlers para atualizar estados e passos
  const handleAreaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newArea = e.target.value;
    setGameState({
      area: newArea,
      subArea: "",
      especializacao: "",
      tecnologias: [],
    });
    setCurrentStep(newArea ? 2 : 1);
  };

  const handleSubAreaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSubArea = e.target.value;
    setGameState((prev) => ({
      ...prev,
      subArea: newSubArea,
      especializacao: "",
      tecnologias: [],
    }));
    setCurrentStep(newSubArea ? 3 : 2);
  };

  const handleEspecializacaoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newEspec = e.target.value;
    setGameState((prev) => ({
      ...prev,
      especializacao: newEspec,
      tecnologias: [],
    }));
    setCurrentStep(newEspec ? 4 : 3);
  };

  const addTechnology = () => {
    const techTrimmed = tempTech.trim();
    if (techTrimmed && techTrimmed.toLowerCase() !== "sair") {
      setGameState((prev) => ({
        ...prev,
        tecnologias: [...prev.tecnologias, techTrimmed],
      }));
      setTempTech("");
    }
  };

  const removeTechnology = (index: number) => {
    setGameState((prev) => ({
      ...prev,
      tecnologias: prev.tecnologias.filter((_, i) => i !== index),
    }));
  };

  const finishGame = () => setIsGameComplete(true);

  const resetGame = () => {
    setGameState({
      area: "",
      subArea: "",
      especializacao: "",
      tecnologias: [],
    });
    setTempTech("");
    setIsGameComplete(false);
    setCurrentStep(1);
  };

  // Ícones e descrições para as áreas e subáreas
  const getAreaIcon = (area: string) => {
    switch (area) {
      case "Front-End":
        return "🎨";
      case "Back-End":
        return "⚙️";
      default:
        return "💻";
    }
  };

  const getSubAreaInfo = (subArea: string) => {
    const info: Record<string, { icon: string; description: string }> = {
      React: { icon: "⚛️", description: "Biblioteca JavaScript para interfaces" },
      Vue: { icon: "💚", description: "Framework progressivo para UI" },
      "C#": { icon: "🔷", description: "Linguagem robusta da Microsoft" },
      Java: { icon: "☕", description: "Linguagem orientada a objetos" },
    };
    return info[subArea] || { icon: "📱", description: "Tecnologia escolhida" };
  };

    const getRecommendedTechs = (): string[] => {
    const recommendations = {
        "Front-End": {
        React: ["TypeScript", "Next.js", "Tailwind CSS", "Redux", "React Router"],
        Vue: ["Nuxt.js", "Vuetify", "Pinia", "Vue Router", "Vite"],
        },
        "Back-End": {
        "C#": [".NET Core", "Entity Framework", "SQL Server", "Azure", "ASP.NET"],
        Java: ["Spring Boot", "Maven", "JPA/Hibernate", "PostgreSQL", "Docker"],
        },
    };

    if (gameState.area === "Front-End") {
        // Forçar que subArea é uma das chaves do Front-End
        const frontEndSubs = recommendations["Front-End"];
        if (gameState.subArea in frontEndSubs) {
        return frontEndSubs[gameState.subArea as keyof typeof frontEndSubs];
        }
    } else if (gameState.area === "Back-End") {
        // Forçar que subArea é uma das chaves do Back-End
        const backEndSubs = recommendations["Back-End"];
        if (gameState.subArea in backEndSubs) {
        return backEndSubs[gameState.subArea as keyof typeof backEndSubs];
        }
    }

    return [];
    };

  // Renderização final quando o jogo está completo
  if (isGameComplete) {
    const areaIcon = getAreaIcon(gameState.area);
    const subAreaInfo = getSubAreaInfo(gameState.subArea);
    const recommendedTechs = getRecommendedTechs();

    return (
      <div className="space-y-8 fade-in p-6">
        {/* Cabeçalho de conclusão */}
        <section className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Parabéns! Seu caminho está definido!
          </h2>
          <p className="text-xl text-green-700">
            Você criou um roadmap personalizado para sua carreira em desenvolvimento.
          </p>
        </section>

        {/* Resumo das escolhas */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Área escolhida */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">{areaIcon}</div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Área</h3>
            <p className="text-lg text-blue-600 font-semibold">{gameState.area}</p>
          </div>

          {/* Tecnologia principal */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">{subAreaInfo.icon}</div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Tecnologia</h3>
            <p className="text-lg text-purple-600 font-semibold">{gameState.subArea}</p>
            <p className="text-sm text-slate-500 mt-1">{subAreaInfo.description}</p>
          </div>

          {/* Especialização */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">
              {gameState.especializacao === "Especialização" ? "🎯" : "🌐"}
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Foco</h3>
            <p className="text-lg text-indigo-600 font-semibold">{gameState.especializacao}</p>
          </div>
        </section>

        {/* Tecnologias escolhidas */}
        {gameState.tecnologias.length > 0 && (
          <section className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">
              <span className="text-3xl mr-2">🚀</span>
              Tecnologias que você quer aprender
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {gameState.tecnologias.map((tech, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-300 rounded-md p-3 text-center font-medium text-slate-700"
                >
                  {tech}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tecnologias recomendadas */}
        {recommendedTechs.length > 0 && (
          <section className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">
              <span className="text-3xl mr-2">💡</span>
              Tecnologias recomendadas para você
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommendedTechs.map((tech, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-300 rounded-md p-3 text-center font-medium text-slate-700"
                >
                  {tech}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Botão para reiniciar */}
        <div className="text-center">
          <button
            className="mt-8 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md transition"
            onClick={resetGame}
          >
            Reiniciar
          </button>
        </div>
      </div>
    );
  }

  // Renderização durante o processo (steps 1 a 4)
  return (
    <div className="space-y-8 p-6 max-w-3xl mx-auto">
      {/* Step 1: Escolha da área */}
      {currentStep === 1 && (
        <div>
          <label htmlFor="area" className="block font-semibold mb-2">
            Escolha sua área:
          </label>
          <select
            id="area"
            value={gameState.area}
            onChange={handleAreaChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">-- Selecione uma área --</option>
            <option value="Front-End">Front-End</option>
            <option value="Back-End">Back-End</option>
          </select>
        </div>
      )}

      {/* Step 2: Escolha da subárea */}
      {currentStep === 2 && (
        <div>
          <label htmlFor="subArea" className="block font-semibold mb-2">
            Escolha sua tecnologia principal:
          </label>
          <select
            id="subArea"
            value={gameState.subArea}
            onChange={handleSubAreaChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">-- Selecione uma tecnologia --</option>
            {gameState.area === "Front-End" && (
              <>
                <option value="React">React</option>
                <option value="Vue">Vue</option>
              </>
            )}
            {gameState.area === "Back-End" && (
              <>
                <option value="C#">C#</option>
                <option value="Java">Java</option>
              </>
            )}
          </select>
        </div>
      )}

      {/* Step 3: Escolha da especialização */}
      {currentStep === 3 && (
        <div>
          <label htmlFor="especializacao" className="block font-semibold mb-2">
            Escolha sua especialização:
          </label>
          <select
            id="especializacao"
            value={gameState.especializacao}
            onChange={handleEspecializacaoChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">-- Selecione uma especialização --</option>
            <option value="Especialização">Especialização</option>
            <option value="Foco em Full Stack">Foco em Full Stack</option>
            <option value="Foco em DevOps">Foco em DevOps</option>
          </select>
        </div>
      )}

      {/* Step 4: Adicionar tecnologias que quer aprender */}
      {currentStep === 4 && (
        <div className="space-y-4">
          <label htmlFor="techInput" className="block font-semibold mb-2">
            Adicione tecnologias que você quer aprender (digite "sair" para finalizar):
          </label>
          <input
            id="techInput"
            type="text"
            value={tempTech}
            onChange={(e) => setTempTech(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                if (tempTech.trim().toLowerCase() === "sair") {
                  finishGame();
                } else {
                  addTechnology();
                }
              }
            }}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {/* Lista de tecnologias adicionadas */}
          {gameState.tecnologias.length > 0 && (
            <ul className="list-disc list-inside">
              {gameState.tecnologias.map((tech, idx) => (
                <li key={idx} className="flex justify-between items-center">
                  <span>{tech}</span>
                  <button
                    onClick={() => removeTechnology(idx)}
                    className="text-red-500 hover:text-red-700 font-bold ml-4"
                    aria-label={`Remover tecnologia ${tech}`}
                  >
                    &times;
                  </button>
                </li>
              ))}
            </ul>
          )}
          {/* Botão para finalizar */}
          <button
            onClick={finishGame}
            disabled={gameState.tecnologias.length === 0}
            className={`mt-4 px-4 py-2 rounded text-white font-semibold transition ${
              gameState.tecnologias.length === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Finalizar
          </button>
        </div>
      )}
    </div>
  );
};

export default Project3;
