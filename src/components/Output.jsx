/* eslint-disable functional/no-expression-statements */
import { React } from 'react';
import { useSelector } from 'react-redux';
import { intervalToDuration } from 'date-fns';
import { useTranslation } from 'react-i18next';

import { getValues } from '../store/store';

const getTime = (day, month, year) => {
  const today = new Date();
  const past = new Date(year, month - 1, day);
  const elapsedTime = intervalToDuration({
    start: past,
    end: today,
  });
  return elapsedTime;
};

const Output = () => {
  const { t } = useTranslation();

  const {
    day, month, year, show,
  } = useSelector(getValues);
  const { years = 0, months = 0, days = 0 } = getTime(day, month, year);

  return (
    <div>
      <p className="result-text">
        {show ? <span>{years}</span> : <span>--</span>}
        {t('years.count', { count: years })}
      </p>
      <p className="result-text">
        {show ? <span>{months}</span> : <span>--</span>}
        months
      </p>
      <p className="result-text">
        {show ? <span>{days}</span> : <span>--</span>}
        days
      </p>
    </div>
  );
};

export default Output;
