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
}

const RepositoriesContext = createContext<RepositoriesContextData>({} as RepositoriesContextData);


export function RepositoriesProvider({ children }: RepositoriesProviderProps) {

  const [repositories, setRepositories] = useState<Repositories[]>([]);

  function setRepositoriesState(state: Repositories[]) {
    setRepositories(state);
  }

  useEffect(() => {
    api.get(`repositories?q=react&page=1&per_page=20`)
      .then(response => setRepositories(response.data.items))
  }, [])


  // console.log('repositories')

  return (
    <RepositoriesContext.Provider
      value={{
        repositories,
        setRepositoriesState,
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