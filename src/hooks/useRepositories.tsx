import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { api } from "../services/api";
import axios from "axios";

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
  html_url?: string,
  watchers: number,
  forks: number,
  open_issues: number,
  owner: User,
}

interface RepositoriesProviderProps {
  children: ReactNode;
}

type RepositoriesContextData = {
  repositories: Repositories[],
  setRepositoriesState: (state: Repositories[]) => void,
  pickedRepository: Repositories,
  setPickedRepositoryState: (repo: Repositories) => void,
  otherRepositories: Repositories[],
  getOthersRepositories: () => void,
}

const RepositoriesContext = createContext<RepositoriesContextData>({} as RepositoriesContextData);


export function RepositoriesProvider({ children }: RepositoriesProviderProps) {
  const [repositories, setRepositories] = useState<Repositories[]>([]);
  const [pickedRepository, setPickedRepository] = useState({} as Repositories);

  const [otherRepositories, setOtherRepositories] = useState<Repositories[]>([]);

  function setRepositoriesState(state: Repositories[]) {
    setRepositories(state);
    localStorage.setItem('repository-searched', JSON.stringify(state));
  }

  function setPickedRepositoryState(repo: Repositories) {
    setPickedRepository(repo);
    localStorage.setItem('picked-repository', JSON.stringify(repo));
  }

  async function getOthersRepositories() {
    await axios.get(pickedRepository.owner.repos_url)
      .then(response => (setOtherRepositories(response.data)))
  }

  // Busca inicial
  useEffect(() => {
    const localStorageRepositoryData = localStorage.getItem('repository-searched');

    if (localStorageRepositoryData) {
      setRepositories(JSON.parse(localStorageRepositoryData));
    } else {
      api.get(`repositories?q=react&page=1&per_page=20`)
        .then(response => setRepositories(response.data.items));
    }
  }, [])

  return (
    <RepositoriesContext.Provider
      value={{
        repositories,
        setRepositoriesState,
        pickedRepository,
        setPickedRepositoryState,
        otherRepositories,
        getOthersRepositories
      }}
    >
      {children}
    </RepositoriesContext.Provider>
  );
}

export function useRepositories() {
  const context = useContext(RepositoriesContext);

  return context;
}