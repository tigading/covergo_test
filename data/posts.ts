export type Post = {
  id: number;
  title: String;
  category: String;
  publishAt: String;
  thumbnail: String;
  type: String;
};

export const Types = {
  DEFAULT: 'default',
  VIDEO: 'video',
};

export const posts: Post[] = [
  {
    id: 0,
    title: 'Chuẩn bị hành trang săn Job ở Singapore.',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=18TGmwMYzcvTL_cjl8Y-ZC0oJw4BK-mLp',
    category: 'Chuyện khởi nghiệp',
    publishAt: '20 Janury 2022',
    type: 'video',
  },
  {
    id: 2,
    title: 'Chuẩn bị hành trang săn Job ở Singapore.',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=18TGmwMYzcvTL_cjl8Y-ZC0oJw4BK-mLp',
    category: 'Chuyện khởi nghiệp',
    publishAt: '20 Janury 2022',
    type: 'video',
  },
  {
    id: 3,
    title: 'Chuẩn bị hành trang săn Job ở Singapore.',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=18TGmwMYzcvTL_cjl8Y-ZC0oJw4BK-mLp',
    category: 'Chuyện khởi nghiệp',
    publishAt: '20 Janury 2022',
    type: 'default',
  },
  {
    id: 4,
    title: 'Chuẩn bị hành trang săn Job ở Singapore.',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=18TGmwMYzcvTL_cjl8Y-ZC0oJw4BK-mLp',
    category: 'Chuyện khởi nghiệp',
    publishAt: '20 Janury 2022',
    type: 'default',
  },
  {
    id: 5,
    title: 'Chuẩn bị hành trang săn Job ở Singapore.',
    thumbnail:
      'https://drive.google.com/uc?export=view&id=18TGmwMYzcvTL_cjl8Y-ZC0oJw4BK-mLp',
    category: 'Chuyện khởi nghiệp',
    publishAt: '20 Janury 2022',
    type: 'video',
  },
] as Post[];
