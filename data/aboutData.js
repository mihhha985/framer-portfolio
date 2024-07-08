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

export const aboutData = [
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
        title: 'Archemeda Tournament - Winner',
        stage: '2003 - 2004',
      },
      {
        title: 'Awwwards - Laureate',
        stage: '2018 - 2019',
      },
    ],
  },
	{
    title: 'experience',
    info: [
      {
        title: 'Frontend developer - Genomed',
        stage: '2016 - 2018',
      },
      {
        title: 'Fullstack developer - Beeline',
        stage: '2018 - 2022',
      },
      {
        title: 'Fullstack developer - Tinkoff',
        stage: '2022 - 2024',
      },
    ],
  },
	{
    title: 'education',
    info: [
      {
        title: 'Programming and inf.tech. - SPBGU',
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