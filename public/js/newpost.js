const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#content').value;

    if (title && body) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ title, body }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create post');
      }
    }
};

  
document
    .querySelector('#create')
    .addEventListener('click', newFormHandler);
  