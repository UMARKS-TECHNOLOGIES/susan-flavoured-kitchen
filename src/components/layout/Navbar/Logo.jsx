import { Link } from 'react-router-dom';
import Logo from '../../../assets/Logo.jpeg';

export default function NavLogo() {
  return (
    <Link to="/">
      <img src={Logo} alt="Logo" className="w-12" />
    </Link>
  );
}
