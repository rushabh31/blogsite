import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Navigation } from '.'
import config from '../../utils/siteConfig'
// import Particles from './particles';

// Styles
import '../../styles/app.css'

/**
* Main layout component
*
* The Layout component wraps around each page and template.
* It also provides the header, footer as well as the main
* styles, and meta data for each page.
*
*/
const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
    const site = config
    const twitterUrl = config.siteTwitterHandle ? `https://twitter.com/${config.siteTwitterHandle.replace(/^@/, ``)}` : null
    const facebookUrl = config.siteFacebookHandle ? `https://www.facebook.com/${config.siteFacebookHandle.replace(/^\//, ``)}` : null
    const ButtonContainer = styled.div`
                display: 'block';
                position: 'absolute';
                top: 10px;
                align-content: 'center';
                right: 10px;`
    const Button = styled.button`
    -webkit-appearance: none;
    background: #e4405f;
    color: #FFF;
    border: none;
    padding: 8px 16px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s;
    outline: 0;
    :hover {
        box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.10);
    }`

    const HeaderTitle = styled.h1`
    font-weight: 500;
    font-family: "cassette";
    line-height: 1.15;
    margin: 1.25rem 0;
    font-size: 4.5em;
    text-align: center;
    color: #a7c56b;
    @media only screen and (max-width: 768px) {
        font-size: 3em;
    }
    `
    return (
    <>
        <Helmet>
            <html lang={config.language} />
            <body className={bodyClass} />
        </Helmet>

        <div className="viewport">

            <div className="viewport-top">
                {/* The main header section on top of the screen */}

                <header className="site-head">
                    <div className="container">
                    <center><ButtonContainer>
                        <Button onClick={(e) => {
                            e.preventDefault();
                            window.location.href='http://rushabh.info';
                            }} >
                        <FontAwesomeIcon icon={faHome} /> Home
                        </Button>
                    </ButtonContainer></center>

                    <HeaderTitle> Welcome to my Blogsite</HeaderTitle>

                        {/* <div className="site-mast">
                            <div className={isHome ? `site-mast-left` : `site-mast-left-flex`}>
                                <Link to="/">
                                    {config.logo ?
                                        <img className="site-logo" src={config.logo} alt={config.siteTitleMeta} />
                                        : <Img fixed={data.file.childImageSharp.fixed} alt={site.title} />
                                    }
                                </Link>
                                {isHome ? null :
                                    <nav className="site-nav">
                                        <div className="site-nav-left">
                                            <Navigation data={config.navigation} navClass="site-nav-item" />
                                        </div>
                                    </nav>}
                            </div>
                            <div className="site-mast-right">
                                { config.siteTwitterHandle && <a href={ twitterUrl } className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/twitter.svg" alt="Twitter" /></a>}
                                { config.siteFacebookHandle && <a href={ facebookUrl } className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/facebook.svg" alt="Facebook" /></a>}
                                <a className="site-nav-item" href={ `https://feedly.com/i/subscription/feed/${config.siteUrl}/rss/` } target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/rss.svg" alt="RSS Feed" /></a>
                            </div>
                        </div>
                        { isHome ?
                            <div className="site-banner">
                                <h1 className="site-banner-title">{config.siteTitleMeta}</h1>
                                <p className="site-banner-desc">{config.siteDescriptionMeta}</p>
                            </div> :
                            null}
                        {isHome ?
                            <nav className="site-nav">
                                <div className="site-nav-left">
                                    <Navigation data={config.navigation} navClass="site-nav-item" />
                                </div>
                                <div className="site-nav-right">
                                </div>
                            </nav> : null} */}
                    </div>
                </header>
                
                
                <main className="site-main" id="particles-js">
                
                    {/* All the main content gets inserted here, index.js, post.js */}
                    {children}
                </main>

            </div>

            <div className="viewport-bottom">
                {/* The footer at the very bottom of the screen */}
                <footer className="site-foot">
                    <div className="site-foot-nav container">
                        {/* <div className="site-foot-nav-left">
                            <Link to="/">{config.siteTitleMeta}</Link>
                        </div>
                        <div className="site-foot-nav-right">
                            <Navigation data={config.navigation} navClass="site-foot-nav-item" />
                        </div> */}
                    </div>
                </footer>

            </div>
            
        </div>

    </>
    
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool
}

const DefaultLayoutSettingsQuery = props => (
    <StaticQuery
        query={graphql`
            query GhostSettings {
                file(relativePath: {eq: "ghost-icon.png"}) {
                    childImageSharp {
                        fixed(width: 30, height: 30) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `}
        render={data => <DefaultLayout data={data} {...props} />}
    />
)

export default DefaultLayoutSettingsQuery
