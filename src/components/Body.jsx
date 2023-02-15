import Posts from './Posts';
import SideBar from './SideBar';
import Stories from './Stories';

export default function Body() {
   return (
      <>
         <div className='content'>
            <div className='feed'>
               <Stories />
               <Posts />
            </div>
            <SideBar />
         </div>
         <nav className='mobile-bottom-nav'>
            <ion-icon name='home' />
            <ion-icon name='search-outline' />
            <ion-icon name='add-circle-outline' />
            <ion-icon name='heart-outline' />
            <ion-icon name='person-outline' />
         </nav>
      </>
   );
}
