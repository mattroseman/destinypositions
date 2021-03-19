import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import OriginalDocItem from '@theme-original/DocItem';

function DocItem(props) {
  const { siteConfig } = useDocusaurusContext();
  const {
    content: {
      frontMatter: {
        title
      }
    }
  } = props;

  useEffect(() => {
    console.log(title);
  }, []);

  return (
    <>
      <Helmet>
        <meta name="test" content={title} />
      </Helmet>

      <OriginalDocItem {...props} />
    </>
  );
}

export default DocItem;
