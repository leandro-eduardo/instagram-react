export default function NavBar() {
   return (
      <div className='navbar'>
         <div className='container'>
            <div className='logo'>
               <ion-icon name='logo-instagram'></ion-icon>
               <div className='separator'></div>
               <img src='./assets/img/logo.png' alt='logo' />
            </div>

            <div className='search'>
               <input type='text' placeholder='Pesquisar' />
            </div>

            <div className='icons'>
               <ion-icon name='paper-plane-outline'></ion-icon>
               <ion-icon name='compass-outline'></ion-icon>
               <ion-icon name='heart-outline'></ion-icon>
               <ion-icon name='person-outline'></ion-icon>
            </div>

            <div className='mobile-icons'>
               <ion-icon name='paper-plane-outline'></ion-icon>
            </div>
         </div>
      </div>
   );
}
