import { Heading } from '@/components/heading';
import { Search } from '@/components/search';
import { Weathers } from '@/components/weathers';
import useGetWeathersFromStorage from '@/hooks/useGetWeathersFromStorage';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import styles from './home.module.css';

const WeatherDetails = dynamic(() =>
  import('@/components/weather-details').then(
    (components) => components.WeatherDetails
  )
);

export const HomeScreen = () => {
  const { weathers, refresh } = useGetWeathersFromStorage();
  return (
    <>
      <Head>
        <title>Nguyen Van Hoan</title>
        <meta name="description" content="Nguyen Van Hoan - Technical Test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <Heading title="Today's Weather" />
          <Search onSuccess={refresh} />
          {weathers && weathers?.length > 0 && (
            <WeatherDetails weather={weathers[0]} />
          )}
          <Weathers weathers={weathers || []} refresh={refresh} />
        </div>
      </main>
    </>
  );
};
