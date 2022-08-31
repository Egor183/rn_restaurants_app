import ButtonBack from '@src/components/Buttons/ButtonBack';
import Header from '@src/components/Header';
import MainContainer from '@src/components/MainContainer';
import React, {memo} from 'react';
import {useCuisines} from '../../hooks';
import CuisineCell from './components/CuisineCell';

const CuisineList = () => {
  const {cuisines, isLoading} = useCuisines();

  console.log(cuisines, isLoading, 'fghjkl');

  return (
    <MainContainer withPaddingHorizontal>
      <Header leftComponent={<ButtonBack />} />
      <CuisineCell />
    </MainContainer>
  );
};

export default memo(CuisineList);
