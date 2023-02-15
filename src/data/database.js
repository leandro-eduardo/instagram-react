const USER = {
   name: 'catanacomics',
   profilePicture: './assets/images/profile-pictures/catanacomics.svg',
};

const STORIES = [
   { user: '9gag', profilePicture: './assets/images/profile-pictures/9gag.svg' },
   { user: 'meowed', profilePicture: './assets/images/profile-pictures/meowed.svg' },
   { user: 'barked', profilePicture: './assets/images/profile-pictures/barked.svg' },
   {
      user: 'nathanwpylestrangeplanet',
      profilePicture: './assets/images/profile-pictures/nathanwpylestrangeplanet.svg',
   },
   { user: 'wawawicomics', profilePicture: './assets/images/profile-pictures/wawawicomics.svg' },
   { user: 'respondeai', profilePicture: './assets/images/profile-pictures/respondeai.svg' },
   { user: 'filomoderna', profilePicture: './assets/images/profile-pictures/filomoderna.svg' },
   { user: 'memeriagourmet', profilePicture: './assets/images/profile-pictures/memeriagourmet.svg' },
];

const POSTS = [
   {
      user: 'meowed',
      profilePicture: './assets/images/profile-pictures/meowed.svg',
      postContent: './assets/images/posts/smartphone-cat.svg',
      type: 'image',
      likes: {
         user: 'respondeai',
         profilePicture: './assets/images/profile-pictures/respondeai.svg',
         totalLikes: 101523,
      },
      comments: [
         { user: 'respondeai', text: 'que gatinho inteligente!!' },
         { user: 'barked', text: '🐈‍⬛🐈‍⬛🐈‍⬛🐈‍⬛' },
      ],
      totalComments: 523,
      daysAgo: 2,
   },
   {
      user: 'barked',
      profilePicture: './assets/images/profile-pictures/barked.svg',
      postContent: './assets/images/posts/dog.svg',
      type: 'image',
      likes: {
         user: 'adorable_animals',
         profilePicture: './assets/images/profile-pictures/adorable_animals.svg',
         totalLikes: 99159,
      },
      comments: [
         { user: '9gag', text: 'nice dog 🐶' },
         { user: 'meowed', text: '⚡⚡⚡⚡' },
      ],
      totalComments: 24,
      daysAgo: 5,
   },
   {
      user: 'meowed',
      profilePicture: './assets/images/profile-pictures/meowed.svg',
      postContent: './assets/images/posts/cats.jpg',
      type: 'image',
      likes: {
         user: '9gag',
         profilePicture: './assets/images/profile-pictures/9gag.svg',
         totalLikes: 50236,
      },
      comments: [],
      totalComments: 0,
      daysAgo: 0,
   },
   {
      user: 'nathanwpylestrangeplanet',
      profilePicture: './assets/images/profile-pictures/nathanwpylestrangeplanet.svg',
      postContent: './assets/videos/video.mp4',
      type: 'video',
      likes: {
         user: '9gag',
         profilePicture: './assets/images/profile-pictures/9gag.svg',
         totalLikes: 102,
      },
      comments: [],
      totalComments: 0,
      daysAgo: 0,
   },
];

const SUGGESTIONS = [
   {
      user: 'bad.vibes.memes',
      profilePicture: './assets/images/profile-pictures/bad.vibes.memes.svg',
      isFollowing: true,
   },
   {
      user: 'chibirdart',
      profilePicture: './assets/images/profile-pictures/chibirdart.svg',
      isFollowing: true,
   },
   {
      user: 'razoesparaacreditar',
      profilePicture: './assets/images/profile-pictures/razoesparaacreditar.svg',
      isFollowing: false,
   },
   {
      user: 'adorable_animals',
      profilePicture: './assets/images/profile-pictures/adorable_animals.svg',
      isFollowing: true,
   },
   {
      user: 'smallcutecats',
      profilePicture: './assets/images/profile-pictures/smallcutecats.svg',
      isFollowing: true,
   },
];

export default {
   getUser: () => USER,
   getStories: () => STORIES,
   getPosts: () => POSTS,
   getSuggestions: () => SUGGESTIONS,
};
