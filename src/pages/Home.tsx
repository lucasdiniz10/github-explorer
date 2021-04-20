import { useState } from "react";
import { Header } from "../components/Header";
import { UsersList } from "../components/UsersList";
import '../styles/home.scss'


export interface User {
  id: number,
  login: string,
  avatar_url: string,
  name: string,
  repos_url: string,
}
export interface Repositories {
  id: number;
  name: string,
  full_name: string,
  description: string,
  url: string,
  stars: number,
  forks: number,
  openIssues: number
  owner: {
    user: User
  }
}

export function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [newUserSearch, setNewUserSearch] = useState('');

  let userUrl = 'https://api.github.com/users/' + newUserSearch;

  function handleCreateNewUserSearch() {
    if (!newUserSearch) return;

    fetch(userUrl)
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
    console.log(newUserSearch);
    console.log(users);

    //setNewUserSearch('');
  }

  return (
    <>
      <Header />
      <div className="home-container container">
        <h1 id="home-title">
          Explore repositórios<br></br>no Github.
        </h1>
        <form className="search-user-container">
          <input
            className="form-item"
            type="text"
            placeholder="Digite aqui"
            onChange={(e) => setNewUserSearch(e.target.value)}
            value={newUserSearch}
          />
          <button
            className="form-item"
            type="button"
            onClick={handleCreateNewUserSearch}
          >
            Pesquisar
          </button>
        </form>
        <div className="repositories-container">
          <UsersList />
        </div>
      </div>
    </>
  );
}