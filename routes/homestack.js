import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import about from '../screens/about';
const screens = {
    Default :{
        screen: Home
    },
    about : {
        screen : about
    }
};
const HomeStack = createStackNavigator(screens);

export default createAppContainer (HomeStack);