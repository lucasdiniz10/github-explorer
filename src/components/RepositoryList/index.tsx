import { useEffect } from "react";
import { useRepositories } from "../../hooks/useRepositories";

import './styles.scss';

export function RepositoryList() {
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
              <strong>{repository.name}</strong>
              <p>{repository.description}</p>

              <a rel="noreferrer" target="_blank" href={repository.html_url}>
                Acessar repositório
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  );
}