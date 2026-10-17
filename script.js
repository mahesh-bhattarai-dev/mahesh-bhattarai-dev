(() => {
  "use strict";

  const sections = {
    about: {
      number: "01 / About me", title: "A practical mind with a creative side.",
      html: `
        <p>I’m an Information Technology graduate who enjoys understanding how systems work, organizing information, and making technical ideas easier to use.</p>
        <p>I earned a <strong>B.S. in Information Technology from Penn State University College</strong> (August 2025) and an <strong>A.S. in Software Development from CCAC</strong>. My academic work gave me a foundation in programming, databases, networking, and technical problem-solving.</p>
        <div class="content-panel"><strong>My working style</strong><p>Start with the actual problem. Check the details. Build or document a practical solution. Be honest about what is finished and what still needs work.</p></div>
        <p>I like a portfolio with a little personality, but I keep the focus on work, curiosity, and useful technology.</p>`
    },
    career: {
      number: "02 / Career", title: "Where I want to contribute",
      html: `
        <p>I’m interested in roles where technology, information, and day-to-day operations meet—especially systems analysis, IT operations, application support, and data-focused work.</p>
        <h3>Systems & IT operations</h3><p>Troubleshooting, understanding workflows, documenting processes, and helping systems work more reliably for the people who use them.</p>
        <h3>Data & databases</h3><p>SQL practice, relational database concepts, structured analysis, data quality, and reporting fundamentals.</p>
        <h3>Application support & development</h3><p>Using programming fundamentals to understand application behavior, build learning projects, and communicate technical issues clearly.</p>
        <div class="content-panel"><strong>What matters to me:</strong> thoughtful problem-solving, clear expectations, useful documentation, and solutions that make sense in the real world.</div>`
    },
    learning: {
      number: "03 / Learning", title: "Curiosity is part of the job.",
      html: `
        <p>I learn best by connecting a concept to something I can test, build, explain, or improve. I use small projects to practice rather than treating a list of technologies as proof of expertise.</p>
        <h3>Languages & web foundations</h3><ul><li>Python and Java</li><li>HTML, CSS, and JavaScript</li><li>SQL and relational database concepts</li></ul>
        <h3>Technical foundations</h3><ul><li>Linux fundamentals</li><li>Networking and security lab exposure</li><li>Technical documentation, data validation, and troubleshooting</li></ul>
        <div class="content-panel"><strong>My rule:</strong> learning a tool and being proficient in it are different things. I aim to represent both honestly.</div>`
    },
    creative: {
      number: "04 / Creative", title: "Structure is useful. Imagination helps.",
      html: `
        <p>My creative side shows up in interface ideas, small experiments, wordplay, and the way I present technical work. I like combining clear structure with one unexpected detail that makes something memorable.</p>
        <h3>Creative habits</h3><ul><li>Designing playful interfaces around practical ideas</li><li>Writing and refining short-form poetry and wordplay privately</li><li>Finding simple explanations for complicated concepts</li></ul>
        <div class="content-panel"><strong>Professional version of my personality:</strong> curious, thoughtful, a little witty, and still focused on getting the job done.</div>`
    },
    adventure: {
      number: "05 / Adventure", title: "A change of scenery can change the perspective.",
      html: `
        <p>I enjoy scenic drives, rivers, bridges, waterfalls, gardens, and city skylines. Sometimes the best plan is simply to get outside, find a good view, and let the day unfold without turning every moment into a production.</p>
        <h3>What I notice</h3><ul><li>How places are connected—roads, bridges, paths, and neighborhoods</li><li>How a landscape changes with light and weather</li><li>The value of slowing down and paying attention</li></ul>
        <p>This section is a small glimpse of life outside the screen—not a travel résumé.</p>`
    },
    values: {
      number: "06 / Values", title: "Useful work, honest communication.",
      html: `
        <h3>Clarity</h3><p>Explain what a system or solution does in plain language. Good documentation should reduce confusion, not add to it.</p>
        <h3>Integrity</h3><p>Represent experience honestly, acknowledge limitations, and verify results instead of guessing.</p>
        <h3>Continuous learning</h3><p>Stay curious, accept feedback, and improve through practice.</p>
        <h3>People first</h3><p>Technology is most useful when it supports the people and processes around it.</p>
        <div class="content-panel"><strong>Short version:</strong> be dependable, make things understandable, and leave the process a little better than you found it.</div>`
    },
    technology: {
      number: "07 / Technology", title: "Tools are useful when the fundamentals are solid.",
      html: `
        <p>My learning and experience span programming, databases, operating systems, and hands-on technical support. This is a snapshot of the areas I work with and continue to develop.</p>
        <h3>Programming & web</h3><ul class="chip-list"><li>Python</li><li>Java</li><li>JavaScript</li><li>HTML</li><li>CSS</li></ul>
        <h3>Data & systems</h3><ul class="chip-list"><li>SQL</li><li>Relational databases</li><li>Linux fundamentals</li><li>Data validation</li><li>Documentation</li><li>Troubleshooting</li></ul>
        <h3>Academic / hands-on exposure</h3><p>Networking and security labs, including exposure to tools such as Nmap and OpenVAS through learning and support environments.</p>
        <p>I don’t present every item as an expert-level skill. I prefer to show what I’ve built, practiced, and learned.</p>`
    },
    projects: {
      number: "08 / My projects", title: "Small builds. Real learning.",
      html: `
        <p>I’m building a project portfolio that shows how I think, how I organize code, and how I turn concepts into something testable.</p>
        <h3>Mahesh OS — portfolio concept</h3><p>A personal portfolio inspired by a desktop interface. The project explores navigation, responsive layout, reusable content, and presenting technical interests with personality.</p>
        <p><a href="https://github.com/mahesh-bhattarai-dev/mahesh-bhattarai-dev" target="_blank" rel="noreferrer">View portfolio source on GitHub ↗</a></p>
        <h3>Web Design learning archive</h3><p>A collection of front-end practice, web experiments, and exercises across HTML, CSS, JavaScript, Node.js, and SQL. It includes learning work rather than claiming to be a production application.</p>
        <p><a href="https://github.com/mahesh-bhattarai-dev/Web-Design" target="_blank" rel="noreferrer">View Web-Design repository ↗</a></p>
        <h3>Python desktop experiments</h3><p>I’m also exploring desktop interfaces with Python and Tkinter, using small projects to practice application structure and interaction design.</p>
        <div class="content-panel"><strong>Project standard:</strong> explain the purpose, show the code, identify what works, and be transparent about what remains to improve.</div>`
    },
    connect: {
      number: "09 / Let’s connect", title: "Good work starts with a good conversation.",
      html: `
        <p>I’m interested in connecting with people working in IT operations, systems analysis, application support, data, and practical business technology.</p>
        <p>Feel free to explore my code or reach out through GitHub.</p>
        <div class="content-panel"><strong>GitHub:</strong><br><a href="https://github.com/mahesh-bhattarai-dev" target="_blank" rel="noreferrer">github.com/mahesh-bhattarai-dev ↗</a></div>
        <p>I’m always glad to discuss a useful problem, a thoughtful project, or a better way to document a process.</p>`
    },
    ideas: {
      number: "10 / The Idea Lab", title: "The ideas are ambitious. The budget is mostly coffee.",
      html: `
        <p>A little corner for experiments, side projects, and the occasional idea that grows three extra features before lunch.</p>
        <h3>What happens in the lab?</h3><ul><li><strong>Build:</strong> turn a concept into a small, working example.</li><li><strong>Explore:</strong> follow a question through documentation, testing, and a few extra browser tabs.</li><li><strong>Improve:</strong> revisit what works, fix what doesn't, and make the result easier to understand.</li></ul>
        <div class="content-panel"><strong>Current experiment:</strong> finish more small projects properly instead of giving every new idea a full roadmap on day one.</div>
        <p>There may be a latte nearby. There will probably be debugging. And if a project gets one feature more than it needs, well—that's part of the learning process. 😄</p>`
    }
  };

  const modal = document.getElementById("section-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalKicker = document.getElementById("modal-kicker");
  const modalBody = document.getElementById("modal-body");
  const closeButton = document.getElementById("modal-close");
  let previousFocus = null;

  function openSection(key) {
    const section = sections[key];
    if (!section) return;
    previousFocus = document.activeElement;
    modalKicker.textContent = section.number;
    modalTitle.textContent = section.title;
    modalBody.innerHTML = section.html;
    modal.hidden = false;
    document.body.classList.add("modal-open");
    closeButton.focus();
  }

  function closeModal() {
    if (modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    if (previousFocus && typeof previousFocus.focus === "function") previousFocus.focus();
  }

  document.querySelectorAll("[data-section]").forEach((button) => {
    button.addEventListener("click", () => openSection(button.dataset.section));
  });

  document.querySelectorAll(".nav-item[data-nav]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".nav-item[data-nav]").forEach((item) => item.removeAttribute("aria-current"));
      button.setAttribute("aria-current", "page");
      if (button.dataset.nav === "overview") {
        closeModal();
        document.getElementById("overview").scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        openSection(button.dataset.nav);
      }
    });
  });

  closeButton.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
    if (event.key === "Tab" && !modal.hidden) {
      const focusable = modal.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); first.focus();
      }
    }
  });

  document.getElementById("year").textContent = new Date().getFullYear();
})();