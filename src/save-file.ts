/* eslint-disable no-console */
import { writeFile } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirnameCurrent = dirname(filename);

export const saveFile = (name: string, data: string): void => {
    writeFile(resolve(dirnameCurrent, name), data, (err) => {
        if (err) {
            console.error(err);
        }
    });
};
