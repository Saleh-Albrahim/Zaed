import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalHeader, ModalBody, Image } from '@chakra-ui/react';

interface Props {
  onClose: any;
  isOpen: any;
  src: string;
}

const ImagePreview: React.FC<Props> = ({ onClose, isOpen, src }) => {
  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Image src={src} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ImagePreview;
