import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "./screens/home"
import details from './screens/details';
const Stack = createNativeStackNavigator();

function RootStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
             <Stack.Screen name="Details" component={details} />
            </Stack.Navigator>
    )
}

export default function App(){
    return <RootStack/>
}