const recipientEmail = 'thanh.pham.work3112@gmail.com';

document.getElementById('send-email').addEventListener('click', function (event) {
    event.preventDefault();

    // Get the subject and body values from the form
    const subject = document.getElementById('email-subject').value;
    const body = document.getElementById('email-body').value;

    // Encode the subject and body to be URL-safe
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    // Create the mailto link
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodedSubject}&body=${encodedBody}`;

    // Open the mailto link
    window.location.href = mailtoLink;
});

document.getElementById('copy-button').addEventListener('click', function () {
    // Toggle visibility of copy and check icons
    var copyIcons = document.querySelectorAll('.copy-icon');
    var checkIcon = document.querySelector('.check-icon');

    copyIcons.forEach(function (icon) {
        icon.style.display = 'none';
    });

    checkIcon.style.display = 'block';

    // Revert back to the original copy icon after 2 seconds
    setTimeout(function () {
        copyIcons.forEach(function (icon) {
            icon.style.display = 'block';
        });
        checkIcon.style.display = 'none';
    }, 1000);
});

document.querySelector('.email-copy-button').addEventListener('click', function () {
    var copyIcons = document.querySelectorAll('.copy-icon');
    copyIcons.forEach(function (icon) {
        icon.style.display = 'none';
    });

    // Copy email to clipboard
    copyToClipboard(recipientEmail);

    // Show pop-up
    var popUp = document.querySelector('.copy-pop-up');
    popUp.classList.add('show');

    // Hide pop-up after 1.5 seconds
    setTimeout(function () {
        popUp.classList.remove('show');
    }, 1500);
});

async function copyToClipboard(text) {
    try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            // Use modern Clipboard API
            await navigator.clipboard.writeText(text);
        } else {
            // Fallback for browsers that don't support Clipboard API
            await copyUsingExecCommand(text);
        }
        console.log('Text copied to clipboard');
    } catch (error) {
        console.error('Error copying to clipboard:', error);
    }
}

function copyUsingExecCommand(text) {
    var tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
}