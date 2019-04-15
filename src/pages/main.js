import React, { Component } from 'react';
import { View, Text } from 'react-native';
import api from '../services/api';

export default class Main extends Component {

    static navigationOptions = {
        title: 'JSHunt'
    };

    state = { // sempre que tem alguma alteração no estado, o metodo render executa
        docs: [],
    };

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => { // sem o arrowFunction, ele não consegue enxergar o this, assim não consigo acessar outros metodos da classe
        const response = await api.get('/products');
        const { docs } = response.data;
        this.setState({ docs });
    };

    // map() usado para percorrer a lista docs
    // se eu usar () na arrowFunc, ele entende que eu já estou retornando aquela linha
    render() {
        return (
            <View>
                <Text>Página Main:</Text>
                {this.state.docs.map(product => <Text key={product._id}>{product.title}</Text>)}
            </View>
        );
    }
}