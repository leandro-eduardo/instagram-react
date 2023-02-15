import db from '../data/database';
import Suggestions from './Suggestions';
import User from './User';

export default function SideBar() {
   const user = db.getUser();

   return (
      <div className='sidebar'>
         <div className='sidebar-content'>
            <User user={user} />
            <Suggestions />
            <span className='sidebar-footer'>
               <ul>
                  <li>
                     <a className='footer-link'>Sobre</a>
                  </li>
                  <li>
                     <a className='footer-link'>Ajuda</a>
                  </li>
                  <li>
                     <a className='footer-link'>Imprensa</a>
                  </li>
                  <li>
                     <a className='footer-link'>API</a>
                  </li>
                  <li>
                     <a className='footer-link'>Carreiras</a>
                  </li>
                  <li>
                     <a className='footer-link'>Privacidade</a>
                  </li>
                  <li>
                     <a className='footer-link'>Termos</a>
                  </li>
                  <li>
                     <a className='footer-link'>Localizações</a>
                  </li>
                  <li>
                     <a className='footer-link'>Contas mais relevantes</a>
                  </li>
                  <li>
                     <a className='footer-link'>Hashtags</a>
                  </li>
                  <li>
                     <a className='footer-link'>Idioma</a>
                  </li>
               </ul>
            </span>
            <span className='sidebar-footer'>© 2022 INSTAGRAM FROM META</span>
         </div>
      </div>
   );
}
