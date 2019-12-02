import styled from 'styled-components/native';

import img from '../../assets/tenis1.jpg';

import colors from '../../styles/colors';

export const Container = styled.ScrollView.attrs({
  horizontal: true,
})`
  flex: 1;
  background: ${colors.dark};
  padding: 30px;
`;

export const Product = styled.View`
  height: 350px;
  width: 220px;
  background: #fff;
  flex-direction: column;
  padding: 15px;
  justify-content: space-between;
  border-radius: 4px;
  margin-right: 30px;
`;

export const ProductImage = styled.Image.attrs({
  source: img,
})`
  width: 200px;
  height: 200px;
  align-self: center;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  color: #333;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #333;
  margin-bottom: 15px;
`;

export const ProductButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  width: 100%;
  background: ${colors.primary};
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
`;

export const ProductAmout = styled.View`
  flex-direction: row;
  align-items: center;
  background: #5a479a;
  padding: 10px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const ProductAmoutText = styled.Text`
  margin-left: 5px;
  color: #FFF;
`;

export const ProductButtonText = styled.Text`
  color: #FFF;
  text-align: center;
  font-weight: bold;
  flex: 1;
`;
