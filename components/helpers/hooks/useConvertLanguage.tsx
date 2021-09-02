import { useEffect, useState } from 'react';
import { setCORS } from 'google-translate-api-browser';
// setting up cors-anywhere server address
const translate = setCORS('https://cors-anywhere-react-js.herokuapp.com/');

const useConvertLanguage = (text: string) => {
  const [convertedText, setConvertedText] = useState<string>('');

  useEffect(() => {
    if (text) {
      translate(text, { to: 'ru' })
        .then((res: any) => {
          setConvertedText(res.text);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [convertedText, text]);

  return {
    convertedText,
  };
};
export default useConvertLanguage;
