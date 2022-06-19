import {
  Editable,
  EditableInput,
  EditablePreview,
  Input,
} from '@chakra-ui/react';
import EditableControls from './EditableControls';
export default function TodoItem({ item }) {

  return (
    <Editable
      textAlign='center'
      defaultValue={item.text}
      fontSize='2xl'
      isPreviewFocusable={false}
      color="black"
    >
      <EditablePreview textDecoration={item.isComplete && "line-through"} />
      <Input as={EditableInput} />
      <EditableControls />
    </Editable>
  )
}