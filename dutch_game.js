// قاعدة بيانات الكلمات الهولندية
const dutchLevelsDB = {
    1: [ // المستوى الأول - التحية والمجاملات
        { dutch: "Hallo", arabic: "مرحباً" },
        { dutch: "Dag", arabic: "مع السلامة" },
        { dutch: "Dank je", arabic: "شكراً" },
        { dutch: "Alsjeblieft", arabic: "من فضلك" }
    ],
    2: [ // المستوى الثاني - الأرقام
        { dutch: "Een", arabic: "واحد" },
        { dutch: "Twee", arabic: "اثنان" },
        { dutch: "Drie", arabic: "ثلاثة" },
        { dutch: "Vier", arabic: "أربعة" },
        { dutch: "Vijf", arabic: "خمسة" }
    ],
    3: [ // المستوى الثالث - الألوان
        { dutch: "Rood", arabic: "أحمر" },
        { dutch: "Blauw", arabic: "أزرق" },
        { dutch: "Groen", arabic: "أخضر" },
        { dutch: "Geel", arabic: "أصفر" },
        { dutch: "Zwart", arabic: "أسود" },
        { dutch: "Wit", arabic: "أبيض" }
    ],
    4: [ // المستوى الرابع - العائلة
        { dutch: "Vader", arabic: "أب" },
        { dutch: "Moeder", arabic: "أم" },
        { dutch: "Broer", arabic: "أخ" },
        { dutch: "Zus", arabic: "أخت" },
        { dutch: "Kind", arabic: "طفل" },
        { dutch: "Familie", arabic: "عائلة" }
    ],
    5: [ // المستوى الخامس - الطعام
        { dutch: "Brood", arabic: "خبز" },
        { dutch: "Melk", arabic: "حليب" },
        { dutch: "Water", arabic: "ماء" },
        { dutch: "Koffie", arabic: "قهوة" },
        { dutch: "Thee", arabic: "شاي" },
        { dutch: "Fruit", arabic: "فاكهة" },
        { dutch: "Groente", arabic: "خضار" }
    ],
    6: [ // المستوى السادس - أيام الأسبوع
        { dutch: "Maandag", arabic: "الإثنين" },
        { dutch: "Dinsdag", arabic: "الثلاثاء" },
        { dutch: "Woensdag", arabic: "الأربعاء" },
        { dutch: "Donderdag", arabic: "الخميس" },
        { dutch: "Vrijdag", arabic: "الجمعة" },
        { dutch: "Zaterdag", arabic: "السبت" },
        { dutch: "Zondag", arabic: "الأحد" }
    ],
    7: [ // المستوى السابع - الأماكن
        { dutch: "Huis", arabic: "منزل" },
        { dutch: "School", arabic: "مدرسة" },
        { dutch: "Winkel", arabic: "متجر" },
        { dutch: "Bank", arabic: "بنك" },
        { dutch: "Restaurant", arabic: "مطعم" },
        { dutch: "Ziekenhuis", arabic: "مستشفى" },
        { dutch: "Bibliotheek", arabic: "مكتبة" }
    ],
    8: [ // المستوى الثامن - الوقت
        { dutch: "Vandaag", arabic: "اليوم" },
        { dutch: "Morgen", arabic: "غداً" },
        { dutch: "Gisteren", arabic: "أمس" },
        { dutch: "Ochtend", arabic: "صباح" },
        { dutch: "Middag", arabic: "ظهر" },
        { dutch: "Avond", arabic: "مساء" },
        { dutch: "Nacht", arabic: "ليل" },
        { dutch: "Week", arabic: "أسبوع" }
    ],
    9: [ // المستوى التاسع - الصفات
        { dutch: "Groot", arabic: "كبير" },
        { dutch: "Klein", arabic: "صغير" },
        { dutch: "Mooi", arabic: "جميل" },
        { dutch: "Lelijk", arabic: "قبيح" },
        { dutch: "Warm", arabic: "دافئ" },
        { dutch: "Koud", arabic: "بارد" },
        { dutch: "Snel", arabic: "سريع" },
        { dutch: "Langzaam", arabic: "بطيء" }
    ],
    10: [ // المستوى العاشر - الأفعال الشائعة
        { dutch: "Zijn", arabic: "يكون" },
        { dutch: "Hebben", arabic: "يملك" },
        { dutch: "Gaan", arabic: "يذهب" },
        { dutch: "Komen", arabic: "يأتي" },
        { dutch: "Eten", arabic: "يأكل" },
        { dutch: "Drinken", arabic: "يشرب" },
        { dutch: "Slapen", arabic: "ينام" },
        { dutch: "Werken", arabic: "يعمل" }
    ],
    11: [ // المستوى 11 - وسائل النقل
        { dutch: "Auto", arabic: "سيارة" },
        { dutch: "Fiets", arabic: "دراجة" },
        { dutch: "Bus", arabic: "حافلة" },
        { dutch: "Trein", arabic: "قطار" },
        { dutch: "Vliegtuig", arabic: "طائرة" },
        { dutch: "Boot", arabic: "قارب" },
        { dutch: "Metro", arabic: "مترو" },
        { dutch: "Tram", arabic: "ترام" }
    ],
    12: [ // المستوى 12 - التسوق
        { dutch: "Winkel", arabic: "متجر" },
        { dutch: "Kopen", arabic: "يشتري" },
        { dutch: "Verkopen", arabic: "يبيع" },
        { dutch: "Betalen", arabic: "يدفع" },
        { dutch: "Geld", arabic: "نقود" },
        { dutch: "Korting", arabic: "خصم" },
        { dutch: "Prijs", arabic: "سعر" },
        { dutch: "Markt", arabic: "سوق" }
    ],
    13: [ // المستوى 13 - الطقس
        { dutch: "Weer", arabic: "طقس" },
        { dutch: "Regen", arabic: "مطر" },
        { dutch: "Zon", arabic: "شمس" },
        { dutch: "Wind", arabic: "رياح" },
        { dutch: "Sneeuw", arabic: "ثلج" },
        { dutch: "Wolk", arabic: "سحابة" },
        { dutch: "Warm", arabic: "دافئ" },
        { dutch: "Koud", arabic: "بارد" }
    ],
    14: [ // المستوى 14 - الإتجاهات
        { dutch: "Links", arabic: "يسار" },
        { dutch: "Rechts", arabic: "يمين" },
        { dutch: "Boven", arabic: "فوق" },
        { dutch: "Onder", arabic: "تحت" },
        { dutch: "Voor", arabic: "أمام" },
        { dutch: "Achter", arabic: "خلف" },
        { dutch: "Naast", arabic: "بجانب" },
        { dutch: "Tussen", arabic: "بين" }
    ],
    15: [ // المستوى 15 - المهن
        { dutch: "Dokter", arabic: "طبيب" },
        { dutch: "Leraar", arabic: "مدرس" },
        { dutch: "Politie", arabic: "شرطي" },
        { dutch: "Kok", arabic: "طباخ" },
        { dutch: "Advocaat", arabic: "محامي" },
        { dutch: "Ingenieur", arabic: "مهندس" },
        { dutch: "Verpleger", arabic: "ممرض" },
        { dutch: "Bakker", arabic: "خباز" }
    ],
    16: [ // المستوى 16 - جسم الإنسان
        { dutch: "Hoofd", arabic: "رأس" },
        { dutch: "Hand", arabic: "يد" },
        { dutch: "Voet", arabic: "قدم" },
        { dutch: "Oog", arabic: "عين" },
        { dutch: "Oor", arabic: "أذن" },
        { dutch: "Neus", arabic: "أنف" },
        { dutch: "Mond", arabic: "فم" },
        { dutch: "Hart", arabic: "قلب" }
    ],
    17: [ // المستوى 17 - الحيوانات
        { dutch: "Hond", arabic: "كلب" },
        { dutch: "Kat", arabic: "قطة" },
        { dutch: "Paard", arabic: "حصان" },
        { dutch: "Koe", arabic: "بقرة" },
        { dutch: "Schaap", arabic: "خروف" },
        { dutch: "Vogel", arabic: "طائر" },
        { dutch: "Vis", arabic: "سمكة" },
        { dutch: "Konijn", arabic: "أرنب" }
    ],
    18: [ // المستوى 18 - الرياضة
        { dutch: "Voetbal", arabic: "كرة القدم" },
        { dutch: "Zwemmen", arabic: "سباحة" },
        { dutch: "Tennis", arabic: "تنس" },
        { dutch: "Hardlopen", arabic: "جري" },
        { dutch: "Fietsen", arabic: "ركوب الدراجة" },
        { dutch: "Basketbal", arabic: "كرة السلة" },
        { dutch: "Yoga", arabic: "يوغا" },
        { dutch: "Sport", arabic: "رياضة" }
    ],
    19: [ // المستوى 19 - الملابس
        { dutch: "Broek", arabic: "بنطلون" },
        { dutch: "Shirt", arabic: "قميص" },
        { dutch: "Jas", arabic: "معطف" },
        { dutch: "Schoenen", arabic: "أحذية" },
        { dutch: "Sok", arabic: "جورب" },
        { dutch: "Jurk", arabic: "فستان" },
        { dutch: "Hoed", arabic: "قبعة" },
        { dutch: "Riem", arabic: "حزام" }
    ],
    20: [ // المستوى 20 - التكنولوجيا
        { dutch: "Computer", arabic: "حاسوب" },
        { dutch: "Telefoon", arabic: "هاتف" },
        { dutch: "Internet", arabic: "إنترنت" },
        { dutch: "Website", arabic: "موقع إلكتروني" },
        { dutch: "Scherm", arabic: "شاشة" },
        { dutch: "Toetsenbord", arabic: "لوحة مفاتيح" },
        { dutch: "Muis", arabic: "فأرة" },
        { dutch: "Printer", arabic: "طابعة" }
    ],
    21: [ // المستوى 21 - البيئة
        { dutch: "Natuur", arabic: "طبيعة" },
        { dutch: "Boom", arabic: "شجرة" },
        { dutch: "Berg", arabic: "جبل" },
        { dutch: "Rivier", arabic: "نهر" },
        { dutch: "Zee", arabic: "بحر" },
        { dutch: "Lucht", arabic: "سماء" },
        { dutch: "Bos", arabic: "غابة" },
        { dutch: "Strand", arabic: "شاطئ" }
    ],
    22: [ // المستوى 22 - الدراسة
        { dutch: "Studeren", arabic: "يدرس" },
        { dutch: "Boek", arabic: "كتاب" },
        { dutch: "Pen", arabic: "قلم" },
        { dutch: "Papier", arabic: "ورق" },
        { dutch: "Examen", arabic: "امتحان" },
        { dutch: "Student", arabic: "طالب" },
        { dutch: "Universiteit", arabic: "جامعة" },
        { dutch: "Huiswerk", arabic: "واجب منزلي" }
    ],
    23: [ // المستوى 23 - الصحة
        { dutch: "Gezond", arabic: "صحي" },
        { dutch: "Ziek", arabic: "مريض" },
        { dutch: "Medicijn", arabic: "دواء" },
        { dutch: "Pijn", arabic: "ألم" },
        { dutch: "Apotheek", arabic: "صيدلية" },
        { dutch: "Ziekenhuis", arabic: "مستشفى" },
        { dutch: "Arts", arabic: "طبيب" },
        { dutch: "Recept", arabic: "وصفة طبية" }
    ],
    24: [ // المستوى 24 - الأدوات المنزلية
        { dutch: "Tafel", arabic: "طاولة" },
        { dutch: "Stoel", arabic: "كرسي" },
        { dutch: "Bed", arabic: "سرير" },
        { dutch: "Lamp", arabic: "مصباح" },
        { dutch: "Kast", arabic: "خزانة" },
        { dutch: "Deur", arabic: "باب" },
        { dutch: "Raam", arabic: "نافذة" },
        { dutch: "Spiegel", arabic: "مرآة" }
    ],
    25: [ // المستوى 25 - الهوايات
        { dutch: "Hobby", arabic: "هواية" },
        { dutch: "Lezen", arabic: "قراءة" },
        { dutch: "Muziek", arabic: "موسيقى" },
        { dutch: "Dansen", arabic: "رقص" },
        { dutch: "Tekenen", arabic: "رسم" },
        { dutch: "Schrijven", arabic: "كتابة" },
        { dutch: "Tuinieren", arabic: "بستنة" },
        { dutch: "Koken", arabic: "طبخ" }
    ],
    26: [ // المستوى 26 - العواطف
        { dutch: "Blij", arabic: "سعيد" },
        { dutch: "Verdrietig", arabic: "حزين" },
        { dutch: "Boos", arabic: "غاضب" },
        { dutch: "Bang", arabic: "خائف" },
        { dutch: "Liefde", arabic: "حب" },
        { dutch: "Haat", arabic: "كراهية" },
        { dutch: "Verrast", arabic: "متفاجئ" },
        { dutch: "Nerveus", arabic: "متوتر" }
    ],
    27: [ // المستوى 27 - أدوات المطبخ
        { dutch: "Bord", arabic: "طبق" },
        { dutch: "Mes", arabic: "سكين" },
        { dutch: "Vork", arabic: "شوكة" },
        { dutch: "Lepel", arabic: "ملعقة" },
        { dutch: "Pan", arabic: "مقلاة" },
        { dutch: "Glas", arabic: "كأس" },
        { dutch: "Kopje", arabic: "فنجان" },
        { dutch: "Koelkast", arabic: "ثلاجة" }
    ],
    28: [ // المستوى 28 - الإجازة والسفر
        { dutch: "Vakantie", arabic: "إجازة" },
        { dutch: "Reizen", arabic: "سفر" },
        { dutch: "Paspoort", arabic: "جواز سفر" },
        { dutch: "Hotel", arabic: "فندق" },
        { dutch: "Koffer", arabic: "حقيبة سفر" },
        { dutch: "Kaart", arabic: "خريطة" },
        { dutch: "Visum", arabic: "تأشيرة" },
        { dutch: "Toerist", arabic: "سائح" }
    ],
    29: [ // المستوى 29 - أفعال يومية
        { dutch: "Staan", arabic: "يقف" },
        { dutch: "Zitten", arabic: "يجلس" },
        { dutch: "Lopen", arabic: "يمشي" },
        { dutch: "Rennen", arabic: "يجري" },
        { dutch: "Praten", arabic: "يتحدث" },
        { dutch: "Luisteren", arabic: "يستمع" },
        { dutch: "Kijken", arabic: "ينظر" },
        { dutch: "Denken", arabic: "يفكر" }
    ],
    30: [ // المستوى 30 - المناسبات والاحتفالات
        { dutch: "Verjaardag", arabic: "عيد ميلاد" },
        { dutch: "Feest", arabic: "حفلة" },
        { dutch: "Huwelijk", arabic: "زواج" },
        { dutch: "Kerst", arabic: "عيد الميلاد" },
        { dutch: "Nieuwjaar", arabic: "السنة الجديدة" },
        { dutch: "Cadeau", arabic: "هدية" },
        { dutch: "Uitnodiging", arabic: "دعوة" },
        { dutch: "Felicitatie", arabic: "تهنئة" }
    ]
};

let dutchGameState = {
    flippedCards: [],
    matches: 0,
    moves: 0,
    currentLevel: parseInt(localStorage.getItem('dutchGameLevel')) || 1,
    lockBoard: false,
    maxLevel: Object.keys(dutchLevelsDB).length
};

function createDutchCard(word) {
    const card = document.createElement('div');
    card.className = 'dutch-card';
    
    const front = document.createElement('div');
    front.className = 'card-front';
    front.innerHTML = `${word.dutch}<br><small>${word.arabic}</small>`;
    
    const back = document.createElement('div');
    back.className = 'card-back';
    back.textContent = '?';
    
    card.appendChild(front);
    card.appendChild(back);
    
    card.addEventListener('click', () => flipDutchCard(card, word));
    return card;
}

function flipDutchCard(card, word) {
    if (dutchGameState.lockBoard) return;
    if (card.classList.contains('flipped')) return;
    if (dutchGameState.flippedCards.length === 2) return;

    card.classList.add('flipped');
    dutchGameState.flippedCards.push({ card, word });

    if (dutchGameState.flippedCards.length === 2) {
        dutchGameState.moves++;
        updateDutchStats();
        checkDutchMatch();
    }
}

function checkDutchMatch() {
    const [card1, card2] = dutchGameState.flippedCards;
    const match = card1.word.dutch === card2.word.dutch;

    if (match) {
        dutchGameState.matches++;
        card1.card.classList.add('matched');
        card2.card.classList.add('matched');
        dutchGameState.flippedCards = [];
        updateDutchStats();
        checkDutchWin();
    } else {
        dutchGameState.lockBoard = true;
        setTimeout(() => {
            card1.card.classList.remove('flipped');
            card2.card.classList.remove('flipped');
            dutchGameState.flippedCards = [];
            dutchGameState.lockBoard = false;
        }, 1000);
    }
}

function checkDutchWin() {
    const totalPairs = dutchLevelsDB[dutchGameState.currentLevel].length;
    if (dutchGameState.matches === totalPairs) {
        const nextLevel = dutchGameState.currentLevel + 1;
        const message = document.getElementById('dutch-message');
        
        if (nextLevel <= dutchGameState.maxLevel) {
            message.innerHTML = `
                <div style="background:#4CAF50;color:white;padding:15px;border-radius:8px;margin:15px 0;">
                    🎉 مبروك! لقد أكملت المستوى ${dutchGameState.currentLevel}<br>
                    عدد المحاولات: ${dutchGameState.moves}<br>
                    <button onclick="startNextLevel()" style="margin-top:10px;padding:8px 20px;background:white;color:#4CAF50;border:none;border-radius:4px;cursor:pointer;">
                        انتقل إلى المستوى ${nextLevel}
                    </button>
                </div>
            `;
            localStorage.setItem('dutchGameLevel', nextLevel);
        } else {
            message.innerHTML = `
                <div style="background:#2196F3;color:white;padding:15px;border-radius:8px;margin:15px 0;">
                    🏆 تهانينا! لقد أكملت جميع المستويات!<br>
                    <button onclick="resetDutchGame()" style="margin-top:10px;padding:8px 20px;background:white;color:#2196F3;border:none;border-radius:4px;cursor:pointer;">
                        ابدأ من جديد
                    </button>
                </div>
            `;
        }
    }
}

function startNextLevel() {
    if (dutchGameState.currentLevel < dutchGameState.maxLevel) {
        dutchGameState.currentLevel++;
        document.getElementById('dutch-level').value = dutchGameState.currentLevel;
        startDutchGame();
    }
}

function resetDutchGame() {
    dutchGameState.currentLevel = 1;
    localStorage.setItem('dutchGameLevel', 1);
    document.getElementById('dutch-level').value = 1;
    startDutchGame();
}

function startDutchGame() {
    const grid = document.getElementById('dutch-grid');
    grid.innerHTML = '';
    
    dutchGameState.flippedCards = [];
    dutchGameState.matches = 0;
    dutchGameState.moves = 0;
    dutchGameState.lockBoard = false;
    
    let words = [...dutchLevelsDB[dutchGameState.currentLevel], ...dutchLevelsDB[dutchGameState.currentLevel]];
    words.sort(() => Math.random() - 0.5);
    
    const cardCount = words.length;
    const columns = cardCount <= 12 ? 4 : (cardCount <= 16 ? 4 : 5);
    grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    grid.style.gap = cardCount > 16 ? '8px' : '10px';
    
    words.forEach(word => {
        const card = createDutchCard(word);
        grid.appendChild(card);
    });
    
    updateDutchStats();
    document.getElementById('dutch-message').textContent = '';
}

function updateDutchStats() {
    document.getElementById('dutch-moves').textContent = `المحاولات: ${dutchGameState.moves}`;
    const totalPairs = dutchLevelsDB[dutchGameState.currentLevel].length;
    document.getElementById('dutch-pairs').textContent = 
        `الأزواج المتطابقة: ${dutchGameState.matches}/${totalPairs}`;
}

window.addEventListener('DOMContentLoaded', () => {
    const dutchLevelSelect = document.getElementById('dutch-level');
    if (!dutchLevelSelect) return; // تأكد من وجود العنصر قبل استخدامه

    dutchLevelSelect.value = dutchGameState.currentLevel;
    dutchLevelSelect.addEventListener('change', (e) => {
      dutchGameState.currentLevel = parseInt(e.target.value);
      startDutchGame();
    });
    startDutchGame();
});
