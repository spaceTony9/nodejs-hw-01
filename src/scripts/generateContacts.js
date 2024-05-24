import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

const generateContacts = async (number) => {
  const fakeContactsArray = [];
  for (let i = 0; i < number; i++) {
    fakeContactsArray.push(createFakeContact());
  }
  let dbData = [];

  try {
    const dbContent = await fs.readFile(PATH_DB, 'utf8');
    if (dbContent) {
      dbData = JSON.parse(dbContent).map(item => typeof item === 'string' ? JSON.parse(item) : item);
    }
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw error;
    }
    console.error('Error reading the file:', error);
  }

  const updatedData = dbData.concat(fakeContactsArray);

  try {
    await fs.writeFile(PATH_DB, JSON.stringify(updatedData, null, 2));
  } catch (error) {
    console.error('Error writing to file:', error);
  }
};

await generateContacts(5);
