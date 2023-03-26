import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';
import { Ionicons,FontAwesome5 } from '@expo/vector-icons'; 


/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}



export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Welcome',
          tabBarIcon: ({ color }) => <Ionicons name="ios-bookmarks" size={24} color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color}  />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={30}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          
          headerLeft: () => (
            <Link href="/settings" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome5
                    name="tools"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginLeft: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
        />
        <Tabs.Screen
        name="three"
        options={{
          title: 'Bus Time',
          tabBarIcon: ({ color }) => <Ionicons name="ios-bus-sharp" size={30} color={color} />,
        }}
      />
      
        <Tabs.Screen
        name="four"
        options={{
          title: 'Train Time',
          tabBarIcon: ({ color }) => <Ionicons name="ios-train-sharp" size={30} color={color} />,
          
        }}
        
      />

      <Tabs.Screen
        name="five"
        options={{
          title: 'Test page',
          tabBarIcon: ({ color }) => <FontAwesome name="bug" size={30} color={color} />,
          
        }}
        
      />
    </Tabs>
  );
}
