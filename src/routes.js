import { createStackNavigator } from 'react-navigation'; // navegação por botão. Tem em abas, menu laterais etc...
import Main from './pages/main';
import Product from './pages/product';

export default createStackNavigator({
    Main,
    Product
}, {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#DA552F',
            },
            headerTintColor: '#FFF',
        },
    });