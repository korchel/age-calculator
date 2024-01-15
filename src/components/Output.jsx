/* eslint-disable functional/no-expression-statements */
import { React } from 'react';
import { useSelector } from 'react-redux';
import { intervalToDuration } from 'date-fns';

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
  const { day, month, year } = useSelector(getValues);
  const { years, months, days } = getTime(day, month, year);
  return (
    <div>
      <p className="result-text">
        {years === undefined ? <span>--</span> : <span>{years}</span>}
        years
      </p>
      <p className="result-text">
        {months === undefined ? <span>--</span> : <span>{months}</span>}
        months
      </p>
      <p className="result-text">
        {days === undefined ? <span>--</span> : <span>{days}</span>}
        days
      </p>
    </div>
  );
};

export default Output;
