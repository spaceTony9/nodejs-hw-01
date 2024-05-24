import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const parsedData = JSON.parse(data);
    return parsedData.length;
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw error;
    }
    console.error('error reading the file', error);
  }
};

console.log(await countContacts());
