
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const CloseIcon = ({ onClick }) => {
  return (
    <div onClick={onClick} className="close-icon cursor-pointer">
      <FontAwesomeIcon icon={faTimes} />
    </div>
  );
};

export default CloseIcon;
