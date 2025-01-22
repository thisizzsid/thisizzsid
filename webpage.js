const canvas = document.getElementById('matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const matrix = '10';
const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = Array.from({ length: columns }, () => 1);

function draw() {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#00ff00';
    context.font = `${fontSize}px monospace`;

    drops.forEach((y, index) => {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        const x = index * fontSize;
        context.fillText(text, x, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
            drops[index] = 0;
        }
        drops[index]++;
    });
}

setInterval(draw, 33);