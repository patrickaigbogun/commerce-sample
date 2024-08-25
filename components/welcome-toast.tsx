'use client';

import { useEffect } from 'react';
import { toast } from 'sonner';

export function WelcomeToast() {
  useEffect(() => {
    // ignore if screen height is too small
    if (window.innerHeight < 650) return;
    if (!document.cookie.includes('welcome-toast=2')) {
      toast('🛍️ Welcome to Oti commerce!', {
        id: 'welcome-toast',
        duration: Infinity,
        onDismiss: () => {
          document.cookie = 'welcome-toast=2; max-age=31536000; path=/';
        },
        description: (
          <>
            This is a high-performance, storefront built Oti{' '}
            <a
            // add your website domain name here
              href="#"
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              Reach out me to get one like this
            </a>
            .
          </>
        )
      });
    }
  }, []);

  return null;
}
