import { BooleanField, Datagrid, DateField, List, TextField } from "react-admin";

export const MangakasList = () => (
  <List>
    <Datagrid>
      <TextField label="Image" source="img_mangaka"/>
      <TextField label="Prénom" source="first_name"/>
      <TextField label="Nom" source="last_name"/>
      <DateField label="Date de naissance" source="birthdate"/>
      <TextField label="Descriptif" source="texte"/>
      <BooleanField label="Supprimé" source="is_deleted"/>
    </Datagrid>
  </List>
);