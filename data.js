const postsArray = [
    {   
        id: "1",
        date: "2022-07-20",
        title: "My Trip To Africa",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: "https://images.unsplash.com/photo-1598755257130-c2aaca1f061c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2lsZCUyMGFuaW1hbHxlbnwwfHwwfHw%3D&w=1000&q=80",
        tags: ["animals", "photo"]
    },
    {   
        id: "2",
        date: "2021-05-08",
        title: "Pictures Of Buildings",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&w=1000&q=80",
        tags: ["real estate", "photo"]
    },
    {   
        id: "3",
        date: "2022-07-21",
        title: "About Work-Life Balance",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: "https://media.baamboozle.com/uploads/images/587283/1642499091_63087.jpeg",
        tags: ["job", "family"]
      },
  
      {
        id: "4",
        date: "2022-06-16",
        title: "Family Photo Session",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: "https://www.myclickmagazine.com/wp-content/uploads/2019/05/FB-Extended-Family-Session-Jen-Sebring-1-5.jpg",
        tags: ["photo", "family"]
      },
  
      {
        id: "5",
        date: "2015-02-12",
        title: "Animal Trainer's Profession",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: "https://a-z-animals.com/media/tiger_laying_hero_background.jpg",
        tags: ["animals", "job", "family"]
      },
  
      {
        id: "6",
        date: "2017-03-11",
        title: "Just photos from my gallery",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: "https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg",
        tags: ["photo"]
      },

      {
        id: '7',
        date: '2022-04-09',
        title: 'How To Build a Career',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'https://www.youth.gov.hk/html/www/en/images/career-and-study/stories/cover-photo/career_summerjobtips_900.jpg',
        tags: ['job']
      },
  
      {
        id: '8',
        date: '2018-01-26',
        title: "I'm Going To Buy a Flat",
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'https://st.depositphotos.com/1194063/2151/i/600/depositphotos_21515189-stock-photo-agent-with-house-model-and.jpg',
        tags: ['real estate']
      },
  
      {
        id: '9',
        date: '2019-04-18',
        title: 'My Vacation Photos',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'https://photo-works.net/images/europe-landscape-photo-edited.jpg',
        tags: ['photo']
      },
  
      {
        id: '10',
        date: '2020-01-29',
        title: 'Cute Animals',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'https://www.cbc.ca/kids/images/wild_and_wonderful_asian_animals_header_1140.jpg',
        tags: ['animals']
      },
  
      {
        id: '11',
        date: '2011-11-14',
        title: 'I Have a New Job!',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'https://dvyvvujm9h0uq.cloudfront.net/com/articles/1515135672-shutterstock_284581649.jpg',
        tags: ['photo', 'job']
      },
  
      {
        id: '12',
        date: '2009-10-30',
        title: 'About Color Correction',
        des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'https://www.befunky.com/images/prismic/0cd24dfa-814b-49cb-9205-f1652f492acb_features-photo-enhancer.png?auto=avif,webp&format=jpg&width=440',
        tags: ['photo']
      },

]

export default postsArray