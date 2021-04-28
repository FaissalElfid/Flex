import React from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import { Block, theme } from 'galio-framework';

import { Card } from '../../components';
import articles from '../../constants/articles';
const { width } = Dimensions.get('screen');

const PlanningScreen = ({navigation}) => {

  return (
    <Block flex center style={styles.home}>
        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex>
          <Card item={articles[0]} horizontal  />
          {/* <Block flex row>
            <Card item={articles[1]} style={{ marginRight: theme.SIZES.BASE }} />
            <Card item={articles[2]} />
          </Block> */}
          <Card item={articles[3]} horizontal />
          <Card item={articles[4]} full />
        </Block>
      </ScrollView>
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
