const fs = require("fs");

function writeFile(fileContent) {
	return new Promise((resolve, reject) => {
		fs.writeFile("./dist/index.html", fileContent, (err) => {
			if (err) {
				reject(err);
				return;
			}

			resolve({
				ok: true,
				message: "HTML created.",
			});
		});
	});
}

function copyFile() {
	return new Promise((resolve, reject) => {
		fs.copyFile("./src/style.css", "./dist/style.css", (err) => {
			if (err) {
				reject(err);
				return;
			}

			resolve({
				ok: true,
				message: "CSS copied.",
			});
		});
	});
}

module.exports = {
	writeFile: writeFile,
	copyFile: copyFile,
};
