import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
	FaNodeJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiAdobexd,
  SiAdobephotoshop,
	SiPhp,
	SiNestjs
} from "react-icons/si";

import { DiYii } from "react-icons/di";

export const aboutDataEn = [
  {
    title: 'skills',
    info: [
      {
        title: 'Frontend Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
        ],
      },
			{
        title: 'Backend Development',
        icons: [
					<SiPhp />,
					<DiYii />,
					<FaNodeJs />,
					<SiNestjs />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];

export const aboutDataRu = [
	{
    title: 'стэк',
    info: [
      {
        title: 'Frontend Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
        ],
      },
			{
        title: 'Backend Development',
        icons: [
					<SiPhp />,
					<DiYii />,
					<FaNodeJs />,
					<SiNestjs />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
	{
    title: 'награды',
    info: [
      {
        title: 'Турнир Архемеда - Победитель',
        stage: '2003 - 2004',
      },
      {
        title: 'Awwwards - Лауреат',
        stage: '2018 - 2019',
      },
    ],
  },
	{
    title: 'опыт работы',
    info: [
      {
        title: 'Frontend developer - Геномед',
        stage: '2016 - 2018',
      },
      {
        title: 'Fullstack developer - Билайн',
        stage: '2018 - 2022',
      },
      {
        title: 'Fullstack developer - Тинькофф',
        stage: '2022 - 2024',
      },
    ],
  },
	{
    title: 'образование',
    info: [
      {
        title: 'Программирование и инф. тех. - СПбГУ',
        stage: '2005 - 2010',
      },
      {
        title: 'Fullstack developer - OTUS',
        stage: '2014-2015',
      },
      {
        title: 'Administrator Linux - OTUS',
        stage: '2019 - 2020',
      },
    ],
  },
]