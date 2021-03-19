import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import OriginalDocItem from '@theme-original/DocItem';

import StructuredData from '/src/components/StructuredData';

export default function DocItem(props) {
  const {
    siteConfig: {
      customFields: {
        defaultFAQ
      }
    }
  } = useDocusaurusContext();
  const {
    content: {
      frontMatter: {
        faq
      }
    }
  } = props;

  return (
    <>
      <StructuredData faq={faq || defaultFAQ || []} />

      <OriginalDocItem {...props} />
    </>
  );
}
