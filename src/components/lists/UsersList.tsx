import { Datagrid, List, TextField } from "react-admin";

export const UsersList = () => (
  <List>
    <Datagrid>
      <TextField source="id"/>
      <TextField source="name"/>
      <TextField source="email"/>
      <TextField source="password"/>
      <TextField source="is_deleted"/>
      <TextField source="id_role"/>
    </Datagrid>
  </List>
);