import Link from '@docusaurus/Link'
import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

const FeatureList = [
  {
    title: 'Par formation',
    link: '/docs/courses/pwa',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Découvre la liste des installations requises et recommandées pour la
        formation que tu t'apprêtes à suivre.
      </>
    ),
  },
  {
    title: 'Par logiciel',
    link: '/docs/software/git',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Besoin d’instructions détaillées pour installer un élément logiciel pour
        ta formation, sur Windows, OSX, Linux ou WSL ? On a ce qu’il te faut.
      </>
    ),
  },
]

function Feature({ Svg, link, title, description }) {
  return (
    <div className={clsx('col col--6')}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>
          <Link to={link}>{title}</Link>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
