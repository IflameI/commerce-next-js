import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchZodiac } from '../redux/actions/zodiac';

import { MainContent } from '../components';

const Home = (props: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchZodiac());
  }, []);
  return (
    <>
      <MainContent />
    </>
  );
};

export default Home;
