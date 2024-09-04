import {
  BooleanInput,
  Create,
  DateInput,
  ImageField,
  ImageInput,
  required,
  SimpleForm,
  TextInput,
} from "react-admin";

export const MangakaCreate = () => (
  <Create>
    <SimpleForm>
      <ImageInput
        source="img_manga"
        label="Photo du manga"
        validate={required()}
      >
        <ImageField source="imageUrl" title="title" />
      </ImageInput>
      <TextInput source="first_name" />
      <TextInput source="last_name" />
      <DateInput source="birthdate" />
      <TextInput source="texte" />
      <BooleanInput source="is_deleted" />
    </SimpleForm>
  </Create>
);
