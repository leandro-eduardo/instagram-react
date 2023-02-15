export default function NavBar() {
   return (
      <div className='header-container'>
         <nav className='header-desktop'>
            <div className='header-left'>
               <ion-icon name='logo-instagram' />
               <div className='division-border' />
               <img className='instagram-logo' src='./assets/logo.png' alt='Instagram Logo' />
            </div>
            <input type='text' name='search' id='search' placeholder='Pesquisar' />
            <div className='header-right'>
               <ion-icon name='paper-plane-outline' />
               <ion-icon name='compass-outline' />
               <ion-icon name='heart-outline' />
               <ion-icon name='person-outline' />
            </div>
         </nav>
         <div className='header-mobile'>
            <ion-icon name='logo-instagram' />
            <img className='instagram-logo' src='./assets/logo.png' alt='Instagram Logo' />
            <ion-icon name='paper-plane-outline' />
         </div>
      </div>
   );
}
