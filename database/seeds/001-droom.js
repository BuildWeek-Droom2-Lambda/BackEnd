
exports.seed = async function(knex) {

  await knex('companies').truncate()
    .then(function () {
      return knex('companies').insert([
        {
          id: 1,
          name: "Lambda School",
          password: "12345",
          location: "Silicon Valley, CA",
          bio: "With online classes taught by live instructors and one-on-one mentoring, Lambda School is your gateway to a new career in just 9 months."
        },
        {
          id: 2,
          name: "Google",
          password: "12345",
          location: "Austin, TX",
          bio: "We're watching your every move."
        },
        {
          id: 3,
          name: "Tesla",
          password: "12345",
          location: "Palo Alto, CA",
          bio: "We're going to MARS BABY!"
        }
      ]);
    });

  await knex('jobs').truncate()
    .then(function () {
      return knex('jobs').insert([
        {
          id: 1,
          name: "Front End Developer",
          location: "Austin, TX",
          description: "Update and manage company website and client course pages.",
          salary: 78000,
          company_id: 2
        },
        {
          id: 2,
          name: "Back End Developer",
          location: "Charlotte, NC",
          description: "Update company server.",
          salary: 84000,
          company_id: 1
        },
        {
          id: 3,
          name: "Data Analyst",
          location: "Nashville, TN",
          description: "Collect and analyze consumer data to drive increases in revenue and customer satisfaction.",
          salary: 123000,
          company_id: 3
        }
      ]);
    });

  await knex('seekers').truncate()
    .then(function () {
      return knex('seekers').insert([
        {
          id: 1,
          username: "Wayne Carter",
          password: "12345",
          location: "Philadelphia, PA",
          skills: "JS, CSS, SCSS, Git, React",
          experience: "1 year of web development"
        },
        {
          id: 2,
          username: "Josh Smith",
          password: "12345",
          location: "Austin, TX",
          skills: "JS, Node, Java, Git",
          experience: "3 years of building web servers"
        },
        {
          id: 3,
          username: "Fred Aldridge",
          password: "12345",
          location: "New Orleans, LA",
          skills: "HTML, JS, React, Redux, Node, CSS, SCSS, Git",
          experience: "2 year of building websites"
        }
      ]);
    });
};
