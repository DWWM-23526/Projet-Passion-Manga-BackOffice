import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  DateInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  SelectArrayInput,
  useNotify,
  useDataProvider,
  useRedirect,
  required,
  ReferenceArrayInput,
  SaveContextProvider,
  Toolbar,
  SaveButton,
  ImageField,
  ImageInput,
} from "react-admin";
import Manga from "../../interfaces/Manga";

export const MangaCreate = () => {
  const notify = useNotify();
  const dataProvider = useDataProvider();
  const redirect = useRedirect();

  const handleSave = async (values: Manga) => {
    try {
      const { tags, img_manga, ...mangaData } = values;

      let title = img_manga.rawFile.name.split(".png")[0];
      title = title.split(".jpg")[0];

      let imgUrl = "";

      if (img_manga && img_manga.rawFile) {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("images", img_manga.rawFile);

   
        const url = await dataProvider.uploadImage(formData);

        imgUrl = url[0].url;
      }

      const { data: createdManga } = await dataProvider.create("manga", {
        data: { ...mangaData, img_manga: imgUrl },
      });

      if (tags && tags.length > 0) {
        await Promise.all(
          tags.map((tagId) =>
            dataProvider.createRelation(`manga/tags`, {
              keyId: createdManga.id,
              relationId: tagId,
            }),
          ),
        );
      }

      notify("Manga créé avec succès avec ses tags.");
      redirect("/manga");
    } catch (error) {
      console.error(error);
      notify("Erreur lors de la création du manga ou des tags.", {
        type: "error",
      });
    }
  };

  return (
    <Create>
      <SaveContextProvider
        value={{
          save: handleSave,
        }}
      >
        <SimpleForm
          toolbar={
            <Toolbar>
              <SaveButton />
            </Toolbar>
          }
        >
          <TextInput
            source="manga_name"
            label="Nom du manga"
            validate={required()}
          />
          <ImageInput
            source="img_manga"
            label="image du manga"
            accept={{ "image/*": [".png", ".jpg"] }}
          >
            <ImageField source="src" title="title" />
          </ImageInput>

          <TextInput source="edition" label="Edition" validate={required()} />
          <NumberInput
            source="total_tome_number"
            label="Nombre total de volume"
            validate={required()}
          />
          <NumberInput
            source="tome_number"
            label="Numéro du tome"
            validate={required()}
          />
          <DateInput
            source="year_release"
            label="Date de sortie"
            validate={required()}
          />
          <TextInput
            source="texte"
            label="Description"
            multiline
            validate={required()}
          />
          <ReferenceInput
            source="Id_mangaka"
            reference="mangaka"
            label="Mangaka"
          >
            <SelectInput
              label="Mangaka"
              optionText={(choice: { first_name: string; last_name: string }) =>
                `${choice.first_name} ${choice.last_name}`
              }
              validate={required()}
            />
          </ReferenceInput>

          <ReferenceArrayInput label="Tags" source="tags" reference="tags">
            <SelectArrayInput optionText="tag_name" />
          </ReferenceArrayInput>

          <BooleanInput label="Supprimé" source="is_deleted" />
        </SimpleForm>
      </SaveContextProvider>
    </Create>
  );
};
