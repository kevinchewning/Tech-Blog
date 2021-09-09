$('.post-box').on('click', function() {
  let id = $(this).attr('data-id');

  window.location.replace(`/viewpost/${id}`)
})

$('#new-post-button').on ('click', function() {
  window.location.replace('/newpost')
})