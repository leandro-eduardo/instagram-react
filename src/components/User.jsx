import { useState } from 'react';
import { FiEdit } from 'react-icons/fi';

export default function User(props) {
   const [user, setUser] = useState(props.user);

   function changeName() {
      const newName = prompt('Informe o novo nome');
      if (newName?.trim()) {
         setUser({ ...user, name: newName });
      }
   }

   function changeProfileImage() {
      const newProfileImage = prompt('Informe a URL da nova imagem de perfil');
      if (newProfileImage?.trim()) {
         setUser({ ...user, profileImage: newProfileImage });
      }
   }

   return (
      <div className='user'>
         <img onClick={changeProfileImage} src={user.profileImage} alt='Imagem de perfil' />
         <span className='text'>
            <strong>{user.name}</strong>
            <FiEdit onClick={changeName} />
         </span>
      </div>
   );
}
