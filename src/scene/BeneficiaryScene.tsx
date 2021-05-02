import { SearchIcon } from '@chakra-ui/icons';
import { HStack, IconButton, Input, InputGroup, InputLeftElement, VStack } from '@chakra-ui/react';
import React from 'react';
import OfferList from '../components/offer/OfferList';

interface Props {
  data: any;
}

const BeneficiaryScene: React.FC<Props> = ({ data }) => {
  return (
    <VStack width="100%">
      <HStack>
        <InputGroup>
          <InputLeftElement cursor="pointer" pointerEvents="none">
            <IconButton
              width="50px"
              height="40px"
              mt="2.5"
              ml={1}
              cursor="pointer"
              background="white"
              icon={<SearchIcon />}
              aria-label="Search database"
              color="green.800"
            />
          </InputLeftElement>
          <Input
            outlineColor="black"
            focusBorderColor="none"
            variant="outline"
            height="50px"
            fontSize="20px"
            borderColor="green.600"
            type="text"
            px="20px"
            border="1px solid"
            width="900px"
            placeholder="البحث على صنف معين"
            mb="10px"
            boxShadow="md"
            _hover={{ borderColor: 'green.600' }}
          />
        </InputGroup>
      </HStack>
      <OfferList data={data} />
    </VStack>
  );
};

export default BeneficiaryScene;
