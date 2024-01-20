/* eslint-disable functional/no-expression-statements */
import * as Yup from 'yup';

const isValidDay = (year, month, day) => {
  const date = new Date(year, month, day);
  // workaround?:
  if (year < 100) {
    date.setFullYear(year);
  }
  if (date.getFullYear() === year && date.getMonth() === month && date.getDate() === day) {
    return true;
  }
  return false;
};

const notInTheFuture = (year, month, day) => {
  const today = new Date();
  const past = new Date(year, month, day);

  return today.getTime() > past.getTime();
};

export default Yup.object().shape({
  day: Yup.number()
    .required('errors.required')
    .min(1, 'errors.day')
    .max(31, 'errors.day')
    .test(
      'date is valid',
      'errors.invalidDate',
      (day, context) => {
        if (context.parent.month > 12) return true; // workaround
        return isValidDay(context.parent.year, context.parent.month - 1, day);
      },
    ),
  month: Yup.number()
    .required('errors.required')
    .min(1, 'errors.month')
    .max(12, 'errors.month'),
  year: Yup.number()
    .required('errors.required')
    .max(new Date().getFullYear(), 'errors.year')
    .test(
      'date is not in the future',
      'errors.year',
      (year, context) => {
        if (context.parent.month > 12
          || !isValidDay(year, context.parent.month - 1, context.parent.day)
        ) return true; // workaround
        return notInTheFuture(year, context.parent.month - 1, context.parent.day);
      },
    ),
});
