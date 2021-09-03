//POST New Comment post
$('#comment-submit').on('click', async function newCommentFormHandler  (event) {
    const content = document.querySelector('#comment-text').value.trim()

    const blog_id = document.querySelector('#post').getAttribute('data-id');

    if (content) {
        const response = await fetch('/api/users/comment', {
          method: 'POST',
          body: JSON.stringify({ content, blog_id }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (!response.ok) {
          alert('Failed to create comment');
        } else {
            location.reload();
        }

    }
})