import { Fragment } from 'react';
import Head from 'next/head';

const Layout = ({ children, title, description }) => {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{title}</title>
      </Head>
      <div style={{
        maxWidth: "var(--max-body-width)",
        margin: "0 auto",
        padding: "var(--pad)",
      }}>
        {children}
      </div>
    </Fragment>
  );
};

export default Layout;
