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
              <div className="content-container">
                <Link
                  to={`repository`}
                  onClick={() => handleShowRepositoryPage(repository)}>
                  <img src={repository.owner.avatar_url} alt="Foto perfil" className="profile-photo" />
                </Link>
                <div className="text-content-container">
                  <Link
                    to={`repository`}
                    onClick={() => handleShowRepositoryPage(repository)}>
                    {repository.full_name}
                  </Link>
                  <p>{repository.description}</p>
                </div>
              </div>

              <Link to={`repository`}
                className="go-to-user-page-button"
                onClick={() => handleShowRepositoryPage(repository)}>
                <img
                  src={goUserPageButton}
                  alt="ir para repositórios do usuário"
                />
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  );
}