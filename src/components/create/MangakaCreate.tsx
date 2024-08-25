import {
  BooleanInput,
  Create,
  DateInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const MangakaCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="img_mangaka" />
      <TextInput source="first_name" />
      <TextInput source="last_name" />
      <DateInput source="birthdate" />
      <TextInput source="texte" />
      <BooleanInput source="is_deleted" />
    </SimpleForm>
  </Create>
);
