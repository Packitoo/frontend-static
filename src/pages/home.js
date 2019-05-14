import React from 'react';
import { withTranslation } from 'react-i18next';

import Layout from '../components/Layout';

const home = ({ t }) => {
    return (
        <Layout>
            <h1>
                {t('navigation.newProduction')}
            </h1>
        </Layout>
    );
};

export default withTranslation()(home);
