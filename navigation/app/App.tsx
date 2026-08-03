import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "./screens/home"
import details from './screens/details';
import profile from './screens/profile';
const Stack = createNativeStackNavigator();

function RootStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
             <Stack.Screen name="Details" component={details} />
              <Stack.Screen name="Profile" component={profile} />
            </Stack.Navigator>
    )
}

export default function App(){
    return <RootStack/>
}