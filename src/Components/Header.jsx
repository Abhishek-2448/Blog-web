import React from 'react'
import logo from './../assets/Images/logo.png'
import { useNavigate } from 'react-router-dom'

function Header({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  return (
    <div className='flex justify-between items-center p-4 shadow-md bg-white'>
      <img src={logo} className='w-[180px]' alt='Logo' />
      <ul className='hidden md:flex gap-4 md:gap-14'>
        <li className='hover:font-bold cursor-pointer' onClick={() => navigate('/')}>Home</li>
        {!isLoggedIn ? (
          <li className='hover:font-bold cursor-pointer' onClick={() => navigate('/Login')}>Login</li>
        ) : (
          <li className='hover:font-bold cursor-pointer text-red-500' onClick={handleLogout}>Logout</li>
        )}
      </ul>
    </div>
  );
}

export default Header;
