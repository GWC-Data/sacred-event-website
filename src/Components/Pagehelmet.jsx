import React, { Component } from "react";
import { Helmet } from "react-helmet";

class PageHelmet extends Component {
  render() {
    const { pageTitle } = this.props;
    return (
      <>
        <Helmet>
          <title>{pageTitle ? `${pageTitle}` : "Welcome to Sacred Heart!"}</title>
          <meta
            name="description"
            content="Sacred Heart is a vibrant and welcoming community dedicated to spiritual growth, service, and celebration."
          />
        </Helmet>
      </>
    );
  }
}

export default PageHelmet;
