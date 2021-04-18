import { Header } from "../components/Header";
import { RepositoryList } from "../components/RepositoryList";
import '../styles/home.scss'

export function Home() {
  return (
    <>
      <Header />
      <div className="home-container container">
        <h1>Explore repositórios
no Github.</h1>
        <RepositoryList />
      </div>
    </>
  );
}