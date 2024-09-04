import {
  BooleanInput,
  Edit,
  ImageField,
  ImageInput,
  required,
  SimpleForm,
  TextInput,
} from "react-admin";

export const TagEdit = () => (
  <Edit title="Modification du genre">
    <SimpleForm>
      <TextInput label="Genre" source="tag_name" />
      <ImageInput source="img_tag" label="Photo du genre" validate={required()}>
        <ImageField source="imageUrl" title="title" />
      </ImageInput>
      <BooleanInput label="Supprimé" source="is_deleted" />
    </SimpleForm>
  </Edit>
);
