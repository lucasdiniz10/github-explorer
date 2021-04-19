import React, { useState } from "react";
import { Header } from "../components/Header";
import '../styles/home.scss'


export function Home() {
  const [newUserSearch, setNewUserSearch] = useState('');

  function handleCreateNewUserSearch() {
    if (!newUserSearch) return;

    console.log(newUserSearch);

    setNewUserSearch('');
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
            type="text"
            placeholder="Digite aqui"
            onChange={(e) => setNewUserSearch(e.target.value)}
            value={newUserSearch}
          />
          <button
            type="button"
            onClick={handleCreateNewUserSearch}
          >
            Pesquisar
          </button>
        </form>
      </div>
    </>
  );
}