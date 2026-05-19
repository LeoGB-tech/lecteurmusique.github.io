const fileInput = document.getElementById('fileInput');
const audioList = document.getElementById('audio-list');
const audioPlayer = document.getElementById('audioPlayer');

fileInput.addEventListener('change', function(e) {
    const files = e.target.files;
    for (let file of files) {
        const div = document.createElement('div');
        div.className = 'track';
        div.textContent = file.name;
        div.onclick = () => {
            audioPlayer.src = URL.createObjectURL(file);
            audioPlayer.play();
        };
        audioList.appendChild(div);
    }
});