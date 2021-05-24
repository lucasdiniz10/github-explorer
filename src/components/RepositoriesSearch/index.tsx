import './styles.scss'
import goUserPageButton from "../../assets/goUserPageButton.svg"
import { useRepositories } from '../../hooks/useRepositories';
import { Link } from 'react-router-dom';


export function RepositoriesSearch() {
  const { repositories, setPickedRepositoryState } = useRepositories();

  function handleShowRepositoryPage(id: number) {
    setPickedRepositoryState(id);
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
              <Link to={`repository/${repository.full_name}`}>
                <button type="button" className="go-to-user-page-button"
                  onClick={() => handleShowRepositoryPage(repository.id)}>
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