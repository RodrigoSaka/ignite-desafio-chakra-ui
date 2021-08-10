import React from 'react';
import { City, Content, ContentProps } from '../../components/Content';

const cities: City[] = [
  {
    img: 'https://picsum.photos/seed/travel1/260/180',
    title: 'Programmable',
    subtitle: 'withdrawal program',
    flag: 'https://hatscripts.github.io/circle-flags/flags/bn.svg'
  },
  {
    img: 'https://picsum.photos/seed/travel2/260/180',
    title: 'Borders',
    subtitle: 'Wisconsin',
    flag: 'https://hatscripts.github.io/circle-flags/flags/bg.svg'
  },
  {
    img: 'https://picsum.photos/seed/travel3/260/180',
    title: 'Rue',
    subtitle: 'Applications Kwacha',
    flag: 'https://hatscripts.github.io/circle-flags/flags/cv.svg'
  },
  {
    img: 'https://picsum.photos/seed/travel4/260/180',
    title: 'Meadows',
    subtitle: 'Senior Table Loan',
    flag: 'https://hatscripts.github.io/circle-flags/flags/bi.svg'
  },
  {
    img: 'https://picsum.photos/seed/travel5/260/180',
    title: 'calculating',
    subtitle: 'content',
    flag: 'https://hatscripts.github.io/circle-flags/flags/ca.svg'
  }
];

const content: ContentProps = {
  title: 'América do Norte',
  img: '/assets/travels/north-america.jpg',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nesciunt a quia aspernatur quisquam illo adipisci perferendis sunt saepe facere vero nobis rem laboriosam explicabo commodi impedit ullam nisi voluptate, totam ducimus. Ad sed necessitatibus nam nisi dicta minima perspiciatis, omnis quibusdam rem voluptatum. Expedita autem consequatur omnis voluptatum dolorum?',
  languageCount: 45,
  citiesCount: 23,
  citiesSubCount: 73,
  cities: cities
};

export default function AmericaNorte() {
  return <Content {...content} />;
}
