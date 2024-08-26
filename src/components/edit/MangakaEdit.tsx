import {
  BooleanInput,
  DateInput,
  Edit,
  required,
  SimpleForm,
  TextInput,
} from "react-admin";

export const MangakaEdit = () => (
  <Edit title="Modification Mangaka">
    <SimpleForm>
      <TextInput label="Image" source="img_mangaka" validate={required()} />
      <TextInput label="Prénom" source="first_name" validate={required()} />
      <TextInput label="Nom" source="last_name" validate={required()} />
      <DateInput
        label="Date de naissance"
        source="birthdate"
        validate={required()}
      />
      <TextInput label="Descriptif" source="texte" validate={required()} />
      <BooleanInput label="Supprimé" source="is_deleted" />
    </SimpleForm>
  </Edit>
);
