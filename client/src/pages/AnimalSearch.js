import { Link } from 'react-router-dom';

export default function AnimalSearch() {
  return (
    <>
      <h1>Animal Search</h1>
      <Link to='/main'>
        <button>Continue</button>
      </Link>
    </>
  );
}
