var canvas = document.getElementById('my-canvas');
var context = canvas.getContext('2d');

// Set background color
context.fillStyle = '#a3d1e3';
context.fillRect(0, 0, canvas.width, canvas.height);

// Draw sun
context.beginPath();
context.arc(90, 100, 50, 0, 2 * Math.PI);
context.fillStyle = '#ffd800';
context.fill();

// Draw mountains
context.beginPath();
context.moveTo(3, canvas.height);
context.lineTo(canvas.width / 3, canvas.height / 2);
context.lineTo(canvas.width, canvas.height);
context.fillStyle = '#a88428';
context.fill();

// Draw ground
context.fillStyle = '#8bc34a';
context.fillRect(0, canvas.height * 0.8, canvas.width, canvas.height * 0.3);

// Draw house
context.fillStyle = '#ffa500';
context.fillRect(canvas.width / 2, canvas.height * 0.6, canvas.width / 3, canvas.height * 0.2);

// Draw door
context.fillStyle = '#6d4c41';
context.fillRect(canvas.width/2 + 125, canvas.height * 0.7, 40, 50);

// Draw windows
context.fillStyle = '#ff0000';
context.fillRect(canvas.width / 3 + 330, canvas.height * 0.65, 40, 40);
context.fillRect(canvas.width / 3 + 170, canvas.height * 0.65, 40, 40);

// Draw grass
for (var i = 0; i < canvas.width; i += 10) {
    context.beginPath();
    context.moveTo(i, canvas.height * 0.8);
    context.lineTo(i + 5, canvas.height * 0.8 - 10);
    context.lineTo(i + 10, canvas.height * 0.8);
    context.fillStyle = '#006400';
    context.fill();
}

// Draw fence
for (var i = 0; i < canvas.width; i += 60) {
    context.fillStyle = '#ffffff';
    context.fillRect(i + 5, canvas.height * 0.90, 5, 50);
    context.fillRect(i + 40, canvas.height * 0.90, 5, 50);
}

// Add caption
context.font = 'bold 24px Italic';
context.fillStyle = '#000000';
context.fillText('Animation project of Tasmia Kayenat', canvas.width / 3 - 50, 50);
