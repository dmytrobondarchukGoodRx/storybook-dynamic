'use client';

import BrowserCookies from 'js-cookie';

export const COOKIE_NAME = 'user_id';

export const getUserId = (): number | undefined => {
   const cookie = BrowserCookies.get(COOKIE_NAME);
    return cookie ? parseInt(cookie) : undefined;
};