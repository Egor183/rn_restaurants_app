import React, {memo} from 'react';
import {FlatList, View} from 'react-native';
import {useNavigation} from '@src/hooks';
import Header from '@src/components/Header';
import Loader from '@src/components/Loader';
import MainContainer from '@src/components/MainContainer';
import ButtonBack from '@src/components/Buttons/ButtonBack';
import {useCuisines} from '../../hooks';
import CuisineCell from './components/CuisineCell';

import styles from './styles';

const CuisineList = () => {
  const {cuisines, isLoading, handleRefresh} = useCuisines();
  const {goBack} = useNavigation();

  const renderItem = ({item}: {item: string}) => (
    <View style={styles.cuisineCellContainer}>
      <CuisineCell key={item} id={item} />
    </View>
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <MainContainer>
      <Header leftComponent={<ButtonBack onPress={goBack} />} />
      <FlatList
        onRefresh={handleRefresh}
        refreshing={isLoading}
        contentContainerStyle={styles.pb40}
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
