if (localStorage.getItem('dXNlckVtYWls') !== null) {
    console.log('Key exists');
    
    // Hide the sign-in and sign-up buttons
    document.getElementById('signin-btn').style.display = 'none';
    document.getElementById('signup-btn').style.display = 'none';
    
    // Redirect if on signin.html or signup.html
    if (window.location.href.endsWith('signin.html') || window.location.href.endsWith('signup.html')) {
        window.location.href = './index.html';
    }
    if (window.location.href.endsWith('muavip.html')) {
        const mienphi_btn = document.getElementById('mienphi-btn').innerHTML = 'Đang sử dụng'
        const vip_btn = document.getElementById('vip-btn').innerHTML = 'Mua Ngay'
        const sieuden_btn = document.getElementById('sieuden-btn').innerHTML = 'Mua Ngay'
    }
}