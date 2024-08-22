import { Datagrid, List, TextField } from "react-admin";

export const MangasList = () => (
  <List>
    <Datagrid>
      <TextField source="id"/>
      <TextField source="img_manga"/>
      <TextField source="manga_name"/>
      <TextField source="edition"/>
      <TextField source="total_tome_number"/>
      <TextField source="year_release"/>
      <TextField source="tome_number"/>
      <TextField source="texte"/>
      <TextField source="is_deleted"/>
      <TextField source="Id_mangaka"/>
    </Datagrid>
  </List>
);