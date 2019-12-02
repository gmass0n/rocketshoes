import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductButton,
  ProductAmout,
  ProductAmoutText,
  ProductButtonText,
} from './styles';

export default function Home() {
  return (
    <Container>
      <Product>
        <ProductImage />

        <ProductTitle>
          Tênis de Caminhada Leve Confortável
        </ProductTitle>

        <ProductPrice>R$ 179,90</ProductPrice>

        <ProductButton>
          <ProductAmout>
            <Icon name="add-shopping-cart" color="#FFF" size={20} />

            <ProductAmoutText>0</ProductAmoutText>
          </ProductAmout>

          <ProductButtonText>
            ADICIONAR
          </ProductButtonText>
        </ProductButton>
      </Product>

      <Product>
        <ProductImage />

        <ProductTitle>
          Tênis de Caminhada Leve Confortável
        </ProductTitle>

        <ProductPrice>R$ 179,90</ProductPrice>

        <ProductButton>
          <ProductAmout>
            <Icon name="add-shopping-cart" color="#FFF" size={20} />

            <ProductAmoutText>0</ProductAmoutText>
          </ProductAmout>

          <ProductButtonText>
            ADICIONAR
          </ProductButtonText>
        </ProductButton>
      </Product>

      <Product>
        <ProductImage />

        <ProductTitle>
          Tênis de Caminhada Leve Confortável
        </ProductTitle>

        <ProductPrice>R$ 179,90</ProductPrice>

        <ProductButton>
          <ProductAmout>
            <Icon name="add-shopping-cart" color="#FFF" size={20} />

            <ProductAmoutText>0</ProductAmoutText>
          </ProductAmout>

          <ProductButtonText>
            ADICIONAR
          </ProductButtonText>
        </ProductButton>
      </Product>

      <Product>
        <ProductImage />

        <ProductTitle>
          Tênis de Caminhada Leve Confortável
        </ProductTitle>

        <ProductPrice>R$ 179,90</ProductPrice>

        <ProductButton>
          <ProductAmout>
            <Icon name="add-shopping-cart" color="#FFF" size={20} />

            <ProductAmoutText>0</ProductAmoutText>
          </ProductAmout>

          <ProductButtonText>
            ADICIONAR
          </ProductButtonText>
        </ProductButton>
      </Product>
    </Container>
  );
}
