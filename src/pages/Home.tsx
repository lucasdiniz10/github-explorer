import { useEffect, useState } from "react";
import { api } from "../services/api";

import { Header } from "../components/Header/index";
import { RepositoriesSearch } from "../components/RepositoriesSearch/index";

import '../styles/home.scss'


interface User {
  id: number,
  login: string,
  avatar_url: string,
  name: string,
  repos_url: string,
}

interface Repositories {
  id: number,
  name: string,
  full_name: string,
  description: string,
  url: string,
  stars: number,
  forks: number,
  openIssues: number,
  owner: User,
}

export function Home() {
  const [newRepositoriesSearch, setNewRepositoriesSearch] = useState('');

  // https://api.github.com/search/repositories?q={react}{&page,per_page,sort,order}


  const handleCreateNewRepositoriesSearch = async () => {
    try {
      const response = await api.get(`repositories?q=${newRepositoriesSearch}&page=1&per_page=20`)

      const data = (response.data.items);
      setRepositories(data);
    } catch (error) {
      console.log(error)
    }
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
            onChange={(e) => setNewRepositoriesSearch(e.target.value)}
            value={newRepositoriesSearch}
          />
          <button
            className="form-item"
            type="submit"
            onSubmit={handleCreateNewRepositoriesSearch}
          >
            Pesquisar
          </button>
        </form>
        <div className="repositories-container">
          <RepositoriesSearch
            repositories={repositories}
          />
        </div>
      </div>
    </>
  );
}