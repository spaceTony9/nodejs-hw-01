import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

export const addOneContact = async () => {
  const contact = createFakeContact();
  let parsedData = [];

  try {
    const dbData = await fs.readFile(PATH_DB, 'utf8');
    parsedData = JSON.parse(dbData);
    parsedData.push(contact);
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw error;
    }
    console.error('error reading the file:', error);
  }

  try {
    await fs.writeFile(PATH_DB, JSON.stringify(parsedData, null, 2));
  } catch (error) {
    console.error(error.message);
  }

};

await addOneContact();
