import React from 'react';
import Search from './src/components/Search';
import {Root, FooterTab, Footer, Icon, Text, Button} from 'native-base';
import {AppLoading} from 'expo';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import Footer_app from './src/components/Footer';
import Propos from './src/components/Propos';
import Render_search_map from './src/components/Render_search_map';
import Render_search_timeline from './src/components/Render_search_timeline';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      screen: ""
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
    this.setState({screen:"map"});
  }

  change_screen_timeline = () => {
    this.setState({screen: "timeline"});
  }
  change_screen_map = () => {
    this.setState({screen: "map"});
  }
  change_screen_propos = () => {
    this.setState({screen: "propos"});
  }
  render() {
    const { isReady, screen } = this.state;
    if (!isReady) {
      return <AppLoading />;
    }
    let Component;
  switch(screen){
    case 'timeline':
      Component = () => <Search style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} view='timeline'/>;
      break;
    case 'map':
      Component = () => <Search view='map'/>;
      break;
    case 'propos':
      Component = () => <Propos />;
      break;
    default:
      return <AppLoading />;   
    }

    return (
        <Root>
          <Component />
          <Footer_app 
            screen={screen} 
            change_screen_timeline={this.change_screen_timeline}
            change_screen_map={this.change_screen_map}
            change_screen_propos={this.change_screen_propos}
            />
        </Root>
        );
  }
}

/* Rebuild du bundle*/ 