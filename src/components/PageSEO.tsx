import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface PageSEOProps {
  titleKey: string;
  descriptionKey: string;
}

export default function PageSEO({ titleKey, descriptionKey }: PageSEOProps) {
  const { t, i18n } = useTranslation();

  useEffect(() => {
   
    document.title = t(titleKey);


    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', t(descriptionKey));

   
    document.documentElement.lang = i18n.language;
  }, [t, i18n.language, titleKey, descriptionKey]);

  return null;
}
