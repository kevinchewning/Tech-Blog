//POST New Blog post
const newPostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#new-post-title').value.trim()

  const content = document.querySelector('#post-content').value.trim()

  if (title && content) {
      const response = await fetch('/api/users/blog', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (!response.ok) {
        alert('Failed to create post');
      }
  }

  document.location.replace('/dashboard')
}

$('#submit').on('click', newPostFormHandler);