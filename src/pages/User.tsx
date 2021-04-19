import { Header } from '../components/Header';
import '../styles/user.scss';

export function User() {
  return (
    <>
      <Header />
      <div className="user-container container">
        <h1>User Page</h1>
      </div>
    </>
  );
}