const postid = document.querySelector('#post-id').value;

const editform = async(event) => {
    console.log(postid);
    event.preventDefault();
    const title = document.querySelector('#post-title').value;
    const body = document.querySelector('#postbody').value;

    await fetch(`/api/post/${postid}`, {
        method: 'PUT',
        body: JSON.stringify({
            title, body
        }),
        headers: { 'Content-Type': 'application/json' },
    });
    document.location.replace('/dashboard');
    
}

document.querySelector('#update').addEventListener('click', editform);

const deleteform = async(event) => {
    event.preventDefault();

    await fetch(`/api/post/${postid}`, {
        method: 'DELETE',
        });
    document.location.replace('/dashboard');
    
}

document.querySelector('#delete').addEventListener('click', deleteform);