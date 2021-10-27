import styled from 'styled-components';

const FilterRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 0;
  gap: 5rem;
`;

const FormLabel = styled.label`
  font-size: 0.8rem;
  margin-bottom: 0.3rem;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 4rem;
  flex: 1;
`;

const FullWidth = {
  width: '100%',
};

export { FilterRow, FormLabel, FormContainer, FullWidth };
