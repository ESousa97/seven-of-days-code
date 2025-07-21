"use client"
import React, { useState } from 'react';

interface FormData {
  nome: string;
  idade: string;
  linguagem: string;
  gosta: string;
}

interface FormErrors {
  nome?: string;
  idade?: string;
  linguagem?: string;
  gosta?: string;
}

const Project2: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    idade: '',
    linguagem: '',
    gosta: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nome.trim()) {
      newErrors.nome = 'Por favor, digite seu nome';
    }

    if (!formData.idade.trim()) {
      newErrors.idade = 'Por favor, digite sua idade';
    } else if (isNaN(Number(formData.idade)) || Number(formData.idade) < 1) {
      newErrors.idade = 'Por favor, digite uma idade válida';
    }

    if (!formData.linguagem.trim()) {
      newErrors.linguagem = 'Por favor, digite a linguagem que está estudando';
    }

    if (!formData.gosta || (formData.gosta !== '1' && formData.gosta !== '2')) {
      newErrors.gosta = 'Por favor, escolha uma opção (1 para SIM ou 2 para NÃO)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpa o erro específico quando o usuário começa a digitar
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    if (validateForm()) {
      setIsSubmitted(true);
      setShowResults(true);
    }
  };

  const resetForm = () => {
    setFormData({
      nome: '',
      idade: '',
      linguagem: '',
      gosta: ''
    });
    setErrors({});
    setIsSubmitted(false);
    setShowResults(false);
  };

  const getMotivationalMessage = () => {
    if (formData.gosta === '1') {
      return {
        icon: '🎉',
        title: 'Excelente!',
        message: 'Muito bom! Continue estudando e você terá muito sucesso. Sua paixão pela programação é o primeiro passo para uma carreira incrível!',
        color: 'from-green-50 to-emerald-50 border-green-200 text-green-800'
      };
    } else {
      return {
        icon: '🤔',
        title: 'Que pena...',
        message: 'Ahh que pena... Já tentou aprender outras linguagens? Às vezes uma linguagem diferente pode despertar mais interesse. Que tal Python, JavaScript ou Java?',
        color: 'from-orange-50 to-yellow-50 border-orange-200 text-orange-800'
      };
    }
  };

  const getAgeCategory = (age: number) => {
    if (age < 18) return 'jovem';
    if (age < 30) return 'adulto jovem';
    if (age < 50) return 'adulto';
    return 'adulto experiente';
  };

  if (showResults) {
    const motivational = getMotivationalMessage();
    const age = Number(formData.idade);
    const ageCategory = getAgeCategory(age);

    return (
      <div className="space-y-8 fade-in">
        {/* Mensagem de boas-vindas */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
          <div className="text-6xl mb-4">👋</div>
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Olá, {formData.nome}!
          </h2>
          <p className="text-xl text-blue-700 leading-relaxed">
            Você tem <strong>{formData.idade} anos</strong> e já está aprendendo{' '}
            <strong className="text-indigo-600">{formData.linguagem}</strong>! 
            Que jornada incrível você está construindo como {ageCategory}.
          </p>
        </div>

        {/* Mensagem motivacional */}
        <div className={`bg-gradient-to-br ${motivational.color} border-2 rounded-xl p-8`}>
          <div className="text-center">
            <div className="text-6xl mb-4">{motivational.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{motivational.title}</h3>
            <p className="text-lg leading-relaxed">{motivational.message}</p>
          </div>
        </div>

        {/* Estatísticas e insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">📚</div>
            <h4 className="font-bold text-slate-800 mb-2">Linguagem</h4>
            <p className="text-slate-600">{formData.linguagem}</p>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">🎂</div>
            <h4 className="font-bold text-slate-800 mb-2">Categoria</h4>
            <p className="text-slate-600 capitalize">{ageCategory}</p>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
            <div className="text-3xl mb-3">{formData.gosta === '1' ? '❤️' : '🤷'}</div>
            <h4 className="font-bold text-slate-800 mb-2">Motivação</h4>
            <p className="text-slate-600">
              {formData.gosta === '1' ? 'Alta' : 'Precisa melhorar'}
            </p>
          </div>
        </div>

        {/* Recomendações personalizadas */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-8">
          <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
            <span className="text-2xl mr-2">💡</span>
            Recomendações personalizadas para você
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-purple-700">
            {formData.gosta === '1' ? (
              <>
                <div>
                  <h4 className="font-semibold mb-2">Continue evoluindo!</h4>
                  <p className="text-sm">Explore projetos práticos em {formData.linguagem} para solidificar seu conhecimento.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Próximos passos</h4>
                  <p className="text-sm">Considere contribuir para projetos open source ou criar seu próprio portfólio.</p>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h4 className="font-semibold mb-2">Experimente outras opções</h4>
                  <p className="text-sm">Python e JavaScript são ótimas alternativas para começar!</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Encontre sua paixão</h4>
                  <p className="text-sm">Tente diferentes áreas: web development, mobile, data science, games...</p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Botão para reiniciar */}
        <div className="text-center">
          <button
            onClick={resetForm}
            className="btn-secondary"
          >
            <span className="mr-2">🔄</span>
            Preencher novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Introdução */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
        <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center">
          <span className="text-2xl mr-2">📝</span>
          Conte-nos sobre sua jornada de aprendizado
        </h3>
        <p className="text-blue-700 leading-relaxed">
          Preencha o formulário abaixo para receber uma mensagem personalizada sobre seus estudos em programação.
          Suas respostas nos ajudarão a entender melhor seu perfil e oferecer recomendações adequadas.
        </p>
      </div>

      {/* Formulário */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white border border-slate-200 rounded-xl p-8 space-y-6">
          {/* Nome */}
          <div className="form-group">
            <label className="form-label">
              <span className="flex items-center">
                <span className="text-lg mr-2">👤</span>
                Qual é o seu nome?
              </span>
            </label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className={`form-input ${errors.nome ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : ''}`}
              placeholder="Digite seu nome completo"
            />
            {errors.nome && (
              <p className="text-red-600 text-sm mt-1 flex items-center">
                <span className="mr-1">⚠️</span>
                {errors.nome}
              </p>
            )}
          </div>

          {/* Idade */}
          <div className="form-group">
            <label className="form-label">
              <span className="flex items-center">
                <span className="text-lg mr-2">🎂</span>
                Quantos anos você tem?
              </span>
            </label>
            <input
              type="number"
              name="idade"
              value={formData.idade}
              onChange={handleChange}
              className={`form-input ${errors.idade ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : ''}`}
              placeholder="Digite sua idade"
              min="1"
              max="120"
            />
            {errors.idade && (
              <p className="text-red-600 text-sm mt-1 flex items-center">
                <span className="mr-1">⚠️</span>
                {errors.idade}
              </p>
            )}
          </div>

          {/* Linguagem */}
          <div className="form-group">
            <label className="form-label">
              <span className="flex items-center">
                <span className="text-lg mr-2">💻</span>
                Qual linguagem de programação você está estudando?
              </span>
            </label>
            <input
              type="text"
              name="linguagem"
              value={formData.linguagem}
              onChange={handleChange}
              className={`form-input ${errors.linguagem ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : ''}`}
              placeholder="Ex: JavaScript, Python, Java, C#..."
            />
            {errors.linguagem && (
              <p className="text-red-600 text-sm mt-1 flex items-center">
                <span className="mr-1">⚠️</span>
                {errors.linguagem}
              </p>
            )}
          </div>

          {/* Gosta da linguagem */}
          <div className="form-group">
            <label className="form-label">
              <span className="flex items-center">
                <span className="text-lg mr-2">❤️</span>
                Você gosta de estudar {formData.linguagem || 'essa linguagem'}?
              </span>
            </label>
            <select
              name="gosta"
              value={formData.gosta}
              onChange={handleChange}
              className={`form-select ${errors.gosta ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : ''}`}
            >
              <option value="">Selecione uma opção</option>
              <option value="1">✅ 1 - SIM, estou gostando muito!</option>
              <option value="2">❌ 2 - NÃO, está sendo difícil</option>
            </select>
            {errors.gosta && (
              <p className="text-red-600 text-sm mt-1 flex items-center">
                <span className="mr-1">⚠️</span>
                {errors.gosta}
              </p>
            )}
          </div>
        </div>

        {/* Botão de envio */}
        <div className="text-center">
          <button
            type="submit"
            className="btn-primary text-lg px-8 py-4"
          >
            <span className="mr-2">🚀</span>
            Receber minha mensagem personalizada
          </button>
        </div>
      </form>
    </div>
  );
};

export default Project2;
