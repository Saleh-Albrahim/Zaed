import {
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  Textarea,
  VStack,
  Image,
} from '@chakra-ui/react';
import Logo from '../img/logo.svg';
import { useHistory } from 'react-router-dom';
import { successAlertTimer } from '../util/alerts';

const buttonStyle: any = {
  height: '50px',
  width: '260px',
  fontSize: '20px',
  backgroundColor: 'white',
  borderRadius: '5px',
  border: '1px solid',
  color: 'green.700',
  boxShadow: 'base',
  transition: 'all .2s ease-in-out',
  _hover: { boxShadow: 'lg', transform: 'scale(1.01)' },
};

const DonatePage = () => {
  const history = useHistory();

  const onSubmit = async (e: any) => {
    e.preventDefault();

    successAlertTimer('تم التبرع بـ الصنف بنجاح .. شكرا لك !');

    history.push('/');
  };

  return (
    <Flex alignItems="center" justifyContent="center">
      <VStack
        width="40%"
        rounded="md"
        backgroundColor="white"
        border="10px"
        borderColor="black"
        mt={5}
        boxShadow="dark-lg"
        p={5}
      >
        <Image boxSize="90px" src={Logo} alt="شاركنا" />
        <Text color="green.700" fontSize="30px" fontWeight="bold">
          منصة زائد
        </Text>
        <Divider borderColor="green.700" />

        <form onSubmit={onSubmit}>
          <FormControl>
            <Text color="green.700" fontSize="25px">
              تبرع بـ الزائد لديك :
            </Text>

            <FormLabel color="green.700" fontSize="15px" fontWeight="bold">
              نوع الصنف :
            </FormLabel>
            <Select
              sx={{ textIndent: '15px' }}
              outlineColor="black"
              focusBorderColor="none"
              variant="outline"
              height="48px"
              fontSize="15px"
              defaultValue=""
              borderColor="green.700"
              boxShadow="base"
              width="500px"
              color="green.700"
              fontWeight="bold"
              _hover={{ borderColor: 'green.700' }}
            >
              <option disabled label=" " />
              <option>الملابس</option>
              <option>الاجهزة المنزلية</option>
              <option>الاجهزة الاكترونية</option>
              <option>المستلزمات الدراسية</option>
            </Select>
          </FormControl>
          <FormControl mt={3}>
            <FormLabel color="green.700" fontSize="15px" fontWeight="bold">
              اسم الصنف :
            </FormLabel>
            <Input
              outlineColor="black"
              borderColor="green.700"
              boxShadow="base"
              color="green.700"
              fontWeight="bold"
              width="500px"
              _hover={{ borderColor: 'green.700' }}
              _focus={{ borderColor: 'green.700' }}
            />
          </FormControl>
          <FormControl mt={3}>
            <FormLabel fontSize="15px" fontWeight="bold" color="green.700">
              المدينة :
            </FormLabel>
            <Select
              sx={{ textIndent: '15px' }}
              outlineColor="black"
              focusBorderColor="none"
              variant="outline"
              height="48px"
              fontSize="15px"
              defaultValue=""
              borderColor="green.700"
              boxShadow="base"
              width="500px"
              color="green.700"
              fontWeight="bold"
              _hover={{ borderColor: 'green.700' }}
            >
              <option disabled label=" " />
              <option>الرياض</option>
              <option>الدمام</option>
              <option>تبوك</option>
              <option>مكة</option>
            </Select>
          </FormControl>
          <FormControl mt={3}>
            <FormLabel fontSize="15px" fontWeight="bold" color="green.700">
              رقم الجوال :
            </FormLabel>
            <Input
              outlineColor="black"
              borderColor="green.700"
              boxShadow="base"
              color="green.700"
              fontWeight="bold"
              width="500px"
              _hover={{ borderColor: 'green.700' }}
              _focus={{ borderColor: 'green.700' }}
            />
          </FormControl>
          <FormControl mt={3}>
            <FormLabel fontSize="15px" fontWeight="bold" color="green.700">
              الملاحظات :
            </FormLabel>
            <Textarea
              outlineColor="black"
              boxShadow="base"
              borderColor="green.700"
              fontWeight="bold"
              width="500px"
              color="green.700"
              _hover={{ borderColor: 'green.700' }}
              _focus={{ borderColor: 'green.700' }}
            />
          </FormControl>
          <FormControl mt={3}>
            <FormLabel fontSize="15px" fontWeight="bold" color="green.700">
              إرفاق صور للمنتج (إختياري) :
            </FormLabel>
            <Input
              type="file"
              borderColor="green.700"
              border="none"
              color="green.700"
              fontWeight="bold"
              width="500px"
              _hover={{ borderColor: 'green.700' }}
              _focus={{ borderColor: 'green.700' }}
            />
          </FormControl>
          <Button {...buttonStyle} mt={5} mr="125px" type="submit">
            تبرع الان !
          </Button>
        </form>
      </VStack>
    </Flex>
  );
};
export default DonatePage;
