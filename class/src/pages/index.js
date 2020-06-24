import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Head from '@docusaurus/Head';
//import mermaid from "mermaid";

//mermaid.initialize({
//  startOnLoad: true
//});

const features = [
  {
    title: <>Collaboratively built</>,
    imageUrl: 'img/group.svg',
    description: (
      <>
        This class has contributors from around the world. 
        Learn more on our <a href="https://github.com/SuffolkLITLab/legal-tech-class">Github page</a>.
      </>
    ),
  },
  {
    title: <>Practical education</>,
    imageUrl: 'img/work.svg',
    description: (
      <>
        Tools for doing. Exercises help you get started right away
        building legal technology with open-source tools.
      </>
    ),
  },
  {
    title: <>Theories and principles</>,
    imageUrl: 'img/mortarboard.svg',
    description: (
      <>
        Our class materials touch on theories and motivations for legal technology
        as well: including the access to justice gap, the future of the legal profession,
        and ethical issues.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="The aim of this project is to create a collaboratively built textbook for teaching law school classes about legal technology.">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/introduction')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
