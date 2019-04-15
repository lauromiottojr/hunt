import { createStackNavigator } from 'react-navigation'; // navegação por botão. Tem em abas, menu laterais etc...
import Main from './pages/main';

export default createStackNavigator({
    Main,
}, {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#DA552F',
            },
            headerTintColor: '#FFF',
        },
    });