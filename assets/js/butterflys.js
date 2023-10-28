(function() {
    $('.btn').click(function() {
        $(this).toggleClass('active');
        return $('.profile-social').toggleClass('open');
    });

}).call(this);

tippy(".post-icons.lide", {
    theme: "rstylr",
    content: "like",
    arrow: false,
    animation: "scale-subtle",
    followCursor: true,
    placement: "top",
    touch: 'hold',
});
tippy("[title]", {
    theme: "rstylr",
    arrow: false,
    animation: "scale-subtle",
    followCursor: true,
    placement: "top",
    touch: 'hold',
    content(reference) {
        const title = reference.getAttribute("title");
        reference.removeAttribute("title");
        return title;
    },
});

const toggle = document.getElementById("theme-toggle");

toggle.onclick = function () {
    document.documentElement.classList.add("theme-transition");

    let currentTheme = document.documentElement.getAttribute("data-theme");
    let targetTheme = "light";

    if (currentTheme === "light") {
        targetTheme = "dark";
    }

    window.setTimeout(function () {
        document.documentElement.classList.remove("theme-transition");
    }, 50);

    document.documentElement.setAttribute("data-theme", targetTheme);
    localStorage.setItem("theme", targetTheme);
};
    const xatID = document.querySelector('meta[name="xatid"]').content;
    const xatUser = document.querySelector('meta[name="xatuser"]').content;
    const userinfo = document.querySelector('.userinfo');
    const usernick = document.querySelector('.usernick');
    const profileAvatar = document.querySelector('.profileAvatar');
 

    userinfo.innerHTML = `${xatUser} (${xatID})`;

        function setStatus(status){
                const currentStatus = document.querySelector('.current-status');
                if (status === 'available') {
                    currentStatus.classList.add('available');
                    currentStatus.innerHTML = '';
                } else if (status === 'online') {
                    currentStatus.classList.add('online');
                    currentStatus.innerHTML = '';
                } else {
                    currentStatus.classList.add('offline');
                    currentStatus.innerHTML = '';
                }
            }

        fetch(`https://oceanbot.net/online.php?id=${xatID}`)
                .then(response => response.json())
                .then(data => {
                    const status = data.status;
                    const currentStatus = document.querySelector('.current-status');
                    if (status === 'available') {
                        setStatus('available');
                    } else if (status === 'online') {
                        setStatus('online');
                    } else {
                        setStatus('offline');
                    }
                });