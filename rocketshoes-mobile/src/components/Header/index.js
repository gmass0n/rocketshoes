import React from 'react';
import { withNavigation } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Logo,
  ItemCount,
  TouchableOpacity,
} from './styles';

function Header({ navigation }) {
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Logo />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#FFF" size={24} />

        <ItemCount>0</ItemCount>
      </TouchableOpacity>
    </Container>
  );
}

export default withNavigation(Header);
