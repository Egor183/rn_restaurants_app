import React from 'react';
import Loader from '@src/components/Loader';

export const withLoading =
  (Component: React.ElementType) => (props: {[key: string]: any}) => {
    if (props.isLoading) {
      return <Loader />;
    }

    return <Component {...props} />;
  };
