import React from 'react';
import {ActivityIndicator} from 'react-native';
import {catchUserTLFromId} from '../libs/catchTL';
import Render_search from './Render_search';
import {Container, Header, Input, Item, Icon, Text} from 'native-base';
import MapView from 'react-native-maps';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchedText: "",
            user_tl: [],
            isLoading: false,
        };
        this.load_user();
    }
    
    load_user(){
        if (this.state.searchedText.length > 0) { // Seulement si le texte recherché n'est pas vide
        this.setState({ isLoading: true })
        catchUserTLFromId(this.state.searchedText).then(datas => {
            this.setState({user_tl:datas, isLoading: false});
        });
      }
    }
    _searchTextInputChanged(text) {
        this.setState({searchedText: text});
    }

    _displayLoading() {
        if (this.state.isLoading) {
          return (
            <Container>
              <ActivityIndicator size='large' />
              </Container>
          )
        }
      }

    render() {
        return (
            <Container>
                <Container>
                <Header searchBar rounded>
                <Item>
                    <Icon onPress={() => this.load_user()} name="ios-search" />
                    <Input placeholder="Rechercher" onChangeText={(text) => this._searchTextInputChanged(text)}/>
                    <Icon name="ios-people" />
                </Item>
                </Header>
                <Render_search user_tl={this.state.user_tl}/>
                </Container>
                {this._displayLoading()}
            </Container>     
        )
    }
}
export default Search
