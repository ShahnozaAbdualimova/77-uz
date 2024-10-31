const modals = {
  login: document.getElementById("loginModal"),
  signup: document.getElementById("signupModal"),
  password: document.getElementById("PasswordModal"),
  location: document.getElementById("ChooseLocation"),
  lastSign: document.getElementById("lastSignModal"),
  filter: document.getElementById("filterModal"),
};

const body = document.body;
const background = document.getElementById("background");
const modalContent = document.getElementById("modal-content");

const openButtons = {
  signup: document.getElementById("openSignup"),
  login: document.getElementById("openLogin"),
  password: document.getElementById("forgetPassword"),
  location: document.getElementById("openLocModal"),
  lastSign: document.getElementById("openLastSign"),
  loginInit: document.getElementById("loginBtn"),
  filter: document.getElementById("filter-btn"),
};




const closeButtons = {
  login: document.getElementById("closeLoginModal"),
  signup: document.getElementById("closeSignupModal"),
  password: document.getElementById("closePassModal"),
  location: document.getElementById("closeLocModal"),
  lastSign: document.getElementById("closelastSign"),
  filter: document.getElementById("close-filter")
};

const backSignModal = document.getElementById("backSignModal");

function openModal(modal) {
  modal.classList.remove("hidden");
  body.style.overflow = "hidden";
}

function closeModal(modal) {
  modal.classList.add("hidden");
  body.style.overflow = "auto";
}



function switchModals(modalToClose, modalToOpen) {
    console.log('asdjashk');
    
  closeModal(modalToClose);
  openModal(modalToOpen);
}

openButtons.signup.addEventListener("click", () =>
  switchModals(modals.login, modals.signup)
);
openButtons.login.addEventListener("click", () =>
  switchModals(modals.signup, modals.login)
);
openButtons.password.addEventListener("click", () =>
  switchModals(modals.login, modals.password)
);
openButtons.location.addEventListener("click", () =>
  switchModals(modals.signup, modals.location)
);
openButtons.lastSign.addEventListener("click", () =>
  switchModals(modals.location, modals.lastSign)
);
openButtons.loginInit.addEventListener("click", () => openModal(modals.login));

openButtons.filter.addEventListener("click", () => openModal(modals.filter));

Object.keys(closeButtons).forEach((modalKey) => {
  closeButtons[modalKey].addEventListener("click", () =>
    closeModal(modals[modalKey])
  );
});


backSignModal.addEventListener("click", () =>
  switchModals(modals.location, modals.signup)
);

Object.values(modals).forEach((modal) => closeModal(modal));
