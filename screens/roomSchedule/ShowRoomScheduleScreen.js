import React from 'react';
import {View, Text, StyleSheet, Dimensions,FlatList, ScrollView} from 'react-native';
import { Block, theme } from 'galio-framework';

import { Card } from '../../components';
import articles from '../../constants/articles';
const { width } = Dimensions.get('screen');

const PlanningScreen = ({navigation}) => {

  return (
    <Block flex center style={styles.home}>
        <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}
        data={articles}
        keyExtractor={(item) => item.name}
        renderItem={({item}) => 
        <Block flex>
          <Card item={item} />
        </Block>}
        />
    </Block>
  );
};

export default PlanningScreen;

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});
