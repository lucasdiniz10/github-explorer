import { Header } from '../components/Header';
import { RepositoryList } from '../components/RepositoryList';
import { useRepositories } from '../hooks/useRepositories';
import '../styles/repository.scss';

export function Repository() {
  const { pickedRepository } = useRepositories();

  return (
    <>
      <Header />
      <div className="repository-container container">
        <header>
          <div className="repository-info-container">
            <img className="profile-photo" src={pickedRepository.owner.avatar_url} alt="Foto do Perfil" />
            <div className="text">
              <h1>{pickedRepository.full_name}</h1>
              <p>{pickedRepository.description}</p>
            </div>
          </div>
          <div className="info">
            <ul>

              <li>
                <h3>
                  <span>{pickedRepository.watchers}</span>
                </h3>
                <p>Stars</p>
              </li>

              <li>
                <h3>
                  <span>{pickedRepository.forks}</span>
                </h3>
                <p>Forks</p>
              </li>

              <li>
                <h3>
                  <span>{pickedRepository.open_issues}</span>
                </h3>
                <p>Issues Abertas</p>
              </li>

            </ul>
          </div>
        </header>

        <section>
          <RepositoryList />
        </section>
      </div>
    </>
  );
}