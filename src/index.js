import React from 'react';
import Routes from './routes';
import './config/statusBarConfig';

const App = () => <Routes />;
/*
    código acima é igual a este:
    class App extends Component {
        render(){
            return <Routes />
        }
    }
*/
export default App;