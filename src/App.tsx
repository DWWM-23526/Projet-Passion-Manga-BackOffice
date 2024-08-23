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
import { MangaCreate } from "./components/create/MangaCreate";

export const App = () => (
  <Admin
    loginPage={MyLoginPage}
    layout={Layout}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    {(permissions) => (
      <>
        {permissions === 3 && (
          <Resource
            name="users"
            list={UsersList}
            edit={EditGuesser}
            show={ShowGuesser}
          />
        )}
        {permissions >= 2 && (
          <>
            <Resource
              name="manga"
              list={MangasList}
              edit={EditGuesser}
              create={MangaCreate}
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
              name="emailConfirm"
              list={EmailConfirmList}
              edit={EditGuesser}
              show={ShowGuesser}
            />
          </>
        )}
      </>
    )}
  </Admin>
);
