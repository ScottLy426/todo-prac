import { useState } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Input
} from '@chakra-ui/react'
import { useSetRecoilState } from 'recoil'
import { v4 as uuidv4 } from 'uuid';
import { AddIcon } from '@chakra-ui/icons'
import { todoListState } from '../recoil/atoms/todoList'

export default function AddTodo() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [value, setValue] = useState('');

  const setTodoList = useSetRecoilState(todoListState);

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const addItem = () => {
    setTodoList((prev) => [...prev, { id: uuidv4(), text: value, isComplete: false }])
    onClose();
    setValue('');
  }
  return (
    <>
      <IconButton onClick={onOpen} icon={<AddIcon />} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Todo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input value={value} onChange={handleChange} placeholder="add a todo..." />
          </ModalBody>
          <ModalFooter gap="5">
            <Button onClick={addItem} colorScheme='green'>Add</Button>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )

}
