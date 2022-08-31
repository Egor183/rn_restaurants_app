import React, {memo} from 'react';
import {FlatList, View} from 'react-native';
import MainContainer from '@src/components/MainContainer';
import ButtonBack from '@src/components/Buttons/ButtonBack';
import Loader from '@src/components/Loader';
import {useCuisines} from '../../hooks';
import CuisineCell from './components/CuisineCell';
import {RenderItemType} from './types';

import styles from './styles';

const CuisineList = () => {
  const {cuisines, isLoading} = useCuisines();

  const renderItem = ({item}: RenderItemType) => (
    <View style={styles.cuisineCellContainer}>
      <CuisineCell key={item} id={item} />
    </View>
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <MainContainer leftComponent={<ButtonBack />}>
      <FlatList
        renderItem={renderItem}
        keyExtractor={item => item}
        data={cuisines}
        initialNumToRender={8}
        maxToRenderPerBatch={8}
        showsVerticalScrollIndicator={false}
      />
    </MainContainer>
  );
};

export default memo(CuisineList);
