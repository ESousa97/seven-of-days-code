"use client"
import React, { useEffect, useState } from 'react';

interface ComparisonResult {
  id: string;
  message: string;
  type: 'same-value-type' | 'same-value-diff-type' | 'different-value';
}

const Project1: React.FC = () => {
  const [comparisons, setComparisons] = useState<ComparisonResult[]>([]);
  const [inputValues, setInputValues] = useState({
    numeroUm: '',
    stringUm: '',
    numeroTrinta: '',
    stringTrinta: '',
    numeroDez: '',
    stringDez: ''
  });

  useEffect(() => {
    const results: ComparisonResult[] = [];

    // Comparação entre numeroUm e stringUm
    if (inputValues.numeroUm && inputValues.stringUm) {
      const numUm = parseFloat(inputValues.numeroUm);
      const strUm = inputValues.stringUm;
      
      if (!isNaN(numUm) && numUm.toString() === strUm) {
        if (typeof numUm === typeof parseFloat(strUm)) {
          results.push({
            id: 'comp1',
            message: `${inputValues.numeroUm} === "${inputValues.stringUm}" → As variáveis têm o mesmo valor, mas tipos diferentes (number vs string)`,
            type: 'same-value-diff-type'
          });
        }
      } else if (inputValues.numeroUm == inputValues.stringUm) {
        results.push({
          id: 'comp1',
          message: `${inputValues.numeroUm} == "${inputValues.stringUm}" → Mesmos valores com coerção de tipo`,
          type: 'same-value-diff-type'
        });
      } else {
        results.push({
          id: 'comp1',
          message: `${inputValues.numeroUm} ≠ "${inputValues.stringUm}" → Valores diferentes`,
          type: 'different-value'
        });
      }
    }

    // Comparação entre numeroTrinta e stringTrinta
    if (inputValues.numeroTrinta && inputValues.stringTrinta) {
      const numTrinta = parseFloat(inputValues.numeroTrinta);
      const strTrinta = inputValues.stringTrinta;
      
      if (!isNaN(numTrinta) && numTrinta.toString() === strTrinta) {
        results.push({
          id: 'comp2',
          message: `${inputValues.numeroTrinta} === "${inputValues.stringTrinta}" → Valores iguais, mas tipos diferentes`,
          type: 'same-value-diff-type'
        });
      } else if (inputValues.numeroTrinta == inputValues.stringTrinta) {
        results.push({
          id: 'comp2',
          message: `${inputValues.numeroTrinta} == "${inputValues.stringTrinta}" → Igualdade com coerção`,
          type: 'same-value-diff-type'
        });
      } else {
        results.push({
          id: 'comp2',
          message: `${inputValues.numeroTrinta} ≠ "${inputValues.stringTrinta}" → Valores diferentes`,
          type: 'different-value'
        });
      }
    }

    // Comparação entre numeroDez e stringDez
    if (inputValues.numeroDez && inputValues.stringDez) {
      const numDez = parseFloat(inputValues.numeroDez);
      const strDez = inputValues.stringDez;
      
      if (!isNaN(numDez) && numDez.toString() === strDez) {
        results.push({
          id: 'comp3',
          message: `${inputValues.numeroDez} === "${inputValues.stringDez}" → Valores iguais, mas tipos diferentes`,
          type: 'same-value-diff-type'
        });
      } else if (inputValues.numeroDez == inputValues.stringDez) {
        results.push({
          id: 'comp3',
          message: `${inputValues.numeroDez} == "${inputValues.stringDez}" → Igualdade com coerção`,
          type: 'same-value-diff-type'
        });
      } else {
        results.push({
          id: 'comp3',
          message: `${inputValues.numeroDez} ≠ "${inputValues.stringDez}" → Valores diferentes`,
          type: 'different-value'
        });
      }
    }

    setComparisons(results);
  }, [inputValues]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const getResultIcon = (type: ComparisonResult['type']) => {
    switch (type) {
      case 'same-value-type':
        return '✅';
      case 'same-value-diff-type':
        return '⚠️';
      case 'different-value':
        return '❌';
      default:
        return '🔍';
    }
  };

  const getResultColor = (type: ComparisonResult['type']) => {
    switch (type) {
      case 'same-value-type':
        return 'from-green-50 to-emerald-50 border-green-200 text-green-800';
      case 'same-value-diff-type':
        return 'from-yellow-50 to-orange-50 border-yellow-200 text-orange-800';
      case 'different-value':
        return 'from-red-50 to-pink-50 border-red-200 text-red-800';
      default:
        return 'from-gray-50 to-slate-50 border-gray-200 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      {/* Explicação do conceito */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
        <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center">
          <span className="text-2xl mr-2">🎯</span>
          Como funciona este projeto?
        </h3>
        <p className="text-blue-700 leading-relaxed">
          Digite valores nos campos abaixo para explorar a diferença entre <code className="bg-blue-200 px-2 py-1 rounded">==</code> (igualdade solta) 
          e <code className="bg-blue-200 px-2 py-1 rounded">===</code> (igualdade estrita) em JavaScript. 
          Veja como o JavaScript lida com comparações entre diferentes tipos de dados.
        </p>
      </div>

      {/* Formulário de comparações */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Coluna 1 - Inputs */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Digite os valores para comparar
          </h3>
          
          {/* Par 1 */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
            <h4 className="font-semibold text-slate-700 border-b border-slate-200 pb-2">
              Primeira Comparação
            </h4>
            <div className="form-group">
              <label className="form-label">Número Um</label>
              <input
                type="text"
                name="numeroUm"
                value={inputValues.numeroUm}
                onChange={handleChange}
                className="form-input"
                placeholder="Ex: 1, 10, 42..."
              />
            </div>
            <div className="form-group">
              <label className="form-label">String Um</label>
              <input
                type="text"
                name="stringUm"
                value={inputValues.stringUm}
                onChange={handleChange}
                className="form-input"
                placeholder="Ex: '1', '10', 'texto'..."
              />
            </div>
          </div>

          {/* Par 2 */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
            <h4 className="font-semibold text-slate-700 border-b border-slate-200 pb-2">
              Segunda Comparação
            </h4>
            <div className="form-group">
              <label className="form-label">Número Trinta</label>
              <input
                type="text"
                name="numeroTrinta"
                value={inputValues.numeroTrinta}
                onChange={handleChange}
                className="form-input"
                placeholder="Ex: 30, 3.14, 100..."
              />
            </div>
            <div className="form-group">
              <label className="form-label">String Trinta</label>
              <input
                type="text"
                name="stringTrinta"
                value={inputValues.stringTrinta}
                onChange={handleChange}
                className="form-input"
                placeholder="Ex: '30', '3.14', 'hello'..."
              />
            </div>
          </div>

          {/* Par 3 */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
            <h4 className="font-semibold text-slate-700 border-b border-slate-200 pb-2">
              Terceira Comparação
            </h4>
            <div className="form-group">
              <label className="form-label">Número Dez</label>
              <input
                type="text"
                name="numeroDez"
                value={inputValues.numeroDez}
                onChange={handleChange}
                className="form-input"
                placeholder="Ex: 10, 0, -5..."
              />
            </div>
            <div className="form-group">
              <label className="form-label">String Dez</label>
              <input
                type="text"
                name="stringDez"
                value={inputValues.stringDez}
                onChange={handleChange}
                className="form-input"
                placeholder="Ex: '10', '0', 'world'..."
              />
            </div>
          </div>
        </div>

        {/* Coluna 2 - Resultados */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Resultados das Comparações
          </h3>
          
          {comparisons.length === 0 ? (
            <div className="bg-gradient-to-br from-gray-50 to-slate-50 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
              <div className="text-6xl mb-4">🤔</div>
              <p className="text-gray-600 text-lg">
                Digite valores nos campos ao lado para ver as comparações em tempo real!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {comparisons.map((result, index) => (
                <div
                  key={result.id}
                  className={`bg-gradient-to-br ${getResultColor(result.type)} border-2 rounded-xl p-6 fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl flex-shrink-0">
                      {getResultIcon(result.type)}
                    </span>
                    <div>
                      <p className="font-medium leading-relaxed">
                        {result.message}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Legenda */}
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h4 className="font-semibold text-slate-700 mb-4">Legenda:</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <span className="text-xl">✅</span>
                <span>Mesmo valor e mesmo tipo</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-xl">⚠️</span>
                <span>Mesmo valor, tipos diferentes</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-xl">❌</span>
                <span>Valores diferentes</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dicas importantes */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6">
        <h3 className="text-xl font-bold text-purple-800 mb-3 flex items-center">
          <span className="text-2xl mr-2">💡</span>
          Dicas importantes sobre comparações em JavaScript
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-purple-700">
          <div>
            <h4 className="font-semibold mb-2">Igualdade Solta (==)</h4>
            <p className="text-sm">Converte os tipos antes de comparar. <code className="bg-purple-200 px-1 rounded">1 == "1"</code> retorna <code className="bg-purple-200 px-1 rounded">true</code></p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Igualdade Estrita (===)</h4>
            <p className="text-sm">Compara valor e tipo. <code className="bg-purple-200 px-1 rounded">1 === "1"</code> retorna <code className="bg-purple-200 px-1 rounded">false</code></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;
