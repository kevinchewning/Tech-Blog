$('.post-update').on('click', function (e) {
  e.stopPropagation();

  let id = $(this).attr('data-id')

  document.location.replace(`/updatePost/${id}`)
})

$('#submit').on('click', async function (e) {
  e.stopPropagation();

  let id = $(this).attr('data-id')

  const title = document.querySelector('#new-post-title').value.trim()

  const content = document.querySelector('#post-content').value.trim()

  if (title && content) {
      const response = await fetch('/api/users/blog', {
        method: 'PUT',
        body: JSON.stringify({ id, title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (!response.ok) {
        alert('Failed to update post');
      }
  }

  document.location.replace('/dashboard')
})