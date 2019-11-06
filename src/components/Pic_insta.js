import React from "react";
import { Image, Linking, TouchableHighlight } from "react-native";
import get from "lodash/get";
import { Card, CardItem, Text, Icon, Left, Right } from "native-base";

//TODO : afficher lorsqu'il y a plusieurs images sur un même post
//TODO : voir pour afficher les vidéos
//TODO : retirer la location quand elle n'est pas indiquée dans le post
//TODO : afficher les images avec les bonnes proportions
class Pic_insta extends React.Component {
  render() {
    const { node } = this.props.post;
    var location_name = get(node, "location.name");
    if (!location_name) location_name = "non renseigné";
    return (
      <Card style={{ flex: 0 }}>
        <TouchableHighlight
          onPress={() => {
            Linking.openURL(node.display_url);
          }}
        >
          <CardItem cardBody>
            <Image
              style={{ height: 250, width: null, flex: 1 }}
              source={{ uri: node.display_url }}
            />
          </CardItem>
        </TouchableHighlight>
        <CardItem footer>
          <Left style={{ flex: 1 }}>
            <Text>{node.edge_liked_by.count} </Text>
            <Icon name="heart" />
          </Left>
          <Right style={{ flex: 4 }}>
            <Text>à {location_name}</Text>
          </Right>
        </CardItem>
      </Card>
    );
  }
}
export default Pic_insta;
