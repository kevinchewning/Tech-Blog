$('.comment-update').on('click', function (e) {
    e.stopPropagation();
  
    let id = $(this).attr('data-id')
  
    document.location.replace(`/updatecomment/${id}`)
})
  
$('#submit').on('click', async function (e) {
e.stopPropagation();

let id = $(this).attr('data-id')

let blogID = $(this).attr('data-blog')

const content = document.querySelector('#comment-content').value.trim()

if (content) {
    const response = await fetch('/api/users/comment', {
        method: 'PUT',
        body: JSON.stringify({ id, content }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
        alert('Failed to update comment');
    }
}

window.location.replace(`/viewpost/${blogID}`)
})