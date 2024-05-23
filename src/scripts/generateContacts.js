import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';


const generateContacts = async (number) => {
  const fakeContactsArray = [];
  for (let i = 0; i < number; i++) {
    const fakeContact = createFakeContact();
    fakeContactsArray.push(JSON.stringify(fakeContact, null, 2));

  }
  try {
    let dbData = [];
    const dbcontent = await fs.readFile(PATH_DB, 'utf8');
    console.log(dbcontent);
    // console.log(fakeContactsArray);
  } catch (e) {
    console.error('error', e);
  }
  // await fs.writeFile(PATH_DB, JSON.stringify(fakeContactsArray, null, 2));
  await fs.writeFile(PATH_DB, JSON.stringify(fakeContactsArray, null, 2));
};

await generateContacts(5);
