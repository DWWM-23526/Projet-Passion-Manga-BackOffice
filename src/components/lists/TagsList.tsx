import { Datagrid, List, TextField } from "react-admin";

export const TagsList = () => (
  <List>
    <Datagrid>
      <TextField label="ID" source="id" />
      <TextField label="Genre" source="tag_name" />
      <TextField label="Supprimé" source="is_deleted" />
    </Datagrid>
  </List>
);
