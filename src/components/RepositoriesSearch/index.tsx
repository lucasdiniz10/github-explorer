import './styles.scss'
import goUserPageButton from "../../assets/goUserPageButton.svg"
import { useRepositories } from '../../hooks/useRepositories';
import { Link } from 'react-router-dom';

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

export function RepositoriesSearch() {
  const { repositories, setPickedRepositoryState } = useRepositories();

  function handleShowRepositoryPage(repo: Repositories) {
    setPickedRepositoryState(repo);
  }

  return (
    <section className="repos-container container">
      <ul>
        {repositories.map(repository => {
          return (
            <li key={repository.id}>
              <a href={repository.owner.repos_url}>
                <img src={repository.owner.avatar_url} alt="Foto perfil" className="profile-photo" />
              </a>
              <div className="text-content-container">
                <a href={repository.owner.repos_url}>
                  {repository.full_name}
                </a>
                <p>{repository.description}</p>
              </div>
              <Link to={`repository`}>
                <button type="button" className="go-to-user-page-button"
                  onClick={() => handleShowRepositoryPage(repository)}>
                  <img
                    src={goUserPageButton}
                    alt="ir para repositórios do usuário"
                  />
                </button>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  );
}