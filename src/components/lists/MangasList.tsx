import {
  ChipField,
  Datagrid,
  FunctionField,
  List,
  ReferenceField,
  ReferenceManyField,
  SingleFieldList,
  TextField,
} from "react-admin";

export const MangasList = () => (
  <List>
    <Datagrid>
      <TextField label="ID" source="id" />
      <TextField label="Titre" source="manga_name" />
      <TextField label="Image" source="img_manga" />
      <ReferenceManyField label="Genres" reference="manga" target="tags">
        <SingleFieldList>
          <ChipField source="tag_name" />
        </SingleFieldList>
      </ReferenceManyField>
      <TextField label="Edition" source="edition" />
      <TextField label="Numero de Tome" source="tome_number" />
      <TextField label="Tome Total" source="total_tome_number" />
      <TextField label="Année de Parution" source="year_release" />
     
      <TextField source="texte" />
      <ReferenceField label="Auteur" source="Id_mangaka" reference="mangaka">
        <FunctionField
          source="first_name"
          render={(name) => `${name.first_name} ${name.last_name}`}
        />
      </ReferenceField>
      <TextField label="Suprimé" source="is_deleted" />
    </Datagrid>
  </List>
);
