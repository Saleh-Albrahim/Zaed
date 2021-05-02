import { Box, Image, VStack, Text } from '@chakra-ui/react';
import Logo from '../../img/logo.svg';
import Logout from './Logout';
import SidebarItem from './SidebarItem';

const sidebarData = ['جميع الاصناف', 'الملابس', 'الاجهزة المنزلية', 'الاجهزة الالكترونية', 'المسلتزمات الدراسية'];

interface Props {
  currentScene: string;
  updateScene: (value: string) => void;
}

const Sidebar: React.FC<Props> = ({ updateScene, currentScene }) => (
  <Box position="fixed" right={0} p={5} w="250px" top={0} h="100%" borderLeft="2px" borderColor="green.700">
    <VStack display="flex" justifyContent="center" alignItems="center">
      <Image m="auto" h={165} w={165} src={Logo} alt="منصة زائد" />
      <br />
      <Text color="green.700" fontSize="28px" fontWeight="bold">
        منصة زائد
      </Text>
      <br />
      {sidebarData.map((item, index) => {
        return <SidebarItem key={index} value={item} updateScene={updateScene} currentScene={currentScene} />;
      })}
      <Logout updateScene={updateScene} />
    </VStack>
  </Box>
);
export default Sidebar;
