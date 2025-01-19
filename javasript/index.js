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
        options: ["F=ma","F=m/v","F=mv²","F=mgh"],
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
        options: ["10m/s²", "8.9m/s²", "9.8m/s²", "7.8m/s²"],
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
        options: ["Q=mc²", "Q=mgh", "Q=mcΔT", "Q=F×d"],
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
        options: ["v=fλ", "v=mgh", "v=ma", "v=1/2 mv²"],
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
        question: "What is the speed of light in a vacuum?",
        options: ["300,000 km/s", "150,000 km/s", "299,792 km/s", "100,000 km/s"],
        correctAnswer: 2,
      },
      {
        question: "Who is known as the father of modern physics?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Niels Bohr"],
        correctAnswer: 0,
      },
      {
        question: "What is the formula for kinetic energy?",
        options: ["1/2 mv²", "mgh", "F = ma", "P = IV"],
        correctAnswer: 0,
      },
      {
        question: "Which law states that every action has an equal and opposite reaction?",
        options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Conservation of Energy"],
        correctAnswer: 2,
      },
      {
        question: "What is the gravitational acceleration on Earth?",
        options: ["9.8 m/s²", "8.9 m/s²", "10.5 m/s²", "7.8 m/s²"],
        correctAnswer: 0,
      },
      {
        question: "Which particle has no electric charge?",
        options: ["Proton", "Electron", "Neutron", "Photon"],
        correctAnswer: 2,
      },
      {
        question: "What is the SI unit of electric current?",
        options: ["Volt", "Ampere", "Ohm", "Watt"],
        correctAnswer: 1,
      },
      {
        question: "What is the principle of buoyancy?",
        options: ["Archimedes' Principle", "Pascal's Principle", "Bernoulli's Principle", "Faraday's Law"],
        correctAnswer: 0,
      },
      {
        question: "What is the wavelength of red light?",
        options: ["620-750 nm", "400-500 nm", "500-600 nm", "300-400 nm"],
        correctAnswer: 0,
      },
      {
        question: "What is the smallest particle of an element?",
        options: ["Atom", "Molecule", "Electron", "Proton"],
        correctAnswer: 0,
      },
      {
        question: "What is the study of heat and its transformation into different forms of energy?",
        options: ["Thermodynamics", "Electromagnetism", "Quantum Mechanics", "Optics"],
        correctAnswer: 0,
      },
      {
        question: "What is the frequency of a wave measured in?",
        options: ["Hertz", "Watt", "Volt", "Joule"],
        correctAnswer: 0,
      },
      {
        question: "What is the formula for Ohm's law?",
        options: ["V = IR", "P = IV", "F = ma", "E = mc²"],
        correctAnswer: 0,
      },
      {
        question: "Which scientist developed the theory of relativity?",
        options: ["Albert Einstein", "Isaac Newton", "James Clerk Maxwell", "Nikola Tesla"],
        correctAnswer: 0,
      },
      {
        question: "What is the acceleration due to gravity on the Moon?",
        options: ["1.62 m/s²", "9.8 m/s²", "3.7 m/s²", "4.9 m/s²"],
        correctAnswer: 0,
      },
      {
        question: "What is the unit of power in the SI system?",
        options: ["Joule", "Watt", "Volt", "Ampere"],
        correctAnswer: 1,
      },
      {
        question: "What does the law of conservation of energy state?",
        options: ["Energy can be created", "Energy cannot be destroyed", "Energy can change forms", "Both B and C"],
        correctAnswer: 3,
      },
      {
        question: "What is the electromagnetic wave with the shortest wavelength?",
        options: ["Gamma Rays", "X-Rays", "Microwaves", "Radio Waves"],
        correctAnswer: 0,
      },
      {
        question: "What is the phenomenon of light bending around obstacles called?",
        options: ["Diffraction", "Reflection", "Refraction", "Absorption"],
        correctAnswer: 0,
      },
      {
        question: "What is the term for materials that allow electrical current to flow easily?",
        options: ["Conductors", "Insulators", "Resistors", "Semiconductors"],
        correctAnswer: 0,
      },
      {
        question: "What is the unit of frequency?",
        options: ["Hertz", "Decibel", "Tesla", "Volt"],
        correctAnswer: 0,
      },
      {
        question: "What is the resistance of a material dependent on?",
        options: ["Length and Area", "Density", "Magnetism", "Gravitational Pull"],
        correctAnswer: 0,
      },
      {
        question: "What is the term for the rate of doing work?",
        options: ["Power", "Force", "Energy", "Momentum"],
        correctAnswer: 0,
      },
      {
        question: "Which instrument measures atmospheric pressure?",
        options: ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
        correctAnswer: 0,
      },
      {
        question: "What is the formula for calculating pressure?",
        options: ["Force/Area", "Area × Force", "Mass × Velocity", "Work × Time"],
        correctAnswer: 0,
      },
      {
        question: "Which branch of physics deals with the motion of objects?",
        options: ["Mechanics", "Optics", "Thermodynamics", "Electronics"],
        correctAnswer: 0,
      }
    ]
  },
  {
    category: "Chemistry",
    questions: [
      {
        question: "What is the atomic number of hydrogen?",
        options: ["1", "2", "8", "10"],
        correctAnswer: 0
      },
      {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Gd", "Go"],
        correctAnswer: 0
      },
      {
        question: "What is the most abundant gas in Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
        correctAnswer: 1
      },
      {
        question: "What is the chemical formula for water?",
        options: ["H2O", "O2", "CO2", "NaCl"],
        correctAnswer: 0
      },
      {
        question: "What is the pH of a neutral solution?",
        options: ["7", "0", "14", "3"],
        correctAnswer: 0
      },
      {
        question: "Which element has the atomic number 6?",
        options: ["Carbon", "Silicon", "Iron", "Magnesium"],
        correctAnswer: 0
      },
      {
        question: "What type of bond is formed between two hydrogen atoms?",
        options: ["Ionic Bond", "Covalent Bond", "Metallic Bond", "Hydrogen Bond"],
        correctAnswer: 1
      },
      {
        question: "What is the chemical symbol for the element silver?",
        options: ["Ag", "Sl", "Si", "Sv"],
        correctAnswer: 0
      },
      {
        question: "What is the most reactive metal?",
        options: ["Sodium", "Potassium", "Lithium", "Calcium"],
        correctAnswer: 1
      },
      {
        question: "Which gas is commonly used in balloons for lifting?",
        options: ["Helium", "Hydrogen", "Oxygen", "Nitrogen"],
        correctAnswer: 0
      }
    ]
  },
  {
    category: "Mathematics",
    questions: [
      {
        question: "What is the square root of 64?",
        options: ["6", "7", "8", "9"],
        correctAnswer: 2
      },
      {
        question: "What is the formula for the area of a circle?",
        options: ["πr²", "2πr", "πd", "2r²"],
        correctAnswer: 0
      },
      {
        question: "What is the value of π (pi) to two decimal places?",
        options: ["3.14", "3.12", "3.16", "3.18"],
        correctAnswer: 0
      },
      {
        question: "What is the value of i²?",
        options: ["-1", "1", "0", "-i"],
        correctAnswer: 0
      },
      {
        question: "What is the sum of the angles in a triangle?",
        options: ["180 degrees", "360 degrees", "90 degrees", "270 degrees"],
        correctAnswer: 0
      },
      {
        question: "What is the greatest common divisor (GCD) of 48 and 60?",
        options: ["12", "24", "36", "48"],
        correctAnswer: 0
      },
      {
        question: "What is the perimeter of a rectangle with length 8 and width 5?",
        options: ["24", "32", "40", "16"],
        correctAnswer: 0
      },
      {
        question: "What is the formula for the slope of a line?",
        options: ["(y2 - y1) / (x2 - x1)", "y = mx + b", "x = y + b", "m = y/x"],
        correctAnswer: 0
      },
      {
        question: "What is the derivative of x²?",
        options: ["2x", "x²", "1", "2"],
        correctAnswer: 0
      },
      {
        question: "What is the formula for the area of a rectangle?",
        options: ["Length × Width", "2(Length + Width)", "πr²", "a² + b²"],
        correctAnswer: 0
      }
    ]
  },
  {
    category: "Islamic Studies",
    questions: [
        {
            question: "What is the first pillar of Islam?",
            options: ["Shahada", "Salat", "Zakat", "Sawm"],
            correctAnswer: 0
        },
        {
            question: "How many Surahs are there in the Quran?",
            options: ["114", "124", "100", "99"],
           correctAnswer: 0
        },
        {
            question: "Who was the last prophet in Islam?",
            options: ["Prophet Muhammad (SAW)", "Prophet Isa (AS)", "Prophet Musa (AS)", "Prophet Ibrahim (AS)"],
           correctAnswer: 0
        },
        {
            question: "What is the Arabic term for the pilgrimage to Mecca?",
            options: ["Hajj", "Umrah", "Zakat", "Salat"],
            correctAnswer: 0
        },
        {
            question: "What is the meaning of the word 'Islam'?",
            options: ["Submission", "Peace", "Faith", "Unity"],
            correctAnswer: 0
        },
        {
            question: "How many Rak'ahs are there in the Fajr prayer?",
            options: ["3", "4", "2", "5"],
            correctAnswer: 2
        },
        {
            question: "What is the holy month of fasting in Islam?",
            options: ["Dhul-Hijjah", "Muharram", "Rabi' al-Awwal", "Ramadan"],
            correctAnswer: 3
        },
        {
            category: "Islamic Studies",
            question: "What is the name of the holy book of Islam?",
            options: ["Torah", "Quran", "Bible", "Vedas"],
            correctAnswer: 1
        },
        {
            question: "What is the name of the Angel who brought revelation to Prophet Muhammad (SAW)?",
            options: ["Angel Jibril", "Angel Mikail", "Angel Israfil", "Angel Azrael"],
            correctAnswer: 0
        },
        {
            question: "What is the second pillar of Islam?",
            options: ["Salat", "Zakat", "Sawm", "Hajj"],
            correctAnswer: 0
        },
        {
            question: "What is the term for the moral code and religious law of Islam?",
            options: ["Sharia", "Sunnah", "Fiqh", "Hadith"],
            correctAnswer: 0
        },
        {
            question: "What is the term for charity given to the poor in Islam?",
            options: ["Zakat", "Sadaqah", "Hajj", "Shahada"],
            correctAnswer: 0
        },
        {
            question: "What is the name of the place where Muslims pray?",
            options: ["Mosque", "Temple", "Church", "Synagogue"],
            correctAnswer: 0
        },
        {
            question: "What is the night when the Quran was first revealed called?",
            options: ["Laylat al-Qadr", "Isra and Miraj", "Laylat al-Bara'ah", "Laylat al-Mi'raj"],
            correctAnswer: 0
        },
        {
            question: "What is the name of the first man created by Allah?",
            options: ["Adam (AS)", "Nuh (AS)", "Ibrahim (AS)", "Musa (AS)"],
            correctAnswer: 0
        },
        {
            question: "What is the name of the Prophet's migration from Mecca to Medina?",
            options: ["Hijrah", "Isra", "Miraj", "Tawaf"],
         correctAnswer: 0
        },
        {
            question: "How many daily prayers are obligatory in Islam?",
            options: ["5", "3", "7", "2"],
            correctAnswer: 0
        },
        {
            question: "What is the name of the well located near the Kaaba in Mecca?",
            options: ["Zamzam", "Badr", "Hira", "Safaa"],
            correctAnswer: 0
        },
        {
            question: "What is the title given to the leader of a Muslim community?",
            options: ["Caliph", "Imam", "Sheikh", "Mullah"],
            correctAnswer: 0
        },
        {
            question: "What is the Arabic term for prohibited actions in Islam?",
            options: ["Haram", "Halal", "Makruh", "Mustahabb"],
            correctAnswer: 0
        },
        {
            question: "What is the name of Prophet Muhammad's (SAW) first wife?",
            options: ["Khadijah (RA)", "Aisha (RA)", "Fatimah (RA)", "Hafsa (RA)"],
            correctAnswer: 0
        },
        {
            question: "What does the term 'Ummah' refer to?",
            options: ["Muslim Community", "Mosque", "Fasting", "Pilgrimage"],
            correctAnswer: 0
        },
        {
            question: "Which Surah is known as the 'Mother of the Book'?",
            options: ["Al-Fatihah", "Al-Baqarah", "Al-Ikhlas", "Al-Kahf"],
            correctAnswer: 0
        },
        {
            question: "Which city is considered the holiest in Islam?",
            options: ["Mecca", "Medina", "Jerusalem", "Baghdad"],
            correctAnswer: 0
        },
        {
            question: "What is the term for Islamic law derived from the Quran and Sunnah?",
            options: ["Fiqh", "Sharia", "Hadith", "Ijma"],
            correctAnswer: 1
        },
        {
            question: "Which month in the Islamic calendar is known for fasting?",
            options: ["Ramadan", "Shawwal", "Rajab", "Muharram"],
            correctAnswer: 0
        }
    ],
    
  }];
