import ButtonBack from '@src/components/Buttons/ButtonBack';
import Header from '@src/components/Header';
import MainContainer from '@src/components/MainContainer';
import React, {memo, useEffect} from 'react';
import {useCuisines} from '../../hooks';
import CuisineCell from './components/CuisineCell';

const CuisineList = () => {
  const {cuisines, error, fetch} = useCuisines();

  if (error) {
    fetch();
  }

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <MainContainer withPaddingHorizontal>
      <Header leftComponent={<ButtonBack />} />
      <CuisineCell />
    </MainContainer>
  );
};

export default memo(CuisineList);
