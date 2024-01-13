import * as Yup from 'yup';

export default Yup.object().shape({
  day: Yup.number()
    .min(1, 'Must be a valid day')
    .max(31, 'Must be a valid day')
    .required(),
  month: Yup.number()
    .min(1, 'Must be a valid month')
    .max(12, 'Must be a valid month')
    .required(),
  year: Yup.number()
    .max(new Date().getFullYear(), 'Must be in the past')
    .required(),
});
