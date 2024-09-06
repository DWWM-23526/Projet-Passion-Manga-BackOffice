import {
  BooleanInput,
  Create,
  DateInput,
  ImageField,
  ImageInput,
  required,
  SaveButton,
  SaveContextProvider,
  SimpleForm,
  TextInput,
  Toolbar,
  useDataProvider,
  useNotify,
  useRedirect,
} from "react-admin";
import Mangaka from "../../interfaces/Mangaka";

export const MangakaCreate = () => {
  const notify = useNotify();
  const dataProvider = useDataProvider();
  const redirect = useRedirect();

  const handleSave = async (values: Mangaka) => {
    try {
      const { img_mangaka, ...mangakaData } = values;

      let title = img_mangaka.rawFile.name.split(".png")[0];
      title = title.split(".jpg")[0];

      let imgUrl = "";

      if (img_mangaka && img_mangaka.rawFile) {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("images", img_mangaka.rawFile);

        const url = await dataProvider.uploadImage(formData);
        imgUrl = url[0].url;
      }

      dataProvider.create("mangaka", {
        data: { ...mangakaData, img_mangaka: imgUrl },
      });

      notify("Mangaka crée avec succès.");
      redirect("/mangaka");
    } catch (error) {
      console.error(error);
      notify("Erreur lord de la création du mangaka.", {
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
          <ImageInput
            source="img_mangaka"
            label="Image du mangaka"
            accept={{ "image/*": [".png", ".jpg"] }}
          >
            <ImageField source="src" title="title" />
          </ImageInput>
          <TextInput source="first_name" label="Prénom" validate={required()} />
          <TextInput source="last_name" label="Nom" validate={required()} />
          <DateInput source="birthdate" validate={required()} />
          <TextInput source="texte" multiline validate={required()} />
          <BooleanInput source="is_deleted" />
        </SimpleForm>
      </SaveContextProvider>
    </Create>
  );
};
