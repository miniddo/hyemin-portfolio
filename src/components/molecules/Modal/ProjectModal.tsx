import Modal from './Modal';

interface ProjectModalProps {
  isOpen: boolean;
  title: string;
  imgSrc: string;
  subTitle: string;
  description: string;
  skills: string[];
  onClose: () => void;
}

const ProjectModal = ({
  isOpen,
  title,
  imgSrc,
  subTitle,
  description,
  skills,
  onClose,
}: ProjectModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <div className="space-y-4">
        <img src={imgSrc} alt="project image" className="h-48 w-full rounded-lg object-cover" />
        <h3 className="text-lg font-semibold text-gray-900">{subTitle}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal;
