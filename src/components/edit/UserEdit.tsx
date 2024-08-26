import {
  BooleanInput,
  Edit,
  PasswordInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const UserEdit = () => (
  <Edit title="Modification de l'utilisateur">
    <SimpleForm>
      <TextInput label="Nom" source="name" />
      <TextInput label="Email" source="email" />
      <PasswordInput label="Mot de passe" source="password" />
      <TextInput label="Rôle" source="id_role" />
      <BooleanInput label="Supprimé" source="is_deleted" />
    </SimpleForm>
  </Edit>
);
