function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Succcess' });
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}

// Export the function for external use
export default getFullResponseFromAPI;
