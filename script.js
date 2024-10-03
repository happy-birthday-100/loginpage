function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

document.getElementById('b').addEventListener('mouseover', () => {
    confetti({
        particleCount: 600,
        spread: 60,
        origin: { y: 0.5 }
    });
});

document.getElementById('f').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log(username, password);
    // Simple validation (for demonstration purposes)
    if (username === '1' && password === '1') {
        document.getElementById('f').style.display = 'none';
        const message = document.getElementById('birthdayMessage');
        message.style.display = 'block';
        message.style.fontSize = '72px'; // Make the message larger
        const message2 = document.getElementById('him');
        message2.style.display = 'block';
        message2.style.fontSize = '20px';
        const messageq = document.getElementById('ag');
        messageq.style.display = 'block';
        messageq.style.fontSize = '20px';
        const message3 = document.getElementById('go');
        message3.style.display = 'block';
        message3.style.fontSize = '20px';
        const message4 = document.getElementById('sh');
        message4.style.display = 'block';
        message4.style.fontSize = '20px';
        const message5 = document.getElementById('ja');
        message5.style.display = 'block';
        message5.style.fontSize = '20px';
        
        // Change the background image
        document.body.style.backgroundImage = "url('img.jpg')";
        document.body.style.backgroundSize = 'fit';
        document.body.style.backgroundRepeat =  'no-repeat';
        document.body.style.backgroundPosition =  'center';
        document.body.style.backgroundSize = 'contain';
        document.body.style.flexDirection = 'column';

        confetti({
            particleCount: 200,
            spread: 70,
            origin: { y: 0.5 }
        });

        setInterval(createHeart, 300);
        document.getElementById('f').style.display = 'none';
        } 
        
    
    else {
        alert('Invalid username or password');
    }
});
