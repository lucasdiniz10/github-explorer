import './styles.scss'
import goUserPageButton from "../../assets/goUserPageButton.svg"

interface UsersListProps {
  avatar: string,
  repos_url: string,
  login: string,
}

export function RepositoriesSearch(props: UsersListProps) {
  const { login, avatar, repos_url } = props;

  return (
    <section className="repos-container container">
      <ul>
        <li>
          <a href="/">
            <img src={avatar} alt="Foto perfil" className="profile-photo" />
          </a>
          <div className="text-content-container">
            <strong className="repository-link">
              <a href={repos_url}>
                {login}/repos
              </a>
            </strong>
            <p>Descrição do repo</p>
          </div>
          <button type="button" className="go-to-user-page-button">
            <img
              src={goUserPageButton}
              alt="ir para repositórios do usuário"
            />
          </button>
        </li>
        {/* {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })} */}
      </ul>
    </section>
  );
}