export const USER_DATA_LIST = [
  { email: "utkarsh@gmail.co.in", userName: "Utkarsh Pandya", password: "ut@123" },
];


export const SAMPLE_DATA_POSTS= [
    {
      id: 1,
      user: {
        name: 'Jane Doe',
        avatar: 'https://example.com/jane-doe.jpg',
        username: 'janedoe23',
      },
      createdAt: '2024-09-01',
      content: 'Feeling excited about the weekend! What are your plans?',
      likes: 20,
      comments: [
        {
          id: 1,
          user: {
            name: 'John Smith',
            avatar: 'https://example.com/john-smith.jpg',
            username: 'johnsmith42',
          },
          createdAt: '2024-09-02',
          content: 'Going camping with friends!',
        },
        {
          id: 2,
          user: {
            name: 'Alice Johnson',
            avatar: 'https://example.com/alice-johnson.jpg',
            username: 'alicejohnson78',
          },
          createdAt: '2024-09-03',
          content: 'I\'m staying in and watching a movie.',
        },
      ],
      tags: ['weekend', 'plans'],
      images: [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
      ],
    },
    {
      id: 2,
      user: {
        name: 'Bob Smith',
        avatar: 'https://example.com/bob-smith.jpg',
        username: 'bobsmith123',
      },
      createdAt: '2024-09-02',
      content: "Just finished a great workout! Feeling energized.",
      likes: 15,
      comments: [],
      tags: ['fitness', 'workout'],
    },
    {
      id: 3,
      user: {
        name: 'Charlie Brown',
        avatar: 'https://example.com/charlie-brown.jpg',
        username: 'charliebrown55',
      },
      createdAt: '2024-09-03',
      content: "Can't wait for the new season of my favorite show to start!",
      likes: 8,
      comments: [
        {
          // ... comment data
        },
      ],
      tags: ['tv', 'show'],
      images: ['https://example.com/show-poster.jpg'],
    },
  ]