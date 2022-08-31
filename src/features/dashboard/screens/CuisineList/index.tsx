import ButtonBack from '@src/components/Buttons/ButtonBack';
import Header from '@src/components/Header';
import MainContainer from '@src/components/MainContainer';
import React, {memo, useEffect} from 'react';
import {useCuisines} from '../../hooks';

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
    </MainContainer>
  );
};

export default memo(CuisineList);
