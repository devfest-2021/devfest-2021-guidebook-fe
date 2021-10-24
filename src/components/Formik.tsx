import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { useFormik } from 'formik';

export const useSignupFormik = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      state: '',
      city: '',
      type: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return formik;
};
