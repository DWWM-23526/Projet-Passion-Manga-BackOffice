import { Admin, Resource } from "react-admin";
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
import { MangaShow } from "./components/show/MangaShow";
import { MangakaShow } from "./components/show/MangakaShow";
import { UserShow } from "./components/show/UserShow";
import { TagShow } from "./components/show/TagShow";

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
            show={UserShow}
          />
        )}
        {permissions >= 2 && (
          <>
            <Resource
              name="manga"
              list={MangasList}
              edit={MangaEdit}
              create={MangaCreate}
              show={MangaShow}
            />
            <Resource
              name="mangaka"
              list={MangakasList}
              edit={MangakaEdit}
              create={MangakaCreate}
              show={MangakaShow}
            />
            <Resource
              name="tags"
              list={TagsList}
              edit={TagEdit}
              show={TagShow}
            />
          </>
        )}
      </>
    )}
  </Admin>
);
