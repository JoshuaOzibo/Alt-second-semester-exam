const apiKey = import.meta.env.VITE_API_KEY;

    export const fetchData = async () => {
      const response = await fetch('https://api.github.com/users/JoshuaOzibo/repos', {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });
      const jsonData = await response.json();

      return jsonData;

    }
    fetchData();
