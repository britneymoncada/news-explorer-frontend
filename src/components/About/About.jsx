import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__image"></div>

      <div className="about__content">
        <h2 className="about__title">About the author</h2>

        <p className="about__paragraph">
          I'm Britney Moncada, a former mathematics teacher and software
          engineering student with a passion for creating educational,
          user-focused applications. My background in teaching has strengthened
          my problem-solving skills, attention to detail, and ability to design
          technology that is both intuitive and meaningful.
        </p>

        <p className="about__paragraph">
          Through TripleTen, I've developed full-stack web applications using
          React, JavaScript, Node.js, Express, and MongoDB. I enjoy building
          clean, responsive interfaces and continuously improving my skills
          through real-world projects.
        </p>
      </div>
    </section>
  );
}

export default About;
