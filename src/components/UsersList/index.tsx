import './styles.scss'
import goUserPageButton from "../../assets/goUserPageButton.svg"

interface UsersListProps {
  avatar: string,
  repos_url: string,
  login: string,
}

export function UsersList(props: UsersListProps) {
  const { login, avatar, repos_url } = props;

  return (
    <section className="users-list-container container">
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
          <a href="/">
            <img
              src={goUserPageButton}
              alt="ir para repositórios do usuário"
              className="go-to-user-page-button"
            />
          </a>
        </li>
        {/* {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })} */}
      </ul>
    </section>
  );
}