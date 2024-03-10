import { zodToJsonSchema } from 'zod-to-json-schema';

import { generateMocks } from './generate-mock';
import { saveFile } from './save-file';
import { MockSchema } from './schemas';

const jsonSchema = zodToJsonSchema(MockSchema, 'mySchema');

saveFile('../scheme.json', JSON.stringify(jsonSchema));

const mock = generateMocks();

saveFile('../db.json', JSON.stringify(mock));
