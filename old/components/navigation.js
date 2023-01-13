import * as React from 'react'
import {Link, useI18next} from 'gatsby-plugin-react-i18next';

// import { useStaticQuery, graphql } from 'gatsby'

import {
  navLinks,
  navLinkItem,
  navLinkText,
} from '../layouts/layout.module.css'

const Navigation = () => {
  const {t} = useI18next();
//   const data = useStaticQuery(graphql`
//     query {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

  return (
    <Navigation>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to='/' className={navLinkText}>
            {t('mainMenu.home')}
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to='/about' className={navLinkText}>
            {t('mainMenu.about')}
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to='/blog' className={navLinkText}>
            {t('mainMenu.blog')}
          </Link>
        </li>
      </ul>
    </Navigation>
  )
}

export default Navigation