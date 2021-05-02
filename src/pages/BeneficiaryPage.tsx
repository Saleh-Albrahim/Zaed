import { Box, Flex } from '@chakra-ui/react';
import { useState, useContext, useEffect } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import BeneficiaryScene from '../scene/BeneficiaryScene';
import cloth from '../data/cloth.json';
import houseHold from '../data/houseHold.json';
import school from '../data/school.json';
import electronic from '../data/electronic.json';

const Dashboard = () => {
  const allData = [...cloth, ...houseHold, ...school, ...electronic];
  const [scene, setScene] = useState('جميع الاصناف');
  const [data, setData] = useState(allData);
  const [stage, setStage] = useState(<BeneficiaryScene data={data} />);

  const updateScene = (scene: string) => {
    setScene(scene);
    switch (scene) {
      case 'جميع الاصناف':
        setData(allData);
        break;
      case 'الملابس':
        setData(cloth);
        break;
      case 'الاجهزة المنزلية':
        setData(houseHold);
        break;
      case 'الاجهزة الالكترونية':
        setData(electronic);
        break;
      case 'المسلتزمات الدراسية':
        setData(school);
        break;
      default:
        setData(allData);
    }
  };

  return (
    <Flex alignItems="center" mr="250px" justifyContent="center" py={3}>
      <Sidebar updateScene={updateScene} currentScene={scene} />
      <Flex width="100%" rounded="md" border=" solid 2px" borderColor="green.700" boxShadow="dark-lg" p={7}>
        <BeneficiaryScene data={data} />
      </Flex>
    </Flex>
  );
};
export default Dashboard;
