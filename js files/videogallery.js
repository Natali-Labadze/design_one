let first = true;
document.getElementById('video_link').addEventListener('click', (e) => {
    if (first) {
        e.target.play();
    }
    first = false;
});