import { Datagrid, List, TextField, usePermissions } from "react-admin";

export const UsersList = () => {
  const {permissions} = usePermissions();
  if (permissions !== 3) {
    return <div>Access Denied</div>
  }
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
};