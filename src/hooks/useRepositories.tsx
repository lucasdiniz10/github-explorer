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
  stars: number,
  forks: number,
  openIssues: number,
  owner: User,
}

interface RepositoriesProviderProps {
  children: ReactNode;
}

type RepositoriesContextData = {
  repositories: Repositories[],
  setRepositoriesState: (state: Repositories[]) => void,
  pickedRepository: number,
  setPickedRepositoryState: (id: number) => void;
}

const RepositoriesContext = createContext<RepositoriesContextData>({} as RepositoriesContextData);


export function RepositoriesProvider({ children }: RepositoriesProviderProps) {
  const [repositories, setRepositories] = useState<Repositories[]>([]);

  function setRepositoriesState(state: Repositories[]) {
    setRepositories(state);
  }

  // Recebe o id do repositório escolhido
  const [pickedRepository, setPickedRepository] = useState(0);

  function setPickedRepositoryState(id: number) {
    setPickedRepository(id);
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