import React from 'react';
import {View, Text, StyleSheet, Dimensions,FlatList, ScrollView} from 'react-native';
import { Block, theme } from 'galio-framework';
import { Card } from '../../components';
import rooms from '../../constants/branches';
const { width } = Dimensions.get('screen');

class PlanningScreen extends React.Component {
  _displayDetailforRoom = (idRoom) => {
    console.log("display room with id"+idRoom)
    this.props.navigation.navigate("CalendarScreen", {idRoom: idRoom})
  }
  render() {
  return (
    <Block flex center style={styles.home}>
        <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.roomsCards}
        data={rooms}
        keyExtractor={(item) => item.name}
        renderItem={({item}) => 
        <Block flex>
          <Card item={item} displayDetailforRoom={this._displayDetailforRoom} />
        </Block>}
        />
    </Block>
  );
};
}


export default PlanningScreen;

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  roomsCards: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});
