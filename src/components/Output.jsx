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
  console.log(years, months, days);
  return (
    <div>
      <p className="result-text">
        <span>--</span>
        years
      </p>
      <p className="result-text">
        <span>--</span>
        months
      </p>
      <p className="result-text">
        <span>--</span>
        days
      </p>
    </div>
  );
};

export default Output;
