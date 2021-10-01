import Authentication from "../../components/authentication/Authentication";
import './home.css'

export default function Home() {
  return (
    <div>
      <div className='button-home'>Welcome do Home</div>
      <Authentication></Authentication>
    </div>
  );
}
