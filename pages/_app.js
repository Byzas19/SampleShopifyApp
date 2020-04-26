import App from 'next/app';
import Head from 'next/head';

const myApp = props => {
    return (
        <React.Fragment>
            <Head>
                <title>Sample App</title>
                <meta charSet="utf-8" />
            </Head>
                <Component {...props.pageProps} />
        </React.Fragment>
    );
}

export default myApp;