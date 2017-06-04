import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class ghost_go_vr extends React.Component {

  handleClick() {
    alert('aaa');
  }

  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          width: 2,
          alignItems: 'stretch',
          transform: [{translate: [-1, 1, -5]}],
        }}>
          <View onClick={this.handleClick} style={{ margin: 0.1, height: 0.3, backgroundColor: 'red'}}>
            <Text style={{fontSize: 0.2, textAlign: 'center'}}>Red</Text>
          </View>
          <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'orange'}}>
            <Text style={{fontSize: 0.2, textAlign: 'center'}}>Orange</Text>
          </View>
          <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'yellow'}}>
            <Text style={{fontSize: 0.2, textAlign: 'center'}}>Yellow</Text>
          </View>
          <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'green'}}>
            <Text style={{fontSize: 0.2, textAlign: 'center'}}>Green</Text>
          </View>
          <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'blue'}}>
            <Text style={{fontSize: 0.2, textAlign: 'center'}}>Blue</Text>
          </View>
        </View>
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          hello
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('ghost_go_vr', () => ghost_go_vr);
