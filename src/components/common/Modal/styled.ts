import styled from 'styled-components';
import { Modal } from 'react-rainbow-components';

export const StyledModal = styled(Modal)`
  min-width: 250px;
  max-width: 350px;
  @media (max-width: 500px) {
    max-width: 300px;
  }
  @media (max-width: 400px) {
    max-width: 280px;
  }
  @media (max-width: 320px) {
    max-width: 250px;
  }
  @media (max-width: 280px) {
    padding: 0px;
  }
`;
