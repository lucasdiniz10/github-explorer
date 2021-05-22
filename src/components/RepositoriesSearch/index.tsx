import './styles.scss'
import goUserPageButton from "../../assets/goUserPageButton.svg"

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

interface UsersListProps {
  repositories: Repositories[];
}

export function RepositoriesSearch({ repositories }: UsersListProps) {
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
              <button type="button" className="go-to-user-page-button">
                <img
                  src={goUserPageButton}
                  alt="ir para repositórios do usuário"
                />
              </button>
            </li>
          )
        })}
      </ul>
    </section>
  );
}