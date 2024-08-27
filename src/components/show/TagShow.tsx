import { BooleanField, Show, SimpleShowLayout, TextField } from "react-admin";

export const TagShow = () => (
  <Show>
    <SimpleShowLayout>
    <TextField label="Genre" source="tag_name" />
    <BooleanField label="Supprimé" source="is_deleted" />
    </SimpleShowLayout>
  </Show>

);