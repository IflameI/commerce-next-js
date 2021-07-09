import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchZodiac } from '../redux/actions/zodiac';

import { MainContent } from '../components';
import { NextThunkDispatch, wrapper } from '../redux/store';
import { useTypedSelector } from '../redux/typeHooks/useTypedSelector';

const Home = (props: any) => {
  const { items } = useTypedSelector((state) => state.zodiac);
  return (
    <>
      <MainContent items={items} />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  const dispatch = store.dispatch as NextThunkDispatch;
  await dispatch(await fetchZodiac());
});

export default Home;
