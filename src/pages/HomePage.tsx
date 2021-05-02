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
    <VStack justifyContent="center" alignItems="center" height="100vh">
      <VStack py="30px" rounded="md" align="center" borderColor="black" boxShadow="dark-lg" width="30%">
        <Image boxSize="200px" src={Logo} alt="شاركنا" />
        <Text color="green.700" fontSize="40px" fontWeight="bold">
          منصة زائد
        </Text>
        <Text align="center" color="green.700" fontSize="35px">
          زائد عندك ناقص عند غيرك
        </Text>
        <Text align="center" color="green.700" fontSize="20px" width="92%">
          منصه زائد هي منصه سعودية غير ربحية تعنى في الزائد لدى الافراد وضمانيه وصوله الى المحتاجين بالتواصل المباشر
          معهم بموثوقيه و سهولة تحت إشراف متخصصين في التحقق من صحة الاحتياج
        </Text>
        <Button {...buttonStyle} onClick={goToDonate} width="350px" fontSize="1.5rem" py="7">
          تبرع الان !
        </Button>
      </VStack>
      <VStack width="30%" sx={{ marginTop: '30px !important' }}>
        <Text align="center" color="green.700">
          لديك ناقص عيني يمكنك الاطلاع على العديد من الزائد لدى الآخرين والاستفادة منه
        </Text>
        <Button {...buttonStyle} onClick={goToBeneficiary} width="230px" fontSize="1rem" py="4">
          تقدم في طلبك الان
        </Button>
      </VStack>
    </VStack>
  );
};

export default HomePage;
