let app = {
  profiles: [
    {
      name: 'gatsby',
      js: true,
    },
    {
      name: 'node',
      js: true,
    },
    {
      name: 'grade',
      js: true,
    },
    {
      name: 'npm',
      js: true,
    },
    {
      name: 'swank',
      js: true,
    },
    {
      name: 'vue',
      js: true,
    },
    {
      name: 'dust',
      js: true,
    },
    {
      name: 'bower',
      js: true,
    },
    {
      name: 'backbone',
      js: true,
    },
    {
      name: 'thorax',
      js: true,
    },
    {
      name: 'preact',
      js: true,
    },
    {
      name: 'react',
      js: true,
    },
    {
      name: 'knockout',
      js: true,
    },
    {
      name: 'angular',
      js: true,
    },
    {
      name: 'meteor',
      js: true,
    },
    {
      name: 'buddy',
      js: true,
    },
    {
      name: 'prettier',
      js: true,
    },
    {
      name: 'sea',
      js: true,
    },
    {
      name: 'istanbul',
      js: true,
    },
    {
      name: 'tape',
      js: true,
    },
    {
      name: 'prova',
      js: true,
    },
    {
      name: 'jasmine',
      js: true,
    },
    {
      name: 'mocha',
      js: true,
    },
    {
      name: 'curl',
      js: true,
    },
    {
      name: 'script',
      js: true,
    },
    {
      name: 'brunch',
      js: true,
    },
    {
      name: 'rollup',
      js: true,
    },
    {
      name: 'cappuccino',
      js: true,
    },
    {
      name: 'fireball',
      js: true,
    },
    {
      name: 'zoo',
      js: true,
    },
    {
      name: 'dragon',
      js: true,
    },
    {
      name: 'livewire',
      js: true,
    },
    {
      name: 'tart',
      js: true,
    },
    {
      name: 'biscuit',
      js: true,
    },
    {
      name: 'biscuit',
      js: true,
    },
    {
      name: 'ender',
      js: true,
    },
    {
      name: 'spelling',
      js: false,
    },
    {
      name: 'patrol',
      js: true,
    },
    {
      name: 'laneway',
      js: false,
    },
    {
      name: 'textures',
      js: true,
    },
    {
      name: 'flamingo',
      js: true,
    },
    {
      name: 'husband',
      js: false,
    },
    {
      name: 'husband',
      js: false,
    },
    {
      name: 'gator',
      js: true,
    },
    {
      name: 'lagoon',
      js: true,
    },
    {
      name: 'breakout',
      js: true,
    },
    {
      name: 'rye',
      js: true,
    },
  ],
  profileToShow: 0,
  answered: false,
  correctlyAnswered: false,
}

const thing = document.getElementById('thing');
const fake = document.getElementById('fake');
const name = document.getElementById('name');
const message = document.getElementById('message');
const next = document.getElementById('next');
const age = document.getElementById('age');

let setupClicks = () => {
  thing.addEventListener('click', (e) => {
    let profile = app.profiles[ app.profileToShow ];
    app.answered = true;

    if (profile.js) {
      app.correctlyAnswered = true;
    }
    else {
      app.correctlyAnswered = false;
    }

    refreshAppUI();
  })

  fake.addEventListener('click', (e) => {
    let profile = app.profiles[ app.profileToShow ];
    app.answered = true;

    if (profile.js) {
      app.correctlyAnswered = false;
    }
    else {
      app.correctlyAnswered = true;
    }

    refreshAppUI();
  })

  next.addEventListener('click', (e) => {
    app.profileToShow = Math.floor(Math.random() * app.profiles.length);
    app.answered = false;
    refreshAppUI();
  })
}

let refreshAppUI = () => {
  let profileToShow = app.profileToShow;
  let profile = app.profiles[ profileToShow ];

  name.innerHTML = profile.name + ".js";

  if (app.answered) {
    message.innerHTML = app.correctlyAnswered ? "Yep." : "Wrong!";
    next.innerHTML = app.correctlyAnswered ? "Next" : "Try Again"
    thing.style.display = "none";
    fake.style.display = "none";
    next.style.display = "block";
  }
  else {
    message.innerHTML = "is...";
    thing.style.display = "block";
    fake.style.display = "block";
    next.style.display = "none";
  }
}

setupClicks()
refreshAppUI()
