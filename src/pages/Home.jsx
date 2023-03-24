import Landing from '../components/Landing';
import Notes from '../components/Notes';
import Spinner from '../components/Spinner';

const Home = ({ loggedIn, checkingStatus }) => {
  if (checkingStatus) {
    return <Spinner />;
  }

  return loggedIn ? (
    <main className='-mt-12 flex flex-col space-y-20'>
      <Notes />
    </main>
  ) : (
    <Landing />
  );
};
export default Home;
