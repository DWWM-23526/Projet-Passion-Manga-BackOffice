import { Datagrid, List, TextField, usePermissions } from "react-admin";

export const UsersList = () => {
  const { permissions } = usePermissions();
  if (permissions !== 3) {
    return <div>Access Denied</div>;
  }
  return (
    <List>
      <Datagrid>
        <TextField label="ID" source="id" />
        <TextField label="Nom" source="name" />
        <TextField label="Email" source="email" />
        <TextField label="Mot de passe" source="password" />
        <TextField label="Supprimé" source="is_deleted" />
        <TextField label="Rôle" source="id_role" />
      </Datagrid>
    </List>
  );
};
