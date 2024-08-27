import { BooleanField, DateField, Show, SimpleShowLayout, TextField } from "react-admin";

export const MangakaShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField label="Image" source="img_mangaka"/>
      <TextField label="Prénom" source="first_name"/>
      <TextField label="Nom" source="last_name" />
      <DateField label="Date de naissance" source="birthdate" />
      <TextField label="Descriptif" source="texte" />
      <BooleanField label="Supprimé" source="is_deleted" />
    </SimpleShowLayout>
  </Show>
);