// Array of questions grouped by category (25 questions each)
const questions = [
   {
    category: "Physics",
    questions: [
      {
        question: "What is Newton's First Law of Motion?",
        options: ["Force equals mass times acceleration","Every action has an equal and opposite reaction","An object remains at rest or in motion unless acted upon by a force","Energy cannot be created or destroyed"],
        correctAnswer: 2,
      },
      {
        question: "What is the formula for calculating force?",
        options: ["F=ma","F=m/v","F=mv^2","F=mgh"],
        correctAnswer: 0,
      },
      {
        question: "What is the SI unit of force?",
        options: ["Joule", "Newton", "Pascal", "Watt"],
        correctAnswer: 1,
      },
      {
        question: "What is momentum defined as?",
        options: [" Mass per unit velocity", "Velocity divided by mass", " Mass times velocity", "Energy of motion"],
        correctAnswer: 2,
      },
      {
        question: "What is the acceleration due to gravity on Earth?",
        options: ["10m/s^2", "8.9m/s^2", "9.8m/s^2", "7.8m/s^2"],
        correctAnswer: 2,
      },
      {
        question: "State the First Law of Thermodynamics.",
        options: ["Energy can be created but not destroyed", "Energy can be transferred or transformed but not created or destroyed", "Heat flows from colder to warmer objects", "The entropy of a system always decreases"],
        correctAnswer: 1,
      },
      {
        question: "What is absolute zero?",
        options: ["The freezing point of water", "The point where molecular motion stops", "The boiling point of liquid nitrogen", "The average temperature of outer space"],
        correctAnswer: 1,
      },
      {
        question: "What is the formula for heat energy?",
        options: ["Q=mc^2", "Q=mgh", "Q=mcΔT", "Q=F×d"],
        correctAnswer: 2,
      },
      {
        question: "What is entropy a measure of?",
        options: ["Heat capacity", "Disorder in a system", "Energy transfer", "Work done"],
        correctAnswer: 1,
      },
      {
        question: "What does thermal equilibrium mean?",
        options: ["Objects in motion remain in motion", "No net heat flow between systems", "Energy is conserved in a closed system", "Molecules stop moving"],
        correctAnswer: 1,
      },
      {
        question: "What is the formula for the speed of a wave?",
        options: ["v=fλ", "v=mgh", "v=ma", "v=1/2 mv^2"],
        correctAnswer: 0,
      },
      {
        question: "What is the unit of frequency?",
        options: ["Newton", "Pascal", "Hertz", "Joule"],
        correctAnswer: 2,
      },
      {
        question: "What is the Doppler Effect?",
        options: ["Change in wave speed as it passes through different mediums", "Change in frequency due to relative motion between source and observer", "Reflection of sound waves from surfaces", "Amplification of a wave's frequency"],
        correctAnswer: 1,
      },
      {
        question: "What is the unit of force?",
        options: ["Newton", "Joule", "Pascal", "Watt"],
        answer: "Newton"
    },
    {
        question: "What is the speed of light in a vacuum?",
        options: ["300,000 km/s", "150,000 km/s", "299,792 km/s", "100,000 km/s"],
        answer: "299,792 km/s"
    },
    {
        question: "Who is known as the father of modern physics?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Niels Bohr"],
        answer: "Albert Einstein"
    },
    {
        question: "What is the formula for kinetic energy?",
        options: ["1/2 mv²", "mgh", "F = ma", "P = IV"],
        answer: "1/2 mv²"
    },
    {
        question: "Which law states that every action has an equal and opposite reaction?",
        options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Conservation of Energy"],
        answer: "Newton's Third Law"
    },
    {
        question: "What is the gravitational acceleration on Earth?",
        options: ["9.8 m/s²", "8.9 m/s²", "10.5 m/s²", "7.8 m/s²"],
        answer: "9.8 m/s²"
    },
    {
        question: "Which particle has no electric charge?",
        options: ["Proton", "Electron", "Neutron", "Photon"],
        answer: "Neutron"
    },
    {
        question: "What is the SI unit of electric current?",
        options: ["Volt", "Ampere", "Ohm", "Watt"],
        answer: "Ampere"
    },
    {
        question: "What is the principle of buoyancy?",
        options: ["Archimedes' Principle", "Pascal's Principle", "Bernoulli's Principle", "Faraday's Law"],
        answer: "Archimedes' Principle"
    },
    {
        question: "What is the wavelength of red light?",
        options: ["620-750 nm", "400-500 nm", "500-600 nm", "300-400 nm"],
        answer: "620-750 nm"
    },
    {
        question: "What is the smallest particle of an element?",
        options: ["Atom", "Molecule", "Electron", "Proton"],
        answer: "Atom"
    },
    {
        question: "What is the study of heat and its transformation into different forms of energy?",
        options: ["Thermodynamics", "Electromagnetism", "Quantum Mechanics", "Optics"],
        answer: "Thermodynamics"
    },
    {
        question: "What is the frequency of a wave measured in?",
        options: ["Hertz", "Watt", "Volt", "Joule"],
        answer: "Hertz"
    },
    {
        question: "What is the formula for Ohm's law?",
        options: ["V = IR", "P = IV", "F = ma", "E = mc²"],
        answer: "V = IR"
    },
    {
        question: "Which scientist developed the theory of relativity?",
        options: ["Albert Einstein", "Isaac Newton", "James Clerk Maxwell", "Nikola Tesla"],
        answer: "Albert Einstein"
    },
    {
        question: "What is the acceleration due to gravity on the Moon?",
        options: ["1.62 m/s²", "9.8 m/s²", "3.7 m/s²", "4.9 m/s²"],
        answer: "1.62 m/s²"
    },
    {
        question: "What is the unit of power in the SI system?",
        options: ["Joule", "Watt", "Volt", "Ampere"],
        answer: "Watt"
    },
    {
        question: "What does the law of conservation of energy state?",
        options: ["Energy can be created", "Energy cannot be destroyed", "Energy can change forms", "Both B and C"],
        answer: "Both B and C"
    },
    {
        question: "What is the electromagnetic wave with the shortest wavelength?",
        options: ["Gamma Rays", "X-Rays", "Microwaves", "Radio Waves"],
        answer: "Gamma Rays"
    },
    {
  
        question: "What is the phenomenon of light bending around obstacles called?",
        options: ["Diffraction", "Reflection", "Refraction", "Absorption"],
        answer: "Diffraction"
    },
    {
        question: "What is the term for materials that allow electrical current to flow easily?",
        options: ["Conductors", "Insulators", "Resistors", "Semiconductors"],
        answer: "Conductors"
    },
    {
        question: "What is the unit of frequency?",
        options: ["Hertz", "Decibel", "Tesla", "Volt"],
        answer: "Hertz"
    },
    {
        question: "What is the resistance of a material dependent on?",
        options: ["Length and Area", "Density", "Magnetism", "Gravitational Pull"],
        answer: "Length and Area"
    },
    {
        question: "What is the term for the rate of doing work?",
        options: ["Power", "Force", "Energy", "Momentum"],
        answer: "Power"
    },
    {
        question: "Which instrument measures atmospheric pressure?",
        options: ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
        answer: "Barometer"
    },
    {
        question: "What is the formula for calculating pressure?",
        options: ["Force/Area", "Area × Force", "Mass × Velocity", "Work × Time"],
        answer: "Force/Area"
    },
    {
        question: "Which branch of physics deals with the motion of objects?",
        options: ["Mechanics", "Optics", "Thermodynamics", "Electronics"],
        answer: "Mechanics"
    },
  {
    category: "Chemistry",
    questions: [
        {
            question: "What is the atomic number of hydrogen?",
            options: ["1", "2", "8", "10"],
            answer: "1"
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Au", "Ag", "Gd", "Go"],
            answer: "Au"
        },
        {
            question: "What is the pH value of pure water?",
            options: ["7", "0", "1", "14"],
            answer: "7"
        },
        {
            question: "Which gas is known as laughing gas?",
            options: ["Nitrous Oxide", "Carbon Dioxide", "Methane", "Helium"],
            answer: "Nitrous Oxide"
        },
        {
            question: "What is the most abundant gas in Earth's atmosphere?",
            options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Argon"],
            answer: "Nitrogen"
        },
        {
            question: "What is the chemical formula for table salt?",
            options: ["NaCl", "KCl", "Na2SO4", "CaCO3"],
            answer: "NaCl"
        },
        {
            question: "What is the process of a solid changing directly into a gas called?",
            options: ["Sublimation", "Condensation", "Evaporation", "Deposition"],
            answer: "Sublimation"
        },
        {
            question: "What is the molecular formula of glucose?",
            options: ["C6H12O6", "C2H4O2", "CH4", "C3H8O3"],
            answer: "C6H12O6"
        },
        {
            question: "What is the study of carbon compounds called?",
            options: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry", "Biochemistry"],
            answer: "Organic Chemistry"
        },
        {
            question: "What is the common name for H2O2?",
            options: ["Hydrogen Peroxide", "Water", "Heavy Water", "Ozone"],
            answer: "Hydrogen Peroxide"
        },
        {
            question: "What is the chemical symbol for silver?",
            options: ["Ag", "Au", "Si", "Se"],
            answer: "Ag"
        },
        {
            question: "Which acid is found in lemon juice?",
            options: ["Citric Acid", "Acetic Acid", "Lactic Acid", "Formic Acid"],
            answer: "Citric Acid"
        },
        {
            question: "What is the main component of natural gas?",
            options: ["Methane", "Ethane", "Propane", "Butane"],
            answer: "Methane"
        },
        {
            question: "What type of bond is formed when electrons are shared?",
            options: ["Covalent Bond", "Ionic Bond", "Metallic Bond", "Hydrogen Bond"],
            answer: "Covalent Bond"
        },
        {
            question: "What is Avogadro's number?",
            options: ["6.022 × 10²³", "1.602 × 10⁻¹⁹", "9.109 × 10⁻³¹", "2.998 × 10⁸"],
            answer: "6.022 × 10²³"
        },
        {
            question: "What is the term for a substance that speeds up a chemical reaction?",
            options: ["Catalyst", "Reactant", "Product", "Solvent"],
            answer: "Catalyst"
        },
            question: "What is the name of the process by which plants make food?",
            options: ["Photosynthesis", "Respiration", "Fermentation", "Glycolysis"],
            answer: "Photosynthesis"
        },
    ]
},
  {
    category: "mathematics",
    questions: [
      {
        question: "What is the square root of 144?",
        options: ["10", "11", "12", "13"],
        correctAnswer: 2,
      },
      {
        question: "What is 15 × 13?",
        options: ["180", "185", "195", "200"],
        correctAnswer: 2,
      },
      {
        question: "What is the value of 8³?",
        options: ["512", "216", "256", "128"],
        correctAnswer: 0,
      },
      {
        question: "What is 48 ÷ 6?",
        options: ["7", "8", "9", "10"],
        correctAnswer: 1,
      },
      {
        question: "What is the value of 3 + 5 × 4?",
        options: ["20", "22", "24", "23"],
        correctAnswer: 3,
      },
      {
        question: "What is the sum of the angles in a triangle?",
        options: ["180°", "360°", "90°", "270°"],
        correctAnswer: 0,
      },
      {
        question: "What is the perimeter of a square with a side length of 4 cm?",
        options: ["12 cm", "16 cm", "20 cm", "24 cm"],
        correctAnswer: 1,
      },
      {
        question: "What is 11²?",
        options: ["121", "131", "141", "111"],
        correctAnswer: 3,
      },
      {
        question: "What is 9 × 12?",
        options: ["105", "110", "108", "120"],
        correctAnswer: 2,
      },
      {
        question: "What is the value of 16 ÷ 4?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 2,
      },
      {
        question: "What is 25% of 200?",
        options: ["30", "40", "50", "60"],
        correctAnswer: 2,
      },
      {
        question: "What is the area of a rectangle with length 5 cm and width 8 cm?",
        options: ["40 cm²", "50 cm²", "55 cm²", "60 cm²"],
        correctAnswer: 0,
      },
      {
        question: "What is the value of 10 ÷ 2 + 3?",
        options: ["8", "7", "9", "6"],
        correctAnswer: 1,
      },
      {
        question: "What is 3 × 7 + 2?",
        options: ["20", "21", "22", "23"],
        correctAnswer: 1,
      },
      {
        question: "What is the greatest common divisor (GCD) of 24 and 36?",
        options: ["4", "6", "8", "12"],
        correctAnswer: 3,
      },
      {
        question: "What is the least common multiple (LCM) of 6 and 8?",
        options: ["24", "32", "48", "56"],
        correctAnswer: 0,
      },
      {
        question: "What is the value of 2³ × 3?",
        options: ["12", "15", "18", "24"],
        correctAnswer: 0,
      },
      {
        question: "What is the value of 10 × (5 + 3)?",
        options: ["80", "70", "60", "50"],
        correctAnswer: 1,
      },
      {
        question: "What is the value of 14 × 14?",
        options: ["186", "196", "206", "216"],
        correctAnswer: 1,
      },
      {
        question: "What is the sum of the first 10 positive integers?",
        options: ["50", "55", "60", "65"],
        correctAnswer: 1,
      },
      {
        question: "What is 12 × 15?",
        options: ["150", "160", "170", "180"],
        correctAnswer: 3,
      },
      {
        question: "What is the area of a circle with a radius of 3 cm? (Use π = 3.14)",
        options: ["28.6 cm²", "31.42 cm²", "36.14 cm²", "39.14 cm²"],
        correctAnswer: 0,
      },
      {
        question: "What is the value of (8 + 2) × 3?",
        options: ["30", "32", "34", "28"],
        correctAnswer: 3,
      },
      {
        question: "What is the value of 50% of 80?",
        options: ["30", "35", "40", "45"],
        correctAnswer: 2,
      },
      {
        question: "What is the value of 25 ÷ 5 × 3?",
        options: ["12", "15", "18", "20"],
        correctAnswer: 1,
      },
    ],
  },
  {
    category: "islamic studies",
    questions: [
      {
        question: "Who won the Academy Award for Best Actor in 2022?",
        options: ["Leonardo DiCaprio", "Will Smith", "Joaquin Phoenix", "Matthew McConaughey"],
        correctAnswer: 1,
      },
      {
        question: "Which movie won the Academy Award for Best Picture in 2021?",
        options: ["Parasite", "1917", "The Shape of Water", "Nomadland"],
        correctAnswer: 3,
      },
      {
        question: "Who played the character of Jack Dawson in the movie Titanic?",
        options: ["Leonardo DiCaprio", "Brad Pitt", "Johnny Depp", "Tom Hanks"],
        correctAnswer: 0,
      },
      {
        question: "Which TV show featured the characters Daenerys Targaryen and Jon Snow?",
        options: ["Breaking Bad", "Game of Thrones", "The Witcher", "Vikings"],
        correctAnswer: 1,
      },
      {
        question: "Who is known as the 'King of Pop'?",
        options: ["Michael Jackson", "Prince", "Whitney Houston", "Elvis Presley"],
        correctAnswer: 0,
      },
      {
        question: "Which superhero is known for saying, 'I am Iron Man'?",
        options: ["Black Panther", "Captain America", "Thor", "Iron Man"],
        correctAnswer: 3,
      },
      {
        question: "Which movie franchise includes a character named Luke Skywalker?",
        options: ["Guardians of the Galaxy", "Star Wars", "The Matrix", "Star Trek"],
        correctAnswer: 1,
      },
      {
        question: "Who played the character of Hermione Granger in the Harry Potter film series?",
        options: ["Emma Watson", "Anne Hathaway", "Maggie Smith", "Natalie Portman"],
        correctAnswer: 0,
      },
      {
        question: "Who directed the movie 'Inception'?",
        options: ["James Cameron", "Steven Spielberg", "Christopher Nolan", "Martin Scorsese"],
        correctAnswer: 2,
      },
      {
        question: "Which artist released the album 'Lover' in 2019?",
        options: ["Billie Eilish", "Taylor Swift", "Ed Sheeran", "Ariana Grande"],
        correctAnswer: 1,
      },
      {
        question: "What was the first video game to feature Mario?",
        options: ["Mario Kart", "Super Mario Bros.", "Donkey Kong", "The Legend of Zelda"],
        correctAnswer: 2,
      },
      {
        question: "Which movie features the famous line, 'Here's looking at you, kid'?",
        options: ["Casablanca", "Citizen Kane", "The Godfather", "Gone with the Wind"],
        correctAnswer: 0,
      },
      {
        question: "Which country won the FIFA World Cup in 2018?",
        options: ["France", "Germany", "Argentina", "Brazil"],
        correctAnswer: 0,
      },
      {
        question: "Who created the comic book character Spider-Man?",
        options: ["Jack Kirby", "Stan Lee", "Steve Ditko", "John Romita"],
        correctAnswer: 1,
      },
      {
        question: "In which movie did Heath Ledger portray the Joker?",
        options: ["The Dark Knight", "Batman Begins", "The Dark Knight Rises", "Joker"],
        correctAnswer: 0,
      },
      {
        question: "Which band is known for the hit song 'Bohemian Rhapsody'?",
        options: ["The Rolling Stones", "Led Zeppelin", "Queen", "The Beatles"],
        correctAnswer: 2,
      },
      {
        question: "Which actress starred as Katniss Everdeen in 'The Hunger Games'?",
        options: ["Kristen Stewart", "Shailene Woodley", "Jennifer Lawrence", "Emma Stone"],
        correctAnswer: 2,
      },
      {
        question: "Who played the role of the Joker in the 2019 movie 'Joker'?",
        options: ["Heath Ledger", "Johnny Depp", "Joaquin Phoenix", "Jared Leto"],
        correctAnswer: 2,
      },
      {
        question: "Which Disney animated film features the song 'A Whole New World'?",
        options: ["Cinderella", "Aladdin", "Beauty and the Beast", "The Little Mermaid"],
        correctAnswer: 1,
      },
      {
        question: "Which TV series features the characters of Walter White and Jesse Pinkman?",
        options: ["Narcos", "Better Call Saul", "The Sopranos", "Breaking Bad"],
        correctAnswer: 3,
      },
      {
        question: "Who sang the hit song 'Shape of You'?",
        options: ["Justin Bieber", "Ariana Grande", "Sam Smith", "Ed Sheeran"],
        correctAnswer: 3,
      },
      {
        question: "Which film won the Academy Award for Best Picture in 2020?",
        options: ["The Irishman", "Once Upon a Time in Hollywood", "Parasite", "1917"],
        correctAnswer: 2,
      },
      {
        question: "What year did the movie 'The Matrix' release?",
        options: ["1997", "1998", "2000", "1999"],
        correctAnswer: 3,
      },
      {
        question: "Which actor played Tony Stark/Iron Man in the Marvel Cinematic Universe?",
        options: ["Mark Ruffalo", "Chris Evans", "Robert Downey Jr.", "Chris Hemsworth"],
        correctAnswer: 2,
      },
      {
        question: "Which singer is known as the 'Queen of Pop'?",
        options: ["Mariah Carey", "Lady Gaga", "Whitney Houston", "Madonna"],
        correctAnswer: 3,
      },
    ],
  },
],