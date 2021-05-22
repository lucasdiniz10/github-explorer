import { createContext, ReactNode, useContext, useEffect, useState } from "react"
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

interface RepositoriesContextData {
  repositories: Repositories[],
}

const RepositoriesContext = createContext<RepositoriesContextData>({} as RepositoriesContextData);


export function RepositoriesProvider({ children }: RepositoriesProviderProps) {
  const [repositories, setRepositories] = useState<Repositories[]>([]);

  // https://api.github.com/search/repositories?q={react}{&page,per_page,sort,order}

  useEffect(() => {
    api.get(`repositories?q=react&page=1&per_page=20`)
      .then(response => setRepositories(response.data.items));
  }, [])

  return (
    <RepositoriesContext.Provider value={{ repositories }}>
      {children}
    </RepositoriesContext.Provider>
  );
}

export function useRepositories() {
  const context = useContext(RepositoriesContext);

  return context;
}