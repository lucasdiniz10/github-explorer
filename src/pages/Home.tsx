import { useState } from "react";
import { useRepositories } from "../hooks/useRepositories";
import { api } from "../services/api";

import { Header } from "../components/Header/index";
import { RepositoriesSearch } from "../components/RepositoriesSearch/index";

import '../styles/home.scss'

export function Home() {
  const { setRepositoriesState } = useRepositories();

  const [newRepositoriesSearch, setNewRepositoriesSearch] = useState('');

  // https://api.github.com/search/repositories?q={react}{&page,per_page,sort,order}

  async function handleCreateNewRepositoriesSearch() {
    const response = await api.get(`repositories?q=${newRepositoriesSearch}&page=1&per_page=20`)

    const data = (response.data.items);
    setRepositoriesState(data);
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
            type="button"
            onClick={handleCreateNewRepositoriesSearch}
          >
            Pesquisar
          </button>
        </form>
        <div className="repositories-container">
          <RepositoriesSearch />
        </div>
      </div>
    </>
  );
}