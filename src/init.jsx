/* eslint-disable functional/no-expression-statements */
import React, { StrictMode } from 'react';
import i18next from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';

import App from './App';
import resources from './locales/index';

const init = async () => {
  const i18n = i18next.createInstance();
  const options = {
    resources,
    fallbackLng: 'en',
  };
  i18n
    .use(initReactI18next)
    .init(options);

  return (
    <StrictMode>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </StrictMode>
  );
};

export default init;
