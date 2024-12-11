// A function to create the engineer sections.
function createEngineers(engineers) {
  return engineers
    .map((obj) => {
      return `
    <div class="employee-style">
      <h3>${obj.getRole()}</h3>
      <p>Name: ${obj.getName()}</p>
      <p>ID: ${obj.getId()}</p>
      <p>Email: <a href="mailto:${obj.getEmail()}">${obj.getEmail()}</a></p>
      <p>GitHub username: <a href="https://github.com/${obj.getGithub()}" target="_blank">${obj.getGithub()}</a></p>
    </div>
    `;
    })
    .join(""); // Joins all the HTML into a single string
}
// A function to create the intern sections.
function createInterns(interns) {
  return interns
    .map((obj) => {
      return `
    <div class="employee-style">
      <h3>${obj.getRole()}</h3>
      <p>Name: ${obj.getName()}</p>
      <p>ID: ${obj.getId()}</p>
      <p>Email: <a href="mailto:${obj.getEmail()}">${obj.getEmail()}</a></p>
      <p>School: ${obj.getSchool()}</p>
    </div>
    `;
    })
    .join(""); // Joins all the HTML into a single string
}
// The main HTML template page
function pageTemplate(manager, engineers, interns) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <header>
      <h1>Software Engineering Team</h1>
    </header>
    <main>
      <h2>Employees</h2>

      <section class="employees-section">
        <div class="employee-style">
          <h3>${manager.getRole()}</h3>
          <p>Name: ${manager.getName()}</p>
          <p>ID: ${manager.getId()}</p>
          <p>email:<a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
          <p>Office number: ${manager.officeNumber}</p>
        </div>
        ${createEngineers(engineers)}
        ${createInterns(interns)}
      </section>
    </main>
  </body>
</html>

`;
}

export { pageTemplate };
