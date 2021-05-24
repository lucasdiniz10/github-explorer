import { useEffect, useState } from "react";

import './styles.scss';

interface Repository {
  name: string,
  description: string,
  html_url: string,
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/lucasdiniz10/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list container">
      <ul>

        {repositories.map(repository => {
          return (
            <li>
              <strong>{repository.name}</strong>
              <p>{repository.description}</p>

              <a href={repository.html_url}>
                Acessar repositório
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  );
}