import { Button } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import React, { useContext } from 'react';
import { errorAlert, successAlertTimer } from '../../util/alerts';

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
}

const Logout = ({ updateScene }: Props) => {
  const history = useHistory();

  const logout: any = async () => {
    updateScene('الرئيسية');
    successAlertTimer('تم تسجيل الخروج بنجاح');
    history.push('/');
  };
  return (
    <>
      <Button position="fixed" right={1} bottom={2} {...buttonStyle} color="red.700" onClick={(e: any) => logout()}>
        تسجيل الخروج
      </Button>
    </>
  );
};

export default Logout;
