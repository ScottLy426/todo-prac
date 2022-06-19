import {
  Box,
  List,
} from '@chakra-ui/react';

import { useRecoilValue } from 'recoil';
import filteredTodoListState from '../recoil/selectors/filteredTodoListState';
import TodoItem from './TodoItem';


export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);
  if (!todoList) return <div>loading...</div>

  return (
    <Box mt="5">
      <List spacing={5} color="white">
        {todoList.map((todoItem) => {
          return <TodoItem key={todoItem.id} item={todoItem} />
        })}
      </List>
    </Box>
  )
}
