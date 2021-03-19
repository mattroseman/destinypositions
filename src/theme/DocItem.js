import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import OriginalDocItem from '@theme-original/DocItem';

function DocItem(props) {
  const { siteConfig } = useDocusaurusContext();
  const {
    content: {
      frontMatter: {
        faq
      }
    }
  } = props;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(question => ({
      '@type': 'Question',
      name: question.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: question.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <OriginalDocItem {...props} />
    </>
  );
}

export default DocItem;
