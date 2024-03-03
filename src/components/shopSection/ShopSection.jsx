import React from 'react';
import { ContainerShop } from './ShopSection.styled';
import ShopList from 'components/shopSection/shopList/ShopList';

const ShopSection = () => {
  return (
    <>
      <ContainerShop>
        <h1>ShopSection</h1>
        <ShopList />
      </ContainerShop>
    </>
  );
};

export default ShopSection;
