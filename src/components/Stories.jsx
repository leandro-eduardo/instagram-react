import db from '../data/database';

export default function Stories() {
   const stories = db.getStories();

   return (
      <div className='stories'>
         {stories.map((story, index) => (
            <Story key={index} user={story.user} />
         ))}

         <div className='arrow'>
            <ion-icon name='chevron-forward-circle'></ion-icon>
         </div>
      </div>
   );
}

function Story(props) {
   const { user } = props;
   return (
      <div className='story'>
         <div className='image'>
            <img src={`./assets/img/${user}.svg`} alt={user} />
         </div>
         <div className='user'>{user}</div>
      </div>
   );
}
