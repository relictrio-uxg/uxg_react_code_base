import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { GrLinkedinOption } from 'react-icons/gr';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

export const footer = [
  {
    head: 'Contact us',
    list: [
      {
        icon: <FaPhoneAlt />,
        label: '+91-6363049704',
      },
      {
        icon: <MdEmail />,
        label: 'contact@relictrio.com',
      },
    ],
  },
  {
    head: 'Follow us',
    list: [
      {
        icon: <GrLinkedinOption />,
        label: 'LinkedIn',
      },
      {
        icon: <FaTwitter />,
        label: 'Twitter',
      },
      {
        icon: <FaFacebookF />,
        label: 'Facebook',
      },
      {
        icon: <FaInstagram />,
        label: 'Instagram',
      },
    ],
  },
  {
    head: 'Quick Links',
    list: [
      {
        label: 'Home',
      },
      {
        label: 'Recruitment',
      },
      {
        label: 'ODC Services',
      },
      {
        label: 'Hire a Developer',
      },
      {
        label: 'Blogs',
      },
      {
        label: 'Career',
      },
      {
        label: 'About us',
      },
    ],
  },
];

// export default footer;
