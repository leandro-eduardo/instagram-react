const USER = {
   name: 'catanacomics',
   profileImage: 'assets/img/catanacomics.svg',
};

const STORIES = [
   { user: '9gag' },
   { user: 'meowed' },
   { user: 'barked' },
   { user: 'nathanwpylestrangeplanet' },
   { user: 'wawawicomics' },
   { user: 'respondeai' },
   { user: 'filomoderna' },
   { user: 'memeriagourmet' },
];

const POSTS = [
   {
      user: 'meowed',
      image: 'smartphone-cat',
      likes: {
         userWhoLiked: 'respondeai',
         totalLikes: 101523,
      },
   },
   {
      user: 'barked',
      image: 'dog',
      likes: {
         userWhoLiked: 'adorable_animals',
         totalLikes: 99159,
      },
   },
];

const SUGGESTIONS = [
   {
      user: 'bad.vibes.memes',
      isFollowing: true,
   },
   {
      user: 'chibirdart',
      isFollowing: true,
   },
   {
      user: 'razoesparaacreditar',
      isFollowing: false,
   },
   {
      user: 'adorable_animals',
      isFollowing: true,
   },
   {
      user: 'smallcutecats',
      isFollowing: true,
   },
];

export default {
   getUser: () => USER,
   getStories: () => STORIES,
   getPosts: () => POSTS,
   getSuggestions: () => SUGGESTIONS,
};
