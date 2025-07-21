document.addEventListener('DOMContentLoaded', () => {
    const uploadButton = document.getElementById('upload-button');
    const fileInput = document.getElementById('file-input');
    const progressContainer = document.getElementById('progress-container');
    const progressBarFill = document.querySelector('.progress-bar-fill');
    const completionMessage = document.getElementById('completion-message');

    uploadButton.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'application/pdf' && file.size <= 25 * 1024 * 1024) {
            uploadButton.style.display = 'none';
            progressContainer.style.display = 'block';

            // Simulate compression
            let progress = 0;
            const interval = setInterval(() => {
                progress += 10;
                progressBarFill.style.width = progress + '%';
                if (progress >= 100) {
                    clearInterval(interval);
                    progressContainer.style.display = 'none';
                    completionMessage.style.display = 'block';
                }
            }, 500);
        } else {
            alert('Please select a PDF file no larger than 25MB.');
        }
    });
});