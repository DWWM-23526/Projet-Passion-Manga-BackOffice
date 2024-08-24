import { Datagrid, List, TextField } from "react-admin";

export const EmailConfirmList = () => (
  <List>
    <Datagrid>
      <TextField label="ID" source="id" />
      <TextField label="Email" source="email" />
      <TextField label="Nom" source="name" />
      <TextField label="Date" source="date" />
    </Datagrid>
  </List>
);
