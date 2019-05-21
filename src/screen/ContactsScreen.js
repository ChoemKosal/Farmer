import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Drawer, Content, Footer } from 'native-base';
import CHeader from '../components/CHeader';

class ContactScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <CHeader 
          Left = {
            <Button transparent
            onPress={()=>{this.props.navigation.goBack()}}>
                <Icon name='ios-arrow-back' />
            </Button>} 
          title = 'Contacts'/>
        <Text> Contact </Text>
      </View>
    );
  }
}

export default ContactScreen;
