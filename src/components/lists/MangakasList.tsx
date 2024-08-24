import { Datagrid, List, TextField } from "react-admin";

export const MangakasList = () => (
  <List>
    <Datagrid>
      <TextField label="ID" source="id"/>
      <TextField label="Image" source="img_mangaka"/>
      <TextField label="Prénom" source="first_name"/>
      <TextField label="Nom" source="last_name"/>
      <TextField label="Date de naissance" source="birthdate"/>
      <TextField label="Descriptif" source="texte"/>
      <TextField label="Supprimé" source="is_deleted"/>
    </Datagrid>
  </List>
);