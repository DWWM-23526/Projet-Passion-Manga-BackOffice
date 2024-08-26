import { Admin, Resource, ShowGuesser } from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./provider/dataProvider";
import { MangasList } from "./components/lists/MangasList";
import { MangakasList } from "./components/lists/MangakasList";
import { TagsList } from "./components/lists/TagsList";
import { UsersList } from "./components/lists/UsersList";
import authProvider from "./provider/authProvider";
import MyLoginPage from "./components/login/MyLoginPage";
import { MangaCreate } from "./components/create/MangaCreate";
import { MangakaCreate } from "./components/create/MangakaCreate";
import { MangaEdit } from "./components/edit/MangaEdit";
import { MangakaEdit } from "./components/edit/MangakaEdit";
import { TagEdit } from "./components/edit/TagEdit";
import { UserEdit } from "./components/edit/UserEdit";

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
            edit={UserEdit}
            show={ShowGuesser}
          />
        )}
        {permissions >= 2 && (
          <>
            <Resource
              name="manga"
              list={MangasList}
              edit={MangaEdit}
              create={MangaCreate}
              show={ShowGuesser}
            />
            <Resource
              name="mangaka"
              list={MangakasList}
              edit={MangakaEdit}
              create={MangakaCreate}
              show={ShowGuesser}
            />
            <Resource
              name="tags"
              list={TagsList}
              edit={TagEdit}
              show={ShowGuesser}
            />
          </>
        )}
      </>
    )}
  </Admin>
);
