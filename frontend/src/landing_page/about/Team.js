import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      <div
        className="row p-5 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="/KarthikGouda.jpeg"
            alt="Karthik Gouda "
            style={{ borderRadius: "60%", width: "70%" }}
          />
          <h4 className="mt-5">Karthik Gouda</h4>
          <h6>Initiator, Web Developer</h6>
        </div>

        <div className="col-6 p-5">
          <p>
            I’m a Full Stack Web Developer and Computer Science Engineering student skilled in the MERN stack, dedicated to building dynamic, user-centric web applications. 
          </p>

           <p>
            I combine frontend finesse with scalable backend architecture.
          </p>

          <p> while actively honing my SDE skills in DSA, System design, core CS concepts, and Cloud technologies. Beyond academics, I contribute to open-source initiatives and thrive in hackathon environments, where innovation meets collaboration.
          .</p> 

          <p>
            Connect on{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://www.linkedin.com/in/karthikgouda15/"
              target="_blank"
              rel="noopener noreferrer"
              
            >
              linkedin
            </a>{" "}
            /{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://www.linkedin.com/in/karthikgouda15/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>{" "}
            /{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://www.linkedin.com/in/karthikgouda15/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
