import {Tabs} from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
export default () => {
    

    return  ( 
    <Tabs
     screenOptions={
        {
            headerShown: false,
            tabBarActiveTintColor: "red",
            tabBarStyle: {
                backgroundColor: "white",
                borderTopColor: "black",
                borderTopWidth: 1,  },      
            }}>
       <Tabs.Screen name="feed" options={{tabBarIcon: ({color}) => ( <FontAwesome5 name="home" size={30} color={color} /> ) , tabBarLabel:"Home"}} />
      <Tabs.Screen name="(courses)" options={{tabBarIcon: ({color}) => ( <FontAwesome6 name="pencil" size={24} color={color} />), tabBarLabel:"Courses" }} />
       <Tabs.Screen name="announcements" options={{tabBarIcon: ({color}) => ( <FontAwesome name="inbox" size={24} color={color} />), tabBarLabel :"Announcements" , tabBarBadge:12 }} />
       <Tabs.Screen name="[profile]" options={{tabBarIcon: ({color}) => ( <FontAwesome6 name="user-circle" size={24} color={color} />), tabBarLabel:"Profile"}} />
    </Tabs>
    );
}