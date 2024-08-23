import { DateInput, Create, NumberInput, SimpleForm, TextInput, BooleanInput } from 'react-admin';

export const MangaCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="img_manga" />
            <TextInput source="manga_name" />
            <TextInput source="edition" />
            <NumberInput source="total_tome_number" />
            <DateInput source="year_release" />
            <NumberInput source="tome_number" />
            <TextInput source="texte" />
            <NumberInput source="Id_mangaka" />
            <BooleanInput source="is_deleted" />
        </SimpleForm>
    </Create>
);