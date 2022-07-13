function thirdListItem(employee) {
	const role = employee.getRole();

	if (role === "Manager") {
		return "Office #: " + employee.officeNumber;
	} else if (role === "Engineer") {
		return `GitHub: <a href="https://github.com/${employee.github}">${employee.github}</a>`;
	} else if (role === "Intern") {
		return "School: " + employee.school;
	}
}

function generateCards(employees) {
	const cardsHTML = employees.map((element) => {
		let card = `<div class="card col-12 col-sm-5 col-md-3 m-3">
        <div class="card-header bg-gray text-light">
            <h2 class="card-title">${element.name}</h2>
            <h3 class="card-subtitle">${element.role}</h3>
        </div>

        <div class="card-body">
            <ul class="list-group">
                <li>ID: ${element.id}</li>
                <li>Email: <a href="mailto:${element.email}">${element.email}</a></li>
                <li>${thirdListItem(element)}</li>
            </ul>
        </div>
    </div>
    `;

		return card;
	});

    return cardsHTML;
}

function createHTML(employees) {
	// ideally, split out the different types of employee to organize them

	return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <title>Document</title>
    </head>
    <body>
        <header class="bg-dark text-light text-center py-4 mb-4">
            <h1>Meet the Team</h1>
        </header>
    
        <main class="d-flex flex-wrap">
            ${generateCards(employees)}
        </main>
    </body>
    </html>`;
}

module.exports = createHTML;
