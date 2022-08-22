import React from "react";

const Portfolio = () => {
  const data = [
    {
      id: "1",
      title: "A Full Stack Web Application Built Using:",
      desc: `JavaScript, ReactJS, NodeJS, ExpressJS, MySQL, REST API, Git, 
            Socket.io, Passport, Trello`,
      roles: " Project Manager  Full Stack Developer Scrum Master",

      img: "add image here",
      link: `https://www.youtube.com/watch?v=Nv7JzOsvkq4`,
    },
    {
      id: "2",
      title: "A Full Stack Web Application Built Using:",
      desc: `JavaScript, ReactJS, NodeJS, ExpressJS, REST API, Git, MongoDB,
      Mapbox, Auth0, Trello, Heroku`,
        roles: " Project Manager  Full Stack Developer Scrum Master",
      img: "add image here",
      link: `https://city-cycle-client.herokuapp.com/`,
    },
    {
      id: "3",
      title: "My Github",
      desc: "Check out my latest work on Github!",
      img: "add image here",
      link: `https://github.com/lmifflen`,
    },
  ];
  return <div>Portfolio</div>;
};

export default Portfolio;
