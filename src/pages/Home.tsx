import { FormEvent, useState } from "react";
import { useRepositories } from "../hooks/useRepositories";
import { api } from "../services/api";

import { Header } from "../components/Header/index";
import { RepositoriesSearch } from "../components/RepositoriesSearch/index";

import '../styles/home.scss'

export function Home() {
  const { setRepositoriesState } = useRepositories();

  const [newRepositoriesSearch, setNewRepositoriesSearch] = useState('');

  async function handleCreateNewRepositoriesSearch(event: FormEvent) {
    event.preventDefault();

    const emptyTextField = newRepositoriesSearch === '';

    if (emptyTextField) {
      alert('Preencha o campo para fazer uma busca válida!');
    } else {
      const response = await api.get(`repositories?q=${newRepositoriesSearch}&page=1&per_page=20`)

      const data = (response.data.items);
      setRepositoriesState(data);
    }
  }

  return (
    <>
      <Header />
      <div className="home-container container">
        <h1 id="home-title">
          Explore repositórios<br></br>no Github.
        </h1>
        <form
          className="search-user-container"
          onSubmit={handleCreateNewRepositoriesSearch}
        >
          <input
            className="form-item"
            id="home-input"
            type="text"
            placeholder="Digite aqui"
            onChange={event => setNewRepositoriesSearch(event.target.value)}
            value={newRepositoriesSearch}
          />
          <button
            className="form-item"
            id="search-button"
            type="submit"
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