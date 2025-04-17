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
    ],
    31: [ // المستوى 31 - الحاسوب
        { dutch: "Laptop", arabic: "حاسوب محمول" },
        { dutch: "Muispad", arabic: "لوحة فأرة" },
        { dutch: "Bestand", arabic: "ملف" },
        { dutch: "Map", arabic: "مجلد" },
        { dutch: "Schijf", arabic: "قرص" },
        { dutch: "Beeldscherm", arabic: "شاشة عرض" },
        { dutch: "Programma", arabic: "برنامج" },
        { dutch: "Toets", arabic: "زر" }
    ],
    32: [ // المستوى 32 - السفر في المدينة
        { dutch: "Bus", arabic: "حافلة" },
        { dutch: "Tram", arabic: "ترام" },
        { dutch: "Trein", arabic: "قطار" },
        { dutch: "Metro", arabic: "مترو" },
        { dutch: "Fiets", arabic: "دراجة" },
        { dutch: "Taxi", arabic: "سيارة أجرة" },
        { dutch: "Rit", arabic: "رحلة" },
        { dutch: "Station", arabic: "محطة" }
    ],
    33: [ // المستوى 33 - الأدوات المدرسية
        { dutch: "Gum", arabic: "ممحاة" },
        { dutch: "Liniaal", arabic: "مسطرة" },
        { dutch: "Schaar", arabic: "مقص" },
        { dutch: "Tas", arabic: "حقيبة" },
        { dutch: "Krijt", arabic: "طباشير" },
        { dutch: "Schrift", arabic: "دفتر" },
        { dutch: "Potlood", arabic: "قلم رصاص" },
        { dutch: "Stift", arabic: "قلم تحديد" }
    ],
    34: [ // المستوى 34 - الطبيعة
        { dutch: "Bloem", arabic: "زهرة" },
        { dutch: "Gras", arabic: "عشب" },
        { dutch: "Blad", arabic: "ورقة شجر" },
        { dutch: "Steen", arabic: "حجر" },
        { dutch: "Veld", arabic: "حقل" },
        { dutch: "Heuvel", arabic: "تل" },
        { dutch: "Meer", arabic: "بحيرة" },
        { dutch: "Eiland", arabic: "جزيرة" }
    ],
    35: [ // المستوى 35 - التسوق
        { dutch: "Winkelwagen", arabic: "عربة تسوق" },
        { dutch: "Kassa", arabic: "صندوق الدفع" },
        { dutch: "Rekening", arabic: "فاتورة" },
        { dutch: "Aanbieding", arabic: "عرض" },
        { dutch: "Winkelier", arabic: "بائع" },
        { dutch: "Product", arabic: "منتج" },
        { dutch: "Prijs", arabic: "سعر" },
        { dutch: "Klantenkaart", arabic: "بطاقة زبون" }
    ],
    36: [ // المستوى 36 - الصحة العامة
        { dutch: "Ziekenwagen", arabic: "سيارة إسعاف" },
        { dutch: "Verzekering", arabic: "تأمين" },
        { dutch: "Consult", arabic: "استشارة" },
        { dutch: "Vaccin", arabic: "لقاح" },
        { dutch: "Controle", arabic: "فحص" },
        { dutch: "Spoed", arabic: "طوارئ" },
        { dutch: "Afspraak", arabic: "موعد" },
        { dutch: "Zorg", arabic: "رعاية" }
    ],
    37: [ // المستوى 37 - الموسيقى
        { dutch: "Gitaar", arabic: "غيتار" },
        { dutch: "Piano", arabic: "بيانو" },
        { dutch: "Drum", arabic: "طبلة" },
        { dutch: "Viool", arabic: "كمان" },
        { dutch: "Fluit", arabic: "ناي" },
        { dutch: "Zanger", arabic: "مغني" },
        { dutch: "Lied", arabic: "أغنية" },
        { dutch: "Muziekstuk", arabic: "مقطوعة موسيقية" }
    ],
    38: [ // المستوى 38 - المطبخ
        { dutch: "Oven", arabic: "فرن" },
        { dutch: "Magnetron", arabic: "ميكروويف" },
        { dutch: "Kraan", arabic: "صنبور" },
        { dutch: "Beker", arabic: "كوب" },
        { dutch: "Vaatwasser", arabic: "غسالة صحون" },
        { dutch: "Bakpan", arabic: "مقلاة" },
        { dutch: "Snijplank", arabic: "لوح تقطيع" },
        { dutch: "Fornuis", arabic: "موقد" }
    ],
    39: [ // المستوى 39 - الإنترنت
        { dutch: "Website", arabic: "موقع إلكتروني" },
        { dutch: "E-mail", arabic: "بريد إلكتروني" },
        { dutch: "Wachtwoord", arabic: "كلمة مرور" },
        { dutch: "Gebruiker", arabic: "مستخدم" },
        { dutch: "Download", arabic: "تنزيل" },
        { dutch: "Upload", arabic: "رفع" },
        { dutch: "Link", arabic: "رابط" },
        { dutch: "Browser", arabic: "متصفح" }
    ],
    40: [ // المستوى 40 - مشاعر وأحاسيس
        { dutch: "Gelukkig", arabic: "سعيد جداً" },
        { dutch: "Teleurgesteld", arabic: "مُحبط" },
        { dutch: "Enthousiast", arabic: "متحمس" },
        { dutch: "Verlegen", arabic: "خجول" },
        { dutch: "Zenuwachtig", arabic: "متوتر" },
        { dutch: "Vervelend", arabic: "مزعج" },
        { dutch: "Opgelucht", arabic: "مرتاح" },
        { dutch: "Trost", arabic: "فخور" }
    ],
    41: [ // المستوى 41 - وسائل الإعلام
        { dutch: "Krant", arabic: "جريدة" },
        { dutch: "Tijdschrift", arabic: "مجلة" },
        { dutch: "Radio", arabic: "راديو" },
        { dutch: "Televisie", arabic: "تلفاز" },
        { dutch: "Nieuws", arabic: "أخبار" },
        { dutch: "Artikel", arabic: "مقال" },
        { dutch: "Interview", arabic: "مقابلة" },
        { dutch: "Fotograaf", arabic: "مصور" }
    ],
    42: [ // المستوى 42 - الحديقة
        { dutch: "Boom", arabic: "شجرة" },
        { dutch: "Plant", arabic: "نبتة" },
        { dutch: "Grond", arabic: "تربة" },
        { dutch: "Gieter", arabic: "مرش ماء" },
        { dutch: "Hark", arabic: "مشط حديقة" },
        { dutch: "Schop", arabic: "مجرفة" },
        { dutch: "Zaad", arabic: "بذرة" },
        { dutch: "Tuinman", arabic: "بستاني" }
    ],
    43: [ // المستوى 43 - العلوم
        { dutch: "Natuurkunde", arabic: "فيزياء" },
        { dutch: "Scheikunde", arabic: "كيمياء" },
        { dutch: "Biologie", arabic: "أحياء" },
        { dutch: "Aardrijkskunde", arabic: "جغرافيا" },
        { dutch: "Sterrenkunde", arabic: "فلك" },
        { dutch: "Wiskunde", arabic: "رياضيات" },
        { dutch: "Laboratorium", arabic: "مختبر" },
        { dutch: "Microscoop", arabic: "مجهر" }
    ],
    44: [ // المستوى 44 - الأدوات المكتبية
        { dutch: "Nietmachine", arabic: "دباسة" },
        { dutch: "Perforator", arabic: "مخرمة" },
        { dutch: "Paperclip", arabic: "مشبك ورق" },
        { dutch: "Map", arabic: "مجلد" },
        { dutch: "Stempel", arabic: "ختم" },
        { dutch: "Agenda", arabic: "مفكرة" },
        { dutch: "Kalender", arabic: "تقويم" },
        { dutch: "Fax", arabic: "فاكس" }
    ],
    45: [ // المستوى 45 - المواصلات البحرية
        { dutch: "Boot", arabic: "قارب" },
        { dutch: "Schip", arabic: "سفينة" },
        { dutch: "Haven", arabic: "ميناء" },
        { dutch: "Kapitein", arabic: "قبطان" },
        { dutch: "Matroos", arabic: "بحار" },
        { dutch: "Vracht", arabic: "حمولة" },
        { dutch: "Redding", arabic: "إنقاذ" },
        { dutch: "Anker", arabic: "مرساة" }
    ],
    46: [ // المستوى 46 - الإلكترونيات
        { dutch: "Batterij", arabic: "بطارية" },
        { dutch: "Schakelaar", arabic: "مفتاح كهربائي" },
        { dutch: "Kabel", arabic: "كابل" },
        { dutch: "Lader", arabic: "شاحن" },
        { dutch: "Speaker", arabic: "مكبر صوت" },
        { dutch: "Afstandsbediening", arabic: "جهاز تحكم" },
        { dutch: "Microfoon", arabic: "ميكروفون" },
        { dutch: "Camera", arabic: "كاميرا" }
    ],
    47: [ // المستوى 47 - المهن الطبية
        { dutch: "Tandarts", arabic: "طبيب أسنان" },
        { dutch: "Apotheker", arabic: "صيدلي" },
        { dutch: "Verloskundige", arabic: "قابلة" },
        { dutch: "Fysiotherapeut", arabic: "أخصائي علاج طبيعي" },
        { dutch: "Chirurg", arabic: "جراح" },
        { dutch: "Psycholoog", arabic: "طبيب نفسي" },
        { dutch: "Opticien", arabic: "أخصائي بصريات" },
        { dutch: "Radioloog", arabic: "أخصائي أشعة" }
    ],
    48: [ // المستوى 48 - التسوق الإلكتروني
        { dutch: "Webwinkel", arabic: "متجر إلكتروني" },
        { dutch: "Betaling", arabic: "دفع" },
        { dutch: "Bezorging", arabic: "توصيل" },
        { dutch: "Account", arabic: "حساب" },
        { dutch: "Winkelmand", arabic: "سلة التسوق" },
        { dutch: "Retour", arabic: "إرجاع" },
        { dutch: "Recensie", arabic: "مراجعة" },
        { dutch: "Coupon", arabic: "قسيمة" }
    ],
    49: [ // المستوى 49 - الأدوات الموسيقية
        { dutch: "Saxofoon", arabic: "ساكسفون" },
        { dutch: "Accordeon", arabic: "أكورديون" },
        { dutch: "Harp", arabic: "قيثارة" },
        { dutch: "Trompet", arabic: "بوق" },
        { dutch: "Cello", arabic: "تشيلو" },
        { dutch: "Klarinet", arabic: "كلارينيت" },
        { dutch: "Orgel", arabic: "أرغن" },
        { dutch: "Banjo", arabic: "بانجو" }
    ],
    50: [ // المستوى 50 - الحيوانات البرية
        { dutch: "Leeuw", arabic: "أسد" },
        { dutch: "Tijger", arabic: "نمر" },
        { dutch: "Olifant", arabic: "فيل" },
        { dutch: "Giraffe", arabic: "زرافة" },
        { dutch: "Neushoorn", arabic: "وحيد القرن" },
        { dutch: "Zebra", arabic: "حمار وحشي" },
        { dutch: "Luipaard", arabic: "فهد" },
        { dutch: "Hyena", arabic: "ضبع" }
    ],
    51: [ // المستوى 51 - الملابس الشتوية
        { dutch: "Sjaal", arabic: "وشاح" },
        { dutch: "Muts", arabic: "قبعة صوف" },
        { dutch: "Handschoenen", arabic: "قفازات" },
        { dutch: "Jas", arabic: "معطف" },
        { dutch: "Laars", arabic: "حذاء طويل" },
        { dutch: "Trui", arabic: "سترة" },
        { dutch: "Vest", arabic: "صديري" },
        { dutch: "Thermokleding", arabic: "ملابس حرارية" }
    ],
    52: [ // المستوى 52 - الأدوات الرياضية
        { dutch: "Racket", arabic: "مضرب" },
        { dutch: "Bal", arabic: "كرة" },
        { dutch: "Net", arabic: "شبكة" },
        { dutch: "Doel", arabic: "مرمى" },
        { dutch: "Scheidsrechter", arabic: "حكم" },
        { dutch: "Coach", arabic: "مدرب" },
        { dutch: "Team", arabic: "فريق" },
        { dutch: "Scorebord", arabic: "لوحة النتائج" }
    ],
    53: [ // المستوى 53 - الأدوات الطبية
        { dutch: "Injectie", arabic: "حقنة" },
        { dutch: "Thermometer", arabic: "ميزان حرارة" },
        { dutch: "Stethoscoop", arabic: "سماعة طبيب" },
        { dutch: "Pleister", arabic: "لاصق طبي" },
        { dutch: "Brancard", arabic: "نقالة" },
        { dutch: "Gips", arabic: "جبس" },
        { dutch: "Infuus", arabic: "محلول وريدي" },
        { dutch: "Zalf", arabic: "مرهم" }
    ],
    54: [ // المستوى 54 - أدوات المطبخ
        { dutch: "Garde", arabic: "خفاق" },
        { dutch: "Vergiet", arabic: "مصفاة" },
        { dutch: "Blender", arabic: "خلاط" },
        { dutch: "Weegschaal", arabic: "ميزان" },
        { dutch: "Maatbeker", arabic: "كوب قياس" },
        { dutch: "Kurkentrekker", arabic: "فتاحة زجاجات" },
        { dutch: "Rasp", arabic: "مبشرة" },
        { dutch: "Ovenwant", arabic: "قفاز فرن" }
    ],
    55: [ // المستوى 55 - أدوات البناء
        { dutch: "Hamer", arabic: "مطرقة" },
        { dutch: "Zaag", arabic: "منشار" },
        { dutch: "Boormachine", arabic: "مثقاب" },
        { dutch: "Schroevendraaier", arabic: "مفك براغي" },
        { dutch: "Waterpas", arabic: "ميزان ماء" },
        { dutch: "Meetlint", arabic: "شريط قياس" },
        { dutch: "Beitel", arabic: "إزميل" },
        { dutch: "Spijker", arabic: "مسمار" }
    ],
    56: [ // المستوى 56 - الأدوات الزراعية
        { dutch: "Tractor", arabic: "جرار" },
        { dutch: "Ploeg", arabic: "محراث" },
        { dutch: "Zaad", arabic: "بذرة" },
        { dutch: "Gieter", arabic: "مرش ماء" },
        { dutch: "Sikkel", arabic: "منجل" },
        { dutch: "Hooivork", arabic: "شوكة قش" },
        { dutch: "Melkbus", arabic: "وعاء حليب" },
        { dutch: "Schop", arabic: "مجرفة" }
    ],
    57: [ // المستوى 57 - أدوات الرسم
        { dutch: "Kwast", arabic: "فرشاة" },
        { dutch: "Palet", arabic: "لوحة ألوان" },
        { dutch: "Ezels", arabic: "حامل رسم" },
        { dutch: "Doek", arabic: "قماش" },
        { dutch: "Olieverf", arabic: "ألوان زيتية" },
        { dutch: "Aquarel", arabic: "ألوان مائية" },
        { dutch: "Potlood", arabic: "قلم رصاص" },
        { dutch: "Inkt", arabic: "حبر" }
    ],
    58: [ // المستوى 58 - أدوات التجميل
        { dutch: "Lipstick", arabic: "أحمر شفاه" },
        { dutch: "Mascara", arabic: "ماسكارا" },
        { dutch: "Oogschaduw", arabic: "ظل عيون" },
        { dutch: "Nagellak", arabic: "طلاء أظافر" },
        { dutch: "Kam", arabic: "مشط" },
        { dutch: "Föhn", arabic: "مجفف شعر" },
        { dutch: "Parfum", arabic: "عطر" },
        { dutch: "Crème", arabic: "كريم" }
    ],
    59: [ // المستوى 59 - أدوات النجارة
        { dutch: "Zaag", arabic: "منشار" },
        { dutch: "Vijl", arabic: "مبرد" },
        { dutch: "Hout", arabic: "خشب" },
        { dutch: "Spijker", arabic: "مسمار" },
        { dutch: "Lijm", arabic: "غراء" },
        { dutch: "Boormachine", arabic: "مثقاب" },
        { dutch: "Schuurpapier", arabic: "ورق صنفرة" },
        { dutch: "Hamer", arabic: "مطرقة" }
    ],
    60: [ // المستوى 60 - أدوات الميكانيكا
        { dutch: "Moersleutel", arabic: "مفتاح ربط" },
        { dutch: "Tang", arabic: "كماشة" },
        { dutch: "Schroef", arabic: "برغي" },
        { dutch: "Dop", arabic: "رأس مفتاح" },
        { dutch: "Krik", arabic: "رافعة" },
        { dutch: "Oliekannetje", arabic: "علبة زيت" },
        { dutch: "Steeksleutel", arabic: "مفتاح مفتوح" },
        { dutch: "Pomp", arabic: "مضخة" }
    ],
    61: [ // المستوى 61 - الأدوات المكتبية المتقدمة
        { dutch: "Printer", arabic: "طابعة" },
        { dutch: "Scanner", arabic: "ماسح ضوئي" },
        { dutch: "Lamineerapparaat", arabic: "جهاز تغليف" },
        { dutch: "Whiteboard", arabic: "سبورة بيضاء" },
        { dutch: "Markeerstift", arabic: "قلم تمييز" },
        { dutch: "Notitieblok", arabic: "دفتر ملاحظات" },
        { dutch: "Postvak", arabic: "صندوق بريد داخلي" },
        { dutch: "Rekenmachine", arabic: "آلة حاسبة" }
    ],
    62: [ // المستوى 62 - الأثاث المنزلي
        { dutch: "Bank", arabic: "أريكة" },
        { dutch: "Kast", arabic: "خزانة" },
        { dutch: "Stoel", arabic: "كرسي" },
        { dutch: "Tafel", arabic: "طاولة" },
        { dutch: "Vloerkleed", arabic: "سجادة" },
        { dutch: "Boekenkast", arabic: "مكتبة" },
        { dutch: "Kapstok", arabic: "علاقة ملابس" },
        { dutch: "Dressoir", arabic: "خزانة جانبية" }
    ],
    63: [ // المستوى 63 - أدوات المطبخ المتقدمة
        { dutch: "Sous-vide", arabic: "جهاز طبخ ببطء" },
        { dutch: "Keukenmachine", arabic: "محضرة طعام" },
        { dutch: "Citruspers", arabic: "عصارة حمضيات" },
        { dutch: "Broodrooster", arabic: "محمصة خبز" },
        { dutch: "IJsmachine", arabic: "آلة صنع المثلجات" },
        { dutch: "Slowcooker", arabic: "طباخ بطيء" },
        { dutch: "Espressomachine", arabic: "آلة إسبرسو" },
        { dutch: "Waterkoker", arabic: "غلاية ماء" }
    ],
    64: [ // المستوى 64 - أدوات السفر
        { dutch: "Rugzak", arabic: "حقيبة ظهر" },
        { dutch: "Paspoort", arabic: "جواز سفر" },
        { dutch: "Visum", arabic: "تأشيرة" },
        { dutch: "Vliegticket", arabic: "تذكرة طيران" },
        { dutch: "Reisgids", arabic: "دليل سفر" },
        { dutch: "Bagage", arabic: "أمتعة" },
        { dutch: "Adapter", arabic: "محول" },
        { dutch: "Reisverzekering", arabic: "تأمين سفر" }
    ],
    65: [ // المستوى 65 - أدوات الحدائق المتقدمة
        { dutch: "Bladblazer", arabic: "منفاخ أوراق" },
        { dutch: "Grasmaaier", arabic: "جزازة عشب" },
        { dutch: "Heggenschaar", arabic: "مقص سياج" },
        { dutch: "Sproeier", arabic: "رشاش ماء" },
        { dutch: "Tuinslang", arabic: "خرطوم حديقة" },
        { dutch: "Compostbak", arabic: "صندوق سماد" },
        { dutch: "Plantenspuit", arabic: "بخاخ نباتات" },
        { dutch: "Onkruidsteker", arabic: "أداة إزالة الأعشاب" }
    ],
    66: [ // المستوى 66 - أدوات الرسم المتقدمة
        { dutch: "Spatel", arabic: "ملعقة رسم" },
        { dutch: "Fixatief", arabic: "مثبت ألوان" },
        { dutch: "Pastel", arabic: "ألوان باستيل" },
        { dutch: "Grafiet", arabic: "جرافيت" },
        { dutch: "Spraypaint", arabic: "بخاخ ألوان" },
        { dutch: "Schildersezel", arabic: "حامل لوحة" },
        { dutch: "Lijn", arabic: "خط" },
        { dutch: "Doos", arabic: "صندوق" }
    ],
    67: [ // المستوى 67 - أدوات النجارة المتقدمة
        { dutch: "Freestafel", arabic: "طاولة تشكيل" },
        { dutch: "Cirkelzaag", arabic: "منشار دائري" },
        { dutch: "Houtklem", arabic: "ملزمة خشب" },
        { dutch: "Beitelset", arabic: "مجموعة إزميل" },
        { dutch: "Schaaf", arabic: "مِكْشَطَة" },
        { dutch: "Boortol", arabic: "مثقاب يدوي" },
        { dutch: "Houtlijm", arabic: "غراء خشب" },
        { dutch: "Werkbank", arabic: "طاولة عمل" }
    ],
    68: [ // المستوى 68 - أدوات البناء المتقدمة
        { dutch: "Betonmolen", arabic: "خلاطة إسمنت" },
        { dutch: "Steiger", arabic: "سقالة" },
        { dutch: "Tegelzaag", arabic: "منشار بلاط" },
        { dutch: "Boorhamer", arabic: "مطرقة ثاقبة" },
        { dutch: "Laserwaterpas", arabic: "ميزان ليزر" },
        { dutch: "Stootijzer", arabic: "عتلة" },
        { dutch: "Rolmaat", arabic: "شريط قياس" },
        { dutch: "Vouwladder", arabic: "سلم قابل للطي" }
    ],
    69: [ // المستوى 69 - الأجهزة المنزلية
        { dutch: "Koelkast", arabic: "ثلاجة" },
        { dutch: "Vriezer", arabic: "فريزر" },
        { dutch: "Magnetron", arabic: "ميكروويف" },
        { dutch: "Vaatwasser", arabic: "غسالة صحون" },
        { dutch: "Stofzuiger", arabic: "مكنسة كهربائية" },
        { dutch: "Wasdroger", arabic: "مجفف ملابس" },
        { dutch: "Strijkijzer", arabic: "مكواة" },
        { dutch: "Blender", arabic: "خلاط" }
    ],
    70: [ // المستوى 70 - أجهزة إلكترونية متقدمة
        { dutch: "Tablet", arabic: "جهاز لوحي" },
        { dutch: "Smartwatch", arabic: "ساعة ذكية" },
        { dutch: "VR-bril", arabic: "نظارة واقع افتراضي" },
        { dutch: "Drone", arabic: "طائرة بدون طيار" },
        { dutch: "Gameconsole", arabic: "جهاز ألعاب" },
        { dutch: "Bluetoothspeaker", arabic: "مكبر صوت بلوتوث" },
        { dutch: "E-reader", arabic: "قارئ إلكتروني" },
        { dutch: "Powerbank", arabic: "شاحن متنقل" }
    ],
    71: [ // المستوى 71 - أدوات رياضية متقدمة
        { dutch: "Halter", arabic: "دمبل" },
        { dutch: "Springtouw", arabic: "حبل قفز" },
        { dutch: "Fitnessmat", arabic: "حصيرة تمارين" },
        { dutch: "Kettlebell", arabic: "جهاز كيتلبيل" },
        { dutch: "Foamroller", arabic: "أسطوانة تدليك" },
        { dutch: "Bidon", arabic: "قارورة ماء" },
        { dutch: "Polsband", arabic: "رباط معصم" },
        { dutch: "Zweetband", arabic: "رباط عرق" }
    ],
    72: [ // المستوى 72 - أدوات موسيقية متقدمة
        { dutch: "Synthesizer", arabic: "جهاز سنثسيزر" },
        { dutch: "Mandoline", arabic: "مندولين" },
        { dutch: "Panfluit", arabic: "ناي بان" },
        { dutch: "Bongo", arabic: "طبلة بونغو" },
        { dutch: "Castagnetten", arabic: "صاجات" },
        { dutch: "Didgeridoo", arabic: "ديدجيريدو" },
        { dutch: "Kalimba", arabic: "كاليمبا" },
        { dutch: "Ukulele", arabic: "أوكوليلي" }
    ],
    73: [ // المستوى 73 - أدوات طبية متقدمة
        { dutch: "Defibrillator", arabic: "جهاز صدمات القلب" },
        { dutch: "Pacemaker", arabic: "منظم ضربات القلب" },
        { dutch: "Dialyse", arabic: "غسيل كلى" },
        { dutch: "Prothese", arabic: "طرف صناعي" },
        { dutch: "Katheter", arabic: "قسطرة" },
        { dutch: "MRI", arabic: "تصوير بالرنين المغناطيسي" },
        { dutch: "Echografie", arabic: "تصوير بالموجات فوق الصوتية" },
        { dutch: "Infuuspomp", arabic: "مضخة محاليل" }
    ],
    74: [ // المستوى 74 - أدوات تكنولوجيا المعلومات
        { dutch: "Server", arabic: "خادم" },
        { dutch: "Router", arabic: "موجه" },
        { dutch: "Switch", arabic: "مبدل" },
        { dutch: "Firewall", arabic: "جدار ناري" },
        { dutch: "Patchkabel", arabic: "كابل شبكة" },
        { dutch: "NAS", arabic: "تخزين شبكي" },
        { dutch: "UPS", arabic: "مزود طاقة غير منقطع" },
        { dutch: "Rack", arabic: "حامل أجهزة" }
    ],
    75: [ // المستوى 75 - أدوات كهربائية متقدمة
        { dutch: "Multimeter", arabic: "جهاز متعدد القياسات" },
        { dutch: "Oscilloscoop", arabic: "راسم إشارة" },
        { dutch: "Transformator", arabic: "محول كهربائي" },
        { dutch: "Soldeerbout", arabic: "كاوية لحام" },
        { dutch: "Kabeltester", arabic: "جهاز اختبار كابلات" },
        { dutch: "Stopcontact", arabic: "مقبس كهرباء" },
        { dutch: "Dimmer", arabic: "مخفت إضاءة" },
        { dutch: "Aardlekschakelaar", arabic: "قاطع تسرب أرضي" }
    ],
    76: [ // المستوى 76 - أدوات مكتبية رقمية
        { dutch: "E-mailprogramma", arabic: "برنامج بريد إلكتروني" },
        { dutch: "Spreadsheet", arabic: "جدول بيانات" },
        { dutch: "Presentatie", arabic: "عرض تقديمي" },
        { dutch: "Database", arabic: "قاعدة بيانات" },
        { dutch: "Tekstverwerker", arabic: "معالج نصوص" },
        { dutch: "Agenda-app", arabic: "تطبيق مفكرة" },
        { dutch: "Cloudopslag", arabic: "تخزين سحابي" },
        { dutch: "Projectbeheer", arabic: "إدارة مشاريع" }
    ],
    77: [ // المستوى 77 - أدوات مطبخ ذكية
        { dutch: "Slimme oven", arabic: "فرن ذكي" },
        { dutch: "Keukenweegschaal", arabic: "ميزان مطبخ" },
        { dutch: "Slimme koelkast", arabic: "ثلاجة ذكية" },
        { dutch: "Koffiezetapparaat", arabic: "آلة صنع القهوة" },
        { dutch: "Slimme blender", arabic: "خلاط ذكي" },
        { dutch: "Slimme waterkoker", arabic: "غلاية ذكية" },
        { dutch: "Voedseldroger", arabic: "مجفف طعام" },
        { dutch: "Sous-vide stick", arabic: "عصا طبخ ببطء" }
    ],
    78: [ // المستوى 78 - أدوات منزلية ذكية
        { dutch: "Slimme lamp", arabic: "مصباح ذكي" },
        { dutch: "Slimme thermostaat", arabic: "منظم حرارة ذكي" },
        { dutch: "Slimme deurbel", arabic: "جرس باب ذكي" },
        { dutch: "Slimme slot", arabic: "قفل ذكي" },
        { dutch: "Slimme stekker", arabic: "قابس ذكي" },
        { dutch: "Slimme camera", arabic: "كاميرا ذكية" },
        { dutch: "Slimme sensor", arabic: "مستشعر ذكي" },
        { dutch: "Slimme speaker", arabic: "مكبر صوت ذكي" }
    ],
    79: [ // المستوى 79 - أدوات سفر حديثة
        { dutch: "Elektrische step", arabic: "سكوتر كهربائي" },
        { dutch: "E-bike", arabic: "دراجة كهربائية" },
        { dutch: "Powerbank", arabic: "شاحن متنقل" },
        { dutch: "GPS", arabic: "نظام تحديد المواقع" },
        { dutch: "Bagagetracker", arabic: "متعقب أمتعة" },
        { dutch: "Reisapp", arabic: "تطبيق سفر" },
        { dutch: "Digitale kaart", arabic: "خريطة رقمية" },
        { dutch: "Reisadapter", arabic: "محول سفر" }
    ],
    80: [ // المستوى 80 - أدوات تعليمية حديثة
        { dutch: "Digibord", arabic: "سبورة رقمية" },
        { dutch: "Tablet", arabic: "جهاز لوحي" },
        { dutch: "E-learning", arabic: "تعلم إلكتروني" },
        { dutch: "Online cursus", arabic: "دورة عبر الإنترنت" },
        { dutch: "Webinar", arabic: "ندوة إلكترونية" },
        { dutch: "Quizapp", arabic: "تطبيق اختبارات" },
        { dutch: "Educatieve robot", arabic: "روبوت تعليمي" },
        { dutch: "Virtual classroom", arabic: "فصل افتراضي" }
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
    
    // إضافة أيقونة الصوت إذا كان النطق مفعلا
    if (window.dutchGameWithAudio && 'speechSynthesis' in window) {
        const audioIcon = document.createElement('div');
        audioIcon.textContent = '🔊';
        audioIcon.style.position = 'absolute';
        audioIcon.style.top = '5px';
        audioIcon.style.right = '5px';
        audioIcon.style.fontSize = '14px';
        audioIcon.style.opacity = '0.7';
        front.appendChild(audioIcon);
    }
    
    const back = document.createElement('div');
    back.className = 'card-back';
    back.textContent = '?';
    
    card.appendChild(front);
    card.appendChild(back);
    
    // عند النقر على البطاقة، اقلبها فقط - سيتم نطق الكلمة داخل دالة flipDutchCard
    card.addEventListener('click', () => {
        flipDutchCard(card, word);
    });
    
    return card;
}

// دالة النطق المحسنة
function speakDutchWord(text) {
    // لا ننطق إذا كان الصوت معطلاً
    if (!window.dutchGameWithAudio) {
        console.log('النطق معطل');
        return;
    }
    
    // التحقق من دعم النطق في المتصفح
    if (!('speechSynthesis' in window)) {
        console.error('النطق غير مدعوم في هذا المتصفح');
        return;
    }
    
    // إلغاء النطق الحالي إذا كان يتحدث بالفعل
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }
    
    try {
        console.log('جاري نطق: ' + text);
        // إنشاء كائن النطق
        const utter = new window.SpeechSynthesisUtterance(text);
        utter.lang = 'nl-NL';  // لغة النطق الهولندية
        utter.rate = 0.9;      // سرعة النطق (أبطأ قليلاً لوضوح أكبر)
        utter.volume = 1;      // أعلى صوت
        
        // التأكد من عمل النطق
        utter.onstart = function() {
            console.log('بدأ النطق للكلمة: ' + text);
        };
        
        utter.onerror = function(event) {
            console.error('خطأ في النطق:', event);
        };
        
        // بدء النطق
        window.speechSynthesis.speak(utter);
    } catch (error) {
        console.error('خطأ في نظام النطق:', error);
    }
}

function flipDutchCard(card, word) {
    if (dutchGameState.lockBoard) return;
    if (card.classList.contains('flipped')) return;
    if (dutchGameState.flippedCards.length === 2) return;

    // نطق الكلمة الهولندية عند القلب إذا كان الصوت مفعلاً
    if (window.dutchGameWithAudio === true) {
        speakDutchWord(word.dutch);
        console.log('جاري نطق الكلمة: ' + word.dutch);
    } else {
        console.log('الصوت غير مفعل');
    }

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

// تعريف متغير عالمي لحالة الصوت مع قيمة افتراضية
window.dutchGameWithAudio = false;

// وظيفة لتبديل حالة الصوت وتحديث واجهة المستخدم
function toggleDutchAudio() {
    window.dutchGameWithAudio = !window.dutchGameWithAudio;
    updateDutchAudioUI();
    
    // اختبار قصير للنطق عند التفعيل
    if (window.dutchGameWithAudio) {
        speakDutchWord('Geluid aan');
    }
    
    // إعادة تحميل اللعبة لتطبيق إعدادات الصوت الجديدة
    startDutchGame();
}

// وظيفة لتحديث واجهة المستخدم بناءً على حالة الصوت
function updateDutchAudioUI() {
    const toggleButton = document.getElementById('toggleDutchAudio');
    const statusDiv = document.getElementById('dutch-audio-status');
    
    if (!toggleButton || !statusDiv) return;
    
    if (window.dutchGameWithAudio) {
        toggleButton.textContent = 'كتم النطق الصوتي';
        toggleButton.style.background = '#e74c3c';
        statusDiv.innerHTML = 'النطق الصوتي <b>مفعل</b> - ستسمع نطق الكلمات الهولندية عند قلب البطاقات';
        statusDiv.style.color = '#27ae60';
    } else {
        toggleButton.textContent = 'اللعب مع النطق الصوتي';
        toggleButton.style.background = '#2b6777';
        statusDiv.innerHTML = 'النطق الصوتي <b>معطل</b> - لن تسمع نطق الكلمات عند قلب البطاقات';
        statusDiv.style.color = '#7f8c8d';
    }
}

function startDutchGame() {
    // اختبار نظام النطق للتأكد من أنه يعمل
    if (window.dutchGameWithAudio && !('speechSynthesis' in window)) {
        console.error('النطق غير مدعوم في هذا المتصفح');
        const warningDiv = document.getElementById('dutch-speech-warning');
        if (warningDiv) {
            warningDiv.style.color = 'red';
            warningDiv.textContent = 'النطق غير مدعوم في هذا المتصفح. استخدم Chrome أو Edge';
        }
    } else {
        const warningDiv = document.getElementById('dutch-speech-warning');
        if (warningDiv) warningDiv.textContent = '';
    }

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
    
    // تحديث واجهة المستخدم بناءً على حالة الصوت الافتراضية
    updateDutchAudioUI();
    
    // بدء اللعبة
    startDutchGame();

    // إضافة مستمع النقر لزر تبديل الصوت
    const toggleBtn = document.getElementById('toggleDutchAudio');
    if (toggleBtn) {
        toggleBtn.onclick = function() {
            toggleDutchAudio();
        };
    }
    
    // زر اختبار النطق
    const testBtn = document.getElementById('testDutchSpeech');
    const warningDiv = document.getElementById('dutch-speech-warning');
    if (testBtn) {
        testBtn.onclick = function() {
            if (!('speechSynthesis' in window)) {
                warningDiv.textContent = 'النطق غير مدعوم في هذا المتصفح. استخدم Google Chrome أو Microsoft Edge.';
                return;
            }
            warningDiv.textContent = '';
            try {
                // اختبار النطق بغض النظر عن حالة الصوت الحالية
                const savedAudioState = window.dutchGameWithAudio;
                window.dutchGameWithAudio = true;
                
                speakDutchWord('Hallo');
                setTimeout(() => speakDutchWord('Welkom bij het Nederlandse spel'), 1500);
                
                // إرجاع حالة الصوت بعد فترة
                setTimeout(() => {
                    window.dutchGameWithAudio = savedAudioState;
                    updateDutchAudioUI();
                }, 3000);
                
                // عرض رسالة تأكيد
                warningDiv.style.color = 'green';
                warningDiv.textContent = 'جاري اختبار النطق... يجب أن تسمع كلمات هولندية الآن.';
                
                // مسح الرسالة بعد فترة
                setTimeout(() => {
                    if (warningDiv.style.color === 'green') {
                        warningDiv.textContent = '';
                    }
                }, 5000);
            } catch (e) {
                warningDiv.style.color = 'red';
                warningDiv.textContent = 'حدث خطأ أثناء محاولة النطق. تأكد من إعدادات الصوت في جهازك.';
            }
        };
    }
});
