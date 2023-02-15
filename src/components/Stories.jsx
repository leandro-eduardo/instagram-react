import db from '../data/database';

export default function Stories() {
   const stories = db.getStories();

   return (
      <>
         <ul className='stories'>
            {stories.map((story, index) => (
               <Story key={index} storyData={story} />
            ))}
         </ul>
         <ion-icon id='left-arrow' name='chevron-forward-circle' />
      </>
   );
}

function Story(props) {
   const { user, profilePicture } = props.storyData;
   return (
      <li className='story'>
         <div className='out-layer'>
            <a>
               <img src={profilePicture} alt='User profile picture' />
            </a>
         </div>
         <p>{user}</p>
      </li>
   );
}
