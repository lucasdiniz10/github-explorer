import { Header } from "../components/Header";
import { RepositoryList } from "../components/RepositoryList";

export function Home() {
  return (
    <>
      <Header />
      <div className="home-container ">
        <h1>Explore repositórios
no Github.</h1>
        <RepositoryList />
      </div>
    </>
  );
}