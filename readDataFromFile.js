const fs = require('fs')

function readDataFromFile(filepath) {
    try {
        const fileContent = fs.readFileSync(filepath, 'utf8');

        const rawBlocks = fileContent.trim().split('}{');
        const jsonBlocks = rawBlocks.map((block, index) => {
            if (index > 0) {
                block = '{' + block;
            }
            if (index < rawBlocks.length - 1) {
                block = block + '}';
            }
            return block;
        });

        jsonBlocks.forEach((block, index) => {
            try {
                const jsonData = JSON.parse(block);
                console.log(`Dane z bloku ${index}:`, jsonData);
                return jsonData;
                
            } catch (error) {
                console.error(`Błąd podczas parsowania bloku ${index}:`, error);
            }
        });
    } catch (error) {
        console.error('Wystąpił błąd podczas odczytywania pliku:', error);
    }
}

readDataFromFile('dataTest.txt');