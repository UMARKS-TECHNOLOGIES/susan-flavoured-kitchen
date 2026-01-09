import { Outlet } from 'react-router-dom';
import Navbar from '../layout/Navbar/Navbar';
import Footer from '../layout/Footer';

const PublicLayout = () => {
  return (
    <div className="bg-[#fffcfa] pt-6 overflow-hidden">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PublicLayout;
