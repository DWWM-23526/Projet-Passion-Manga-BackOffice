import { BooleanField, Datagrid, List, TextField } from "react-admin";

export const TagsList = () => (
  <List>
    <Datagrid>
      <TextField label="Genre" source="tag_name" />
      <TextField label="Image du genre" source="img_tag" />
      <BooleanField label="Supprimé" source="is_deleted" />
    </Datagrid>
  </List>
);
