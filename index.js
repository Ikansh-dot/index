function handleSubmit (){
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    localStorage.setItem("PASSWORD", password);
    localStorage.setItem("NAME", name);

    return;
}