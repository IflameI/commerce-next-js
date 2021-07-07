import axios from 'axios';
import { useEffect } from 'react';
import { xml2json } from 'xml-js';
import { MainContent } from '../components';
import { useActions } from '../redux/typeHooks/useActions';
import { useTypedSelector } from '../redux/typeHooks/useTypedSelector';
import { IZodiacData } from '../types/zodiacData';

interface IHome {
  zodiacs: IZodiacData;
}

export default function Home({ zodiacs }: IHome) {
  const { items } = useTypedSelector((state) => state.zodiac);
  const { fetchZodiac } = useActions();

  useEffect(() => {
    fetchZodiac();
  }, []);
  return <MainContent zodiacs={zodiacs.elements[0].elements} />;
}

export async function getStaticProps() {
  const response: any = await axios.get('https://ignio.com/r/export/utf/xml/daily/com.xml', {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
  const result = xml2json(response.data, { compact: false, spaces: 4 });
  const zodiacs = JSON.parse(result);
  return {
    props: { zodiacs },
    revalidate: 100,
  };
}
