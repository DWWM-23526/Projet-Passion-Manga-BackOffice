import { Datagrid, List, TextField } from "react-admin";

export const TagsList = () => (
  <List>
    <Datagrid>
      <TextField source="id"/>
      <TextField source="tag_name"/>
      <TextField source="is_deleted"/>
    </Datagrid>
  </List>
);