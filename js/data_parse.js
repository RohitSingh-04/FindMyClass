import {classes_data, block_data} from './csv_Text.js'

function parseCSV(csvText) {
    try {
        // Split the text into lines, handling both CRLF and LF line endings.
        const lines = csvText.trim().split(/\r?\n/).filter(line => line.trim() !== '');
        
        if (lines.length === 0) {
            return [];
        }

        // The first line is the header row.
        const headers = lines[0].split(',').map(header => header.trim());
        const result = [];

        // Loop through the rest of the lines to parse the data.
        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',').map(value => value.trim());
            
            // Only process the row if the number of values matches the headers.
            if (values.length === headers.length) {
                const rowObject = {};
                for (let j = 0; j < headers.length; j++) {
                    rowObject[headers[j]] = values[j];
                }
                result.push(rowObject);
            }
        }
        return result;
    } catch (e) {
        console.error("Failed to parse CSV:", e);
        return [];
    }
}

export function parseClasses(){
    return parseCSV(classes_data);
}

export function parseBlocks(){
    return parseCSV(block_data);
}

