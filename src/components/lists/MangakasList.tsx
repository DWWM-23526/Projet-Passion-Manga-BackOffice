import { Datagrid, List, TextField } from "react-admin";

export const MangakasList = () => (
  <List>
    <Datagrid>
      <TextField source="id"/>
      <TextField source="img_mangaka"/>
      <TextField source="first_name"/>
      <TextField source="last_name"/>
      <TextField source="birthdate"/>
      <TextField source="texte"/>
      <TextField source="is_deleted"/>
    </Datagrid>
  </List>
);