import getIntl from '../intl';
import ServerIntlProvider from '@/components/ServerIntlProvider';
import BackButton from './BackButton';
import styles from '../page.module.css';
import LanguageChanger from '@/components/LanguageChanger';

async function Home() {
  const intl = await getIntl();

  return (
    <ServerIntlProvider messages={intl.messages} locale={intl.locale}>
      <main className={styles.main}>
        <h1>{intl.formatMessage({ id: 'about_header' })}</h1>
        <BackButton />
        <LanguageChanger />
      </main>
    </ServerIntlProvider>
  );
}

export default Home;
