import React, { useEffect } from 'react';
import OriginalDocItem from '@theme-original/DocItem';

function DocItem(props) {
  useEffect(() => {
    console.log('test');
  }, []);

  return (
    <OriginalDocItem {...props} />
  );
}

export default DocItem;
