import React from 'react'
import "../app/styles/skills.css"; //Import custom css file

const skills = () => {
  return (
    <div id='skills' className="skills-container">
        <div className="skills-grid">

   {/* First colum: heading and paragraph*/}
            <div data-aos="zoom-out-left" className='skills-left'>
                <h2 className="skills-heading" >Technologies I work with</h2>
                <p className="skills-text">
                I am skilled in HTML, CSS, JavaScript, TypeScript, and Tailwind CSS. I create attractive and responsive websites that are well-organized and easy to use. My knowledge of JavaScript and TypeScript helps me build interactive and reliable web applications. With these skills, I can deliver smooth user experiences and high-quality web solutions, enhanced with Tailwind CSS for efficient and custom design.
                </p>
            </div>

    {/* Second Colum: skills */}
         <div className="skills-right">
             <div className="skills-icons-grid">
                <div className="skills-space">
                    <h2 data-aos="zoom-out-left">Typescript</h2>
                    <h2 data-aos="zoom-out-left">Javascript</h2>
                    <h2 data-aos="zoom-out-left">Next.js</h2>
                </div>

                <div className="skills-space">
                    <h2 data-aos="zoom-out-left">HTML</h2>
                    <h2 data-aos="zoom-out-left">CSS</h2>
                    <h2 data-aos="zoom-out-left">Tailwind CSS</h2>
                </div> 
             </div>
        </div>
    </div>
</div>
);
};


export default skills;