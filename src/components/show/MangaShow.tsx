import {
  BooleanField,
  ChipField,
  FunctionField,
  ImageField,
  ReferenceField,
  ReferenceManyField,
  Show,
  SimpleShowLayout,
  SingleFieldList,
  TextField,
} from "react-admin";

export const MangaShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField label="Titre" source="manga_name" />
      <ImageField label="Image du manga" source="img_manga" />
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
      <BooleanField label="Supprimé" source="is_deleted" />
    </SimpleShowLayout>
  </Show>
);
