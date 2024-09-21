// Modal open functions
const open_sieuden_modal = () => {
    const modalElement = document.getElementById('payment-modal-sieuden');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
};

const open_vip_modal = () => {
    const modalElement = document.getElementById('payment-modal-vip');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
};

const open_signin_modal = () => {
    const modalElement = document.getElementById('signin-modal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
};


if (localStorage.getItem('dXNlckVtYWls') !== null) {
    // Hide the sign-in and sign-up buttons if they exist
    const signinBtn = document.getElementById('signin-btn');
    const signupBtn = document.getElementById('signup-btn');
    const logoutBtn = document.getElementById('logout')
    const signinBtnMobile = document.getElementById('signin-btn-mobile');
    const signupBtnMobile = document.getElementById('signup-btn-mobile');
    const logoutBtnMobile = document.getElementById('logout-mobile')

    if (signinBtn) signinBtn.style.display = 'none';
    if (signupBtn) signupBtn.style.display = 'none';
    if (logoutBtn) logoutBtn.style.display = 'inline-block';
    if (signinBtnMobile) signinBtnMobile.style.display = 'none';
    if (signupBtnMobile) signupBtnMobile.style.display = 'none';
    if (logoutBtnMobile) logoutBtnMobile.style.display = 'inline-block';

    // Redirect if on signin.html or signup.html
    if (window.location.href.endsWith('signin.html') || window.location.href.endsWith('signup.html')) {
        window.location.href = './index.html';
    }

    // Handle buttons on 'muavip.html'
    if (window.location.href.endsWith('muavip.html')) {
        const mienphiBtn = document.getElementById('mienphi-btn');
        const vipBtn = document.getElementById('vip-btn');
        const sieudenBtn = document.getElementById('sieuden-btn');

        if (mienphiBtn) mienphiBtn.innerHTML = 'Đang sử dụng';
        if (vipBtn) vipBtn.innerHTML = 'Mua Ngay';
        if (sieudenBtn) sieudenBtn.innerHTML = 'Mua Ngay';

        // Correct the event handler assignment
        vipBtn.onclick = open_vip_modal;  // Assigning the function reference
        sieudenBtn.onclick = open_sieuden_modal;  // Assigning the function reference
    }
} else {
    // Handle 'muavip.html' for users who are not signed in
    if (window.location.href.endsWith('muavip.html')) {
        const mienphiBtn = document.getElementById('mienphi-btn');
        const vipBtn = document.getElementById('vip-btn');
        const sieudenBtn = document.getElementById('sieuden-btn');

        if (mienphiBtn) mienphiBtn.onclick = open_signin_modal;
        if (vipBtn) vipBtn.onclick = open_signin_modal;
        if (sieudenBtn) sieudenBtn.onclick = open_signin_modal;
    }
}