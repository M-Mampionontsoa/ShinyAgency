// Modal.jsx (version simplifiée)
import styled from "styled-components";
import PropTypes from "prop-types";

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

function Modal({ action, profile, onClose }) {
  return (
    <>
      <Overlay onClick={onClose} />
      <ModalContainer>
        <h4>
          Profile {profile.name} {action} aux favoris
        </h4>
        <button onClick={onClose}>Fermer</button>
      </ModalContainer>
    </>
  );
}

Modal.propTypes = {
  action: PropTypes.string.isRequired,
  profile: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
