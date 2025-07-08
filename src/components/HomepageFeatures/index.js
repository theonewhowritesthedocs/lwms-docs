import { useState, useEffect } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import appsPerVersion from './appsPerVersion.js';

function Feature({ Svg, title, description, url }) {
  return (
    <Link className="feature" to={url}>
        <Svg className="feature-svg" />
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
    </Link>
  );
}

export default function HomepageFeatures() {
 const activeVersion = localStorage.getItem('docs-preferred-version-default');

  return (
    <>
      <div className='features-label'><span>Shortcuts</span></div>
      <section className="features">
        {appsPerVersion[activeVersion ?? "current"].map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </section>
    </>
  );
}
