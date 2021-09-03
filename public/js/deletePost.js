$('.post-buttons').on('click', '.post-delete', async function(e) {
    e.stopPropagation();
    const id = $(this).attr('data-id')

    await fetch('/api/users/blog', {
        method: 'DELETE',
        body: JSON.stringify({ id }),
        headers: { 'Content-Type': 'application/json' }
    })

    location.reload();
})