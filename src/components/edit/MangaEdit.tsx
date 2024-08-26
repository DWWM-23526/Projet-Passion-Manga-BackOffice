import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  DateInput,
  required,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

export const MangaEdit = () => (
  <Edit title="Modification Manga">
    <SimpleForm>
      <TextInput
        source="manga_name"
        label="Nom du manga"
        validate={required()}
      />
      <TextInput
        source="img_manga"
        label="Url de l'image du manga"
        validate={required()}
      />
      <TextInput source="edition" label="Edition" validate={required()} />
      <NumberInput
        source="total_tome_number"
        label="Nombre total de volume"
        validate={required()}
      />
      <NumberInput
        source="tome_number"
        label="Numéro du tome"
        validate={required()}
      />
      <DateInput
        source="year_release"
        label="Date de sortie"
        validate={required()}
      />
      <TextInput
        source="texte"
        label="Description"
        multiline
        validate={required()}
      />
      <ReferenceInput source="Id_mangaka" reference="mangaka" label="Mangaka">
        <SelectInput
          label="Mangaka"
          optionText={(name) => `${name.first_name} ${name.last_name}`}
          validate={required()}
        />
      </ReferenceInput>
      <BooleanInput label="Supprimé" source="is_deleted" />
    </SimpleForm>
  </Edit>
);
