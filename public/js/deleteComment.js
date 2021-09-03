$('.comment-buttons').on('click', '.comment-delete', async function(e) {
    e.stopPropagation();
    const id = $(this).attr('data-id')

    await fetch('/api/users/comment', {
        method: 'DELETE',
        body: JSON.stringify({ id }),
        headers: { 'Content-Type': 'application/json' }
    })

    location.reload();
})