'use client';
import { getUserId } from '@/app/utils/getUserId';
import { CheckUserSessionProps } from './CheckUserSession.types';

export const CheckUserSession = ({ userId, children, otherwise }: CheckUserSessionProps) => {
  if (getUserId() === userId) {
    return children;
  } else if (otherwise) {
    return otherwise;
  }

  return <></>;
};
