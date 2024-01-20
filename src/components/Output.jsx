/* eslint-disable functional/no-expression-statements */
import { React } from 'react';
import { useSelector } from 'react-redux';
import { intervalToDuration } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { useSpring, animated } from 'react-spring';

import { getValues } from '../store/store';

const getElapsedTime = (day, month, year, show) => {
  if (show === false) {
    return { days: 0, months: 0, years: 0 };
  }
  const today = new Date();
  const past = new Date(year, month - 1, day);
  if (year < 100) {
    past.setFullYear(year);
  }
  const { years = 0, months = 0, days = 0 } = intervalToDuration({
    start: past,
    delay: 0,
    end: today,
  });
  return { years, months, days };
};

const Number = ({ n }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    config: {
      mass: 1, tension: 50, friction: 15,
    },
  });
  return <animated.span>{number.to((num) => num.toFixed(0))}</animated.span>;
};

const Output = () => {
  const { t } = useTranslation();

  const {
    day, month, year, show,
  } = useSelector(getValues);
  const { years, months, days } = getElapsedTime(day, month, year, show);

  return (
    <div>
      <p className="result-text">
        {show ? <Number n={years} /> : <span>--</span>}
        {t('quantity.years.count', { count: years })}
      </p>
      <p className="result-text">
        {show ? <Number n={months} /> : <span>--</span>}
        {t('quantity.months.count', { count: months })}
      </p>
      <p className="result-text">
        {show ? <Number n={days} /> : <span>--</span>}
        {t('quantity.days.count', { count: days })}
      </p>
    </div>
  );
};

export default Output;
