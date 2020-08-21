/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import { AppProvider } from '@shopify/polaris'
import '@shopify/polaris/styles.css'
import translations from '@shopify/polaris/locales/en.json'

const MyApp = (props) => {
    const { Component, pageProps } = props
    return (
        <>
            <Head>
                <title>Sample App</title>
                <meta charSet="utf-8" />
            </Head>
            <AppProvider i18n={translations}>
                <Component {...pageProps} />
            </AppProvider>
        </>
    )
}

MyApp.propTypes = {
    Component: PropTypes.func.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    pageProps: PropTypes.object.isRequired
}

export default MyApp
