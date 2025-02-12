import { useState } from 'react';
import { MainPage, ProjectPage, AboutMePage, CareerPage, SkillPage } from '@/pages';
import { ProjectModal, CareerModal } from '@/components/molecules';

interface ProjectInfo {
  title: string;
  imgSrc: string;
  subTitle: string;
  description: string;
  skills: string[];
}

interface CareerInfo {
  type: 'A' | 'B';
  company: string;
  date: string;
  position: string;
  skills: string[];
  responsibilities: string[];
  description: string;
  imgSrc: string;
}

function App() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectInfo | null>(null);

  const [isCareerModalOpen, setIsCareerModalOpen] = useState(false);
  const [selectedCareer, setSelectedCareer] = useState<CareerInfo | null>(null);

  const openProjectModal = (project: ProjectInfo) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsProjectModalOpen(false);
    setSelectedProject(null);
  };

  const openCareerModal = (career: CareerInfo) => {
    setSelectedCareer(career);
    setIsCareerModalOpen(true);
  };

  const closeCareerModal = () => {
    setIsCareerModalOpen(false);
    setSelectedCareer(null);
  };

  return (
    <div className="h-full w-full">
      <MainPage />
      <CareerPage openModal={openCareerModal} />
      <SkillPage />
      <AboutMePage />
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

      {isCareerModalOpen && selectedCareer && (
        <CareerModal
          isOpen={isCareerModalOpen}
          company={selectedCareer.company}
          date={selectedCareer.date}
          position={selectedCareer.position}
          skills={selectedCareer.skills}
          responsibilities={selectedCareer.responsibilities}
          onClose={closeCareerModal}
        />
      )}
    </div>
  );
}

export default App;
