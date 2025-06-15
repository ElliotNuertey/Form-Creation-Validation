// Define the asynchronous function
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select the container where data will be displayed
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch the data from the API
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a <ul> element to hold user names
        const userList = document.createElement('ul');

        // Loop through each user and create <li> for their name
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the list to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // If an error occurs, show an error message
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Call fetchUserData when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
