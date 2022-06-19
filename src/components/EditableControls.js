import {
  useEditableControls, ButtonGroup,
  IconButton,
  Flex
} from "@chakra-ui/react"
import { CheckIcon, CloseIcon, EditIcon, ViewOffIcon, DeleteIcon } from '@chakra-ui/icons';
import { useRecoilState } from 'recoil'
import { todoListState } from '../recoil/atoms/todoList';

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}
function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export default function EditableControls({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
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
      <IconButton onClick={toggleItemCompletion} size="sm" icon={<ViewOffIcon />} />
      <IconButton onClick={deleteItem} size="sm" icon={<DeleteIcon />} />
    </Flex>
  )
}

