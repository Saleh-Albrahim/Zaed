import {
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  Input,
  Textarea,
  HStack,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { successAlertTimer, errorAlert, askQuestionAlert } from '../../util/alerts';
import data from '../../data/cloth.json';
import ImagePreview from './ImagePreview';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const buttonStyle: any = {
  height: '48px',
  width: '250px',
  fontSize: '20px',
  backgroundColor: 'white',
  borderRadius: '5px',
  border: '1px solid',
  color: 'green.700',
  boxShadow: 'base',
  transition: 'all .2s ease-in-out',
  _hover: { boxShadow: 'lg', transform: 'scale(1.01)' },
};

const ItemDetails: React.FC<Props> = ({ isOpen, onClose }) => {
  const { isOpen: isOpenImage, onOpen: onOpenImage, onClose: onCloseImage } = useDisclosure();

  const [imageSrc, setImageSrc] = useState('');
  const onSubmit = async (e: any) => {
    e.preventDefault();
    successAlertTimer('تم إرسال الطلب بنجاح');
    onClose();
  };

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered size="xl" closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent zIndex={1} background="white" p={3}>
          <ModalCloseButton />
          <Flex alignItems="end" justifyContent="center" flexDirection="column">
            <ModalHeader m="auto" color="green.800">
              تفاصيل الصنف
            </ModalHeader>
            <Divider borderColor="green.800" />
            <ModalBody>
              <form onSubmit={onSubmit}>
                <FormControl mt={3}>
                  <FormLabel color="green.800" fontSize="15px" fontWeight="bold">
                    نوع الصنف :
                  </FormLabel>
                  <Input
                    outlineColor="black"
                    borderColor="green.800"
                    boxShadow="base"
                    color="green.800"
                    readOnly
                    fontWeight="bold"
                    value="الملابس"
                    width="500px"
                    _hover={{ borderColor: 'green.800' }}
                  />
                </FormControl>
                <FormControl mt={3}>
                  <FormLabel color="green.800" fontSize="15px" fontWeight="bold">
                    اسم الصنف :
                  </FormLabel>
                  <Input
                    outlineColor="black"
                    borderColor="green.800"
                    boxShadow="base"
                    color="green.800"
                    readOnly
                    fontWeight="bold"
                    value="ملابس شتوية قديمة"
                    width="500px"
                    _hover={{ borderColor: 'green.700' }}
                  />
                </FormControl>
                <FormControl mt={3}>
                  <FormLabel fontSize="15px" fontWeight="bold" color="green.800">
                    المدينة :
                  </FormLabel>
                  <Input
                    outlineColor="black"
                    borderColor="green.800"
                    boxShadow="base"
                    color="green.800"
                    readOnly
                    fontWeight="bold"
                    value="الرياض"
                    width="500px"
                    _hover={{ borderColor: 'green.800' }}
                  />
                </FormControl>
                <FormControl mt={3}>
                  <FormLabel fontSize="15px" fontWeight="bold" color="green.800">
                    الملاحظات :
                  </FormLabel>
                  <Textarea
                    outlineColor="black"
                    boxShadow="base"
                    borderColor="green.800"
                    fontWeight="bold"
                    width="500px"
                    color="green.800"
                    readOnly
                    value="متوفر 4 اطقم مقاس large "
                    _hover={{ borderColor: 'green.800' }}
                  />
                </FormControl>
                <FormControl mt={3}>
                  <FormLabel fontSize="15px" fontWeight="bold" color="green.800">
                    صور الصنف :
                  </FormLabel>
                  <HStack border="1px solid black" borderColor="green.800" boxShadow="base" p={2} borderRadius="5px">
                    {data.map((item) => (
                      <Image
                        cursor="pointer"
                        onClick={(e: any) => {
                          setImageSrc(e.target.src);
                          onOpenImage();
                        }}
                        borderRadius="5px"
                        height="60px"
                        width="60px"
                        src={item.image}
                      />
                    ))}
                  </HStack>
                </FormControl>
                <Button {...buttonStyle} mt={5} mr="125px" type="submit">
                  طلب الصنف !
                </Button>
              </form>
              <ImagePreview src={imageSrc} onClose={onCloseImage} isOpen={isOpenImage} />
            </ModalBody>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ItemDetails;
