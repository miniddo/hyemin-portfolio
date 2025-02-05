import { useState } from 'react';
import { MainPage, ProjectPage } from './pages';
import { ProjectModal } from './components/molecules';

interface ProjectInfo {
  title: string;
  imgSrc: string;
  subTitle: string;
  description: string;
  skills: string[];
}

function App() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectInfo | null>(null);

  const openProjectModal = (project: ProjectInfo) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsProjectModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="h-full w-full">
      <MainPage />
      <ProjectPage openModal={openProjectModal} />

      {isProjectModalOpen && selectedProject && (
        <ProjectModal
          isOpen={isProjectModalOpen}
          title={selectedProject.title}
          imgSrc={selectedProject.imgSrc}
          subTitle={selectedProject.subTitle}
          description={selectedProject.description}
          skills={selectedProject.skills}
          onClose={closeProjectModal}
        />
      )}
    </div>
  );
}

export default App;
