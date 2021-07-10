import { useEffect, useState } from 'react';
import { setCORS } from 'google-translate-api-browser';
// setting up cors-anywhere server address
const translate = setCORS('https://pacific-crag-36077.herokuapp.com/');

const useConvertLanguage = (text: string) => {
  const [convertedText, setConvertedText] = useState<string>('');
  const [subConvertedText, setSubConvertedText] = useState<string>('');

  useEffect(() => {
    if (text) {
      translate(text, { to: 'ru' })
        .then((res: any) => {
          setConvertedText(res.text);
          setSubConvertedText(res.text);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [text]);

  return {
    convertedText,
    subConvertedText,
  };
};
export default useConvertLanguage;
