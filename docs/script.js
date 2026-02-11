    // ---------------- HELPER ----------------

    function getTodayMMDD() {
        const d = new Date();
        return String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
    }

    // For testing, can replace with getTodayMMDD()
    const today = "02-20";

    // ---------------- DAYS ----------------

    const days = [
        { name: "Rose Day", status: "active" },
        { name: "Propose Day", status: "active" },
        { name: "Chocolate Day", status: "active" },
        { name: "Teddy Day", status: "active" },
        { name: "Promise Day", status: "active" },
        { name: "Hug Day", status: "active" },
        { name: "Flirting Day", status: "locked" },
        { name: "Confession Day", status: "locked" },
        { name: "Missing Day", status: "locked" }
    ];

    const container = document.getElementById("checkpoints");

    days.forEach(day => {

        const card = document.createElement("div");
        card.className = `day-card ${day.status}`;

        const title = document.createElement("div");
        title.className = "day-title";
        title.innerText = day.name;

        const msg = document.createElement("div");
        msg.className = "lock-message";
        msg.innerText = "Some things are meant to arrive at their own time. This one is waiting for its day.";

        card.appendChild(title);
        card.appendChild(msg);

        card.addEventListener("click", () => {

            if (day.status === "locked") {
                card.classList.toggle("show-message");
            }

            if (day.status === "active") {
                if (day.name === "Rose Day") openRoseDay();
                if (day.name === "Propose Day") openProposeDay();
                if (day.name === "Chocolate Day") openChocolateDay();
                if (day.name === "Teddy Day") openTeddyDay();
                if (day.name === "Promise Day") openPromiseDay();
                if (day.name === "Hug Day") openHugDay();
            }
        });

        container.appendChild(card);
    });

    // ---------------- ROSE DAY ----------------

    function openRoseDay() {
        const app = document.getElementById("app");
        if (!app) return;

        app.style.transition = "opacity 0.5s ease";
        app.style.opacity = 0;

        setTimeout(() => {

            app.innerHTML = `
            <div class="rose-letter-container">
                <div class="rose-letter">
                    <h2>🌹 Rose Day</h2>
                    <p>Somewhere between ordinary conversations<br>
                    and the quiet comfort of knowing you’re there,<br>
                    I realized some things feel different — quietly, gently.</p>
                    <p>This isn’t a promise, nor a declaration.<br>
                    It’s just a rose —<br> given softly, without hurry, without expectation.</p>
                    <p>Patience has its own beauty,<br> and some moments deserve to wait their perfect time.</p>
                    <p class="signature">— From someone who cares</p>
                </div>
            </div>
            `;

            const oldStyle = document.getElementById("roseDayStyle");
            if (oldStyle) oldStyle.remove();

            const style = document.createElement("style");
            style.id = "roseDayStyle";
            style.innerHTML = `
            @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap');
            body { margin: 0; font-family: 'Dancing Script', cursive; background: #fff2ed; }
            .rose-letter-container { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 30px; }
            .rose-letter { background: linear-gradient(135deg, #fce0d4 0%, #f8cbb1 50%, #f5b28e 100%); border: 1px solid #e0a47a; padding: 35px 40px; max-width: 500px; line-height: 1.7; color: #4b3a2b; position: relative; border-radius: 15px; clip-path: polygon(5% 0%, 95% 0%, 100% 5%, 100% 95%, 95% 100%, 5% 100%, 0% 95%, 0% 5%); overflow: hidden; opacity: 0; transform: scale(0.8); box-shadow: 0 8px 20px rgba(0,0,0,0.2); font-size: 18px; }
            .rose-letter-container .rose-letter::before { content: ''; position: absolute; top: -30px; left: -30px; right: -30px; bottom: -30px; background: radial-gradient(circle at top, #ffb3b3, #ff4d4d, transparent); z-index: -1; opacity: 0; filter: blur(20px); animation: burnFlame 2s forwards; }
            .rose-letter h2 { margin-bottom: 15px; font-weight: normal; }
            .rose-letter .signature { margin-top: 25px; font-size: 16px; text-align: right; color: #6b4e3a; }
            @keyframes burnLetter { 0% { opacity: 0; transform: scale(0.5); } 60% { opacity: 1; transform: scale(1.1); } 100% { opacity: 1; transform: scale(1); } }
            @keyframes burnFlame { 0% { opacity: 1; transform: scale(0.5) rotate(-5deg); } 40% { opacity: 0.9; transform: scale(1.05) rotate(3deg); } 70% { opacity: 0.6; transform: scale(1) rotate(0deg); } 100% { opacity: 0; transform: scale(1) rotate(0deg); } }
            `;

            document.head.appendChild(style);

            const letter = document.querySelector(".rose-letter");
            letter.style.animation = "burnLetter 2s forwards";
            app.style.opacity = 1;

        }, 500);
    }

    // ---------------- PROPOSE DAY ----------------

    function openProposeDay() {
        const app = document.getElementById("app");
        if (!app) return;

        document.body.classList.add("propose-active");
        app.style.opacity = 0;

        setTimeout(() => {

            app.innerHTML = `
            <div class="propose-day">
                <div class="propose-letter">
                    <h2>🌙 Propose Day</h2>
                    <p>I love the moon,</p>
                    <p>but the moon doesn’t know…</p>
                    <p>Some feelings are like starlight —<br> they don’t rush, they don’t demand,<br> they just quietly exist.</p>
                    <p>Today isn’t about asking anything.<br> It’s just about letting a feeling breathe.</p>
                    <p class="signature">— From someone who feels, gently</p>
                </div>
            </div>
            `;

            const oldStyle = document.getElementById("proposeDayStyle");
            if (oldStyle) oldStyle.remove();

            const style = document.createElement("style");
            style.id = "proposeDayStyle";
            style.innerHTML = `
            @import url('https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap');
            .propose-day { position: fixed; inset: 0; background: radial-gradient(circle at top, #2b2d5a, #0b0c1f 75%); display: flex; justify-content: center; align-items: center; overflow: hidden; animation: fadeIn 2s ease forwards; }
            .propose-day::before { content: ""; position: absolute; top: 60px; right: 70px; width: 150px; height: 150px; border-radius: 50%; background: radial-gradient(circle at 30% 30%, #f5f5f5 0%, #e2e2e2 35%, #d0d0d0 60%, #b8b8b8 100%); box-shadow: inset -18px -18px 28px rgba(0,0,0,0.15), inset 10px 10px 20px rgba(255,255,255,0.2), 0 0 50px rgba(255,255,255,0.3); filter: blur(0.15px); z-index: 1; }
            .propose-day::after { content: ""; position: absolute; inset: 0; background: radial-gradient(1px 1px at 5% 10%, white, transparent), radial-gradient(1px 1px at 15% 40%, white, transparent), radial-gradient(1px 1px at 25% 70%, white, transparent), radial-gradient(1px 1px at 35% 20%, white, transparent); animation: twinkle 4s infinite alternate ease-in-out; z-index: 0; }
            .propose-letter { position: relative; z-index: 2; max-width: 520px; padding: 40px; background: rgba(20, 25, 50, 0.85); border-radius: 18px; color: #f1f1f1; font-family: 'Homemade Apple', cursive; text-align: center; box-shadow: 0 10px 35px rgba(0,0,0,0.5); opacity: 0; transform: translateY(40px); animation: floatUp 2s ease forwards; }
            .signature { margin-top: 25px; text-align: right; opacity: 0.8; }
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            @keyframes floatUp { to { opacity: 1; transform: translateY(0); } }
            @keyframes twinkle { 0% { opacity: 0.6; } 50% { opacity: 1; } 100% { opacity: 0.75; } }
            `;

            document.head.appendChild(style);
            app.style.opacity = 1;

        }, 600);
    }

    // ---------------- CHOCOLATE DAY ----------------

    function openChocolateDay() {
        const app = document.getElementById("app");
        if (!app) return;

        app.style.opacity = 0;

        setTimeout(() => {
            app.innerHTML = `
            <div class="chocolate-day">
                <div class="chocolate-letter">
                    <h2>🍫 Chocolate Day</h2>
                    <p class="choco-line">Just like chocolate melts slowly,</p>
                    <p class="choco-line">my heart melts when I think of you…</p>
                    <p class="choco-line">Today is sweet, simple, and for you.</p>
                    <p class="signature choco-line">— From someone who adores you</p>
                </div>
            </div>
            `;
            app.style.opacity = 1;
        }, 500);
    }

    function openTeddyDay() {
      const app = document.getElementById("app");
      if (app) app.remove();

      const teddyDay = document.createElement("div");
      teddyDay.className = "teddy-day"; 
      document.body.appendChild(teddyDay);

      teddyDay.innerHTML = `
        <div class="bg-hearts"></div>
        <img src="teddy.png" class="teddy" />
        <div class="envelope">
          <div class="letter">
    🧸 Teddy Day<br><br>
    Hey Chocopie 🍬,<br><br>
    I’m here — a little soft, a little quiet,<br>
    but always with you.<br><br>
    Through your mornings, lazy afternoons,<br>
    or the small, silly moments, I sit right there,<br>
    just watching, just smiling, just making sure<br>
    you feel cared for — even when I don’t say it.<br><br>
    No loud promises, no grand gestures…<br>
    just me, hugging your thoughts,<br>
    sitting close in every moment you need a soft presence.<br><br>
    Happy Teddy Day My Cutie Plushie Teddy🧸🤍<br>
    — Always yours, your Rasmalaaaiiii ❤️
          </div>
        </div>
      `;

      const teddy = teddyDay.querySelector(".teddy");
      const envelope = teddyDay.querySelector(".envelope");

      // 1️⃣ Show teddy first
      setTimeout(() => teddy.classList.add("show"), 500);

      // 2️⃣ Click teddy → trigger background + fade chocolate → hearts → envelope
      teddy.addEventListener("click", () => {
        teddyDay.classList.add("light");           // background change
        teddyDay.classList.add("fade-chocolate");  // fade chocolate layers + show hearts

        // Envelope reveal slightly after
        setTimeout(() => envelope.classList.add("show"), 600);
      });
    }

    // ---------------- PROMISE DAY ----------------

    function openPromiseDay() {
      const app = document.getElementById("app");
      if (!app) return;

      app.style.opacity = 0;

      setTimeout(() => {
        app.innerHTML = `
          <div class="promise-day">
            <h2><span class="heart">🤍</span> Promise Day</h2>

            <p class="promise-intro">
                Promises aren’t just read…<br>
                They’re felt, unlocked… slowly, for you <span class="heart">💓</span>
            </p>


            <div id="promiseBox" class="promise-box"></div>

            <button id="promiseBtn">Unlock Promise #1</button>
          </div>
        `;
      
        app.style.opacity = 1;

        const promises = [
          "I promise to notice when you go quiet — not just when you smile.",
          "I promise to protect your softness, never take it lightly.",
          "I promise my effort won’t fade after Valentine’s week ends.",
          "I promise that I will be your safe zone.",
          "I promise that if you share anything about your life — even if it’s personal — I’ll respect it.",
          "I promise that I’ll be your cute, soft plushie teddy bear you can hug tightly at night whenever you feel lonely or low.",
          "I promise that I’ll do my best to never let our bond fade, no matter the situation — always choosing understanding over distance."
        ];

        let index = 0;
        const box = document.getElementById("promiseBox");
        const btn = document.getElementById("promiseBtn");

      btn.addEventListener("click", () => {
      if (index < promises.length) {
        const p = document.createElement("p");
        p.className = "promise-line";
        p.innerText = `🤍 ${index + 1}. ${promises[index]}`;
        box.appendChild(p);

        index++;

        // If we just unlocked the last promise, show lock message
        if (index === promises.length) {
          btn.innerText = "All Promises Unlocked";
          btn.disabled = true;
          btn.style.opacity = "0.6";

          const lockMsg = document.createElement("p");
          lockMsg.className = "promise-lock";
          lockMsg.innerHTML = "🔒 Some promises are meant to be lived…<br>Maybe one day, you'll unlock them all 💌";
          box.appendChild(lockMsg);
        } else {
          btn.innerText = `Unlock Promise #${index + 1}`;
        }
      }
      });
    },0);
    }

// ---------------- HUG DAY (DARK → COMFORT ARC) ----------------
// ---------------- AUDIO ENGINE ----------------

const audio = {
  first: new Audio("audio-first.mp3"),
  second: new Audio("audio-second.mp3"),
  third: new Audio("audio-third.mp3"),
  fourth: new Audio("audio-fourth.mp3")
};

Object.values(audio).forEach(a => {
  a.preload = "auto";
  a.volume = 0.7;
});

function stopAllAudio() {
  Object.values(audio).forEach(a => {
    a.pause();
    a.currentTime = 0;
  });
}

function playLoop(a) {
  stopAllAudio();
  a.loop = true;
  a.currentTime = 0;
  a.play().catch(() => {});
}

let audioUnlocked = false;

function unlockAudio() {
  if (audioUnlocked) return;

  Object.values(audio).forEach(a => {
    a.muted = true;
    a.play().then(() => {
      a.pause();
      a.currentTime = 0;
      a.muted = false;
    });
  });

  audioUnlocked = true;
}

function openHugDay() {
  const app = document.getElementById("app");
  if (!app) return;

  stopAllAudio();
  app.style.opacity = 0;

  // ---------------- PLAY AUDIO 1 IMMEDIATELY ----------------
  if (audio.first) {
    audio.first.loop = true;
    audio.first.currentTime = 0;
    audio.first.play().catch(err => console.log("Audio 1 failed:", err));
  }

  // ---------------- WARNING SCREEN ----------------
  setTimeout(() => {
    app.innerHTML = `
      <div class="hug-day-warning">
        <h2 class="warn-line">⚠️ Hug Day ⚠️</h2>
        <p class="warn-line">
          Late night. Dim lights. A horror movie playing softly.
        </p>
        <p class="warn-line">
          You say you’re not scared.
        </p>
        <p class="warn-line">
          Still… I stay close. Just in case. 🤍
        </p>
        <button id="startHugHorror" class="warn-line">Stay</button>
      </div>
    `;
    app.style.opacity = 1;

    const warnLines = document.querySelectorAll(".warn-line");
    warnLines.forEach((el, i) => {
      el.style.opacity = 0;
      setTimeout(() => {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }, i * 1200);
    });

    // ---------------- CLICK START ----------------
    document.getElementById("startHugHorror").addEventListener("click", async () => {
      await unlockAudio();
      stopAllAudio(); // stop any other audio

      // Play audio.second after click
      if (audio.second) {
        audio.second.loop = true;
        audio.second.currentTime = 0;
        audio.second.play().catch(err => console.log("Audio 2 failed:", err));
      }

      startHugs();
    });

  }, 0);

  // ---------------- FUNCTIONS ----------------
  function startHugs() {
    app.style.opacity = 0;

    setTimeout(() => {
      app.innerHTML = `
        <div class="hug-day">
          <h2 id="hugTitle" class="hug-title clickable">
            <span class="heart">🤍</span> Hug Day
          </h2>
          <p class="hug-intro">
            The movie keeps going.<br>
            The room feels quieter.<br>
            Nothing needs to be said.
          </p>

          <button id="openTextBox" class="hug-open">Open the text box</button>
          <div id="hugBox" class="hug-box hidden"></div>
        </div>
      `;
      app.style.opacity = 1;

      const hugBox = document.getElementById("hugBox");
      const openTextBtn = document.getElementById("openTextBox");

      // Play audio.third when text box opens
      openTextBtn.addEventListener("click", () => {
        stopAllAudio();
        if (audio.third) {
          audio.third.loop = true;
          audio.third.currentTime = 0;
          audio.third.play().catch(err => console.log("Audio 3 failed:", err));
        }

        hugBox.classList.remove("hidden");
        openTextBtn.remove();
        setTimeout(nextHug, 3000);
      });

      // Hugs progression
      const hugs = [
        "A sudden sound from the screen. I don’t move. I stay steady.",
        "You shift slightly. I match the calm, like this moment was expected.",
        "The fear fades faster than the silence between us.",
        "The movie keeps playing, but something else feels louder — comfort.",
        "Time slows down. Nothing is rushed. Nothing is taken.",
        "You breathe easier. I notice. I always do.",
        "Even when the tension drops, I don’t pull away from the moment.",
        "Some closeness isn’t about touch. It’s about staying.",
        "If the night paused here, it would feel right.",
        "No fear left now. Just quiet, shared warmth."
      ];

      let index = 0;

      function nextHug() {
        if (index >= hugs.length) {
          if (audio.third) {
            audio.third.pause();
            audio.third.currentTime = 0;
          }

          const end = document.createElement("p");
          end.className = "hug-lock";
          end.innerText = "💌 The movie ends. The calm doesn’t.";
          hugBox.appendChild(end);

          const heartBtn = document.createElement("button");
          heartBtn.className = "heart-open";
          heartBtn.innerText = "Open my heart";

          heartBtn.addEventListener("click", () => {
            stopAllAudio();
            if (audio.fourth) {
              audio.fourth.loop = true;
              audio.fourth.currentTime = 0;
              audio.fourth.play().catch(err => console.log("Audio 4 failed:", err));
            }
            startFinalScene();
          });

          hugBox.appendChild(heartBtn);
          hugBox.scrollTop = hugBox.scrollHeight;
          return;
        }

        document.body.classList.add("shake");
        setTimeout(() => document.body.classList.remove("shake"), 200);

        const p = document.createElement("p");
        p.className = "hug-line";
        p.innerText = `🤍 ${hugs[index]}`;
        hugBox.appendChild(p);
        hugBox.scrollTop = hugBox.scrollHeight;

        document.body.classList.add(`hug-blush-${Math.min(index + 1, 5)}`);

        index++;
        setTimeout(nextHug, 4200);
      }

    }, 800);
  }

  function startFinalScene() {
  const app = document.getElementById("app");
  if (!app) return;

  app.style.opacity = 0;

  setTimeout(() => {
    app.innerHTML = `
      <div class="final-scene hug-day" style="display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:100vh; text-align:center; padding: 0 20px;">

        <div id="finalQuestion" class="hug-title" style="font-size:26px; font-weight:bold; line-height:1.5; text-align:center;"></div>

        <div style="display:flex; justify-content:space-between; width:100%; max-width:900px; margin-top:20px;">
          <button class="hug-open yes">Yes</button>
          <button class="hug-open no">No</button>
        </div>

        <div id="finalText" class="hug-box" style="margin-top:30px; font-size:20px; line-height:1.5;"></div>
      </div>
    `;
    app.style.opacity = 1;

    const finalQuestion = document.getElementById("finalQuestion");
    const finalText = document.getElementById("finalText");
    const yesBtn = app.querySelector(".yes");
    const noBtn = app.querySelector(".no");

    // Step 1: type the question slowly
    const question = "CAN I BE YOUR G.One TO FIGHT EVERY Ra.One OF YOUR LIFE?";
    let qIndex = 0;

    function typeQuestion() {
      if (qIndex < question.length) {
        const char = question[qIndex] === " " ? "&nbsp;" : question[qIndex];
        finalQuestion.innerHTML += char;
        qIndex++;
        finalQuestion.scrollTop = finalQuestion.scrollHeight;
        setTimeout(typeQuestion, 100);
      }
    }

    typeQuestion();

    // Step 2: define the yes/no lines (dark romantic / sweet denial)
    const yesLine = "If I could burn the stars to bring you closer, I would — every night, every heartbeat, just for you.";
    const noLine  = "Even if I must wait, seeing your smile is enough — my heart will always treasure you, no matter what.";

    function typeFinalLine(line) {
      let i = 0;
      finalText.innerHTML = "";
      function typeChar() {
        if (i < line.length) {
          const char = line[i] === " " ? "&nbsp;" : line[i];
          finalText.innerHTML += char;
          i++;
          finalText.scrollTop = finalText.scrollHeight;
          setTimeout(typeChar, 120);
        }
      }
      typeChar();
    }

    yesBtn.addEventListener("click", () => {
      yesBtn.disabled = true;
      noBtn.disabled = true;
      typeFinalLine(yesLine);
    });

    noBtn.addEventListener("click", () => {
      yesBtn.disabled = true;
      noBtn.disabled = true;
      typeFinalLine(noLine);
    });

  }, 1200); // fade-in delay
}
function startFinalScene() {
  const app = document.getElementById("app");
  if (!app) return;

  app.style.opacity = 0;

  setTimeout(() => {
    app.innerHTML = `
      <div class="final-scene hug-day" style="display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:100vh; text-align:center; padding: 0 20px;">

        <div id="finalQuestion" class="hug-title" style="font-size:26px; font-weight:bold; line-height:1.5; text-align:center;"></div>

        <div style="display:flex; justify-content:space-between; width:100%; max-width:900px; margin-top:20px;">
          <button class="hug-open yes">Yes</button>
          <button class="hug-open no">No</button>
        </div>

        <div id="finalText" class="hug-box" style="margin-top:30px; font-size:20px; line-height:1.5;"></div>
      </div>
    `;
    app.style.opacity = 1;

    const finalQuestion = document.getElementById("finalQuestion");
    const finalText = document.getElementById("finalText");
    const yesBtn = app.querySelector(".yes");
    const noBtn = app.querySelector(".no");

    // Step 1: type the question slowly
    const question = "CAN I BE YOUR G.One TO FIGHT EVERY Ra.One OF YOUR LIFE?";
    let qIndex = 0;

    function typeQuestion() {
      if (qIndex < question.length) {
        const char = question[qIndex] === " " ? "&nbsp;" : question[qIndex];
        finalQuestion.innerHTML += char;
        qIndex++;
        finalQuestion.scrollTop = finalQuestion.scrollHeight;
        setTimeout(typeQuestion, 100);
      }
    }

    typeQuestion();

    // Step 2: define the yes/no lines (dark romantic / sweet denial)
    const yesLine = "If I could burn the stars to bring you closer, I would — every night, every heartbeat, just for you.";
    const noLine  = "Even if I must wait, seeing your smile is enough — my heart will always treasure you, no matter what.";

    function typeFinalLine(line) {
      let i = 0;
      finalText.innerHTML = "";
      function typeChar() {
        if (i < line.length) {
          const char = line[i] === " " ? "&nbsp;" : line[i];
          finalText.innerHTML += char;
          i++;
          finalText.scrollTop = finalText.scrollHeight;
          setTimeout(typeChar, 120);
        }
      }
      typeChar();
    }

    yesBtn.addEventListener("click", () => {
      yesBtn.disabled = true;
      noBtn.disabled = true;
      typeFinalLine(yesLine);
    });

    noBtn.addEventListener("click", () => {
      yesBtn.disabled = true;
      noBtn.disabled = true;
      typeFinalLine(noLine);
    });

  }, 1200); // fade-in delay
}
}
