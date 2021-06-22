import { useEffect } from 'react';
import { Header } from '../components/Header';
import { UserRepositoryList } from '../components/UserRepositoryList/index';
import { useRepositories } from '../hooks/useRepositories';

import '../styles/repository.scss';

export function Repository() {
  const { pickedRepository, setPickedRepositoryState } = useRepositories();

  useEffect(() => {
    const localStoragePickedRepositoryData = localStorage.getItem('picked-repository');

    if (localStoragePickedRepositoryData) {
      setPickedRepositoryState(JSON.parse(localStoragePickedRepositoryData));
    }

    document.title = `Github Explorer | ${pickedRepository.full_name}`
  }, [])

  return (
    <>
      <Header />
      <div className="repository-container container">
        {pickedRepository ? (
          <header>
            <div className="repository-info-container">
              <img className="profile-photo" src={pickedRepository.owner.avatar_url} alt="Foto do Perfil" />
              <div className="text">
                <a rel="noreferrer" target="_blank" href={pickedRepository.html_url}>
                  <h1>{pickedRepository.full_name}</h1>
                </a>
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
        ) : (
          <header>
            <div className="repository-info-container">
              <span>Carregando...</span>
            </div>
          </header>
        )}

        <section>
          <UserRepositoryList />
        </section>
      </div>
    </>
  );
}