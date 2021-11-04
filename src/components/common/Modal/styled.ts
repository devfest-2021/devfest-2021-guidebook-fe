import styled from 'styled-components';
import { Modal } from 'react-rainbow-components';

export const StyledModal = styled(Modal)`
  min-width: 250px;
  max-width: 450px;

  padding: 10px;
  @media (max-width: 280px) {
    padding: 0px;
  }
`;
