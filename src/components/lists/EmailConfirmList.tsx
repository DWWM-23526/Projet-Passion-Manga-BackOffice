import { Datagrid, List, TextField } from "react-admin";

export const EmailConfirmList = () => (
  <List>
    <Datagrid>
      <TextField source="id"/>
      <TextField source="email"/>
      <TextField source="name"/>
      <TextField source="date"/>
    </Datagrid>
  </List>
);