import Document, { Head, Main, NextScript } from "next/document";
import glamorous from "glamorous";
import { renderStatic } from "glamor/server";
import config from "../site";

const Body = glamorous.body({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  minHeight: "100vh",
});

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = renderStatic(() => page.html);
    return { ...page, ...styles };
  }

  constructor(props) {
    super(props);
    const { __NEXT_DATA__, ids } = props;
    if (ids) {
      __NEXT_DATA__.ids = this.props.ids;
    }
  }

  render() {
    return (
      <html>
        <Head>
          <title>{config.pageTitle}</title>
          <meta name="twitter:card" content={config.image} />
          <meta name="twitter:site" content="@codedailyio" />
          <meta name="twitter:title" content={config.title} />
          <meta name="twitter:description" content={config.description} />
          <meta name="twitter:creator" content="@codedailyio" />
          <meta property="og:title" content={config.title} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content="https://learnreactnative.codedaily.io/" />
          <meta property="og:image" content={config.image} />
          <meta property="og:description" content={config.description} />
          <meta property="og:site_name" content="Code Daily" />
          <meta property="article:published_time" content={config.published_date} />
          <meta property="article:section" content={config.section} />
          <meta property="article:tag" content={config.tags} />

          <link rel="apple-touch-icon" sizes="57x57" href="/static/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/static/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/static/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/static/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/static/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/static/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/static/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/static/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-icon-180x180.png" />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/static/android-icon-192x192.png"
          />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
          <link rel="manifest" href="/static/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/static/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"
          />
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <Body>
          <Main />
          <script src="https://checkout.stripe.com/checkout.js"></script>
          <NextScript />
        </Body>
      </html>
    );
  }
}
