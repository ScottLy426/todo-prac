import { Box, Center, Divider } from '@chakra-ui/react';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import FilterTodos from './components/FilterTodos';

function App() {
  return (
    <Center>
      <Box m="20" minHeight="300px" w="650px" bgColor="tomato" borderRadius="lg">
        <Box p="5" display="flex" flexDirection="column">
          <Box display="flex" gap="20">
            <AddTodo />
            <FilterTodos />
          </Box>
          <Divider h="2px" mt='5'></Divider>
          <TodoList />
        </Box>
      </Box>
    </Center>

  );
}

export default App;
