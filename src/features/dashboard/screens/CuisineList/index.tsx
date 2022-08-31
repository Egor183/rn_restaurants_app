import React, {FC, memo} from 'react';
import {FlatList, View} from 'react-native';
import {useNavigation} from '@src/hooks';
import Header from '@src/components/Header';
import MainContainer from '@src/components/MainContainer';
import ButtonBack from '@src/components/Buttons/ButtonBack';
import {useCuisines} from '../../hooks';
import CuisineCell from './components/CuisineCell';
import {CuisineNativeStackNavigationNavigationType} from './types';

import styles from './styles';

const CuisineList: FC = () => {
  const {cuisinesIds, isLoading, handleRefresh} = useCuisines();
  const {goBack} = useNavigation<CuisineNativeStackNavigationNavigationType>();

  const renderItem = ({item}: {item: string}) => (
    <View style={styles.cuisineCellContainer}>
      <CuisineCell key={item} id={item} />
    </View>
  );

  return (
    <MainContainer isLoading={isLoading}>
      <Header leftComponent={<ButtonBack onPress={goBack} />} />
      <FlatList
        onRefresh={handleRefresh}
        refreshing={isLoading}
        contentContainerStyle={styles.pb40}
        renderItem={renderItem}
        keyExtractor={item => item}
        data={cuisinesIds}
        initialNumToRender={8}
        maxToRenderPerBatch={8}
        showsVerticalScrollIndicator={false}
      />
    </MainContainer>
  );
};

export default memo(CuisineList);
