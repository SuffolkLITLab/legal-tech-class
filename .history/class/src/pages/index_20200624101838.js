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
    title: <>Built on Markdown and Docusaurus</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        This open class makes use of Docusaurus, which uses plain 
        text, markdown, and git to deliver attractive documentation.
      </>
    ),
  },
  {
    title: <>Extensible</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        I don't have three things to say yet!
      </>
    ),
  },
  {
    title: <>Progressive exercises</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        I'll write something here later.
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
