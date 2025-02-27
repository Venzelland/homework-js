function fetchUrl(url, attempts = 5) {
    return new Promise((resolve, reject) => {
        const fetchData = async (attempt) => {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const data = await response.json();
                resolve(data);
            } catch (error) {
                if (attempt <= 1) {
                    reject(new Error(`Failed after ${attempts} attempts: ${error.message}`));
                } else {
                    console.log(`Attempt ${attempts - attempt + 1} failed. Retrying...`);
                    fetchData(attempt - 1);
                }
            }
        };

        fetchData(attempts);
    });
}

// Пример использования:
fetchUrl('https://google/com')
    .then(data => console.log('Data:', data))
    .catch(error => console.error('Error:', error.message));