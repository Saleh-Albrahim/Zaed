import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './styles.css';

const MySwal: any = withReactContent(Swal);

export const errorAlert = (message: string): void => {
  MySwal.fire({
    icon: 'error',
    text: message,
    onOpen: () => MySwal.getConfirmButton().blur(),
    background: 'white',
    customClass: {
      container: 'my-swal',
    },
    confirmButtonText: 'المحاولة مرة اخرى',
    confirmButtonColor: '#276749',
  });
};

export const successAlertTimer = (message: string): void => {
  MySwal.fire({
    icon: 'success',
    text: message,
    timer: 1500,
    customClass: {
      container: 'my-swal',
    },
    background: 'white',
    showConfirmButton: false,
  });
};

export const askQuestionAlert = async (onClose: any) => {
  MySwal.fire({
    icon: 'info',
    text: 'إضافة ملاحظات للمتبرع',
    background: 'white',
    input: 'textarea',
    onOpen: () => {
      MySwal.enableInput();
      MySwal.getInput().focus();
    },
    inputValue: 'لا يوجد ملاحظات',
    willClose: () => {
      successAlertTimer('تم إرسال الطلب بنجاح');
      onClose();
    },
    customClass: {
      container: 'my-swal',
    },
    confirmButtonText: 'إرسال الطلب',
    confirmButtonColor: '#276749',
  });
};
