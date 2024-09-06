import {
  BooleanField,
  ImageField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

export const TagShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField label="Genre" source="tag_name" />
      <ImageField label="Image du Genre" source="img_tag" />
      <BooleanField label="Supprimé" source="is_deleted" />
    </SimpleShowLayout>
  </Show>
);
