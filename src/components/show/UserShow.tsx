import { BooleanField, Show, SimpleShowLayout, TextField } from "react-admin";

export const UserShow = () => (
  <Show>
    <SimpleShowLayout>
    <TextField label="Nom" source="name" />
        <TextField label="Email" source="email" />
        <TextField label="Mot de passe" source="password" />
        <BooleanField label="Supprimé" source="is_deleted" />
        <TextField label="Rôle" source="id_role" />
    </SimpleShowLayout>
  </Show>
);