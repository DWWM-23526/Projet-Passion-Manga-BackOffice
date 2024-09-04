import {
  BooleanInput,
  Edit,
  PasswordInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const UserEdit = () => (
  <Edit title="Modification de l'utilisateur">
    <SimpleForm>
      <TextInput label="Nom" source="name" />
      <TextInput label="Email" source="email" />
      <PasswordInput label="Mot de passe" source="password" />
      <ReferenceInput source="id_role" reference="role">
        <SelectInput label="Rôle" optionText="nom" optionValue="id" />
      </ReferenceInput>
      <BooleanInput label="Supprimé" source="is_deleted" />
    </SimpleForm>
  </Edit>
);
