"use client";

import Script from "next/script";

/**
 * Google Analytics 4 (gtag.js) with Consent Mode v2.
 *
 * GDPR-safe by default: all storage is denied until the visitor accepts
 * via the cookie banner (see components/layout/cookie-consent.tsx, which
 * calls window.gtag('consent','update',{ analytics_storage:'granted' })).
 * A returning visitor who previously accepted is re-granted on load.
 */
const GA_ID = "G-ZFVXLY93PN";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function Analytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
            wait_for_update: 500
          });
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
          try {
            if (localStorage.getItem('cookie-consent') === 'accepted') {
              gtag('consent', 'update', { analytics_storage: 'granted' });
            }
          } catch (e) {}
        `}
      </Script>
    </>
  );
}
