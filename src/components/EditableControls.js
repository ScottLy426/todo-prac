import {
  useEditableControls, ButtonGroup,
  IconButton,
  Flex
} from "@chakra-ui/react"
import { CheckIcon, CloseIcon, EditIcon, ViewOffIcon, DeleteIcon } from '@chakra-ui/icons';
import { useRecoilState } from 'recoil'
import { todoListState } from '../recoil/atoms/todoList';



export default function EditableControls({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const toggleItemCompletion = (id) => {
    const newList = todoList.map((todo) => {
      return todo.id === id ? { ...todo, isComplete: !todo.isComplete } : { ...todo }
    })
    setTodoList(newList)
  };
  const deleteItem = (id) => {
    const newList = todoList.filter((todo) => {
      return todo.id !== id
    })
    setTodoList(newList);
  };

  const {
    isEditing,
    getSubmitButtonProps,
    getCancelButtonProps,
    getEditButtonProps,
  } = useEditableControls()


  return isEditing ? (
    <ButtonGroup justifyContent='center' size='sm'>
      <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
      <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
    </ButtonGroup>
  ) : (
    <Flex gap="5" justifyContent='center' mt="1">
      <IconButton size='sm' icon={<EditIcon />} {...getEditButtonProps()} />
      <IconButton onClick={() => toggleItemCompletion(item.id)} size="sm" icon={<ViewOffIcon />} />
      <IconButton onClick={() => deleteItem(item.id)} size="sm" icon={<DeleteIcon />} />
    </Flex>
  )
}

