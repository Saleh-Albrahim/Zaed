import { Text, Box, Button, VStack, Image, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import OfferDetails from './offerDetails';

const buttonStyle: any = {
  fontSize: '20px',
  border: '1px solid',
  borderRadius: '5px',
  boxShadow: '2xl',
  transition: 'all .2s ease-in-out',
  color: 'green.700',
  _hover: { boxShadow: '2xl', transform: 'scale(1.01)' },
};

interface Props {
  offerData: any;
  index: number;
}

const OfferItem: React.FC<Props> = ({ offerData, index }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  let color;
  if (index % 2 === 0) {
    color = 'white';
  } else {
    color = '#F0F0F0';
  }

  console.log(index);
  console.log(`color`, color);

  return (
    <>
      <Button backgroundColor={color} onClick={onOpen} {...buttonStyle} width="100%" height="140px">
        <VStack>
          <Text fontSize="28px">{offerData.name}</Text>
          <br />
          <Text fontSize="15px" sx={{ marginLeft: 'auto !important' }} color="gray">
            الموقع : {offerData.location}
          </Text>

          <Text fontSize="15px" sx={{ marginLeft: 'auto !important' }} color="#898989">
            التاريخ : 01/05/2021
          </Text>
        </VStack>
        <Image borderRadius="5px" width="180px" height="120px" src={offerData.image} alt="صورة" mr="auto" />
      </Button>
      <OfferDetails onClose={onClose} isOpen={isOpen} />
    </>
  );
};

export default OfferItem;
