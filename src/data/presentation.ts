type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "elbouziadyabdelatif@gmail.com",
  title: "*Hi*, I’m Abdellatif ",
  profile: "/profile.webp",
  description:
    "**1337 (42 Network) Student** | **Software Developer** passionate about **AI** and **Machine Learning**. Exploring intelligent systems with **Python** and building projects that leverage artificial intelligence to solve real problems.",

  socials: [
    {
      label: "Github",
      link: "https://github.com/Abdellatif404",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/abdellatif-el-bouziady/",
    },
  ],
};

export default presentation;
