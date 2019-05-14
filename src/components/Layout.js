/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';

import Header from './header';
import theme from '../theme';

const Layout = ({ children, classes: { root } }) => (
    <StaticQuery
        query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
        render={data => (
            <>
                <MuiThemeProvider theme={theme}>
                    <div className={root}>
                        <Header siteTitle={data.site.siteMetadata.title} />
                        <main>{children}</main>
                        <footer />
                    </div>
                </MuiThemeProvider>
            </>
        )}
    />
);

const styles = {
    root: {


    },
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default withStyles(styles)(Layout);
