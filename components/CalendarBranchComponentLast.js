import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity, Modal} from 'react-native';
import {Agenda} from 'react-native-calendars';
import rooms from '../constants/branches';
import students from '../constants/students';
import { DataTable } from 'react-native-paper';

const testIDs = {
  menu: {
    CONTAINER: 'menu',
    CALENDARS: 'calendars_btn',
    CALENDAR_LIST: 'calendar_list_btn',
    HORIZONTAL_LIST: 'horizontal_list_btn',
    AGENDA: 'agenda_btn',
    EXPANDABLE_CALENDAR: 'expandable_calendar_btn',
    WEEK_CALENDAR: 'week_calendar_btn'
  },
  calendars: {
    CONTAINER: 'calendars',
    FIRST: 'first_calendar',
    LAST: 'last_calendar'
  },
  calendarList: {CONTAINER: 'calendarList'},
  horizontalList: {CONTAINER: 'horizontalList'},
  agenda: {
    CONTAINER: 'agenda',
    ITEM: 'item'
  },
  expandableCalendar: {CONTAINER: 'expandableCalendar'},
  weekCalendar: {CONTAINER: 'weekCalendar'}
};
export default class AgendaScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      today: new Date(),
      items: {}, 
      modalName: '',
      isVisible: false,
      room: rooms.find(item => item.id === 1)
    };
  }
  state = {
    isVisible: false
  };

  // hide show modal
  displayModal(show){
    this.setState({isVisible: show})
  }
  render() {
    return (
    <>
    <Modal
            animationType = {"slide"}
            transparent={false}
            visible={this.state.isVisible}
            onRequestClose={() => {
              console.log('Modal closed.');
            }}>
              <Text style = { styles.text }>
                  {this.state.modalName}</Text>
                  <Text style = { styles.text2 }>
                  List of abscents</Text>
                  <DataTable>
                    <DataTable.Header>
                      <DataTable.Title>Student Id</DataTable.Title>
                      <DataTable.Title numeric>Full Name</DataTable.Title>
                      <DataTable.Title numeric>Email</DataTable.Title>
                    </DataTable.Header>

                     {
                      students.map((student, key)=>{
                        return(
                            <DataTable.Row>
                              <DataTable.Cell>{student.id}</DataTable.Cell>
                              <DataTable.Cell>{student.fullName}</DataTable.Cell>
                              <DataTable.Cell>{student.email}</DataTable.Cell>
                            </DataTable.Row>
                          )
                      })}
                  </DataTable>
                  <Text 
                style={styles.closeText}
                onPress={() => {
                  this.displayModal(!this.state.isVisible);}}>Close</Text>
          </Modal>
      <Agenda
        testID={testIDs.agenda.CONTAINER}
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={new Date()}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)} // bind lie la function avec le context 
        rowHasChanged={this.rowHasChanged.bind(this)}
        pastScrollRange={1}
      // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={1}
        maxDate={new Date()}
        // markingType={'period'}
        // markedDates={{
        //    '2017-05-08': {textColor: '#43515c'},
        //    '2017-05-09': {textColor: '#43515c'},
        //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
        //    '2017-05-21': {startingDay: true, color: 'blue'},
        //    '2017-05-22': {endingDay: true, color: 'gray'},
        //    '2017-05-24': {startingDay: true, color: 'gray'},
        //    '2017-05-25': {color: 'gray'},
        //    '2017-05-26': {endingDay: true, color: 'gray'}}}
        // monthFormat={'yyyy'}
        // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
        //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
        // hideExtraDays={false}
      />
      </>
    );
  }

  loadItems(day) {
    setTimeout(() => {
      
      for (let i = 0; i < 10; i++) {
        
        const time = this.state.today.getTime() - i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            let hourStart = j + 9
            let hourEnd = j + 9
            this.state.items[strTime].push({
              name: this.state.room.name+' reserved this room at '+strTime+' from ' + hourStart + ' h to ' + hourEnd+" h ",
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }
        }
      }
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {
        newItems[key] = this.state.items[key];
      });
      this.setState({
        items: newItems
      });
    }, 1000);
  }

  renderItem(item) {
    return (
      <TouchableOpacity
        testID={testIDs.agenda.ITEM}
        style={[styles.item, {height: item.height}]}
        onPress={() => {
          this.setState({
            modalName: item.name
          });
          this.displayModal(true)
        }
        //  Alert.alert(item.name)
        }
      >
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 20,
    margin: 10,
    marginTop: 40,
    marginBottom: 50,
    textAlign: 'center',
    color: '#051d5f',
  },
  text2: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 20,
    margin: 10,
    marginTop: 20,
    marginBottom: 50,
    textAlign: 'center',
    color: '#051d5f',
  },
  closeText: {
    marginTop: 30,
    fontSize: 24,
    color: '#00479e',
    textAlign: 'center',
  }
});
// https://www.positronx.io/react-native-modal-tutorial-with-examples/