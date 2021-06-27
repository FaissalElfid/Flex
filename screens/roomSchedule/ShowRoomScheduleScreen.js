import React from 'react';
import {View, Text, StyleSheet, Dimensions,FlatList, ScrollView} from 'react-native';
import { Block, theme } from 'galio-framework';
import { Card } from '../../components';
import rooms from '../../constants/articles';
const { width } = Dimensions.get('screen');
import { getRooms } from "../../modules/rooms/actions";
import { connect } from "react-redux";

class PlanningScreen extends React.Component {
  constructor(props) {
    super(props);
    this.getRoomsConsole = this.getRoomsConsole.bind(this);
  }
  getRoomsConsole(){
    this.setState({
      loading: true,
    });
    const { dispatch } = this.props;
      dispatch(getRooms())
        .then((data) => {
          console.log(data)
        })
        .catch(() => {
          console.log("A problem with the dispatch")
        });
  }
  _displayDetailforRoom = (idRoom) => {
    console.log("display room with id"+idRoom)
    this.props.navigation.navigate("CalendarScreen", {idRoom: idRoom})
  }
  componentDidMount(){
    console.log("component dit mount")
    this.getRoomsConsole
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
function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  return {
    isLoggedIn
  };
}
export default connect(mapStateToProps)(PlanningScreen);

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  roomsCards: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});
