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

   function changeProfilePicture() {
      const newProfilePicture = prompt('Informe a URL da nova imagem de perfil');
      if (newProfilePicture?.trim()) {
         setUser({ ...user, profilePicture: newProfilePicture });
      }
   }

   return (
      <div className='user-info-sidebar'>
         <img onClick={changeProfilePicture} src={user.profilePicture} alt='User profile picture' />
         <div>
            <div>
               <p className='username'>{user.name}</p>
               <FiEdit onClick={changeName} />
            </div>

            <p className='light light-grey'>{user.name.toLowerCase()}</p>
         </div>
      </div>
   );
}
