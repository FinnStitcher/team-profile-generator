const fs = require('fs');

const writeFile = (fileContent) => {
    return new Promise((res, rej) => {
        fs.writeFile('../dist/index.html', fileContent, (err) => {
            if (err) {
                reject(err);
                return;
            };

            resolve({
                ok: true,
                message: "HTML created."
            });
        })
    });
};

const copyFile = () => {
    return new Promise((res, rej) => {
        fs.copyFile('../src/style.css', '../dist/style.css', (err) => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: "CSS copied."
            })
        })
    })
};

module.exports = {
    writeFile: writeFile,
    copyFile: copyFile,
};