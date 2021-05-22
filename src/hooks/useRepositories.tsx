import { createContext, ReactNode, useContext, useState } from "react";

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

  console.log('repositories')

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