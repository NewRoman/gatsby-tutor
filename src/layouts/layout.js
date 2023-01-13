import * as React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import Header from '../components/header'
import Navigation from '../components/navigation'

import {
  container,
  heading,
  // navLinks,
  // navLinkItem,
  // navLinkText,
  // headerTitle,
  // siteHeader,
  // languageList,
  // languageListItem,
  // languageListItemLink,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={container}>
      <Header siteTitle={data.site.siteMetadata.title} />
        
      <Navigation />
       
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout