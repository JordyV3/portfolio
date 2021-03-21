import Layout from '../components/Layout';
import Link from 'next/link'

import { skills, experiences, projects } from "../profile";

export default function Home() {
  return (
    <Layout>
      {/* Header card */}
      <header className="row">
        <div className="col-md-12">
          <div className="card card-body bg-primary text-light">
            <div className="row">
              <div className="col-md-4">
                <img src="/Jordy-Vega-profile.png" alt="Jordy Vega" className="img-fluid" />
              </div>
              <div className="col-md-8">
                <h1 className=" text-light py-2">Jordy Vega</h1>
                <h3 className=" text-light">Full Stack Developer</h3>
                <p className="">
                  😐
              </p>
                <Link href="/404">
                  <a className="btn btn-outline-light">Contact Me</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Second section */}

      <section className="row">
        <div className="col-md-4 py-2">
          <div className="card bg-light animate__animated animate__fadeInLeft">
            <div className="card-body">
              <h1>Skills</h1>

              {/* Skill Progress  */}
              {skills.map(({ skill, percentage }, i) => (
                <div className="py-3" key={i}>
                  <h5>{skill}</h5>
                  <div className="progress ">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${percentage}%` }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-md-8 py-2">
          {/* Experience */}
          <div className="card bg-light animate__animated animate__fadeInRight">
            <div className="card-body">
              <h1>Experience</h1>

              <ul>
                {/* List Item Experience */}
                {experiences.map(({ title, from, to, description }, index) => (
                  <li key={index}>
                    <h3>{title}</h3>
                    <h5>
                      {from} {to ? `- ${to}` : "- ACTUALIDAD"}
                    </h5>
                    <p>
                      {description}
                  </p>
                  </li>
                ))}
              </ul>
              <Link href="/404">
                <a className="btn btn-outline-primary">Know More</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Porfolio */}
      <section >
        <div className="row">
          <div className="col-md-12">
            <div className="card card-body bg-primary">
              <div className="row">
                <div className="col-md-12 my-2">
                  <h1 className="text-center text-light">Portafolio</h1>
                </div>
                {projects.map(({ name, description, image }, index) => (
                  <div className="col-md-4 p-2" key={index}>
                    <div className="card h-100">
                      <div className="overflow">
                        <img
                          src={`/${image}`}
                          alt=""
                          className="card-img-top"
                        />
                      </div>
                      <div className="card-body">
                        <h3>{name}</h3>
                        <p>{description}</p>
                      </div>
                      <div className="card-footer bg-primary p-2  py-2 text-center">
                        <div className="container">
                          <a href="#!" className="btn btn-outline-light">Know More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="col-md-12 mt-4">
                  <div className="text-center">
                    <Link href="/">
                      <a className="btn btn-outline-light">More Projects</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </Layout>
  )
}
