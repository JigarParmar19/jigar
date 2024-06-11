var lb = document.getElementsByClassName("like-button")[0];
var cb = document.getElementsByClassName("comment-button")[0];
var fb = document.getElementsByClassName("follow-button")[0];
var sb = document.getElementsByClassName("share-button")[0];
var le = document.getElementsByClassName("likes")[0];
var ce = document.getElementsByClassName("comments")[0];
var fe = document.getElementsByClassName("followers")[0];
var se = document.getElementsByClassName("shares")[0];



le.textContent = `${localStorage.l} likes`;
ce.textContent = `${localStorage.c} comments`;
fe.textContent = `${localStorage.f} followers`;
se.textContent = `${sessionStorage.s} shares`;

lb.addEventListener("click", function () {
    localStorage.l = parseInt(localStorage.l) + 1;
    le.textContent = `${localStorage.l} likes`;
});

cb.addEventListener("click", function () {
    localStorage.c = parseInt(localStorage.c) + 1;
    ce.textContent = `${localStorage.c} comments`;
});

fb.addEventListener("click", function () {
    localStorage.f = parseInt(localStorage.f) + 1;
    fe.textContent = `${localStorage.f} followers`;
});

sb.addEventListener("click", function () {
    sessionStorage.s = parseInt(sessionStorage.s) + 1;
    se.textContent = `${sessionStorage.s} shares`;
});