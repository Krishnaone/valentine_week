
// ---------------- HELPER ----------------
function getTodayMMDD() {
  const d = new Date();
  return String(d.getMonth() + 1).padStart(2, "0") + "-" +
         String(d.getDate()).padStart(2, "0");
}

const today = "02-20";

// ---------------- DAYS ----------------
const days = [
  { name: "Rose Day", status: "active" },
  { name: "Propose Day", status: "active" },
  { name: "Chocolate Day", status: "active" },
  { name: "Teddy Day", status: "locked" },
  { name: "Promise Day", status: "locked" },
  { name: "Hug Day", status: "locked" },
  { name: "Flirting Day", status: "locked" },
  { name: "Confession Day", status: "locked" },
  { name: "Missing Day", status: "locked" }
]
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
    }
  });

  container.appendChild(card);
});

// ---------------- ROSE DAY ----------------
function openRoseDay() {
  const app = document.getElementById("app");

  // Fade out previous content
  app.style.transition = "opacity 0.5s ease";
  app.style.opacity = 0;

  setTimeout(() => {
    // Clear previous content
    app.innerHTML = `
      <div class="rose-letter-container">
        <div class="rose-letter">
          <h2>🌹 Rose Day</h2>
          <p>Somewhere between ordinary conversations<br>
          and the quiet comfort of knowing you’re there,<br>
          I realized some things feel different — quietly, gently.</p>

          <p>This isn’t a promise, nor a declaration.<br>
          It’s just a rose —<br>
          given softly, without hurry, without expectation.</p>

          <p>Patience has its own beauty,<br>
          and some moments deserve to wait their perfect time.</p>

          <p class="signature">— From someone who cares</p>
        </div>
      </div>
    `;

    app.style.opacity = 1;

    // Remove old style if exists
    const oldStyle = document.getElementById("roseDayStyle");
    if (oldStyle) oldStyle.remove();

    // Add dynamic styles
    const style = document.createElement("style");
    style.id = "roseDayStyle";
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap');

      body {
        margin: 0;
        font-family: 'Dancing Script', cursive;
        background: #fff2ed; /* page background */
      }

      .rose-letter-container {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 30px;
      }

      /* Letter box with definite gradient & contrast */
      .rose-letter-container .rose-letter {
        background: linear-gradient(135deg, #fce0d4 0%, #f8cbb1 50%, #f5b28e 100%);
        border: 1px solid #e0a47a;
        padding: 35px 40px;
        max-width: 500px;
        line-height: 1.7;
        color: #4b3a2b;
        position: relative;
        border-radius: 15px;
        clip-path: polygon(
          5% 0%, 95% 0%, 100% 5%, 100% 95%, 95% 100%, 5% 100%, 0% 95%, 0% 5%
        );
        overflow: hidden;
        opacity: 0;
        transform: scale(0.8);
        box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        font-size: 18px;
      }

      /* Flames */
      .rose-letter-container .rose-letter::before {
        content: '';
        position: absolute;
        top: -30px; left: -30px; right: -30px; bottom: -30px;
        background: radial-gradient(circle at top, #ffb3b3, #ff4d4d, transparent);
        z-index: -1;
        opacity: 0;
        filter: blur(20px);
        animation: burnFlame 2s forwards;
      }

      .rose-letter h2 {
        margin-bottom: 15px;
        font-weight: normal;
      }

      .rose-letter .signature {
        margin-top: 25px;
        font-size: 16px;
        text-align: right;
        color: #6b4e3a;
      }

      @keyframes burnLetter {
        0% { opacity: 0; transform: scale(0.5); }
        60% { opacity: 1; transform: scale(1.1); }
        100% { opacity: 1; transform: scale(1); }
      }

      @keyframes burnFlame {
        0% { opacity: 1; transform: scale(0.5) rotate(-5deg); }
        40% { opacity: 0.9; transform: scale(1.05) rotate(3deg); }
        70% { opacity: 0.6; transform: scale(1) rotate(0deg); }
        100% { opacity: 0; transform: scale(1) rotate(0deg); }
      }
    `;
    document.head.appendChild(style);

    // Trigger letter animation
    const letter = document.querySelector(".rose-letter");
    letter.style.animation = "burnLetter 2s forwards";

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
          <p>
            Some feelings are like starlight —<br>
            they don’t rush, they don’t demand,<br>
            they just quietly exist.
          </p>
          <p>
            Today isn’t about asking anything.<br>
            It’s just about letting a feeling breathe.
          </p>
          <p class="signature">— From someone who feels, gently</p>
        </div>
      </div>
    `;

    // remove old style if exists
    const oldStyle = document.getElementById("proposeDayStyle");
    if (oldStyle) oldStyle.remove();

    const style = document.createElement("style");
    style.id = "proposeDayStyle";
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap');

      .propose-day {
        position: fixed;
        inset: 0;
        background: radial-gradient(circle at top, #2b2d5a, #0b0c1f 75%);
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        animation: fadeIn 2s ease forwards;
      }

      /* 🌙 Moon */
.propose-day::before {
  content: "";
  position: absolute;
  top: 60px;
  right: 70px;
  width: 150px;
  height: 150px;
  border-radius: 50%;

  background:
    /* subtle crater shadows */
    radial-gradient(circle at 38% 42%, rgba(0,0,0,0.08) 0%, transparent 6%),
    radial-gradient(circle at 58% 58%, rgba(0,0,0,0.07) 0%, transparent 5%),
    radial-gradient(circle at 62% 35%, rgba(0,0,0,0.06) 0%, transparent 5%),
    radial-gradient(circle at 45% 72%, rgba(0,0,0,0.07) 0%, transparent 6%),
    radial-gradient(circle at 55% 25%, rgba(0,0,0,0.05) 0%, transparent 5%),

    /* soft crater highlights (rim) */
    radial-gradient(circle at 39% 43%, rgba(255,255,255,0.12) 0%, transparent 6%),
    radial-gradient(circle at 59% 58%, rgba(255,255,255,0.10) 0%, transparent 6%),
    radial-gradient(circle at 64% 33%, rgba(255,255,255,0.10) 0%, transparent 5%),
    radial-gradient(circle at 44% 70%, rgba(255,255,255,0.12) 0%, transparent 6%),

    /* base moon (soft gray) */
    radial-gradient(
      circle at 30% 30%,
      #f5f5f5 0%,
      #e2e2e2 35%,
      #d0d0d0 60%,
      #b8b8b8 100%
    );

  box-shadow:
    inset -18px -18px 28px rgba(0,0,0,0.15),
    inset 10px 10px 20px rgba(255,255,255,0.2),
    0 0 50px rgba(255,255,255,0.3);

  filter: blur(0.15px);
  z-index: 1;
}


      /* ✨ Stars */
      .propose-day::after {
        content: "";
        position: absolute;
        inset: 0;
        background:
          radial-gradient(1px 1px at 5% 10%, white, transparent),
          radial-gradient(1px 1px at 15% 40%, white, transparent),
          radial-gradient(1px 1px at 25% 70%, white, transparent),
          radial-gradient(1px 1px at 35% 20%, white, transparent),
          radial-gradient(1px 1px at 45% 60%, white, transparent),
          radial-gradient(1.5px 1.5px at 70% 35%, rgba(255,255,255,0.9), transparent),
          radial-gradient(1.5px 1.5px at 90% 75%, rgba(255,255,255,0.8), transparent);
        animation: twinkle 4s infinite alternate ease-in-out;
        z-index: 0;
      }

      .propose-letter {
        position: relative;
        z-index: 2;
        max-width: 520px;
        padding: 40px;
        background: rgba(20, 25, 50, 0.85);
        border-radius: 18px;
        color: #f1f1f1;
        font-family: 'Homemade Apple', cursive;
        text-align: center;
        box-shadow: 0 10px 35px rgba(0,0,0,0.5);
        opacity: 0;
        transform: translateY(40px);
        animation: floatUp 2s ease forwards;
      }

      .signature {
        margin-top: 25px;
        text-align: right;
        opacity: 0.8;
      }

      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      @keyframes floatUp {
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes twinkle {
        0% { opacity: 0.6; }
        50% { opacity: 1; }
        100% { opacity: 0.75; }
      }
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

/* ===== BUTTON LOGIC ===== */
const proposeBtn = document.getElementById("proposeDayBtn");
if (proposeBtn) {
  proposeBtn.addEventListener("click", openProposeDay);
}
