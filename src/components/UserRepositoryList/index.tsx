import { useEffect } from "react";
import { useRepositories } from "../../hooks/useRepositories";

import goUserPageButton from "../../assets/goUserPageButton.svg"

import './styles.scss';

export function UserRepositoryList() {
  const { getOthersRepositories, otherRepositories } = useRepositories();

  useEffect(() => {
    getOthersRepositories()
  }, [getOthersRepositories])

  return (
    <section className="repository-list container">
      <ul>

        {otherRepositories.map(repository => {
          return (
            <li key={repository.name}>
              <div className="info-container">
                <a rel="noreferrer" target='_blank' href={repository.html_url}>
                  <strong>{repository.name}</strong>
                </a>
                <p>{repository.owner.login}</p>
              </div>
              <a rel="noreferrer" target='_blank' href={repository.html_url}>
                <button type="button">
                  <img src={goUserPageButton} alt="Ir para página" />
                </button>
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  );
}