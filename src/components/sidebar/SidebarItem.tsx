import { Button } from '@chakra-ui/react';

const buttonStyle: any = {
  height: '60px',
  width: '240px',
  fontSize: '20px',
  backgroundColor: 'white',
  borderRadius: '5px',
  border: '1px solid',
  color: 'green.700',
  boxShadow: 'base',
  transition: 'all .2s ease-in-out',
  _hover: { boxShadow: 'lg', transform: 'scale(1.01)' },
};

interface Props {
  updateScene: (value: string) => void;
  value: string;
  currentScene: string;
}

const SideBarItem = ({ updateScene, currentScene, value }: Props) => {
  let selected;
  if (value === currentScene) {
    selected = {
      borderColor: 'green.700',
      border: '2px solid',
      fontWeight: '1000',
    };
  } else {
    selected = {
      border: '1px solid',
    };
  }
  return (
    <Button {...buttonStyle} {...selected} onClick={(e: any) => updateScene(e.target.innerText)}>
      {value}
    </Button>
  );
};

export default SideBarItem;
