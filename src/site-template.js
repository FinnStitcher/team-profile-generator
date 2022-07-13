function createHTML(data) {
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
    
        <main class="d-flex">
            <div class="card col-3 m-3">
                <div class="card-header bg-gray text-light">
                    <h2 class="card-title">Bill</h2>
                    <h3 class="card-subtitle">Manager</h3>
                </div>
    
                <div class="card-body">
                    <ul class="list-group">
                        <li>ID: 555</li>
                        <li>Email: bill@test.com</li>
                        <li>Office #: 35B</li>
                    </ul>
                </div>
            </div>
    
            <div class="card col-3 m-3">
                <div class="card-header">
                    <h2 class="card-title">Jens</h2>
                    <h3 class="card-subtitle">Engineer</h3>
                </div>
    
                <div class="card-body">
                    <ul class="list-group">
                        <li>ID: 252</li>
                        <li>Email: jens@test.com</li>
                        <li>GitHub: JensEngineer</li>
                      </ul>
                    
                </div>
            </div>
            
            <div class="card col-3 m-3">
                <div class="card-header">
                    <h2 class="card-title">Winnie</h2>
                    <h3 class="card-subtitle">Intern</h3>
                </div>
    
                <div class="card-body">
                    <ul class="list-group">
                        <li>ID: 353</li>
                        <li>Email: winnie@test.com</li>
                        <li>School: University of Rochester</li>
                    </ul>
                </div>
            </div>
        </main>
    </body>
    </html>`;
};

module.exports = createHTML;