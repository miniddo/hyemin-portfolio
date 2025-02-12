import Modal from './Modal';

interface CareerModalProps {
  isOpen: boolean;
  company: string;
  date: string;
  position: string;
  skills: string[];
  responsibilities: string[];
  onClose: () => void;
}

const CareerModal = ({
  isOpen,
  company,
  date,
  position,
  skills,
  responsibilities,
  onClose,
}: CareerModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={company}>
      <div className="space-y-4">
        <p className="text-gray-600">{date}</p>
        <div className="rounded-lg bg-slate-100 p-4">
          <ul className="list-disc pl-4 leading-[2]">
            {responsibilities.map((responsibility, idx) => (
              <li key={`${responsibility}_${idx}`}>{responsibility}</li>
            ))}
          </ul>
        </div>
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

export default CareerModal;
