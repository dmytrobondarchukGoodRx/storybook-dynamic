import dynamic from 'next/dynamic';
import React from 'react';
import { CheckUserSessionProps } from './CheckUserSession.types';

export const CheckUserSessionDynamic: React.FC<CheckUserSessionProps & { skeleton: () => React.ReactElement }> = ({
  skeleton,
  ...props
}) => {
  const CheckUserSessionAsDynamic = dynamic(() => import('./CheckUserSession').then((mod) => mod.CheckUserSession), {
    ssr: false,
    suspense: true,
    loading: skeleton,
  });

  return <CheckUserSessionAsDynamic {...props} />;
};
