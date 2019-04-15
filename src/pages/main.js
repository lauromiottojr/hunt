import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
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

    renderItem = ({ item }) => (
        <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <TouchableOpacity  onPress={() => { }}>
                <Text>Acessar</Text>
            </TouchableOpacity>
        </View>
    )

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.docs}
                    keyExtractor={item => item._id}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}