import { VStack } from '@chakra-ui/react';
import React from 'react';
import OfferItem from './OfferItem';

interface Props {
  data: any;
}

const OfferList: React.FC<Props> = ({ data }) => {
  return (
    <VStack spacing="2" width="100%">
      {data.map((offer: any, index: number) => (
        <OfferItem key={index} index={index} offerData={offer} />
      ))}
    </VStack>
  );
};

export default OfferList;
