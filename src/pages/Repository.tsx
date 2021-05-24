import { Header } from '../components/Header';
import { RepositoryList } from '../components/RepositoryList';
import '../styles/repository.scss';

export function Repository() {
  return (
    <>
      <Header />
      <div className="user-container container">
        <header>
          <div className="title">
            <img src="" alt="" />
            <h1>lucasdiniz10/giftr</h1>
            <p>Um projeto Legal</p>
          </div>
          <div className="info">
            <ul>

              <li>
                <h2>
                  <span>1808</span>
                </h2>
                <p>Stars</p>
              </li>

              <li>
                <h2>
                  <span>1808</span>
                </h2>
                <p>Forks</p>
              </li>

              <li>
                <h2>
                  <span>1808</span>
                </h2>
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