import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/header/header';

function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <Header i18n={t} />
    </div>
  );
}

export default Home;
