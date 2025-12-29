import { Fragment } from 'react';
import { UserIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { Menu, Transition } from '@headlessui/react';
// import { useAuth } from '../../store/useAuth';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';

const UserNavbar = () => {
//   const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    // await logout();
    navigate('/login');
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="flex items-center gap-2 bg-orange-50 p-2 rounded-full hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-500">
        <UserIcon className="w-8 h-8 text-orange-600" />
        <ChevronDownIcon className="w-4 h-4 text-orange-600" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white border border-orange-200 divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none z-50">
          <div className="px-1 py-1">
            {/* Profile Settings */}
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/profile"
                  className={`block w-full px-4 py-2 text-sm text-gray-700 rounded-md ${
                    active ? 'bg-orange-100 text-orange-700' : ''
                  }`}
                >
                  Profile Settings
                </Link>
              )}
            </Menu.Item>

            <hr className="my-1 border-t border-gray-200" />

            {/* Order History */}
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/dashboard"
                  className={`block w-full px-4 py-2 text-sm text-gray-700 rounded-md ${
                    active ? 'bg-orange-100 text-orange-700' : ''
                  }`}
                >
                  Order History
                </Link>
              )}
            </Menu.Item>

            <hr className="my-1 border-t border-gray-200" />

            {/* Sign Out */}
            <Menu.Item>
              {({ active }) => (
                <Button
                  variant="ghost"
                  className={`w-full justify-start px-4 py-2 text-sm text-gray-700 ${
                    active ? 'bg-orange-100 text-orange-700' : ''
                  }`}
                  onClick={handleLogout}
                >
                  Sign Out
                </Button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default UserNavbar;
