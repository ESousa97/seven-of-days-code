import dynamic from 'next/dynamic';

const Project1 = dynamic(() => import('../../components/projects/Project1'));
const Project2 = dynamic(() => import('../../components/projects/Project2'));
const Project3 = dynamic(() => import('../../components/projects/Project3'));

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Meus Projetos de
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Aprendizado
            </span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Uma coleção de projetos interativos desenvolvidos durante o desafio 
            <strong className="text-blue-600"> Seven Days Code</strong> da Alura. 
            Cada projeto explora conceitos fundamentais de programação.
          </p>
        </div>
      </section>

      {/* Projeto 1 */}
      <section className="project-container">
        <div className="project-header">
          <div className="project-number">01</div>
          <div>
            <h2 className="project-title">Comparações de Variáveis</h2>
            <p className="project-description">
              Explore a diferença entre igualdade estrita (===) e solta (==) em JavaScript.
              Digite valores e veja como o JavaScript compara diferentes tipos de dados.
            </p>
            <div className="project-tags">
              <span className="tag">JavaScript</span>
              <span className="tag">Tipos de Dados</span>
              <span className="tag">Comparações</span>
            </div>
          </div>
        </div>
        <div className="project-content">
          <Project1 />
        </div>
      </section>

      {/* Projeto 2 */}
      <section className="project-container">
        <div className="project-header">
          <div className="project-number">02</div>
          <div>
            <h2 className="project-title">Formulário de Aprendizado</h2>
            <p className="project-description">
              Um formulário interativo que coleta informações sobre sua jornada de aprendizado.
              Receba mensagens personalizadas de incentivo com base nas suas respostas.
            </p>
            <div className="project-tags">
              <span className="tag">Formulários</span>
              <span className="tag">Lógica Condicional</span>
              <span className="tag">Interatividade</span>
            </div>
          </div>
        </div>
        <div className="project-content">
          <Project2 />
        </div>
      </section>

      {/* Projeto 3 */}
      <section className="project-container">
        <div className="project-header">
          <div className="project-number">03</div>
          <div>
            <h2 className="project-title">Jogo de Escolhas de Carreira</h2>
            <p className="project-description">
              Simule uma jornada de decisões na carreira de desenvolvimento.
              Escolha entre Front-end ou Back-end, defina sua especialização e explore tecnologias.
            </p>
            <div className="project-tags">
              <span className="tag">Tomada de Decisão</span>
              <span className="tag">Carreira Dev</span>
              <span className="tag">Gamificação</span>
            </div>
          </div>
        </div>
        <div className="project-content">
          <Project3 />
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
        <div className="max-w-2xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-slate-800 mb-4">
            Gostou dos Projetos?
          </h3>
          <p className="text-lg text-slate-600 mb-8">
            Estes projetos foram desenvolvidos como parte do desafio Seven Days Code da Alura.
            Cada um explora conceitos fundamentais de programação de forma prática e interativa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/ESousa97/seven-of-days-code" 
              target="_blank"
              className="inline-flex items-center px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              Ver no GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/enoque-sousa-bb89aa168/" 
              target="_blank"
              className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
