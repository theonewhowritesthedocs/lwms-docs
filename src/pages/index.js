import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        {/* <Heading as="h1" className="hero__title">
          Light WMS
        </Heading> */}
        <Heading as="h1" className="hero__title">
          Documentation
        </Heading>
        <p className="hero__subtitle">This is the documentation for the <strong>Light WMS</strong> ecosystem.</p>
        <div className={styles.buttons}>
          {/* <input type="text" className={styles.searchbox}/> */}
          {/* <Link
            className={styles.button}
            to="/docs/intro">
            Documentation
          </Link> */}
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="TODO">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
