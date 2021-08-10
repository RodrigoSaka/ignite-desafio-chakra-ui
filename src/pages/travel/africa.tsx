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
  }
];

const content: ContentProps = {
  title: 'Africa',
  img: '/assets/travels/africa.jpg',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nesciunt a quia aspernatur quisquam illo adipisci perferendis sunt saepe facere vero nobis rem laboriosam explicabo commodi impedit ullam nisi voluptate, totam ducimus. Ad sed necessitatibus nam nisi dicta minima perspiciatis, omnis quibusdam rem voluptatum. Expedita autem consequatur omnis voluptatum dolorum?',
  languageCount: 21,
  citiesCount: 13,
  citiesSubCount: 33,
  cities: cities
};

export default function Africa() {
  return <Content {...content} />;
}
