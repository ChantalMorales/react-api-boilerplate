import React from 'react';
import UserProfile from '../components/UserProfile';
import { useUserCategories } from '../data/useUsersCategories';

const UserProfilePage = () => {
  const categories = useUserCategories( );

  console.log( 'CATEGORIAS por USUARIO', categories.categories );

  return (
    <div>
      <UserProfile categories={ categories.categories } />
    </div>


  );
};

export default UserProfilePage;