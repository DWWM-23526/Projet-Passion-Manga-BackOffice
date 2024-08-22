import { Admin, Resource, EditGuesser, ShowGuesser } from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./provider/dataProvider";
import { MangasList } from "./components/lists/MangasList";
import { MangakasList } from "./components/lists/MangakasList";
import { TagsList } from "./components/lists/TagsList";
import { UsersList } from "./components/lists/UsersList";
import { EmailConfirmList } from "./components/lists/EmailConfirmList";
import authProvider from "./provider/authProvider";
import MyLoginPage from "./components/login/MyLoginPage";

export const App = () => (
  <Admin
    loginPage={MyLoginPage}
    layout={Layout}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    <Resource
      name="manga"
      list={MangasList}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="mangaka"
      list={MangakasList}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="tags"
      list={TagsList}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="users"
      list={UsersList}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="emailConfirm"
      list={EmailConfirmList}
      edit={EditGuesser}
      show={ShowGuesser}
    />
  </Admin>
);
