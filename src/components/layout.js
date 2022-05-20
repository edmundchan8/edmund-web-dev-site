import * as React from 'react'
import { Link } from 'gatsby'
import { container, listItems, alignRight } from './layout.module.css'


const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={alignRight}>
          <li className={listItems}><Link to="/">Home</Link></li>
          <li className={`${listItems}`}><Link to="blog">Blog</Link></li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}
export default Layout