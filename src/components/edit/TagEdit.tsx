import { BooleanInput, Edit, SimpleForm, TextInput } from "react-admin";

export const TagEdit = () => (
  <Edit title="Modification du genre">
    <SimpleForm>
      <TextInput label="Genre" source="tag_name" />
      <BooleanInput label="Supprimé" source="is_deleted" />
    </SimpleForm>
  </Edit>
);
