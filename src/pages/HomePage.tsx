import { Box, Flex, Text, Container, Button, SimpleGrid, VStack, Image } from '@chakra-ui/react';

import { useHistory } from 'react-router-dom';
import Logo from '../img/logo.svg';
import { errorAlert, successAlertTimer } from '../util/alerts';

const buttonStyle: any = {
  fontSize: '20px',
  border: '1px solid',
  borderRadius: '5px',
  boxShadow: '2xl',
  background: 'white',
  transition: 'all .2s ease-in-out',
  color: 'green.700',
  _hover: { boxShadow: '2xl', transform: 'scale(1.01)' },
};

const HomePage = () => {
  const history = useHistory();
  const goToBeneficiary = () => {
    successAlertTimer('تم تسجيل الدخول بنجاح');
    history.push('/beneficiary');
  };
  const goToDonate = () => {
    history.push('/donate');
  };
  return (
    <VStack height="100vh" justifyContent="center" alignItems="center">
      <VStack ba py="45px" rounded="md" align="center" borderColor="black" boxShadow="dark-lg" width="30%">
        <Image boxSize="200px" src={Logo} alt="شاركنا" />
        <Text color="green.700" fontSize="40px" fontWeight="bold">
          منصة زائد
        </Text>
        <br />
        <Text align="center" color="green.700" fontSize="35px">
          زائد عندك ناقص عند غيرك
        </Text>
        <br />
        <br />
        <Text align="center" color="green.700" fontSize="20px" width="92%">
          منصه زائد هي منصه سعودية غير ربحية تعنى في الزائد لدى الافراد وضمانيه وصوله الى المحتاجين بالتواصل المباشر
          معهم بموثوقيه و سهولة تحت إشراف متخصصين في التحقق من صحة الاحتياج
        </Text>
        <br />
        <br />
        <Button {...buttonStyle} onClick={goToDonate} width="350px" fontSize="1.5rem" py="7">
          تبرع الان !
        </Button>
      </VStack>
      <br />
      <br />
      <br />
      <br />
      <VStack width="30%">
        <Text align="center" color="green.700">
          لديك ناقص عيني يمكنك الاطلاع على العديد من الزائد لدى الآخرين والاستفادة منه
          <br />
        </Text>
        <Button {...buttonStyle} onClick={goToBeneficiary} width="230px" fontSize="1rem" py="4">
          تقدم في طلبك الان
        </Button>
      </VStack>
    </VStack>
  );
};

export default HomePage;
