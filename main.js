document.getElementById('sendbtn').addEventListener('click', function() {
    // Form submission logic
    const form = document.getElementById('form');
    if (form.checkValidity()) {
        alert('Form submitted!');
        form.submit();
    } else {
        alert('Please fill out all required fields.');
    }
});

document.getElementById('cancelbtn').addEventListener('click', function() {
    // Form cancellation logic
    const form = document.getElementById('form');
    form.reset();
    alert('Form canceled.');
});