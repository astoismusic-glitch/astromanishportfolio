const artistLink = "https://open.spotify.com/artist/1jpZ9Rmt16ImOSEJRJj5rn?si=GosWbvUOSY21ydstdjEBnw";

const tracks = [
  ["Kaun Tera", artistLink, "カウン テラ"],
  ["Bol to Sahi", artistLink, "ボル ト サヒ"],
  ["Painting Picture", artistLink, "ペインティング ピクチャー"],
  ["Have A Nice Day", artistLink, "ハブ ア ナイス デイ", "13RNG", "https://open.spotify.com/artist/5oEGV5O8mt14yUtwvYaG3V?si=-dCPF3ULTOWSTmFiwkz2Cw"],
  ["Am I Mumbling", artistLink, "アム アイ マンブリング"],
  ["No Regrets", "https://open.spotify.com/album/61APPhCNTdBdPALPPBJtlp?si=H_cJxA4ZR_qOwqhvv4De0Q", "ノー リグレッツ"],
  ["Will You Cry For Me", artistLink, "ウィル ユー クライ フォー ミー"],
  ["Needed", artistLink, "ニーデッド", "Sam Chan", "https://open.spotify.com/artist/7yjmmXLTPE5oQ8jgCJlY88?si=pxJSPG83RMOP3Xw7pmK_Bg"],
  ["Chehra", artistLink, "チェヘラ"],
  ["28", artistLink, "二十八"],
  ["Palak Jhapkte", "https://open.spotify.com/album/3kz5DwyBy8LX4ufrFHXmyV?si=hmTkS_hYQJmqmFGrorNOcA", "パラク ジャプクテ"],
  ["Mai Or Mai", artistLink, "マイ オア マイ", "YNG Anand", "https://open.spotify.com/artist/3dShtAFZbtiEgyt3DW6GRQ?si=UkgqxO98SI2ZyQMQ7_r5-g"],
  ["Samurai", "https://open.spotify.com/album/2kszUO22zbSXfJfxdQxoQM?si=n-roGXCbSgKaSSKqfiwccQ", "サムライ", "Satyam", "https://open.spotify.com/artist/6uJXxVHxmsU2yLE8HG1xNZ?si=3oKRsiUgQFmACqipdV6Q5Q"],
  ["Good By", artistLink, "グッド バイ", "Roxy", "https://open.spotify.com/artist/5SC83R5UY6SkpXCvbo9YWr?si=sbCc5nCxQpW0RZV_MipmcQ"],
  ["Family Matters Too", artistLink, "ファミリー マターズ トゥー"],
  ["Tohe Prem Mai", artistLink, "トヘ プレム マイ"],
  ["Anti Social", artistLink, "アンチ ソーシャル"],
  ["Meri Dost", artistLink, "メリ ドスト"],
  ["808", artistLink, "エイト オー エイト"],
  ["Fukk Are Love", artistLink, "ファック アー ラブ"],
  ["Mai Se Mai Tak", artistLink, "マイ セ マイ タク"],
  ["No Sense Of Love", artistLink, "ノー センス オブ ラブ"],
  ["Swapan Nagri", "https://open.spotify.com/track/6J6wrww77SfqSXZSnsNmRg?si=56de9c93d4cb48c5", "スワパン ナグリ", "YNG Anand", "https://open.spotify.com/artist/3dShtAFZbtiEgyt3DW6GRQ?si=UkgqxO98SI2ZyQMQ7_r5-g"],
  ["Too Close To The Moon", artistLink, "トゥー クロース トゥ ザ ムーン", "Satyam", "https://open.spotify.com/artist/6uJXxVHxmsU2yLE8HG1xNZ?si=3oKRsiUgQFmACqipdV6Q5Q"],
  ["NARAYANAYE", "https://open.spotify.com/album/1VyfMtek01JMk34aJcJZb8?si=hMUbw9NgQh6Fk1jv_lJXxw", "ナラヤナイェ"],
  ["Step In My Hood", artistLink, "ステップ イン マイ フッド"],
  ["Reunion", artistLink, "リユニオン"],
  ["Sheher Mohali", "https://open.spotify.com/album/1ntW1EIdg1N9DriILbEcHs?si=qnCM94rUQT2XGMsiKcYqBw", "シェヘル モハリ"],
  ["Ek Kavita Tumahare Liye", artistLink, "エク カヴィタ トゥマハレ リエ"],
  ["Istree", artistLink, "イストリー"],
  ["Ma PA", artistLink, "マ パ"],
  ["Not So Bad", artistLink, "ノット ソー バッド"]
];

const projects = {
  mixtape: [
    ["Navrang", "https://open.spotify.com/album/0LKBlxjsSIz2mNcbKhUVwL?si=YGcrlN0cQAS279lhiAzSZA"],
    ["Ecstasy", "https://open.spotify.com/album/3OlFkZD0nOmYsoJMEdvG9k?si=WCfYTEwXSwqUGkLS3t0rJg"],
    ["Kaal", "https://open.spotify.com/album/5jqI4tSSp3OHyaknyFVUbM?si=WJX1ma77TdGbhs0ce38xYA"],
    ["Mein Se Mein Tak", "https://open.spotify.com/artist/1jpZ9Rmt16ImOSEJRJj5rn?si=gxuXk1OFTnSmUhDpYcLTmQ"]
  ],
  ep: [
    ["Love Scars", "https://open.spotify.com/album/5tntbSAFIBqVSmBd7npziX?si=tJqWUHp3Qvu-8Nn4Ri6Ezw"],
    ["Men In Love", "https://open.spotify.com/album/4tEn8W0W90wqmHviizWlIF?si=cgEJ_1JmRMSWlWyyr1p6wA"],
    ["Twisted Love", "https://open.spotify.com/album/3lNqTjG8HJXMMhkg4itY6Y?si=oeVGqmMMRjeXpwyLDiE0Sw"]
  ],
  single: [
    ["F about you", "https://open.spotify.com/album/6NPweL12MI111ZWpblCTnA?si=nAsn5truQNaMWcCXV6wOmw"],
    ["Way Above", "https://open.spotify.com/album/67zr69ZKMa6lWhrV5qzJhn?si=eURQL9MPQUyJMbzgmHOi6w"],
    ["Naina Acoustic Version", "https://open.spotify.com/album/7cbpjT1IVRvxEvK2Dc1im1?si=8VemkiOlQ16dnyS2Qj7f9Q"],
    ["Naina", "https://open.spotify.com/album/7q1GkQnniEx04bM18n6QTy?si=gleMsGZETai8hPR6LBgmGA"],
    ["Dont Miss That Life Anymore", "https://open.spotify.com/album/2Y1OJw2HA7xjh4CTBhgCOl?si=rHt14tMHQfagWr78rqObtQ"],
    ["Numb", "https://open.spotify.com/album/2WaAR5eFTEnFaEMxnTzCwJ?si=soWn1PI5RCyO_UvUlveSEQ"],
    ["Khafa", "https://open.spotify.com/album/00SjL77R7JLyvusrA1suz0?si=w29l8aoWQoiZjFESjnJBkA"]
  ]
};

const videos = [
  ["Ik Dashak", "wvJ02sa4ZIw"],
  ["Alvida", "0KPVwTAbjAs"],
  ["Samurai", "ZIYpQ1NTf6g"],
  ["Fer Milaange", "t8IqDFC7ZXw"],
  ["Khafa", "gmQkvtWjvms"],
  ["New School Shii", "Tg90FrFsWXc"]
];

const unreleased = [
  ["Track 1", "assets/tracks/track-1.mp3"],
  ["Track 2", "assets/tracks/track-2.mp3"],
  ["Track 3", "assets/tracks/track-3.mp3"],
  ["Track 4", "assets/tracks/track-4.mp3"]
];

const streamTracks = [
  ["Swapan Nagri", "AstroManish, YNG Anand", "03:12", "assets/tracks/track-1.mp3", "https://open.spotify.com/track/6J6wrww77SfqSXZSnsNmRg?si=56de9c93d4cb48c5"],
  ["No Regrets", "AstroManish", "03:08", "assets/tracks/track-2.mp3", "https://open.spotify.com/album/61APPhCNTdBdPALPPBJtlp?si=H_cJxA4ZR_qOwqhvv4De0Q"],
  ["Sheher Mohali", "AstroManish", "03:22", "assets/tracks/track-3.mp3", "https://open.spotify.com/album/1ntW1EIdg1N9DriILbEcHs?si=qnCM94rUQT2XGMsiKcYqBw"]
];

function stopOtherAudio(current) {
  document.querySelectorAll("audio").forEach((audio) => {
    if (audio !== current) audio.pause();
  });
  document.querySelectorAll(".audio-card, .stream-track").forEach((item) => item.classList.remove("playing"));
}

function buildAmbience() {
  const left = document.querySelector(".ambient-left");
  const right = document.querySelector(".ambient-right");
  for (let i = 0; i < 24; i += 1) {
    const leaf = document.createElement("span");
    leaf.textContent = i % 3 === 0 ? "✦" : "❀";
    leaf.style.left = `${Math.random() * 70}px`;
    leaf.style.animationDuration = `${12 + Math.random() * 15}s`;
    leaf.style.animationDelay = `${Math.random() * 12}s`;
    leaf.style.setProperty("--drift", `${-18 + Math.random() * 36}px`);
    left.appendChild(leaf);

    const note = document.createElement("span");
    note.textContent = ["♪", "♫", "♩"][i % 3];
    note.style.right = `${Math.random() * 70}px`;
    note.style.animationDuration = `${10 + Math.random() * 14}s`;
    note.style.animationDelay = `${Math.random() * 10}s`;
    note.style.setProperty("--drift", `${-20 + Math.random() * 34}px`);
    right.appendChild(note);
  }
}

function renderTracks() {
  const tracklist = document.querySelector("#tracklist");
  tracklist.innerHTML = tracks.map((track, index) => {
    const [title, link, jp, featureName, featureLink] = track;
    const feature = featureName ? `<span class="feature">feat. <a href="${featureLink}" target="_blank" rel="noreferrer">${featureName}</a></span>` : "";
    return `
      <div class="track-row">
        <span class="track-number">${String(index + 1).padStart(2, "0")}</span>
        <span class="track-title"><a href="${link}" target="_blank" rel="noreferrer">${title}</a>${feature}</span>
        <span class="jp">${jp}</span>
      </div>
    `;
  }).join("");
}

function renderTrackWall() {
  const wall = document.querySelector("#trackWall");
  const names = tracks.map((track) => track[0]);
  wall.innerHTML = [0, 1, 2].map((row) => {
    const shifted = [...names.slice(row * 4), ...names.slice(0, row * 4)];
    const line = [...shifted, ...shifted].map((name) => `<span>${name}</span>`).join("");
    return `<div class="wall-row ${row % 2 ? "reverse" : ""}">${line}</div>`;
  }).join("");
}

function renderUnreleased() {
  const panel = document.querySelector("#unreleasedPanel");
  panel.innerHTML = unreleased.map(([title, src]) => `
    <div class="audio-card">
      <h3>${title}</h3>
      <audio controls controlsList="nodownload noplaybackrate" preload="metadata" src="${src}"></audio>
    </div>
  `).join("");

  const audios = [...panel.querySelectorAll("audio")];
  audios.forEach((audio) => {
    audio.addEventListener("play", () => {
      stopOtherAudio(audio);
      audio.closest(".audio-card").classList.add("playing");
    });
    audio.addEventListener("pause", () => {
      if (audio.currentTime === 0 || audio.ended) audio.closest(".audio-card").classList.remove("playing");
    });
    audio.addEventListener("ended", () => audio.closest(".audio-card").classList.remove("playing"));
    audio.addEventListener("contextmenu", (event) => event.preventDefault());
  });
}

function renderStreamPanels() {
  document.querySelectorAll(".stream-track-list").forEach((list) => {
    const platform = list.dataset.platform;
    list.innerHTML = streamTracks.map(([title, artist, time, src, spotifyLink], index) => {
      const link = platform === "apple" ? "https://music.apple.com/in/artist/astromanish/1723091621" : spotifyLink;
      return `
        <div class="stream-track">
          <button class="stream-play" type="button" aria-label="Play preview for ${title}"></button>
          <div>
            <a href="${link}" target="_blank" rel="noreferrer">${title}</a>
            <span>${artist}</span>
          </div>
          <time>${time}</time>
          <audio preload="metadata" src="${src}"></audio>
        </div>
      `;
    }).join("");
  });

  document.querySelectorAll(".stream-track").forEach((track) => {
    const button = track.querySelector(".stream-play");
    const audio = track.querySelector("audio");
    button.addEventListener("click", () => {
      if (audio.paused) {
        stopOtherAudio(audio);
        audio.play();
        track.classList.add("playing");
      } else {
        audio.pause();
        track.classList.remove("playing");
      }
    });
    audio.addEventListener("ended", () => track.classList.remove("playing"));
    audio.addEventListener("pause", () => {
      if (audio.currentTime === 0 || audio.ended) track.classList.remove("playing");
    });
  });
}

function renderProjects(category = "mixtape") {
  const stage = document.querySelector("#projectStage");
  const grid = document.querySelector("#projectGrid");
  const weather = stage.querySelector(".weather-layer");
  stage.className = `project-stage reveal visible ${category}`;
  grid.innerHTML = projects[category].map(([name, link]) => `<a class="project-card" href="${link}" target="_blank" rel="noreferrer">${name}</a>`).join("");

  weather.innerHTML = "";
  if (category !== "single") {
    const symbol = category === "mixtape" ? "|" : "🍂";
    for (let i = 0; i < 32; i += 1) {
      const drop = document.createElement("span");
      drop.textContent = symbol;
      drop.style.left = `${Math.random() * 100}%`;
      drop.style.animationDuration = `${2.7 + Math.random() * 4}s`;
      drop.style.animationDelay = `${Math.random() * 4}s`;
      drop.style.color = category === "mixtape" ? "rgba(248,248,255,0.42)" : "rgba(212,175,55,0.42)";
      weather.appendChild(drop);
    }
  }
}

function renderVideos() {
  const list = document.querySelector("#videoList");
  const player = document.querySelector("#videoPlayer");
  list.innerHTML = videos.map(([title], index) => `<button type="button" data-video="${index}">${title}</button>`).join("");
  list.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    const [title, id] = videos[Number(button.dataset.video)];
    list.querySelectorAll("button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    player.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1" title="${title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  });
}

function wireDonate() {
  const modal = document.querySelector("#donateModal");
  const close = document.querySelector("#closeDonate");
  document.querySelectorAll("[data-donate]").forEach((button) => {
    button.addEventListener("click", () => {
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
    });
  });
  close.addEventListener("click", () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  });
  modal.addEventListener("click", (event) => {
    if (event.target === modal) close.click();
  });
}

function wireInteractions() {
  document.querySelector("#toggleUnreleased").addEventListener("click", () => {
    const panel = document.querySelector("#unreleasedPanel");
    panel.hidden = !panel.hidden;
  });

  document.querySelectorAll(".project-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".project-tab").forEach((item) => item.classList.remove("active"));
      tab.classList.add("active");
      renderProjects(tab.dataset.category);
    });
  });
}

function revealOnScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
}

buildAmbience();
renderTracks();
renderTrackWall();
renderUnreleased();
renderProjects();
renderVideos();
renderStreamPanels();
wireDonate();
wireInteractions();
revealOnScroll();
