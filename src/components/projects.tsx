import React from 'react'
import Heading from './Heading';
import Card from './Card';
import '../app/styles/projects.css';

const data = [
    {
        id: 0,
        title: "Statics Interactive Resume ",
        desc: "A Typescript-based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.",
        img: "/resume builder.png",
        tags:["HTML", "Next.js", "CSS", "Typescript"],
    },
];

const projects = () => {
  return (
    <div id="projects" className="projects-container">
      <Heading title='My Projects' />
       <div className="projects-grid projects-grid-xl project-grid-md-2 project-grid-3 project-center">
        {data.map((el) => (
          <Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags} 
        />
        ))}
      </div>
    </div>
  );
};

export default projects;