import { Text, Box, Button, VStack, Image, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import ItemDetails from '../offer/offerDetails';

const buttonStyle: any = {
  fontSize: '20px',
  backgroundColor: '#F0F0F0',
  borderColor: '#F0F0F0',
  borderRadius: '5px',
  boxShadow: 'base',
  color: 'gray',
  _hover: { color: 'black', boxShadow: 'lg' },
};

interface Props {
  item: any;
}
const Item: React.FC<Props> = (item: any) => {
  console.log(`item.item.image`, item.item.image);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} {...buttonStyle} width="100%" height="140px">
        <VStack spacing="9">
          <Text fontSize="28px">{item.item.name}</Text>
          <Text fontSize="13px" ml="auto">
            الموقع : {item.item.location}
          </Text>
        </VStack>
        <Image borderRadius="5px" width="180px" height="120px" src={item.item.image} alt="صورة" mr="auto" />
      </Button>
      <ItemDetails onClose={onClose} isOpen={isOpen} />
    </>
  );
};

export default Item;
