import React from 'react';
import { useTranslation } from 'react-i18next';

function Profile() {
  const { t } = useTranslation();
  return (
    <h1>{t('profile.title')}</h1>
  );
}

export default Profile;
