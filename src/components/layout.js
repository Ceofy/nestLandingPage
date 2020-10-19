/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import LogoHeader from './logoHeader';

import styles from './componentStyles/layout.module.css';

const Layout = (props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <div className={styles.headerContainer}>
        <LogoHeader siteTitle={data.site.siteMetadata.title} />
      </div>
      <div className={styles.container}>
        <main>{props.children}</main>
        <footer style={{ backgroundColor: props.backgroundColor }}>
          © {new Date().getFullYear()}, UC, San Diego / Built with
          {` `}
          <a href='https://www.gatsbyjs.org'>Gatsby</a>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
};

Layout.defaultProps = {
  backgroundColor: 'white',
};

export default Layout;
