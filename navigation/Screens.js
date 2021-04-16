import React from "react";
import { Dimensions } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// screens
import Home from "../screens/HomeScreen";
import Onboarding from "../screens/OnboardingScreen";
import Login from "../screens/LoginScreen";
import Profile from "../screens/Profile";
import Planning from "../screens/planning/PlanningScreen";
import Signup from "../screens/SignupScreen";
import PlanningReserve from "../screens/planning/PlanningReserveScreen";
import roomSchedule from "../screens/roomSchedule/ShowRoomScheduleScreen";
import studentsAbsences from "../screens/students/ChooseBranchScreen";
// drawer
import CustomDrawerContent from "./Menu";

// header for screens
import { Header } from "../components";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();


function PlanningStack(props) {
  return (
    <Stack.Navigator initialRouteName="Planning" mode="card" headerMode="screen">
      <Stack.Screen
        name="Planning"
        component={Planning}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              // transparent
              // white
              options
              title="Planning"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          // headerTransparent: true
        }}
      />
      <Stack.Screen
        name="PlanningReserve"
        component={PlanningReserve}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              // transparent
              // white
              options
              title="Reserve"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          // headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}


function showRoomScheduleStack(props) {
  return (
    <Stack.Navigator initialRouteName="Rooms Schedule" mode="card" headerMode="screen">
      <Stack.Screen
        name="Rooms Schedule"
        component={roomSchedule}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Rooms Schedule"
              search
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          // headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}
function ProfileStack(props) {
  return (
    <Stack.Navigator initialRouteName="Profile" mode="card" headerMode="screen">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title="My Profile"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          // headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}
function StudentsStack(props) {
  return (
    <Stack.Navigator initialRouteName="Students Absences Table" mode="card" headerMode="screen">
      <Stack.Screen
        name="Students Absences Table"
        component={studentsAbsences}
        options={{
          header: ({ navigation, scene }) => (
            <Header
            search
              title="Students Absences Table"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          // headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Home"
              search
              // options
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

export default function OnboardingStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}

function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8
      }}
      drawerContentOptions={{
        activeTintcolor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.75,
          backgroundColor: "transparent",
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden"
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: "normal"
        }
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Rooms Schedule" component={showRoomScheduleStack} /> 
      <Drawer.Screen name="Students Absences Table" component={StudentsStack} />
      <Drawer.Screen name="My Planning" component={PlanningStack} /> 
      <Drawer.Screen name="My Profile" component={ProfileStack} />
    </Drawer.Navigator>
  );
}

// roomSchedule added but not tested