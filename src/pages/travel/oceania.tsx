import React from 'react';
import { City, Content, ContentProps } from '../../components/Content';

const cities: City[] = [
  {
    img: 'https://picsum.photos/seed/travel1/260/180',
    title: 'Douglastown',
    subtitle: 'ton',
    flag: 'https://hatscripts.github.io/circle-flags/flags/bn.svg'
  },
  {
    img: 'https://picsum.photos/seed/travel2/260/180',
    title: 'Port Edmond',
    subtitle: 'port',
    flag: 'https://hatscripts.github.io/circle-flags/flags/pt-br.svg'
  },
  {
    img: 'https://picsum.photos/seed/travel3/260/180',
    title: 'Port Lottiestad',
    subtitle: 'chester',
    flag: 'https://hatscripts.github.io/circle-flags/flags/pt.svg'
  },
  {
    img: 'https://picsum.photos/seed/travel4/260/180',
    title: 'New Imogeneton',
    subtitle: 'borough',
    flag: 'https://hatscripts.github.io/circle-flags/flags/cn.svg'
  },
  {
    img: 'https://picsum.photos/seed/travel5/260/180',
    title: 'Bernhardhaven',
    subtitle: 'burgh',
    flag: 'https://hatscripts.github.io/circle-flags/flags/ba.svg'
  },
  {
    img: 'https://picsum.photos/seed/travel6/260/180',
    title: 'Windlertown',
    subtitle: 'fort',
    flag: 'https://hatscripts.github.io/circle-flags/flags/bi.svg'
  },
  {
    img: 'https://picsum.photos/seed/travel7/260/180',
    title: 'Balistrerishire',
    subtitle: 'furt',
    flag: 'https://hatscripts.github.io/circle-flags/flags/bh.svg'
  }
];

const content: ContentProps = {
  title: 'Europa',
  img: '/assets/travels/europa.jpg',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nesciunt a quia aspernatur quisquam illo adipisci perferendis sunt saepe facere vero nobis rem laboriosam explicabo commodi impedit ullam nisi voluptate, totam ducimus. Ad sed necessitatibus nam nisi dicta minima perspiciatis, omnis quibusdam rem voluptatum. Expedita autem consequatur omnis voluptatum dolorum?',
  languageCount: 30,
  citiesCount: 104,
  citiesSubCount: 81,
  cities: cities
};

export default function Oceania() {
  return <Content {...content} />;
}
