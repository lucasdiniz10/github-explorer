import { Header } from '../components/Header';
import { RepositoryList } from '../components/RepositoryList';
import '../styles/repository.scss';

export function Repository() {
  return (
    <>
      <Header />
      <div className="repository-container container">
        <header>
          <div className="title">
            <img className="profile-photo" src="https://avatars.githubusercontent.com/u/47890460?v=4" alt="Foto do Perfil" />
            <div className="text">
              <h1>lucasdiniz10/giftr</h1>
              <p>Um projeto Legal</p>
            </div>
          </div>
          <div className="info">
            <ul>

              <li>
                <h3>
                  <span>1808</span>
                </h3>
                <p>Stars</p>
              </li>

              <li>
                <h3>
                  <span>1808</span>
                </h3>
                <p>Forks</p>
              </li>

              <li>
                <h3>
                  <span>1808</span>
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