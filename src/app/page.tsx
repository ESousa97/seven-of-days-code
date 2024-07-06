import dynamic from 'next/dynamic';
import '../../pages/styles/styles.css';

const Project1 = dynamic(() => import('../../pages/project1/index'));
const Project2 = dynamic(() => import('../../pages/project2/index'));
const Project3 = dynamic(() => import('../../pages/project3/index'));

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Meu Portfólio de Projetos</h1>
      
      <div className="project-section mb-8">
        <h2 className="text-2xl font-semibold mb-4">Projeto 1</h2>
        <Project1 />
      </div>
      
      <div className="project-section mb-8">
        <h2 className="text-2xl font-semibold mb-4">Projeto 2</h2>
        <Project2 />
      </div>
      
      <div className="project-section mb-8">
        <h2 className="text-2xl font-semibold mb-4">Projeto 3</h2>
        <Project3 />
      </div>
      
    </div>
  );
}