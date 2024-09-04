import {
  BooleanInput,
  DateInput,
  Edit,
  ImageField,
  ImageInput,
  required,
  SimpleForm,
  TextInput,
} from "react-admin";

export const MangakaEdit = () => (
  <Edit title="Modification Mangaka">
    <SimpleForm>
      <ImageInput
        source="img_mangaka"
        label="Photo du mangaka"
        validate={required()}
      >
        <ImageField source="imageUrl" title="title" />
      </ImageInput>
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
