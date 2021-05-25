import axios from "axios";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

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
  }

  function setPickedRepositoryState(repo: Repositories) {
    setPickedRepository(repo);
  }

  async function getOthersRepositories() {
    await axios.get(pickedRepository.owner.repos_url)
      .then(response => (setOtherRepositories(response.data)))
  }

  // https://api.github.com/search/repositories?q={react}{&page,per_page,sort,order}
  // Busca inicial
  useEffect(() => {
    api.get(`repositories?q=react&page=1&per_page=20`)
      .then(response => setRepositories(response.data.items))
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