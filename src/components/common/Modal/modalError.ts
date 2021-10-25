import { getIn } from 'formik';

export const getStyles = (errors: any, fieldName: string) => {
  if (getIn(errors, fieldName)) {
    return {
      border: '2px solid #f44336',
    };
  }
};
