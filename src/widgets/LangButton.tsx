import React from 'react';
import { useTranslation } from 'react-i18next';

function LangButton() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string | undefined) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>Eng</button>
      <button onClick={() => changeLanguage('ru')}>Ru</button>
    </div>
  );
}

export default LangButton;
