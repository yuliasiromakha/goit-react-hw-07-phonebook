const BASE_URL = 'https://64b9765a79b7c9def6c11711.mockapi.io/contacts';

export const getContacts = fetch(`${BASE_URL}`, {
  method: 'GET',
  headers: { 'content-type': 'application/json' },
})
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Network response was not ok.');
    }
  })
  .then((contacts) => {
    console.log(contacts);
    return contacts; 
  })
  .catch((error) => {
    console.error('There has been an error:', error);
    throw error;
  });
