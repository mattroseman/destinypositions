import React from 'react';
import Helmet from 'react-helmet';

export default function StructuredData({ faq = [] }) {
  // don't bother adding any structured data if no questions
  if (faq.length == 0) {
    return null;
  }

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
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
