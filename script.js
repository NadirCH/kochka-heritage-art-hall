/**
 * KOCHKA HERITAGE ART HALL — INTERACTIVE 3D CORE ENGINE
 * Feline Nobility & Modernism Collection (Est. 1957)
 * High-performance 60/120fps GPU LERP Physics, Ambient Centerpiece Float & Spatial Audio
 * Full Multi-Language Curation Engine: English (EN), Arabic (AR, RTL), Russian (RU)
 */

document.addEventListener('DOMContentLoaded', () => {
  // ========================================================
  // 1. MULTI-LANGUAGE ARISTOCRATIC FELINE CATALOG
  // ========================================================
  const ARTWORKS_I18N = {
    en: {
      'top-left': {
        title: 'Duchess Blanche of the Royal Order',
        year: '1957 · Modern Era',
        artist: 'Valery Antonov',
        medium: 'Oil on Belgian linen, hand-carved gilded baroque frame',
        dimensions: '65 × 54 cm',
        provenance: 'Imperial Heritage Collection, St. Petersburg',
        tag: 'GALLERY ROOM I · ACCESSION #57-01',
        origin: 'Eastern Europe · St. Petersburg',
        source: 'KOCHKA Permanent Heritage',
        description: "Painted during Antonov's early residency at Heritage Art Hall, this masterwork captures the regal serenity and razor-sharp profile of Duchess Blanche adorned in an Elizabethan lace ruff and holding the sovereign sceptre against an impenetrable baroque shadow. The velvety brushwork reflects an uncompromising dedication to feline nobility and dramatic chiaroscuro.",
        image: 'assets/frame_top_left_cat.png',
        audioTitle: 'Curator Commentary: Blanche & the Royal Order',
        cardBadge: 'Baroque Revival',
        cardMeta: 'Valery Antonov · 1957 · St. Petersburg',
        cardSource: 'KOCHKA PERMANENT'
      },
      'center-oval': {
        title: 'Empress Genevieve in Crimson',
        year: '1963 · Modern Era',
        artist: 'Jean-Luc Moreau & Valery Antonov',
        medium: 'Oil on circular linen, 24k gold leaf Baroque round frame',
        dimensions: '82 × 82 cm',
        provenance: "Acquired directly from Biennale d'Arte, 1964",
        tag: 'MASTERPIECE SANCTUARY · ACCESSION #63-14',
        origin: 'Western Europe · France',
        source: 'KOCHKA Permanent Sanctuary',
        description: "The monumental visual centerpiece of the exhibition. Encased in an opulent circular Baroque gold frame, the Empress's watchful, hypnotic emerald gaze pierces through saturated crimson red tones while wearing an ornate ruby and pearl necklace. It stands as an allegory for feline sovereignty—an art form that keeps speaking across generations.",
        image: 'assets/frame_center_round_cat.png',
        audioTitle: 'Curator Commentary: Symbolism of the Crimson Masterpiece',
        cardBadge: 'Masterpiece Sanctuary',
        cardMeta: 'Valery Antonov & Moreau · 1963 · France',
        cardSource: 'KOCHKA PERMANENT'
      },
      'bottom-left': {
        title: 'Lord Aurelius the Amber',
        year: '1971 · Modern Era',
        artist: 'Elena Rostova',
        medium: 'Oil on gessoed board, gilded floral moulding',
        dimensions: '42 × 36 cm',
        provenance: 'Gift of the Rostova Estate, 1982',
        tag: 'CURRENT EXHIBITION · ACCESSION #71-08',
        origin: 'Western Europe · Paris',
        source: 'KOCHKA Permanent Heritage',
        description: "A tender, nuanced study exploring warm ochre and ginger undertones. Rostova captures the gentle curve of Lord Aurelius's profile with feather-light impasto, celebrating feline grace in its purest domestic quietude.",
        image: 'assets/frame_banner_cat.png',
        audioTitle: "Curator Commentary: Rostova's Modernism",
        cardBadge: 'Modernist Impasto',
        cardMeta: 'Elena Rostova · 1971 · Paris',
        cardSource: 'KOCHKA PERMANENT'
      },
      'bottom-right': {
        title: 'Nocturne: The Obsidian Panther',
        year: '1968 · Modern Era',
        artist: 'Valery Antonov',
        medium: 'Oil on canvas, Rococo carved gilded frame',
        dimensions: '78 × 64 cm',
        provenance: 'Private collection, Geneva; Hall acquisition 1974',
        tag: 'GALLERY ROOM III · ACCESSION #68-22',
        origin: 'Western Europe · Geneva',
        source: 'KOCHKA Permanent Heritage',
        description: "A striking antithesis to Antonov's high-key works. The silhouetted black feline against a smoldering dark garnet background commands absolute stillness. The glossy coat reflects subtle plum highlights and amber eyes, demonstrating Antonov's peerless mastery of tone and feline enigma.",
        image: 'assets/frame_bottom_right_cat.png',
        audioTitle: 'Curator Commentary: The Obsidian Palette',
        cardBadge: 'Gallery Room III',
        cardMeta: 'Valery Antonov · 1968 · Geneva',
        cardSource: 'KOCHKA PERMANENT'
      },
      'bastet': {
        title: 'Goddess Bastet with Gold Earrings',
        year: 'c. 600 BC · 26th Saite Dynasty',
        artist: 'Unknown Master of Saqqara',
        medium: 'Hollow-cast bronze with engraved scarab amulet and solid gold earrings',
        dimensions: '38 × 22 × 18 cm',
        provenance: 'Saqqara Necropolis, Egypt; Metropolitan Museum of Art Open Access',
        tag: 'ANCIENT EGYPTIAN SANCTUARY · ACCESSION #MET-600BC',
        origin: 'Mediterranean & Nile · Egypt',
        source: 'Metropolitan Museum of Art Open Access API',
        description: 'A magnificent sacred effigy of the feline goddess Bastet, personifying protection, domestic tranquility, and solar grace. The stylized ears feature authentic gold hoops, while the chest bears a finely incised Wadjet eye and winged scarab pectoral. Bastet was venerated as the fierce protector of royal chambers and the gentlest guardian of the hearth.',
        image: 'assets/cat_bastet_ancient.jpg',
        audioTitle: 'Curator Commentary: Bastet & Sacred Feline Protection',
        cardBadge: 'Ancient Egyptian Dynasty',
        cardMeta: 'Saqqara Sculptor · c. 600 BC · Egypt',
        cardSource: 'MET OPEN ACCESS'
      },
      'dutch': {
        title: 'Feline Guard of the Golden Age',
        year: 'c. 1645 · Dutch Golden Age',
        artist: 'Circle of Jan Steen & Paulus Potter',
        medium: 'Oil on oak panel, antique Dutch ebonized frame',
        dimensions: '54 × 46 cm',
        provenance: 'Haarlem Guild of St. Luke; Rijksmuseum Amsterdam Open Access',
        tag: 'DUTCH MASTERPIECE GALLERY · ACCESSION #RJK-1645',
        origin: 'Western Europe · Netherlands',
        source: 'Rijksmuseum Amsterdam API',
        description: 'A charming domestic masterwork demonstrating the 17th-century Dutch mastery of light and tactile impasto. The striped domestic cat, perched alertly on deep emerald velvet next to a silver tankard and crusty loaf, exemplifies the domestic intimacy celebrated during the Golden Age in Amsterdam.',
        image: 'assets/cat_dutch_rijks.jpg',
        audioTitle: 'Curator Commentary: Dutch Domestic Chiaroscuro',
        cardBadge: 'Dutch Golden Age',
        cardMeta: 'School of Jan Steen · c. 1645 · Amsterdam',
        cardSource: 'RIJKSMUSEUM API'
      },
      'kuniyoshi': {
        title: 'Cats of the Fifty-Three Stations',
        year: '1850 · Late Edo Period',
        artist: 'Utagawa Kuniyoshi (歌川国芳)',
        medium: 'Polychrome woodblock print (nishiki-e) on washi paper',
        dimensions: '36.5 × 24.8 cm',
        provenance: 'Edo publishing guild; Wikimedia Commons Curatorial Archive',
        tag: 'UKIYO-E ARCHIVE · ACCESSION #EDO-1850',
        origin: 'East Asia · Japan',
        source: 'Wikimedia Commons Cultural Heritage',
        description: 'Kuniyoshi, renowned throughout Edo Japan for his passionate devotion to cats, created this iconic series puns on the 53 stations of the Tokaido road. This tender study captures a calico cat napping with rhythmic calligraphy and masterfully graded bokashi shading.',
        image: 'assets/cat_kuniyoshi_ukiyo.jpg',
        audioTitle: 'Curator Commentary: Kuniyoshi’s Feline Whimsy',
        cardBadge: 'Edo Period Ukiyo-e',
        cardMeta: 'Utagawa Kuniyoshi · 1850 · Edo, Japan',
        cardSource: 'WIKIMEDIA COMMONS'
      },
      'steinlen': {
        title: 'Tournée du Chat Noir',
        year: '1896 · Fin-de-Siècle Belle Époque',
        artist: 'Théophile-Alexandre Steinlen',
        medium: 'Three-color lithograph on wove paper',
        dimensions: '136 × 95 cm',
        provenance: 'Montmartre Cabaret Archives; Art Institute of Chicago',
        tag: 'MONTMARTRE MODERNISM · ACCESSION #AIC-1896',
        origin: 'Western Europe · France',
        source: 'Art Institute of Chicago Public API',
        description: 'Perhaps the most recognized silhouette in modern graphic design. Created by Steinlen to advertise the Bohemian cabaret Tournée du Chat Noir in Paris, the arched back, flaming amber eyes, and halo of crimson script revolutionized poster art and established the cat as the eternal symbol of Parisian counterculture.',
        image: 'assets/cat_chat_noir_steinlen.jpg',
        audioTitle: 'Curator Commentary: Steinlen & Bohemian Modernism',
        cardBadge: 'Belle Époque Art Nouveau',
        cardMeta: 'Théophile Steinlen · 1896 · Montmartre',
        cardSource: 'ART INSTITUTE OF CHICAGO'
      }
    },
    ar: {
      'top-left': {
        title: 'الدوقة بلانش من السلالة الملكية',
        year: '1957 · العصر الحديث',
        artist: 'فاليري أنتونوف',
        medium: 'زيت على كتان بلجيكي، إطار باروكي مذهب محفور يدوياً',
        dimensions: '65 × 54 سم',
        provenance: 'المجموعة الإمبراطورية للتراث، سان بطرسبرغ',
        tag: 'قاعة المعرض الأولى · سجل رقم #57-01',
        origin: 'أوروبا الشرقية · سان بطرسبرغ',
        source: 'مجموعة كوتشكا الدائمة',
        description: 'أُبدعت هذه اللوحة خلال فترة إقامة أنتونوف الأولى في قاعة التراث الفني، وتجسد السكينة الملكية والملامح الدقيقة للدوقة بلانش وهي ترتدي ياقة دانتيل إليزابيثية فاخرة أمام ظلال باروكية عميقة. تعكس ضربات الفرشاة المخملية تفانياً لا يُضاهى في تمجيد رفعة القطط وتقنيات الكياروسكورو الدرامية.',
        image: 'assets/frame_top_left_cat.png',
        audioTitle: 'تعليق القيّم الفني: بلانش والسلالة الملكية',
        cardBadge: 'إحياء الباروك',
        cardMeta: 'فاليري أنتونوف · 1957 · سان بطرسبرغ',
        cardSource: 'مجموعة كوتشكا الدائمة'
      },
      'center-oval': {
        title: 'الإمبراطورة جينيفيف بالأحمر القرمزي',
        year: '1963 · العصر الحديث',
        artist: 'جان لوك مورو وفاليري أنتونوف',
        medium: 'زيت على قماش كتان دائري، إطار باروكي دائري مذهب بذهب عيار 24',
        dimensions: '82 × 82 سم',
        provenance: 'اقتنيت مباشرة من بينالي الفنون، 1964',
        tag: 'محراب التحف الفنية · سجل رقم #63-14',
        origin: 'أوروبا الغربية · فرنسا',
        source: 'محراب كوتشكا الدائم',
        description: 'التحفة الفنية المحورية الكبرى في المعرض. في إطار باروكي دائري مذهب فخم، تخترق النظرة الزمردية الساحرة للإمبراطورة تدرجات اللون الأحمر القرمزي المتوهج، متوجة بقلادة مرصعة بالياقوت واللؤلؤ. تجسد اللوحة رمزية السيادة الفطرية للقطط—فنٌ حيّ يواصل الحديث عبر الأجيال.',
        image: 'assets/frame_center_round_cat.png',
        audioTitle: 'تعليق القيّم الفني: رمزية التحفة القرمزية',
        cardBadge: 'محراب التحف الفنية',
        cardMeta: 'فاليري أنتونوف ومورو · 1963 · فرنسا',
        cardSource: 'مجموعة كوتشكا الدائمة'
      },
      'bottom-left': {
        title: 'اللورد أوريليوس الكهرماني',
        year: '1971 · العصر الحديث',
        artist: 'إيلينا روستوفا',
        medium: 'زيت على خشب مغطى بالجص، إطار زخرفي مذهب بنقوش نباتية',
        dimensions: '42 × 36 سم',
        provenance: 'إهداء من تركة روستوفا، 1982',
        tag: 'المعرض الحالي · سجل رقم #71-08',
        origin: 'أوروبا الغربية · باريس',
        source: 'مجموعة كوتشكا الدائمة',
        description: 'دراسة فنية دقيقة ودافئة تستكشف تدرجات ألوان المغرة والزنجبيل الدافئة. تلتقط روستوفا المظهر الجانبي الأنيق للورد أوريليوس بضربات إمباستو خفيفة كالريشة، محتفيةً برقة ووداعة القطط في أرقى حالات السكينة المنزلية.',
        image: 'assets/frame_banner_cat.png',
        audioTitle: 'تعليق القيّم الفني: حداثة روستوفا التعبيرية',
        cardBadge: 'إمباستو حداثي',
        cardMeta: 'إيلينا روستوفا · 1971 · باريس',
        cardSource: 'مجموعة كوتشكا الدائمة'
      },
      'bottom-right': {
        title: 'نوكتورن: النمر الأسود السجيتي',
        year: '1968 · العصر الحديث',
        artist: 'فاليري أنتونوف',
        medium: 'زيت على قماش، إطار روكوكو محفور ومذهب',
        dimensions: '78 × 64 سم',
        provenance: 'مجموعة خاصة، جنيف؛ اقتناء القاعة 1974',
        tag: 'قاعة المعرض الثالثة · سجل رقم #68-22',
        origin: 'أوروبا الغربية · جنيف',
        source: 'مجموعة كوتشكا الدائمة',
        description: 'نقيض بصري بديع لأعمال أنتونوف المضيئة؛ حيث يفرض هذا الهر الأسود الساحر سكوناً تاماً أمام خلفية عاتمة من العقيق الداكن. يعكس الفراء المصقول لمسات خفية من تدرجات البرقوق وعينين كهرمانيتين ثاقبتين، مما يبرز براعة استثنائية في التحكم بالنغمات اللونية وغموض عالم القطط.',
        image: 'assets/frame_bottom_right_cat.png',
        audioTitle: 'تعليق القيّم الفني: لوحة الأوبسيديان الغامضة',
        cardBadge: 'قاعة المعرض الثالثة',
        cardMeta: 'فاليري أنتونوف · 1968 · جنيف',
        cardSource: 'مجموعة كوتشكا الدائمة'
      },
      'bastet': {
        title: 'الإلهة باستت بأقراط ذهبية',
        year: 'نحو 600 ق.م · الأسرة السادسة والعشرون الصاوية',
        artist: 'فنان مجهول من سقارة',
        medium: 'برونز مصبوب مجوف مع تميمة جعران منقوشة وأقراط من الذهب الخالص',
        dimensions: '38 × 22 × 18 سم',
        provenance: 'جبانة سقارة، مصر؛ واجهة الوصول المفتوح لمتحف المتروبوليتان',
        tag: 'المزار المصري القديم · سجل #MET-600BC',
        origin: 'حوض المتوسط والنيل · مصر القديمة',
        source: 'واجهة الوصول المفتوح لمتحف المتروبوليتان',
        description: 'تمثال مقدس مهيب للإلهة القطّة باستت، رمز الحماية الإلهية، والسكينة المنزلية، والضياء الشمسي. تزدان الأذنان بأقراط ذهبية أصيلة، بينما يحمل الصدر نقشاً دقيقاً لعين حورس (وادجيت) وتميمة الجعران المجنح. حظيت باستت بتبجيل عظيم كحامية للمخادع الملكية وحارسة حنون للمنازل.',
        image: 'assets/cat_bastet_ancient.jpg',
        audioTitle: 'تعليق القيّم الفني: باستت وحماية القطط المقدسة',
        cardBadge: 'الأسرة المصرية القديمة',
        cardMeta: 'نحات سقارة · نحو 600 ق.م · مصر',
        cardSource: 'متحف المتروبوليتان مفتوح المصدر'
      },
      'dutch': {
        title: 'حارس السلالة في العصر الذهبي',
        year: 'نحو 1645 · العصر الذهبي الهولندي',
        artist: 'دائرة يان ستين وباولوس بوتر',
        medium: 'زيت على لوح من خشب البلوط، إطار هولندي أسود أثري',
        dimensions: '54 × 46 سم',
        provenance: 'نقابة هارلم للقديس لوقا؛ واجهة متحف ريجكس أمستردام',
        tag: 'قاعة روائع الفن الهولندي · سجل #RJK-1645',
        origin: 'أوروبا الغربية · هولندا',
        source: 'واجهة متحف ريجكس أمستردام',
        description: 'تحفة منزلية ساحرة تجسد البراعة الهولندية في القرن السابع عشر بالتعامل مع الضوء والملامح الحسية. يجلس القط المخطط بيقظة ونبل فوق وسادة من المخمل الزمردي بجوار إبريق فضي ورغيف خبز، معبراً عن الحميمية والهدوء المنزلي الذي ميز العصر الذهبي في أمستردام.',
        image: 'assets/cat_dutch_rijks.jpg',
        audioTitle: 'تعليق القيّم الفني: كياروسكورو البيوت الهولندية',
        cardBadge: 'العصر الذهبي الهولندي',
        cardMeta: 'مدرسة يان ستين · نحو 1645 · أمستردام',
        cardSource: 'متحف ريجكس أمستردام'
      },
      'kuniyoshi': {
        title: 'قطط المحطات الثلاث والخمسين',
        year: '1850 · أواخر عصر إيدو',
        artist: 'أوتاغاوا كونيوشي (歌川国芳)',
        medium: 'نقش خشبي متعدد الألوان (نيشيكي-إه) على ورق الواشي',
        dimensions: '36.5 × 24.8 سم',
        provenance: 'رابطة نشر إيدو؛ أرشيف التراث الثقافي لويكيميديا كومنز',
        tag: 'أرشيف أوكييو-إه الياباني · سجل #EDO-1850',
        origin: 'شرق آسيا · اليابان',
        source: 'أرشيف التراث الثقافي لويكيميديا كومنز',
        description: 'أبدع الفنان كونيوشي، المشهور في عصر إيدو بعشقه الكبير للقطط، هذه السلسلة البديعة التي تتلاعب بأسماء محطات طريق توكايدو الشهير الـ 53. وتجسد هذه اللوحة قطاً ثلاثي الألوان يغفو بسلام مع خطوط يابانية إيقاعية وتدرجات تظليل البوكاشي البارعة.',
        image: 'assets/cat_kuniyoshi_ukiyo.jpg',
        audioTitle: 'تعليق القيّم الفني: طرافة وشغف كونيوشي بعالم القطط',
        cardBadge: 'أوكييو-إه عصر إيدو',
        cardMeta: 'أوتاغاوا كونيوشي · 1850 · إيدو، اليابان',
        cardSource: 'ويكيميديا كومنز'
      },
      'steinlen': {
        title: 'جولة القط الأسود (لو شا نوار)',
        year: '1896 · الحقبة الجميلة (بيل إيبوك)',
        artist: 'تيوفيل-ألكسندر شتاينلن',
        medium: 'طباعة حجرية (ليثوغراف) بثلاثة ألوان على ورق فني',
        dimensions: '136 × 95 سم',
        provenance: 'أرشيف كاباريه مونمارتر؛ الواجهة البرمجية لمعهد شيكاغو للفنون',
        tag: 'حداثة مونمارتر · سجل #AIC-1896',
        origin: 'أوروبا الغربية · فرنسا',
        source: 'الواجهة البرمجية لمعهد شيكاغو للفنون',
        description: 'يُعد هذا العمل أشهر صورة ظلية في تاريخ التصميم الجرافيكي الحديث. صممه شتاينلن للإعلان عن كباريه «لو شا نوار» البوهيمي في باريس؛ حيث أحدث الظهر المقوس، والعينان الكهرمانيتان المتوهجتان، وهالة الخط القرمزي ثورة في فن الملصقات، وجعلت من القط رمزاً أبدياً للثقافة الباريسية الحرة.',
        image: 'assets/cat_chat_noir_steinlen.jpg',
        audioTitle: 'تعليق القيّم الفني: شتاينلن والحداثة البوهيمية',
        cardBadge: 'فن الآرت نوفو في الحقبة الجميلة',
        cardMeta: 'تيوفيل شتاينلن · 1896 · مونمارتر',
        cardSource: 'معهد شيكاغو للفنون'
      }
    },
    ru: {
      'top-left': {
        title: 'Герцогиня Бланш Королевского ордена',
        year: '1957 · Эпоха модерна',
        artist: 'Валерий Антонов',
        medium: 'Холст (бельгийский лён), масло, резной золочёный барочный багет',
        dimensions: '65 × 54 см',
        provenance: 'Коллекция Имперского наследия, Санкт-Петербург',
        tag: 'ЗАЛ ГАЛЕРЕИ I · ИНВ. #57-01',
        origin: 'Восточная Европа · Санкт-Петербург',
        source: 'Постоянный фонд KOCHKA',
        description: 'Созданный в ранний период резиденции Антонова в Heritage Art Hall, этот шедевр запечатлел царственное спокойствие и безупречный профиль Герцогини Бланш в кружевном воротнике-фрезе на фоне глубоких барочных теней. Бархатистый мазок кисти отражает непревзойдённое мастерство светотени и почитание кошачьего благородства.',
        image: 'assets/frame_top_left_cat.png',
        audioTitle: 'Кураторский комментарий: Бланш и Королевский орден',
        cardBadge: 'Необарокко',
        cardMeta: 'Валерий Антонов · 1957 · Санкт-Петербург',
        cardSource: 'ПОСТОЯННЫЙ ФОНД KOCHKA'
      },
      'center-oval': {
        title: 'Императрица Женевьева в багряном',
        year: '1963 · Эпоха модерна',
        artist: 'Жан-Люк Моро и Валерий Антонов',
        medium: 'Холст (круг), масло, круглый барочный багет, сусальное золото 24 карата',
        dimensions: '82 × 82 см',
        provenance: "Приобретено непосредственно на Biennale d'Arte, 1964",
        tag: 'ГЛАВНЫЙ ШЕДЕВР · ИНВ. #63-14',
        origin: 'Западная Европа · Франция',
        source: 'Постоянный санктуарий KOCHKA',
        description: 'Монументальный смысловой и визуальный центр экспозиции. Заключённый в роскошный круглый барочный багет с сусальным золотом, гипнотический изумрудный взгляд Императрицы сияет на фоне глубоких гранатово-багряных тонов. Венчающее её колье из рубинов и жемчуга служит аллегорией суверенности — искусство, которое продолжает говорить сквозь поколения.',
        image: 'assets/frame_center_round_cat.png',
        audioTitle: 'Кураторский комментарий: Символизм багряного шедевра',
        cardBadge: 'Главный шедевр',
        cardMeta: 'Валерий Антонов и Моро · 1963 · Франция',
        cardSource: 'ПОСТОЯННЫЙ ФОНД KOCHKA'
      },
      'bottom-left': {
        title: 'Лорд Аврелий Янтарный',
        year: '1971 · Эпоха модерна',
        artist: 'Елена Ростова',
        medium: 'Дерево, левкас, масло, позолоченный багет с растительным орнаментом',
        dimensions: '42 × 36 см',
        provenance: 'Дар наследников Е. Ростовой, 1982',
        tag: 'ТЕКУЩАЯ ВЫСТАВКА · ИНВ. #71-08',
        origin: 'Западная Европа · Париж',
        source: 'Постоянный фонд KOCHKA',
        description: 'Тонкое живописное исследование тёплых охристых и янтарных полутонов. Ростова запечатлела мягкий силуэт Лорда Аврелия невесомой пастозной кистью (импасто), воспевая грацию и тихое домашнее благородство.',
        image: 'assets/frame_banner_cat.png',
        audioTitle: 'Кураторский комментарий: Модернизм Ростовой',
        cardBadge: 'Модернистское импасто',
        cardMeta: 'Елена Ростова · 1971 · Париж',
        cardSource: 'ПОСТОЯННЫЙ ФОНД KOCHKA'
      },
      'bottom-right': {
        title: 'Ноктюрн: Обсидиановая пантера',
        year: '1968 · Эпоха модерна',
        artist: 'Валерий Антонов',
        medium: 'Холст, масло, резной позолоченный багет в стиле рококо',
        dimensions: '78 × 64 см',
        provenance: 'Частное собрание, Женева; фонд галереи с 1974',
        tag: 'ЗАЛ ГАЛЕРЕИ III · ИНВ. #68-22',
        origin: 'Западная Европа · Женева',
        source: 'Постоянный фонд KOCHKA',
        description: 'Поразительный контраст к светлым работам Антонова. Силуэт чёрного кота на фоне тлеющего тёмно-гранатового бархата источает абсолютное величие. Глянцевая шерсть мерцает тончайшими сливовыми переливами, а янтарный взгляд утверждает мистическую природу и неуловимую тайну кошачьего духа.',
        image: 'assets/frame_bottom_right_cat.png',
        audioTitle: 'Кураторский комментарий: Палитра обсидиана',
        cardBadge: 'Зал галереи III',
        cardMeta: 'Валерий Антонов · 1968 · Женева',
        cardSource: 'ПОСТОЯННЫЙ ФОНД KOCHKA'
      },
      'bastet': {
        title: 'Богиня Бастет в золотых серьгах',
        year: 'ок. 600 до н.э. · XXVI Саисская династия',
        artist: 'Неизвестный мастер из Саккары',
        medium: 'Бронзовое полое литьё, гравированный амулет-скарабей, серьги из чистого золота',
        dimensions: '38 × 22 × 18 см',
        provenance: 'Некрополь Саккары, Египет; Открытый архив Метрополитен-музея',
        tag: 'ДРЕВНЕЕГИПЕТСКИЙ ЗАЛ · ИНВ. #MET-600BC',
        origin: 'Средиземноморье и Нил · Древний Египет',
        source: 'Открытый архив Метрополитен-музея (API)',
        description: 'Величественное сакральное изваяние богини Бастет — воплощения защиты, домашнего очага и солярной благодати. Изящные уши украшены подлинными золотыми кольцами, а на груди выгравированы око Уаджет и крылатый скарабей. Бастет почиталась как грозная защитница фараонов и нежнейшая хранительница дома.',
        image: 'assets/cat_bastet_ancient.jpg',
        audioTitle: 'Кураторский комментарий: Бастет и культ священных кошек',
        cardBadge: 'Древнеегипетская династия',
        cardMeta: 'Мастер из Саккары · ок. 600 до н.э. · Египет',
        cardSource: 'ОТКРЫТЫЙ ФОНД МЕТ'
      },
      'dutch': {
        title: 'Страж Золотого века',
        year: 'ок. 1645 · Золотой век Голландии',
        artist: 'Круг Яна Стена и Паулюса Поттера',
        medium: 'Дуб, масло, старинная голландская рама из морёного дерева',
        dimensions: '54 × 46 см',
        provenance: 'Гильдия св. Луки, Харлем; Рейксмюсеум Амстердам Open Access',
        tag: 'ГОЛЛАНДСКИЙ ЗАЛ · ИНВ. #RJK-1645',
        origin: 'Западная Европа · Нидерланды',
        source: 'API Государственного музея Амстердама (Rijksmuseum)',
        description: 'Очаровательное камерное полотно, демонстрирующее виртуозное владение светом и фактурой голландских мастеров XVII века. Полосатый кот, чутко восседающий на изумрудном бархате рядом с серебряным кувшином и караваем хлеба, олицетворяет домашний уют и покой эпохи расцвета Амстердама.',
        image: 'assets/cat_dutch_rijks.jpg',
        audioTitle: 'Кураторский комментарий: Голландская светотень',
        cardBadge: 'Золотой век Голландии',
        cardMeta: 'Круг Яна Стена · ок. 1645 · Амстердам',
        cardSource: 'API РЕЙКСМЮСЕУМА'
      },
      'kuniyoshi': {
        title: 'Кошки 53 станций Токайдо',
        year: '1850 · Поздний период Эдо',
        artist: 'Утагава Куниёси (歌川国芳)',
        medium: 'Цветная ксилография (нисики-э) на бумаге васи',
        dimensions: '36.5 × 24.8 см',
        provenance: 'Издательская гильдия Эдо; Культурный архив Викимедиа Коммонс',
        tag: 'АРХИВ УКИЁ-Э · ИНВ. #EDO-1850',
        origin: 'Восточная Азия · Япония',
        source: 'Культурный архив Викимедиа Коммонс',
        description: 'Куниёси, прославившийся в феодальной Японии безграничной любовью к кошкам, создал эту знаменитую серию омонимов к 53 станциям тракта Токайдо. Тонкая гравюра запечатлела дремлющую трёхцветную кошку в обрамлении изящной каллиграфии и виртуозного градиента бокаси.',
        image: 'assets/cat_kuniyoshi_ukiyo.jpg',
        audioTitle: 'Кураторский комментарий: Кошачий юмор Куниёси',
        cardBadge: 'Укиё-э эпохи Эдо',
        cardMeta: 'Утагава Куниёси · 1850 · Эдо, Япония',
        cardSource: 'ВИКИМЕДИА КОММОНС'
      },
      'steinlen': {
        title: 'Турне «Чёрного кота» (Le Chat Noir)',
        year: '1896 · Прекрасная эпоха (Belle Époque)',
        artist: 'Теофиль-Александр Стейнлен',
        medium: 'Трёхцветная литография на веленевой бумаге',
        dimensions: '136 × 95 см',
        provenance: 'Архив кабаре на Монмартре; Институт искусств Чикаго',
        tag: 'МОДЕРНИЗМ МОНМАРТРА · ИНВ. #AIC-1896',
        origin: 'Западная Европа · Франция',
        source: 'Публичный API Института искусств Чикаго',
        description: 'Пожалуй, самый узнаваемый графический силуэт в истории модернизма. Созданный Стейнленом для рекламы богемного кабаре в Париже, изогнутый силуэт кота с горящими янтарными глазами и нимб из пламенеющих букв перевернули плакатное искусство и сделали кота вечным символом парижской контркультуры.',
        image: 'assets/cat_chat_noir_steinlen.jpg',
        audioTitle: 'Кураторский комментарий: Стейнлен и богема Монмартра',
        cardBadge: 'Ар-нуво Прекрасной эпохи',
        cardMeta: 'Теофиль Стейнлен · 1896 · Монмартр',
        cardSource: 'ИНСТИТУТ ИСКУССТВ ЧИКАГО'
      }
    }
  };

  const ARTWORKS = ARTWORKS_I18N.en;

  function getLocalizedArtwork(key, lang = currentLang) {
    const langDict = ARTWORKS_I18N[lang] || ARTWORKS_I18N.en;
    return langDict[key] || ARTWORKS_I18N.en[key] || null;
  }

  // ========================================================
  // 2. COMPREHENSIVE MULTI-LANGUAGE UI DICTIONARIES
  // ========================================================
  const I18N_STRINGS = {
    en: {
      docTitle: 'KOCHKA — Global Digital Museum of Classical & Contemporary Feline Art',
      brandTitle: 'Kochka Heritage Art Hall',
      navMenuAria: 'Open Curatorial Directory (+)',
      navMenuTitle: 'Curatorial Directory (+)',
      navTicketsAria: 'Reserve Gallery Tickets',
      navTicketsTitle: 'Reserve Gallery Tickets',
      ticketsNavText: 'TICKETS',
      preloaderSubtitle: 'Heritage Art Hall',
      preloaderProvenance: 'Permanent Sanctuary · Est. 1957',
      preloaderPhase1: 'Illuminating the Grand Gallery',
      preloaderPhase2: 'Restoring the Baroque Sanctuary',
      preloaderPhase3: 'Curating Centuries of Nobility',
      preloaderPhase4: 'Enter the Exhibition',
      soundOn: 'Sound: On',
      soundOff: 'Sound: Off',
      soundAria: 'Toggle Museum Sound Ambience',
      soundTitle: 'Museum Ambience: J.S. Bach — Air on the G String (US Air Force Strings)',
      frameTopLeftTitle: 'Click to inspect: Duchess Blanche of the Royal Order (1957)',
      frameCenterTitle: 'Click to inspect: Empress Genevieve in Crimson (1963)',
      frameBottomRightTitle: 'Click to inspect: Nocturne: The Obsidian Panther (1968)',
      frameBannerTitle: 'Explore Gallery: Centuries of Feline Art',
      exhibitionPortalAria: 'Explore Gallery: Centuries of Feline Art',
      exhibitionTitle: 'Current Exhibition',
      exhibitionSubtitle: 'Centuries of Feline Art',
      exhibitionDesc: 'Explore royal & classical cat portraits from 600 BC to the 20th century.',
      exhibitionCta: 'Explore Gallery',
      closeLightbox: 'Close Lightbox',
      closeTickets: 'Close Tickets Modal',
      closeMenu: 'Close Menu',
      closeExhibitions: 'Close Exhibitions',
      hallBadge: 'Hall of Heritage · Permanent Collection',
      labelArtist: 'Artist',
      labelYear: 'Creation Year / Era',
      labelMedium: 'Medium',
      labelDimensions: 'Dimensions',
      labelOrigin: 'Origin & Culture',
      labelSource: 'Curatorial Source',
      curatorCommentary: 'Curator Commentary',
      playAudio: 'Play Curatorial Commentary',
      deepZoom: 'Deep Zoom (3.5×)',
      zoomToggleTitle: 'Toggle 3.5× Deep Zoom Inspection Mode',
      zoomInTitle: 'Increase Zoom',
      zoomOutTitle: 'Decrease Zoom',
      zoomReset: 'Reset',
      zoomNormal: 'Normal',
      zoomMagnification: 'Magnification',
      printOrder: 'Order Archival Museum Print · From $85',
      printOrderTitle: 'Purchase Archival Museum-Grade Canvas Print',
      printConfirmed: 'ARCHIVAL PRINT RESERVED ✓',
      admissionTitle: 'Admission & Patronage',
      reserveTickets: 'Reserve Gallery Access',
      reserveDesc: "Experience 'The Art That Keeps Speaking' in the historic grand wing of Heritage Art Hall.",
      tabDaily: 'Daily Passes',
      tabPatron: 'Patron Memberships ($/mo)',
      dailyTiers: [
        { title: 'General Admission', desc: 'Access to all exhibition wings + digital audio tour pass' },
        { title: 'Curatorial Guided Tour', desc: '90-minute small-group tour led by Head Curator Moreau' },
        { title: 'Nocturne: Evening at the Hall', desc: 'After-hours private viewing with string quartet & vintage champagne' }
      ],
      patronTiers: [
        { title: 'Friend of Kochka', desc: 'Newsletter access, basic gallery browsing, and monthly featured spotlights.', price: 'Free' },
        { title: 'Gallery Patron', desc: 'Full audio-guide access, deep-zoom high-res downloads, and private virtual exhibition invites.', priceHtml: '$9<small>/mo</small>' },
        { title: 'Medici Circle', desc: 'Physical quarterly art prints mailed home, early access to new digital wings, and curator events.', priceHtml: '$25<small>/mo</small>' }
      ],
      checkoutReservation: 'Proceed to Reservation',
      checkoutPatron: 'Become a Gallery Patron',
      checkoutConfirmed: 'RESERVATION CONFIRMED ✓',
      patronConfirmed: 'PATRONAGE CONFIRMED ✓',
      directoryBadge: 'Brand Identity & Curatorial Archive · Est. 1957',
      directoryTitle: 'KOCHKA DIRECTORY',
      directorySubtitle: 'A global digital museum of classical and contemporary feline art across centuries.',
      conceptTag: 'Core Concept · Feline Art Across Centuries',
      pillars: [
        { title: 'Global Heritage', desc: 'Historic paintings from diverse cultures and classical epochs.' },
        { title: 'Modern Curation', desc: 'Contemporary artistic interpretations of cats in modern art.' },
        { title: 'Digital Immersion', desc: 'Sophisticated gallery web experience built for art lovers.' }
      ],
      navItems: [
        'Centuries Archive Grid (Filterable)',
        'The Feline Nobility Studies (1957–1975)',
        'Reserve Gallery Access',
        'Public Domain Museum Resources',
        'Masterpiece Sanctuary Lightbox'
      ],
      menuHours: '742 Boulevard des Arts · Open Tuesday–Sunday 10:00–21:00',
      exhibitionsBadge: 'Curatorial Archive · 02. Exhibitions Grid',
      centuriesTitle: 'CENTURIES OF FELINE ART',
      exhibitionsSubtitle: 'Filterable global museum collection spanning Ancient Egypt, Dutch Golden Age, Japanese Ukiyo-e, and 20th-century European Modernism.',
      filterEraLabel: 'Era / Epoch:',
      eraChips: {
        all: 'All Centuries',
        ancient: 'Ancient & Classical (B.C. – 1400s)',
        baroque: 'Renaissance & Baroque (1500s – 1700s)',
        modern: 'Modern & 19th C. (1800s – Present)'
      },
      filterRegionLabel: 'Geography:',
      regionChips: {
        all: 'All Regions',
        mediterranean: 'Mediterranean & Nile',
        europe: 'Western & Central Europe',
        asia: 'East Asia & Japan'
      },
      sourcingTitle: 'Curatorial Resources & Open Access Archives',
      sourcingItems: [
        { title: 'Metropolitan Museum of Art', desc: 'The Met Open Access API provides thousands of digitized high-res classical feline artifacts & antiquities.' },
        { title: 'Rijksmuseum Amsterdam', desc: 'Exceptional open repository of Dutch Golden Age paintings, chiaroscuro portraits, and still lifes.' },
        { title: 'Wikimedia Commons', desc: 'Vast global repositories of Japanese Edo-period Ukiyo-e feline woodblock prints (Utagawa Kuniyoshi).' },
        { title: 'Art Institute of Chicago', desc: 'Public API access for modern, impressionist, and Art Nouveau feline masterworks and lithographs.' }
      ]
    },
    ar: {
      docTitle: 'كوتشكا — المتحف الرقمي العالمي لفنون القطط الكلاسيكية والمعاصرة',
      brandTitle: 'قاعة كوتشكا للتراث الفني',
      navMenuAria: 'فتح دليل القيّم الفني (+)',
      navMenuTitle: 'دليل القيّم الفني (+)',
      navTicketsAria: 'حجز تذاكر المعرض',
      navTicketsTitle: 'حجز تذاكر المعرض',
      ticketsNavText: 'التذاكر',
      preloaderSubtitle: 'قاعة التراث الفني',
      preloaderProvenance: 'المجموعة الدائمة · تأسست ١٩٥٧',
      preloaderPhase1: 'إنارة الأروقة التاريخية...',
      preloaderPhase2: 'ترميم روائع الفن الباروكي...',
      preloaderPhase3: 'تجهيز مقتنيات النبلاء عبر العصور...',
      preloaderPhase4: 'الدخول إلى المعرض',
      soundOn: 'الصوت: تشغيل',
      soundOff: 'الصوت: إيقاف',
      soundAria: 'تبديل الصوت المحيطي للمتحف',
      soundTitle: 'الموسيقى المحيطية للمتحف: يوهان سباستيان باخ — لحن على وتر صول',
      frameTopLeftTitle: 'انقر للفحص: الدوقة بلانش من السلالة الملكية (1957)',
      frameCenterTitle: 'انقر للفحص: الإمبراطورة جينيفيف بالأحمر القرمزي (1963)',
      frameBottomRightTitle: 'انقر للفحص: نوكتورن: النمر الأسود السجيتي (1968)',
      frameBannerTitle: 'استكشف المعرض: قرون من فن القطط',
      exhibitionPortalAria: 'استكشف المعرض: قرون من فن القطط',
      exhibitionTitle: 'المعرض الحالي',
      exhibitionSubtitle: 'قرون من فن القطط',
      exhibitionDesc: 'استكشف لوحات القطط الملكية والكلاسيكية من عام 600 ق.م حتى القرن العشرين.',
      exhibitionCta: 'دخول المعرض',
      closeLightbox: 'إغلاق نافذة العرض',
      closeTickets: 'إغلاق نافذة التذاكر',
      closeMenu: 'إغلاق القائمة',
      closeExhibitions: 'إغلاق المعارض',
      hallBadge: 'قاعة التراث · المجموعة الدائمة',
      labelArtist: 'الفنان',
      labelYear: 'سنة الإنشاء / الحقبة',
      labelMedium: 'الخامة والتقنية',
      labelDimensions: 'الأبعاد',
      labelOrigin: 'المصدر والثقافة',
      labelSource: 'المصدر الأرشيفي',
      curatorCommentary: 'تعليق القيّم الفني',
      playAudio: 'تشغيل تعليق القيّم الفني',
      deepZoom: 'تكبير فائق (3.5×)',
      zoomToggleTitle: 'تبديل وضع التكبير الفائق 3.5×',
      zoomInTitle: 'تكبير',
      zoomOutTitle: 'تصغير',
      zoomReset: 'إعادة ضبط',
      zoomNormal: 'عادي',
      zoomMagnification: 'مكبر',
      printOrder: 'طلب طباعة فنية أرشيفية · من $85',
      printOrderTitle: 'شراء طباعة فنية متحفية فاخرة على القماش',
      printConfirmed: 'تم حجز الطباعة الأرشيفية ✓',
      admissionTitle: 'الدخول والرعاية الفنية',
      reserveTickets: 'حجز تذاكر المعرض',
      reserveDesc: 'عِش تجربة «الفن الذي يواصل الحديث» في الجناح التاريخي الفاخر لقاعة التراث الفني.',
      tabDaily: 'تذاكر يومية',
      tabPatron: 'عضويات الرعاة ($/شهر)',
      dailyTiers: [
        { title: 'الدخول العام', desc: 'دخول جميع أجنحة المعرض + تصريح الجولة الصوتية الرقمية' },
        { title: 'جولة برفقة القيّم الفني', desc: 'جولة لمدة 90 دقيقة لمجموعات صغيرة بقيادة كبير القيّمين مورو' },
        { title: 'نوكتورن: أمسية في القاعة', desc: 'مشاهدة ليلية خاصة بعد أوقات العمل مع رباعي وتري ومشروبات فاخرة' }
      ],
      patronTiers: [
        { title: 'صديق كوتشكا', desc: 'الوصول للنشرة الفنية، وتصفح أروقة المعرض، وأبرز الأعمال الشهرية.', price: 'مجاناً' },
        { title: 'راعي المعرض', desc: 'وصول كامل للدليل الصوتي، وتحميل فائق الدقة، ودعوات المعارض الافتراضية الخاصة.', priceHtml: '9$<small>/شهر</small>' },
        { title: 'دائرة ميديتشي', desc: 'مطبوعات فنية فاخرة تُرسل فصلياً لمنزلك، ووصول مبكر للأجنحة الجديدة، وفعاليات خاصة.', priceHtml: '25$<small>/شهر</small>' }
      ],
      checkoutReservation: 'متابعة الحجز',
      checkoutPatron: 'انضم كراعٍ للمعرض',
      checkoutConfirmed: 'تم تأكيد الحجز ✓',
      patronConfirmed: 'تم تأكيد الرعاية الفنية ✓',
      directoryBadge: 'الهوية المؤسسية والأرشيف التقييمي · تأسس 1957',
      directoryTitle: 'دليل كوتشكا الفني',
      directorySubtitle: 'متحف رقمي عالمي لفنون القطط الكلاسيكية والمعاصرة عبر القرون.',
      conceptTag: 'المفهوم الجوهري · فن القطط عبر القرون',
      pillars: [
        { title: 'التراث العالمي', desc: 'لوحات تاريخية من ثقافات متعددة وعصور كلاسيكية عريقة.' },
        { title: 'التقييم المعاصر', desc: 'قراءات فنية معاصرة للقطط في الفن الحديث.' },
        { title: 'الانغماس الرقمي', desc: 'تجربة ويب متحفية راقية ومصممة لعشاق الفن الراقي.' }
      ],
      navItems: [
        'أرشيف قرون الفن (قابل للتصفية)',
        'دراسات نبلاء القطط (1957–1975)',
        'حجز تذاكر زيارة المعرض',
        'موارد المتاحف مفتوحة المصدر',
        'محراب التحف الفنية (عرض سينمائي)'
      ],
      menuHours: '742 بوليفارد الفنون · مفتوح من الثلاثاء إلى الأحد 10:00–21:00',
      exhibitionsBadge: 'الأرشيف التقييمي · 02. شبكة المعارض',
      centuriesTitle: 'قرون من فن القطط عبر التاريخ',
      exhibitionsSubtitle: 'مجموعة متحفية عالمية قابلة للتصفية تمتد من مصر القديمة والعصر الذهبي الهولندي إلى فن أوكييو-إه الياباني وحداثة القرن العشرين.',
      filterEraLabel: 'الحقبة الزمنية:',
      eraChips: {
        all: 'جميع القرون',
        ancient: 'القديمة والكلاسيكية (ق.م – القرن 15)',
        baroque: 'النهضة والباروك (القرن 16 – 18)',
        modern: 'الحديث والقرن 19 (القرن 19 – المعاصر)'
      },
      filterRegionLabel: 'المنطقة الجغرافية:',
      regionChips: {
        all: 'جميع المناطق',
        mediterranean: 'حوض المتوسط والنيل',
        europe: 'أوروبا الغربية والوسطى',
        asia: 'شرق آسيا واليابان'
      },
      sourcingTitle: 'الموارد التقييمية ومصادر الوصول المفتوح',
      sourcingItems: [
        { title: 'متحف المتروبوليتان للفنون', desc: 'توفر واجهة متحف المتروبوليتان آلاف القطع الأثرية واللوحات الكلاسيكية المرقمنة للقطط بدقة عالية مجاناً.' },
        { title: 'متحف ريجكس أمستردام', desc: 'مستودع استثنائي مفتوح للوحات العصر الذهبي الهولندي، وصور الكياروسكورو، وفنون الطبيعة الصامتة.' },
        { title: 'ويكيميديا كومنز', desc: 'مستودعات عالمية ضخمة لمطبوعات الخشب اليابانية أوكييو-إه من عصر إيدو لفنان القطط أوتاغاوا كونيوشي.' },
        { title: 'معهد الفنون في شيكاغو', desc: 'واجهة برمجية مفتوحة لروائع فنون القطط الحديثة والانطباعية وليثوغرافات الآرت نوفو.' }
      ]
    },
    ru: {
      docTitle: 'KOCHKA — Всемирный цифровой музей классического и современного кошачьего искусства',
      brandTitle: 'Галерея наследия Kochka',
      navMenuAria: 'Открыть кураторский каталог (+)',
      navMenuTitle: 'Кураторский каталог (+)',
      navTicketsAria: 'Забронировать билеты в галерею',
      navTicketsTitle: 'Забронировать билеты в галерею',
      ticketsNavText: 'БИЛЕТЫ',
      preloaderSubtitle: 'Зал Художественного Наследия',
      preloaderProvenance: 'Постоянная Экспозиция · Осн. 1957',
      preloaderPhase1: 'Освещение парадных залов...',
      preloaderPhase2: 'Реставрация шедевров барокко...',
      preloaderPhase3: 'Экспозиция королевских полотен...',
      preloaderPhase4: 'Добро пожаловать в галерею',
      soundOn: 'Звук: Вкл',
      soundOff: 'Звук: Выкл',
      soundAria: 'Переключить фоновый звук музея',
      soundTitle: 'Фоновая музыка музея: И.С. Бах — Воздух (Ария из Сюиты №3)',
      frameTopLeftTitle: 'Нажмите для осмотра: Герцогиня Бланш Королевского ордена (1957)',
      frameCenterTitle: 'Нажмите для осмотра: Императрица Женевьева в багряном (1963)',
      frameBottomRightTitle: 'Нажмите для осмотра: Ноктюрн: Обсидиановая пантера (1968)',
      frameBannerTitle: 'Открыть галерею: Века кошачьего искусства',
      exhibitionPortalAria: 'Открыть галерею: Века кошачьего искусства',
      exhibitionTitle: 'Текущая выставка',
      exhibitionSubtitle: 'Века кошачьего искусства',
      exhibitionDesc: 'Исследуйте королевские и классические портреты кошек с 600 г. до н.э. по XX век.',
      exhibitionCta: 'Открыть галерею',
      closeLightbox: 'Закрыть окно просмотра',
      closeTickets: 'Закрыть окно билетов',
      closeMenu: 'Закрыть меню',
      closeExhibitions: 'Закрыть выставки',
      hallBadge: 'Зал наследия · Постоянная коллекция',
      labelArtist: 'Художник',
      labelYear: 'Год создания / Эпоха',
      labelMedium: 'Техника и материалы',
      labelDimensions: 'Размеры',
      labelOrigin: 'Происхождение и культура',
      labelSource: 'Кураторский источник',
      curatorCommentary: 'Кураторский комментарий',
      playAudio: 'Слушать кураторский комментарий',
      deepZoom: 'Детальный зум (3.5×)',
      zoomToggleTitle: 'Режим детального 3.5× зума',
      zoomInTitle: 'Увеличить',
      zoomOutTitle: 'Уменьшить',
      zoomReset: 'Сброс',
      zoomNormal: 'Обычный',
      zoomMagnification: 'Увеличенный',
      printOrder: 'Заказать музейный принт · от $85',
      printOrderTitle: 'Заказать музейный принт архивного качества на холсте',
      printConfirmed: 'МУЗЕЙНЫЙ ПРИНТ ЗАКАЗАН ✓',
      admissionTitle: 'Вход и меценатство',
      reserveTickets: 'Забронировать визит',
      reserveDesc: 'Почувствуйте «Искусство, которое продолжает говорить» в историческом гранд-крыле Heritage Art Hall.',
      tabDaily: 'Дневные билеты',
      tabPatron: 'Клуб меценатов ($/мес)',
      dailyTiers: [
        { title: 'Стандартный билет', desc: 'Доступ ко всем выставочным залам + цифровой аудиогид' },
        { title: 'Кураторская экскурсия', desc: '90-минутная экскурсия в мини-группе с главным куратором Моро' },
        { title: 'Ноктюрн: Вечер в галерее', desc: 'Эксклюзивный вечерний просмотр с живым струнным квартетом и шампанским' }
      ],
      patronTiers: [
        { title: 'Друг Kochka', desc: 'Доступ к дайджесту, базовый просмотр галереи и ежемесячные премьеры.', price: 'Бесплатно' },
        { title: 'Патрон галереи', desc: 'Полный доступ к аудиогидам, загрузка шедевров в супер-HD и закрытые онлайн-показы.', priceHtml: '$9<small>/мес</small>' },
        { title: 'Круг Медичи', desc: 'Фирменные арт-принты почтой каждый квартал, ранний доступ к новым залам и встречи с кураторами.', priceHtml: '$25<small>/мес</small>' }
      ],
      checkoutReservation: 'Перейти к бронированию',
      checkoutPatron: 'Стать меценатом галереи',
      checkoutConfirmed: 'БРОНИРОВАНИЕ ПОДТВЕРЖДЕНО ✓',
      patronConfirmed: 'МЕЦЕНАТСТВО ОФОРМЛЕНО ✓',
      directoryBadge: 'Идентичность бренда и кураторский архив · Осн. 1957',
      directoryTitle: 'КАТАЛОГ KOCHKA',
      directorySubtitle: 'Глобальный цифровой музей классического и современного кошачьего искусства сквозь века.',
      conceptTag: 'Ключевая концепция · Кошачье искусство сквозь века',
      pillars: [
        { title: 'Мировое наследие', desc: 'Исторические полотна разных культур и классических эпох.' },
        { title: 'Современный взгляд', desc: 'Актуальные художественные интерпретации кошек в искусстве.' },
        { title: 'Цифровое погружение', desc: 'Интерактивная галерея премиум-класса для ценителей прекрасного.' }
      ],
      navItems: [
        'Архив шедевров сквозь века (С фильтрами)',
        'Исследования кошачьей знати (1957–1975)',
        'Забронировать доступ в залы',
        'Музейные открытые фонды',
        'Главный шедевр (Детальный просмотр)'
      ],
      menuHours: 'Бульвар Искусств, 742 · Вт–Вс с 10:00 до 21:00',
      exhibitionsBadge: 'Кураторский архив · 02. Сетка выставок',
      centuriesTitle: 'ВЕКА КОШАЧЬЕГО ИСКУССТВА',
      exhibitionsSubtitle: 'Коллекция мировых музеев с фильтрами: Древний Египет, Золотой век Голландии, японская гравюра укиё-э и европейский модернизм XX века.',
      filterEraLabel: 'Эпоха / Период:',
      eraChips: {
        all: 'Все века',
        ancient: 'Древность и классика (до XV в.)',
        baroque: 'Ренессанс и барокко (XVI – XVIII вв.)',
        modern: 'Модерн и XIX век (XIX в. – по сей день)'
      },
      filterRegionLabel: 'Регион:',
      regionChips: {
        all: 'Все регионы',
        mediterranean: 'Средиземноморье и Нил',
        europe: 'Западная и Центральная Европа',
        asia: 'Восточная Азия и Япония'
      },
      sourcingTitle: 'Кураторские ресурсы и открытые музейные архивы',
      sourcingItems: [
        { title: 'Метрополитен-музей', desc: 'API открытого доступа Метрополитен-музея предоставляет тысячи оцифрованных артефактов и шедевров о кошках в высоком разрешении.' },
        { title: 'Рейксмюсеум Амстердам', desc: 'Уникальное открытое собрание живописи Золотого века Голландии, портретов кьяроскуро и натюрмортов.' },
        { title: 'Викимедиа Коммонс', desc: 'Крупнейшие мировые фонды японской гравюры эпохи Эдо укиё-э (включая серии кошек Утагавы Куниёси).' },
        { title: 'Институт искусств Чикаго', desc: 'Публичный API для доступа к шедеврам модернизма, импрессионизма и литографиям эпохи модерна (ар-нуво).' }
      ]
    }
  };

  // State variables
  let currentArtworkKey = 'center-oval';
  let currentLang = 'en';
  let isSoundEnabled = false;
  let currentZoom = 1.0;
  let isAudioPlaying = false;
  let audioSynthTimer = null;
  let audioCtx = null;
  let ambientDrone = null;
  let ambientGain = null;
  const ambientAudio = document.getElementById('ambient-museum-audio');
  const AMBIENT_TARGET_VOLUME = 0.38;
  const AMBIENT_DUCKED_VOLUME = 0.10;
  let ambientFadeInterval = null;

  // ========================================================
  // 3. DOM REFERENCES
  // ========================================================
  const frameElements = document.querySelectorAll('.interactive-frame-layer');
  const spotlight = document.querySelector('.mouse-spotlight');
  const soundToggleBtn = document.getElementById('sound-toggle');
  
  // Modals
  const artworkModal = document.getElementById('artwork-modal');
  const ticketModal = document.getElementById('ticket-modal');
  const menuModal = document.getElementById('menu-modal');
  const exhibitionsModal = document.getElementById('exhibitions-modal');
  
  // Triggers & Controls
  const ticketsBtn = document.getElementById('tickets-trigger');
  const menuBtn = document.getElementById('menu-trigger');
  const currentExhibitionCard = document.getElementById('current-exhibition-trigger');
  const archiveQuickBtn = document.getElementById('archive-quick-btn');
  const themeToggleBtn = document.getElementById('theme-toggle');
  
  // Audio Player in Modal
  const audioPlayBtn = document.getElementById('audio-play-btn');
  const audioGuidePlayer = document.getElementById('audio-guide-player');

  // Deep Zoom DOM Elements
  const zoomContainer = document.getElementById('zoom-container');
  const zoomImg = document.getElementById('modal-artwork-img');
  const zoomToggleBtn = document.getElementById('zoom-toggle-btn');
  const zoomInBtn = document.getElementById('zoom-in-btn');
  const zoomOutBtn = document.getElementById('zoom-out-btn');
  const zoomResetBtn = document.getElementById('zoom-reset-btn');
  const zoomLevelText = document.getElementById('zoom-level-text');

  // Tickets Controls
  const tabDailyBtn = document.getElementById('tab-daily-btn');
  const tabPatronBtn = document.getElementById('tab-patron-btn');
  const dailyTicketOptions = document.getElementById('daily-ticket-options');
  const monthlyPatronOptions = document.getElementById('monthly-patron-options');
  const checkoutBtn = document.getElementById('checkout-btn');
  const printOrderBtn = document.getElementById('print-order-btn');

  // ========================================================
  // 4. ARTWORK MODAL POPULATION & CONTROL
  // ========================================================
  function populateArtworkModal(key, lang = currentLang) {
    const art = getLocalizedArtwork(key, lang);
    const s = I18N_STRINGS[lang] || I18N_STRINGS.en;
    if (!art) return;

    const imgEl = document.getElementById('modal-artwork-img');
    if (imgEl) {
      imgEl.src = art.image;
      imgEl.alt = art.title;
    }
    const tagEl = document.getElementById('modal-tag');
    if (tagEl) tagEl.textContent = art.tag;

    const titleEl = document.getElementById('modal-title');
    if (titleEl) titleEl.textContent = art.title;

    const artistEl = document.getElementById('modal-artist');
    if (artistEl) artistEl.textContent = art.artist;

    const yearEl = document.getElementById('modal-year');
    if (yearEl) yearEl.textContent = art.year;

    const mediumEl = document.getElementById('modal-medium');
    if (mediumEl) mediumEl.textContent = art.medium;

    const dimensionsEl = document.getElementById('modal-dimensions');
    if (dimensionsEl) dimensionsEl.textContent = art.dimensions;

    const originEl = document.getElementById('modal-origin');
    if (originEl) originEl.textContent = art.origin;

    const sourceEl = document.getElementById('modal-source');
    if (sourceEl) sourceEl.textContent = art.source;

    const statementEl = document.getElementById('modal-statement');
    if (statementEl) statementEl.textContent = art.description;

    const audioTitleEl = document.getElementById('modal-audio-title');
    if (audioTitleEl) audioTitleEl.textContent = art.audioTitle;

    const modalBadge = document.querySelector('#artwork-modal .modal-badge');
    if (modalBadge) modalBadge.textContent = s.hallBadge;
  }

  function openArtworkModal(dataOrKey) {
    if (!dataOrKey) return;
    let key = 'center-oval';
    if (typeof dataOrKey === 'string') {
      key = dataOrKey;
    } else if (dataOrKey.key) {
      key = dataOrKey.key;
    } else if (dataOrKey.title) {
      for (const l of ['en', 'ar', 'ru']) {
        const found = Object.keys(ARTWORKS_I18N[l] || {}).find(k => ARTWORKS_I18N[l][k].title === dataOrKey.title);
        if (found) { key = found; break; }
      }
    }
    currentArtworkKey = key;
    populateArtworkModal(currentArtworkKey, currentLang);
    resetZoom();
    stopAudioGuide();
    artworkModal.classList.add('open');
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('open');
    if (modal === artworkModal) {
      stopAudioGuide();
      resetZoom();
    }
  }

  // Close buttons & overlay clicks
  document.querySelectorAll('.modal-close-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const modal = e.target.closest('.modal-overlay');
      if (modal) closeModal(modal);
    });
  });

  document.querySelectorAll('.modal-overlay').forEach((overlay) => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal(overlay);
      }
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.open').forEach(closeModal);
    }
  });

  // ========================================================
  // 5. MASTER LANGUAGE ENGINE (Synchronizes All Views & Modals)
  // ========================================================
  function applyLanguage(lang) {
    currentLang = lang;
    const s = I18N_STRINGS[lang] || I18N_STRINGS.en;
    document.title = s.docTitle;
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    localStorage.setItem('kochka-lang', lang);

    if (lang === 'ar') {
      document.body.classList.add('lang-ar');
      document.documentElement.classList.add('lang-ar');
    } else {
      document.body.classList.remove('lang-ar');
      document.documentElement.classList.remove('lang-ar');
    }

    // Active state in dock
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Top Navigation
    const menuBtnEl = document.getElementById('menu-trigger');
    if (menuBtnEl) {
      menuBtnEl.setAttribute('aria-label', s.navMenuAria);
      menuBtnEl.setAttribute('title', s.navMenuTitle);
    }
    const preloaderSub = document.getElementById('preloader-subtitle');
    if (preloaderSub) preloaderSub.textContent = s.preloaderSubtitle || 'Heritage Art Hall';
    const preloaderProv = document.getElementById('preloader-provenance');
    if (preloaderProv) preloaderProv.textContent = s.preloaderProvenance || 'Permanent Sanctuary · Est. 1957';
    const brandEl = document.querySelector('.brand-insignia');
    if (brandEl) {
      brandEl.setAttribute('aria-label', s.brandTitle);
      brandEl.setAttribute('title', s.brandTitle);
    }
    const ticketsBtnEl = document.getElementById('tickets-trigger');
    if (ticketsBtnEl) {
      ticketsBtnEl.setAttribute('aria-label', s.navTicketsAria);
      ticketsBtnEl.setAttribute('title', s.navTicketsTitle);
      const ticketsTextEl = ticketsBtnEl.querySelector('.tickets-btn-text');
      if (ticketsTextEl) ticketsTextEl.textContent = s.ticketsNavText || 'TICKETS';
    }

    // Interactive Frames Tooltips
    const frameTopLeft = document.querySelector('.frame-top-left');
    if (frameTopLeft) frameTopLeft.setAttribute('title', s.frameTopLeftTitle);
    const frameCenter = document.querySelector('.frame-center-oval');
    if (frameCenter) frameCenter.setAttribute('title', s.frameCenterTitle);
    const frameBottomRight = document.querySelector('.frame-bottom-right');
    if (frameBottomRight) frameBottomRight.setAttribute('title', s.frameBottomRightTitle);
    const frameBanner = document.querySelector('.frame-banner-cat');
    if (frameBanner) frameBanner.setAttribute('title', s.frameBannerTitle);

    // Red Square Exhibition Portal
    const portalBtn = document.getElementById('current-exhibition-trigger');
    if (portalBtn) {
      portalBtn.setAttribute('aria-label', s.exhibitionPortalAria);
      portalBtn.setAttribute('title', s.exhibitionPortalAria);
    }
    const exTitle = document.getElementById('exhibition-card-title');
    if (exTitle) exTitle.textContent = s.exhibitionTitle;
    const exSubtitle = document.getElementById('exhibition-card-subtitle');
    if (exSubtitle) exSubtitle.textContent = s.exhibitionSubtitle;
    const exDesc = document.getElementById('exhibition-card-desc');
    if (exDesc) exDesc.textContent = s.exhibitionDesc;
    const exCta = document.getElementById('exhibition-card-cta');
    if (exCta) exCta.textContent = s.exhibitionCta;
    const exArrow = document.querySelector('.exhibition-action-arrow');
    if (exArrow) exArrow.innerHTML = (lang === 'ar') ? '&larr;' : '&rarr;';

    // Ambient Sound Toggle
    const soundStatus = document.querySelector('.sound-status-text');
    if (soundStatus) soundStatus.textContent = isSoundEnabled ? s.soundOn : s.soundOff;
    if (soundToggleBtn) {
      soundToggleBtn.setAttribute('aria-label', s.soundAria);
      soundToggleBtn.setAttribute('title', s.soundTitle || s.soundAria);
    }

    // Modal Close Buttons
    const artModalClose = artworkModal ? artworkModal.querySelector('.modal-close-btn') : null;
    if (artModalClose) artModalClose.setAttribute('aria-label', s.closeLightbox);
    const ticketClose = ticketModal ? ticketModal.querySelector('.modal-close-btn') : null;
    if (ticketClose) ticketClose.setAttribute('aria-label', s.closeTickets);
    const menuClose = menuModal ? menuModal.querySelector('.modal-close-btn') : null;
    if (menuClose) menuClose.setAttribute('aria-label', s.closeMenu);
    const exClose = exhibitionsModal ? exhibitionsModal.querySelector('.modal-close-btn') : null;
    if (exClose) exClose.setAttribute('aria-label', s.closeExhibitions);

    // Lightbox Modal Controls & Labels
    const zoomToggle = document.getElementById('zoom-toggle-btn');
    if (zoomToggle) zoomToggle.setAttribute('title', s.zoomToggleTitle);
    const zoomLabel = document.querySelector('#zoom-toggle-btn .zoom-label');
    if (zoomLabel) zoomLabel.textContent = s.deepZoom;
    const zoomIn = document.getElementById('zoom-in-btn');
    if (zoomIn) zoomIn.setAttribute('title', s.zoomInTitle);
    const zoomOut = document.getElementById('zoom-out-btn');
    if (zoomOut) zoomOut.setAttribute('title', s.zoomOutTitle);
    const zoomReset = document.getElementById('zoom-reset-btn');
    if (zoomReset) {
      zoomReset.textContent = s.zoomReset;
      zoomReset.setAttribute('title', s.zoomReset);
    }

    const metaLabels = document.querySelectorAll('.modal-meta-grid .meta-label');
    if (metaLabels && metaLabels.length >= 6) {
      metaLabels[0].textContent = s.labelArtist;
      metaLabels[1].textContent = s.labelYear;
      metaLabels[2].textContent = s.labelMedium;
      metaLabels[3].textContent = s.labelDimensions;
      metaLabels[4].textContent = s.labelOrigin;
      metaLabels[5].textContent = s.labelSource;
    }

    const audioPlayBtnEl = document.getElementById('audio-play-btn');
    if (audioPlayBtnEl) audioPlayBtnEl.setAttribute('aria-label', s.playAudio);

    const audioTitleEl = document.getElementById('modal-audio-title');
    if (audioTitleEl) {
      const art = getLocalizedArtwork(currentArtworkKey, lang);
      audioTitleEl.textContent = art ? art.audioTitle : s.curatorCommentary;
    }

    if (printOrderBtn && !printOrderBtn.textContent.includes('✓')) {
      printOrderBtn.innerHTML = `<span class="print-icon">&#128444;</span> ${s.printOrder}`;
      printOrderBtn.setAttribute('title', s.printOrderTitle);
    }

    // Refresh Lightbox artwork data
    if (currentArtworkKey) {
      populateArtworkModal(currentArtworkKey, lang);
    }
    updateZoomUI();

    // Tickets Modal
    const ticketBadge = document.querySelector('#ticket-modal .modal-badge');
    if (ticketBadge) ticketBadge.textContent = s.admissionTitle;
    const ticketModalTitle = document.getElementById('ticket-modal-title');
    if (ticketModalTitle) ticketModalTitle.textContent = s.reserveTickets;
    const ticketDesc = document.querySelector('.ticket-header p');
    if (ticketDesc) ticketDesc.textContent = s.reserveDesc;
    const tabDaily = document.getElementById('tab-daily-btn');
    if (tabDaily) tabDaily.textContent = s.tabDaily;
    const tabPatron = document.getElementById('tab-patron-btn');
    if (tabPatron) tabPatron.textContent = s.tabPatron;

    const dailyRows = document.querySelectorAll('#daily-ticket-options .ticket-tier-row');
    if (dailyRows && dailyRows.length >= 3) {
      dailyRows[0].querySelector('h4').textContent = s.dailyTiers[0].title;
      dailyRows[0].querySelector('p').textContent = s.dailyTiers[0].desc;
      dailyRows[1].querySelector('h4').textContent = s.dailyTiers[1].title;
      dailyRows[1].querySelector('p').textContent = s.dailyTiers[1].desc;
      dailyRows[2].querySelector('h4').textContent = s.dailyTiers[2].title;
      dailyRows[2].querySelector('p').textContent = s.dailyTiers[2].desc;
    }

    const patronRows = document.querySelectorAll('#monthly-patron-options .ticket-tier-row');
    if (patronRows && patronRows.length >= 3) {
      patronRows[0].querySelector('h4').textContent = s.patronTiers[0].title;
      patronRows[0].querySelector('p').textContent = s.patronTiers[0].desc;
      patronRows[0].querySelector('.tier-price').textContent = s.patronTiers[0].price;

      patronRows[1].querySelector('h4').textContent = s.patronTiers[1].title;
      patronRows[1].querySelector('p').textContent = s.patronTiers[1].desc;
      patronRows[1].querySelector('.tier-price').innerHTML = s.patronTiers[1].priceHtml;

      patronRows[2].querySelector('h4').textContent = s.patronTiers[2].title;
      patronRows[2].querySelector('p').textContent = s.patronTiers[2].desc;
      patronRows[2].querySelector('.tier-price').innerHTML = s.patronTiers[2].priceHtml;
    }

    if (checkoutBtn && !checkoutBtn.textContent.includes('✓')) {
      const isPatronActive = tabPatronBtn && tabPatronBtn.classList.contains('active');
      checkoutBtn.textContent = isPatronActive ? s.checkoutPatron : s.checkoutReservation;
    }

    // Curatorial Directory Modal ("+")
    const menuBadge = document.querySelector('#menu-modal .modal-badge');
    if (menuBadge) menuBadge.textContent = s.directoryBadge;
    const menuTitle = document.getElementById('menu-modal-title');
    if (menuTitle) menuTitle.textContent = s.directoryTitle;
    const menuSubtitle = document.querySelector('.menu-modal-container > p');
    if (menuSubtitle) menuSubtitle.textContent = s.directorySubtitle;

    const conceptTag = document.querySelector('.concept-section-tag');
    if (conceptTag) conceptTag.textContent = s.conceptTag;

    const pillarCards = document.querySelectorAll('.concept-pillar-card');
    if (pillarCards && pillarCards.length >= 3) {
      pillarCards[0].querySelector('h4').textContent = s.pillars[0].title;
      pillarCards[0].querySelector('p').textContent = s.pillars[0].desc;
      pillarCards[1].querySelector('h4').textContent = s.pillars[1].title;
      pillarCards[1].querySelector('p').textContent = s.pillars[1].desc;
      pillarCards[2].querySelector('h4').textContent = s.pillars[2].title;
      pillarCards[2].querySelector('p').textContent = s.pillars[2].desc;
    }

    const navLinks = document.querySelectorAll('.menu-nav-item a');
    if (navLinks && navLinks.length >= 5) {
      navLinks[0].innerHTML = `<span class="nav-idx">01</span> ${s.navItems[0]}`;
      navLinks[1].innerHTML = `<span class="nav-idx">02</span> ${s.navItems[1]}`;
      navLinks[2].innerHTML = `<span class="nav-idx">03</span> ${s.navItems[2]}`;
      navLinks[3].innerHTML = `<span class="nav-idx">04</span> ${s.navItems[3]}`;
      navLinks[4].innerHTML = `<span class="nav-idx">05</span> ${s.navItems[4]}`;
    }

    const menuFooter = document.querySelector('.menu-modal-container > p:last-child');
    if (menuFooter) menuFooter.textContent = s.menuHours;

    // Exhibitions Grid Modal
    const exBadge = document.querySelector('#exhibitions-modal .modal-badge');
    if (exBadge) exBadge.textContent = s.exhibitionsBadge;
    const exhibitionsTitle = document.getElementById('exhibitions-modal-title');
    if (exhibitionsTitle) exhibitionsTitle.textContent = s.centuriesTitle;
    const exhibitionsSubtitle = document.querySelector('.exhibitions-header p');
    if (exhibitionsSubtitle) exhibitionsSubtitle.textContent = s.exhibitionsSubtitle;

    const filterLabels = document.querySelectorAll('.filter-label');
    if (filterLabels && filterLabels.length >= 2) {
      filterLabels[0].textContent = s.filterEraLabel;
      filterLabels[1].textContent = s.filterRegionLabel;
    }

    const eraChips = document.querySelectorAll('#filter-era-chips .filter-chip');
    if (eraChips && eraChips.length >= 4) {
      eraChips[0].textContent = s.eraChips.all;
      eraChips[1].textContent = s.eraChips.ancient;
      eraChips[2].textContent = s.eraChips.baroque;
      eraChips[3].textContent = s.eraChips.modern;
    }

    const regionChips = document.querySelectorAll('#filter-region-chips .filter-chip');
    if (regionChips && regionChips.length >= 4) {
      regionChips[0].textContent = s.regionChips.all;
      regionChips[1].textContent = s.regionChips.mediterranean;
      regionChips[2].textContent = s.regionChips.europe;
      regionChips[3].textContent = s.regionChips.asia;
    }

    // 8 Archive Cards in Grid
    document.querySelectorAll('.archive-card').forEach(card => {
      const key = card.dataset.artworkKey;
      if (key && ARTWORKS_I18N[lang] && ARTWORKS_I18N[lang][key]) {
        const art = ARTWORKS_I18N[lang][key];
        const b = card.querySelector('.archive-badge');
        if (b) b.textContent = art.cardBadge || art.tag;
        const t = card.querySelector('.archive-card-title');
        if (t) t.textContent = art.title;
        const m = card.querySelector('.archive-card-meta');
        if (m) m.textContent = art.cardMeta;
        const p = card.querySelector('.archive-source-pill');
        if (p) p.textContent = art.cardSource;
        const img = card.querySelector('.archive-card-thumb img');
        if (img) img.alt = art.title;
      }
    });

    // Sourcing section
    const sourcingTitle = document.querySelector('.sourcing-title');
    if (sourcingTitle) sourcingTitle.textContent = s.sourcingTitle;

    const sourcingItems = document.querySelectorAll('.sourcing-item');
    if (sourcingItems && sourcingItems.length >= 4) {
      for (let i = 0; i < 4; i++) {
        sourcingItems[i].querySelector('h5').textContent = s.sourcingItems[i].title;
        sourcingItems[i].querySelector('p').textContent = s.sourcingItems[i].desc;
      }
    }
  }

  // ========================================================
  // 6. DEEP ZOOM ENGINE
  // ========================================================
  function updateZoomUI() {
    if (zoomImg) {
      zoomImg.style.transform = `scale(${currentZoom})`;
    }
    if (zoomContainer) {
      zoomContainer.classList.toggle('zoomed', currentZoom > 1.0);
    }
    if (zoomToggleBtn) {
      zoomToggleBtn.classList.toggle('active', currentZoom > 1.0);
    }
    if (zoomLevelText) {
      const s = I18N_STRINGS[currentLang] || I18N_STRINGS.en;
      zoomLevelText.textContent = currentZoom > 1.0 
        ? `${currentZoom.toFixed(1)}× ${s.zoomMagnification || 'Magnification'}` 
        : `1.0× ${s.zoomNormal || 'Normal'}`;
    }
  }

  function resetZoom() {
    currentZoom = 1.0;
    if (zoomImg) {
      zoomImg.style.transformOrigin = 'center center';
    }
    updateZoomUI();
  }

  if (zoomToggleBtn) {
    zoomToggleBtn.addEventListener('click', () => {
      if (currentZoom > 1.0) {
        resetZoom();
      } else {
        currentZoom = 3.5;
        updateZoomUI();
      }
      playMuseumChime(580);
    });
  }

  if (zoomInBtn) {
    zoomInBtn.addEventListener('click', () => {
      currentZoom = Math.min(5.0, Number((currentZoom + 0.75).toFixed(2)));
      updateZoomUI();
      playMuseumChime(620);
    });
  }

  if (zoomOutBtn) {
    zoomOutBtn.addEventListener('click', () => {
      currentZoom = Math.max(1.0, Number((currentZoom - 0.75).toFixed(2)));
      if (currentZoom <= 1.0) resetZoom();
      else updateZoomUI();
      playMuseumChime(500);
    });
  }

  if (zoomResetBtn) {
    zoomResetBtn.addEventListener('click', () => {
      resetZoom();
      playMuseumChime(440);
    });
  }

  if (zoomContainer) {
    zoomContainer.addEventListener('mousemove', (e) => {
      if (currentZoom <= 1.0 || !zoomImg) return;
      const rect = zoomContainer.getBoundingClientRect();
      const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
      const yPercent = ((e.clientY - rect.top) / rect.height) * 100;
      zoomImg.style.transformOrigin = `${xPercent.toFixed(1)}% ${yPercent.toFixed(1)}%`;
    });

    // Touchscreen Pan for Phones and Tablets
    zoomContainer.addEventListener('touchmove', (e) => {
      if (currentZoom <= 1.0 || !zoomImg || !e.touches || !e.touches[0]) return;
      const touch = e.touches[0];
      const rect = zoomContainer.getBoundingClientRect();
      const xPercent = Math.max(0, Math.min(100, ((touch.clientX - rect.left) / rect.width) * 100));
      const yPercent = Math.max(0, Math.min(100, ((touch.clientY - rect.top) / rect.height) * 100));
      zoomImg.style.transformOrigin = `${xPercent.toFixed(1)}% ${yPercent.toFixed(1)}%`;
      if (e.cancelable) e.preventDefault();
    }, { passive: false });
  }

  // ========================================================
  // 7. LIGHTWEIGHT FAST SPOTLIGHT & 60/120FPS GPU PHYSICS
  // ========================================================
  let mouseScreenX = window.innerWidth / 2;
  let mouseScreenY = window.innerHeight / 2;
  let spotlightX = mouseScreenX;
  let spotlightY = mouseScreenY;

  window.addEventListener('mousemove', (e) => {
    mouseScreenX = e.clientX;
    mouseScreenY = e.clientY;
  }, { passive: true });

  const frameStates = [];

  frameElements.forEach((el) => {
    const isCenter = el.classList.contains('frame-center-oval');
    const depthRim = el.querySelector('.frame-volumetric-depth');
    const mouldingPlane = el.querySelector('.frame-moulding-plane');
    const mouldingImg = el.querySelector('.frame-moulding-plane img');
    const sheen = el.querySelector('.frame-sheen');
    const glare = el.querySelector('.frame-varnish-glare');
    const artKey = el.dataset.artworkKey;

    const state = {
      el,
      depthRim,
      mouldingPlane,
      mouldingImg,
      sheen,
      glare,
      artKey,
      isCenter,
      restRotX: isCenter ? 6.0 : 0,
      restRotY: isCenter ? -12.0 : 0,
      restRotZ: isCenter ? -2.5 : 0,
      targetRotX: isCenter ? 6.0 : 0,
      targetRotY: isCenter ? -12.0 : 0,
      targetRotZ: isCenter ? -2.5 : 0,
      targetZ: 0,
      targetScale: 1.0,
      targetSheenX: 50,
      targetSheenY: 50,
      targetGlareAngle: 45,
      isHovered: false,
      curRotX: isCenter ? 6.0 : 0,
      curRotY: isCenter ? -12.0 : 0,
      curRotZ: isCenter ? -2.5 : 0,
      curZ: 0,
      curScale: 1.0,
      curSheenX: 50,
      curSheenY: 50,
      curGlareAngle: 45,
      maxTilt: isCenter ? 14 : 10,
      hoverScale: isCenter ? 1.07 : 1.05,
      hoverZ: isCenter ? 65 : 45,
      isResting: true,
      rect: null
    };

    frameStates.push(state);

    el.addEventListener('pointerenter', () => {
      state.isHovered = true;
      state.isResting = false;
      state.targetScale = state.hoverScale;
      state.targetZ = state.hoverZ;
      state.rect = el.getBoundingClientRect();
      playMuseumChime(isCenter ? 620 : 540);
    }, { passive: true });

    el.addEventListener('pointermove', (e) => {
      const rect = state.rect || el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width * 0.5;
      const centerY = rect.height * 0.5;
      
      const normX = Math.max(-1, Math.min(1, (x - centerX) / centerX));
      const normY = Math.max(-1, Math.min(1, (y - centerY) / centerY));
      
      state.targetRotX = state.restRotX - normY * state.maxTilt;
      state.targetRotY = state.restRotY + normX * state.maxTilt;
      state.targetRotZ = state.restRotZ - normX * 2.8;
      
      state.targetSheenX = (x / rect.width) * 100;
      state.targetSheenY = (y / rect.height) * 100;
      state.targetGlareAngle = Math.atan2(normY, normX) * (180 / Math.PI) + 90;
    }, { passive: true });

    el.addEventListener('pointerleave', () => {
      state.isHovered = false;
      state.rect = null;
      state.targetRotX = state.restRotX;
      state.targetRotY = state.restRotY;
      state.targetRotZ = state.restRotZ;
      state.targetZ = 0;
      state.targetScale = 1.0;
      state.targetSheenX = 50;
      state.targetSheenY = 50;
      state.targetGlareAngle = 45;
    }, { passive: true });

    el.addEventListener('click', (e) => {
      e.stopPropagation();
      if (el.classList.contains('frame-banner-cat')) {
        if (exhibitionsModal) {
          exhibitionsModal.classList.add('open');
          playMuseumChime(480);
          return;
        }
      }
      if (state.artKey && ARTWORKS_I18N[currentLang] && ARTWORKS_I18N[currentLang][state.artKey]) {
        openArtworkModal(state.artKey);
        playMuseumChime(680);
      }
    });
  });

  window.addEventListener('resize', () => {
    frameStates.forEach(s => s.rect = null);
  }, { passive: true });

  const LERP_FACTOR = 0.085;

  function animationLoop(timestamp) {
    if (document.hidden) {
      requestAnimationFrame(animationLoop);
      return;
    }

    if (spotlight) {
      const dx = mouseScreenX - spotlightX;
      const dy = mouseScreenY - spotlightY;
      if (Math.abs(dx) > 0.4 || Math.abs(dy) > 0.4) {
        spotlightX += dx * 0.15;
        spotlightY += dy * 0.15;
        spotlight.style.transform = `translate3d(${spotlightX.toFixed(1)}px, ${spotlightY.toFixed(1)}px, 0) translate(-50%, -50%)`;
      }
    }

    for (let i = 0; i < frameStates.length; i++) {
      const s = frameStates[i];

      if (!s.isHovered && s.isResting) {
        continue;
      }

      s.curRotX += (s.targetRotX - s.curRotX) * LERP_FACTOR;
      s.curRotY += (s.targetRotY - s.curRotY) * LERP_FACTOR;
      s.curRotZ += (s.targetRotZ - s.curRotZ) * LERP_FACTOR;
      s.curZ += (s.targetZ - s.curZ) * LERP_FACTOR;
      s.curScale += (s.targetScale - s.curScale) * LERP_FACTOR;

      if (!s.isHovered) {
        if (
          Math.abs(s.curRotX - s.restRotX) < 0.03 &&
          Math.abs(s.curRotY - s.restRotY) < 0.03 &&
          Math.abs(s.curRotZ - s.restRotZ) < 0.03 &&
          Math.abs(s.curZ) < 0.05 &&
          Math.abs(s.curScale - 1.0) < 0.002
        ) {
          s.curRotX = s.restRotX;
          s.curRotY = s.restRotY;
          s.curRotZ = s.restRotZ;
          s.curZ = 0;
          s.curScale = 1.0;
          s.isResting = true;
        }
      }

      s.curSheenX += (s.targetSheenX - s.curSheenX) * 0.12;
      s.curSheenY += (s.targetSheenY - s.curSheenY) * 0.12;

      const rotXStr = s.curRotX.toFixed(2);
      const rotYStr = s.curRotY.toFixed(2);
      const rotZStr = s.curRotZ.toFixed(2);
      const scaleStr = s.curScale.toFixed(3);
      const zStr = s.curZ.toFixed(1);

      s.el.style.transform = `perspective(1100px) rotateX(${rotXStr}deg) rotateY(${rotYStr}deg) rotateZ(${rotZStr}deg) translateZ(${zStr}px) scale(${scaleStr})`;

      if (s.sheen) {
        s.sheen.style.background = `radial-gradient(circle at ${s.curSheenX.toFixed(1)}% ${s.curSheenY.toFixed(1)}%, rgba(255, 245, 210, 0.28) 0%, rgba(212, 175, 55, 0.08) 35%, transparent 70%)`;
      }

      if (s.glare) {
        s.glare.style.opacity = s.isHovered ? '0.35' : '0.12';
        s.glare.style.transform = `rotate(${s.targetGlareAngle.toFixed(1)}deg)`;
      }

      if (s.depthRim) {
        const rimX = (-s.curRotY * 1.8).toFixed(1);
        const rimY = (s.curRotX * 1.8).toFixed(1);
        const rimZ = (-22 + s.curZ * 0.3).toFixed(1);
        s.depthRim.style.transform = `translate3d(${rimX}px, ${rimY}px, ${rimZ}px) scale(0.985)`;
      }

      if (s.mouldingPlane) {
        const floatZ = (12 + s.curZ * 0.25).toFixed(1);
        s.mouldingPlane.style.transform = `translateZ(${floatZ}px)`;
      }
    }

    requestAnimationFrame(animationLoop);
  }

  requestAnimationFrame(animationLoop);

  // ========================================================
  // 8. DAY / NIGHT GALLERY AMBIENCE
  // ========================================================
  function setGalleryTheme(mode) {
    if (mode === 'daylight') {
      document.body.classList.add('daylight-mode');
      if (themeToggleBtn) {
        themeToggleBtn.querySelector('.mode-icon').textContent = '☀️';
        themeToggleBtn.querySelector('.mode-status-text').textContent = 'Daylight Hall';
      }
      localStorage.setItem('kochka-theme', 'daylight');
    } else {
      document.body.classList.remove('daylight-mode');
      if (themeToggleBtn) {
        themeToggleBtn.querySelector('.mode-icon').textContent = '🌙';
        themeToggleBtn.querySelector('.mode-status-text').textContent = 'Midnight Hall';
      }
      localStorage.setItem('kochka-theme', 'midnight');
    }
  }

  if (localStorage.getItem('kochka-theme') === 'daylight') {
    setGalleryTheme('daylight');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDaylight = document.body.classList.contains('daylight-mode');
      setGalleryTheme(isDaylight ? 'midnight' : 'daylight');
      playMuseumChime(isDaylight ? 420 : 720);
    });
  }

  // ========================================================
  // 9. EXHIBITIONS GRID & DYNAMIC FILTERING
  // ========================================================
  let currentEraFilter = 'all';
  let currentRegionFilter = 'all';

  function filterExhibitions() {
    const cards = document.querySelectorAll('.archive-card');
    cards.forEach(card => {
      const era = card.dataset.era;
      const region = card.dataset.region;
      
      const eraMatch = currentEraFilter === 'all' || era === currentEraFilter;
      const regionMatch = currentRegionFilter === 'all' || region === currentRegionFilter;
      
      if (eraMatch && regionMatch) {
        card.style.display = 'flex';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      } else {
        card.style.display = 'none';
      }
    });
  }

  document.querySelectorAll('#filter-era-chips .filter-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#filter-era-chips .filter-chip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentEraFilter = btn.dataset.filter;
      filterExhibitions();
      playMuseumChime(540);
    });
  });

  document.querySelectorAll('#filter-region-chips .filter-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#filter-region-chips .filter-chip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentRegionFilter = btn.dataset.filter;
      filterExhibitions();
      playMuseumChime(560);
    });
  });

  document.querySelectorAll('.archive-card').forEach(card => {
    card.addEventListener('click', () => {
      const key = card.dataset.artworkKey;
      if (key && ARTWORKS_I18N[currentLang] && ARTWORKS_I18N[currentLang][key]) {
        closeModal(exhibitionsModal);
        setTimeout(() => {
          openArtworkModal(key);
          playMuseumChime(680);
        }, 220);
      }
    });
  });

  if (archiveQuickBtn && exhibitionsModal) {
    archiveQuickBtn.addEventListener('click', () => {
      exhibitionsModal.classList.add('open');
      playMuseumChime(580);
    });
  }

  if (currentExhibitionCard) {
    currentExhibitionCard.addEventListener('click', (e) => {
      e.preventDefault();
      if (exhibitionsModal) {
        exhibitionsModal.classList.add('open');
      } else {
        openArtworkModal('bottom-left');
      }
      playMuseumChime(480);
    });
  }

  // ========================================================
  // 10. TICKETS MODAL & PATRON CHECKOUT
  // ========================================================
  if (ticketsBtn && ticketModal) {
    ticketsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      ticketModal.classList.add('open');
      playMuseumChime(520);
    });
  }

  if (tabDailyBtn && tabPatronBtn) {
    tabDailyBtn.addEventListener('click', () => {
      tabDailyBtn.classList.add('active');
      tabPatronBtn.classList.remove('active');
      if (dailyTicketOptions) dailyTicketOptions.style.display = 'flex';
      if (monthlyPatronOptions) monthlyPatronOptions.style.display = 'none';
      if (checkoutBtn) {
        const s = I18N_STRINGS[currentLang] || I18N_STRINGS.en;
        checkoutBtn.textContent = s.checkoutReservation;
      }
      playMuseumChime(560);
    });

    tabPatronBtn.addEventListener('click', () => {
      tabPatronBtn.classList.add('active');
      tabDailyBtn.classList.remove('active');
      if (monthlyPatronOptions) monthlyPatronOptions.style.display = 'flex';
      if (dailyTicketOptions) dailyTicketOptions.style.display = 'none';
      if (checkoutBtn) {
        const s = I18N_STRINGS[currentLang] || I18N_STRINGS.en;
        checkoutBtn.textContent = s.checkoutPatron;
      }
      playMuseumChime(640);
    });
  }

  document.querySelectorAll('.ticket-options').forEach(container => {
    const rows = container.querySelectorAll('.ticket-tier-row');
    rows.forEach(row => {
      row.addEventListener('click', () => {
        rows.forEach(r => r.classList.remove('selected'));
        row.classList.add('selected');
        playMuseumChime(660);
      });
    });
  });

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      const isPatronTab = tabPatronBtn && tabPatronBtn.classList.contains('active');
      const strings = I18N_STRINGS[currentLang] || I18N_STRINGS.en;

      checkoutBtn.textContent = isPatronTab ? strings.patronConfirmed : strings.checkoutConfirmed;
      checkoutBtn.style.backgroundColor = '#166534';
      playMuseumChime(isPatronTab ? 940 : 880);

      setTimeout(() => {
        closeModal(ticketModal);
        checkoutBtn.textContent = isPatronTab ? strings.checkoutPatron : strings.checkoutReservation;
        checkoutBtn.style.backgroundColor = '';
      }, 1600);
    });
  }

  if (printOrderBtn) {
    printOrderBtn.addEventListener('click', () => {
      const strings = I18N_STRINGS[currentLang] || I18N_STRINGS.en;

      printOrderBtn.textContent = strings.printConfirmed;
      printOrderBtn.style.backgroundColor = '#166534';
      printOrderBtn.style.borderColor = '#22c55e';
      playMuseumChime(760);

      setTimeout(() => {
        const resetLabel = strings.printOrder;
        printOrderBtn.innerHTML = `<span class="print-icon">&#128444;</span> ${resetLabel}`;
        printOrderBtn.style.backgroundColor = '';
        printOrderBtn.style.borderColor = '';
      }, 2200);
    });
  }

  // ========================================================
  // 11. CURATORIAL MENU MODAL ("+")
  // ========================================================
  if (menuBtn && menuModal) {
    menuBtn.addEventListener('click', (e) => {
      e.preventDefault();
      menuModal.classList.add('open');
      playMuseumChime(380);
    });
  }

  document.querySelectorAll('.menu-nav-item a').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      closeModal(menuModal);
      const target = item.getAttribute('href');
      if (target === '#tickets' && ticketModal) {
        setTimeout(() => ticketModal.classList.add('open'), 300);
      } else if (target === '#exhibitions' || target === '#exhibition') {
        setTimeout(() => exhibitionsModal.classList.add('open'), 300);
      } else if (target === '#collection') {
        setTimeout(() => openArtworkModal('center-oval'), 300);
      }
    });
  });

  // URL Deep-linking hash and query routing
  function checkHashRoute() {
    const hash = window.location.hash;
    const search = window.location.search;
    if ((hash === '#menu' || search.includes('modal=menu')) && menuModal) {
      menuModal.classList.add('open');
    } else if ((hash === '#tickets' || search.includes('modal=tickets') || hash === '#patron' || search.includes('modal=patron')) && ticketModal) {
      ticketModal.classList.add('open');
      if (hash === '#patron' || search.includes('modal=patron') || search.includes('tab=patron')) {
        if (tabPatronBtn) tabPatronBtn.click();
      }
    } else if ((hash === '#exhibitions' || search.includes('modal=exhibitions') || hash === '#exhibition') && exhibitionsModal) {
      exhibitionsModal.classList.add('open');
    } else if ((hash === '#artwork' || search.includes('modal=artwork') || hash === '#collection') && artworkModal) {
      openArtworkModal('center-oval');
    }
  }
  window.addEventListener('hashchange', checkHashRoute);

  // ========================================================
  // 12. WEB AUDIO AMBIENCE & SOUNDSCAPE
  // ========================================================
  function initAudio() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playMuseumChime(freq = 440) {
    if (!isSoundEnabled) return;
    initAudio();
    if (!audioCtx) return;

    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.5, audioCtx.currentTime + 1.2);

      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.2);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 1.2);
    } catch (e) {}
  }

  // Volume Fading Engine for J.S. Bach's Air on the G String
  function fadeAudioVolume(targetVol, durationMs, onComplete) {
    if (!ambientAudio) return;
    if (ambientFadeInterval) {
      clearInterval(ambientFadeInterval);
      ambientFadeInterval = null;
    }
    const startVol = ambientAudio.volume;
    const steps = 25;
    const stepTime = Math.max(16, Math.floor(durationMs / steps));
    const volDiff = targetVol - startVol;
    let step = 0;

    ambientFadeInterval = setInterval(() => {
      step++;
      const progress = step / steps;
      // Quadratic ease-out for natural acoustic swell
      const factor = 1 - Math.pow(1 - progress, 2);
      ambientAudio.volume = Math.max(0, Math.min(1, startVol + volDiff * factor));

      if (step >= steps) {
        clearInterval(ambientFadeInterval);
        ambientFadeInterval = null;
        ambientAudio.volume = targetVol;
        if (typeof onComplete === 'function') onComplete();
      }
    }, stepTime);
  }

  function playMuseumAmbientMusic() {
    if (!ambientAudio) return;
    ambientAudio.volume = 0.0;
    const playPromise = ambientAudio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        const target = isAudioPlaying ? AMBIENT_DUCKED_VOLUME : AMBIENT_TARGET_VOLUME;
        fadeAudioVolume(target, 1200);
      }).catch(err => {
        console.warn('Museum audio playback interaction note:', err);
      });
    }
  }

  function stopMuseumAmbientMusic() {
    if (!ambientAudio) return;
    fadeAudioVolume(0.0, 700, () => {
      ambientAudio.pause();
    });
  }

  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      isSoundEnabled = !isSoundEnabled;
      const s = I18N_STRINGS[currentLang] || I18N_STRINGS.en;
      if (isSoundEnabled) {
        soundToggleBtn.classList.add('active');
        soundToggleBtn.querySelector('.sound-status-text').textContent = s.soundOn;
        playMuseumAmbientMusic();
        playMuseumChime(660);
      } else {
        soundToggleBtn.classList.remove('active');
        soundToggleBtn.querySelector('.sound-status-text').textContent = s.soundOff;
        stopMuseumAmbientMusic();
      }
    });
  }

  function toggleAudioGuide() {
    if (!isAudioPlaying) {
      startAudioGuide();
    } else {
      stopAudioGuide();
    }
  }

  function startAudioGuide() {
    initAudio();
    isAudioPlaying = true;
    if (audioGuidePlayer) audioGuidePlayer.classList.add('playing');
    if (audioPlayBtn) audioPlayBtn.innerHTML = '&#9646;&#9646;';
    
    // Duck ambient Bach string music gracefully when curator speaks
    if (isSoundEnabled && ambientAudio && !ambientAudio.paused) {
      fadeAudioVolume(AMBIENT_DUCKED_VOLUME, 500);
    }

    playNarratorSound();
    audioSynthTimer = setInterval(playNarratorSound, 2400);
  }

  function stopAudioGuide() {
    isAudioPlaying = false;
    if (audioGuidePlayer) audioGuidePlayer.classList.remove('playing');
    if (audioPlayBtn) audioPlayBtn.innerHTML = '&#9658;';
    if (audioSynthTimer) {
      clearInterval(audioSynthTimer);
      audioSynthTimer = null;
    }

    // Restore ambient museum music back to full target volume
    if (isSoundEnabled && ambientAudio && !ambientAudio.paused) {
      fadeAudioVolume(AMBIENT_TARGET_VOLUME, 800);
    }
  }

  function playNarratorSound() {
    if (!audioCtx) return;
    const notes = [220, 247.5, 277.18, 329.63, 370];
    const freq = notes[Math.floor(Math.random() * notes.length)];
    
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.03, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.8);
      
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      
      osc.start();
      osc.stop(audioCtx.currentTime + 1.8);
    } catch (e) {}
  }

  if (audioPlayBtn) {
    audioPlayBtn.addEventListener('click', toggleAudioGuide);
  }

  // ========================================================
  // 13. INITIALIZATION & LANGUAGE ACTIVATION
  // ========================================================
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.dataset.lang;
      applyLanguage(targetLang);
      playMuseumChime(520);
    });
  });

  const urlParams = new URLSearchParams(window.location.search);
  const savedLang = urlParams.get('lang') || localStorage.getItem('kochka-lang') || 'en';
  applyLanguage(savedLang);

  // Run deep routing AFTER language has been applied
  checkHashRoute();

  if (urlParams.get('sound') === '1' || urlParams.get('sound') === 'on') {
    setTimeout(() => {
      if (soundToggleBtn && !isSoundEnabled) soundToggleBtn.click();
    }, 100);
  }

  // ========================================================
  // 14. CLASSIC FANCY MUSEUM PRELOADER & GRAND UNVEIL ENGINE
  // ========================================================
  const preloaderEl = document.getElementById('museum-preloader');
  const preloaderRing = document.getElementById('preloader-ring');
  const preloaderFill = document.getElementById('preloader-fill');
  const preloaderStatus = document.getElementById('preloader-status');
  const preloaderPercent = document.getElementById('preloader-percent');
  const preloaderSubtitle = document.getElementById('preloader-subtitle');
  const preloaderProvenance = document.getElementById('preloader-provenance');

  let isPreloaderRunning = false;
  let preloaderRaf = null;

  function runMuseumPreloader(options = {}) {
    if (!preloaderEl) return;
    if (preloaderRaf) {
      cancelAnimationFrame(preloaderRaf);
      preloaderRaf = null;
    }
    const urlParams = new URLSearchParams(window.location.search);
    const hasModal = urlParams.has('modal') || (window.location.hash.length > 1 && (window.location.hash === '#menu' || window.location.hash === '#tickets' || window.location.hash === '#exhibitions' || window.location.hash === '#artwork'));
    const duration = options.duration || (hasModal ? 450 : 2100);

    isPreloaderRunning = true;
    
    // Reset state instantly without reverse animation
    preloaderEl.classList.add('no-transition');
    preloaderEl.classList.remove('curtains-open', 'stage-fade', 'unloaded');
    document.body.classList.add('preloader-active');
    document.body.classList.remove('preloader-unveiling', 'museum-loaded');
    preloaderEl.style.display = 'flex';
    preloaderEl.style.visibility = 'visible';

    const s = I18N_STRINGS[currentLang] || I18N_STRINGS.en;
    if (preloaderSubtitle) preloaderSubtitle.textContent = s.preloaderSubtitle || 'Heritage Art Hall';
    if (preloaderProvenance) preloaderProvenance.textContent = s.preloaderProvenance || 'Permanent Sanctuary · Est. 1957';

    const phases = [
      { p: 0, text: s.preloaderPhase1 || 'Illuminating the Grand Gallery' },
      { p: 30, text: s.preloaderPhase2 || 'Restoring the Baroque Sanctuary' },
      { p: 68, text: s.preloaderPhase3 || 'Curating Centuries of Nobility' },
      { p: 96, text: s.preloaderPhase4 || 'Enter the Exhibition' }
    ];

    const totalCircumference = 307;
    let startTime = null;

    if (preloaderFill) preloaderFill.style.width = '0%';
    if (preloaderRing) preloaderRing.style.strokeDashoffset = totalCircumference;
    if (preloaderPercent) preloaderPercent.textContent = '0%';
    if (preloaderStatus) {
      preloaderStatus.textContent = phases[0].text;
      preloaderStatus.style.opacity = '1';
      preloaderStatus.classList.remove('ready');
    }

    // Force reflow to flush instant reset, then re-enable transitions
    void preloaderEl.offsetWidth;
    preloaderEl.classList.remove('no-transition');

    let currentPhaseIndex = 0;
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      let progress = Math.min(elapsed / duration, 1.0);

      // Smooth sinusoidal ease-out
      const eased = Math.sin(progress * Math.PI / 2);
      const currentPercent = Math.min(Math.floor(eased * 100), 100);

      if (preloaderFill) preloaderFill.style.width = (eased * 100) + '%';
      if (preloaderRing) preloaderRing.style.strokeDashoffset = totalCircumference * (1 - eased);
      if (preloaderPercent) preloaderPercent.textContent = currentPercent + '%';

      // Phase update
      let targetIndex = 0;
      for (let i = 0; i < phases.length; i++) {
        if (currentPercent >= phases[i].p) targetIndex = i;
      }
      if (targetIndex !== currentPhaseIndex && preloaderStatus) {
        currentPhaseIndex = targetIndex;
        preloaderStatus.style.opacity = '0';
        setTimeout(() => {
          preloaderStatus.textContent = phases[targetIndex].text;
          if (targetIndex === phases.length - 1) preloaderStatus.classList.add('ready');
          preloaderStatus.style.opacity = '1';
        }, 120);
      }

      if (progress < 1.0) {
        preloaderRaf = requestAnimationFrame(step);
      } else {
        // Complete!
        if (preloaderFill) preloaderFill.style.width = '100%';
        if (preloaderRing) preloaderRing.style.strokeDashoffset = '0';
        if (preloaderPercent) preloaderPercent.textContent = '100%';
        if (preloaderStatus) {
          preloaderStatus.textContent = phases[phases.length - 1].text;
          preloaderStatus.classList.add('ready');
          preloaderStatus.style.opacity = '1';
        }

        // Grand Unveil Sequence
        setTimeout(() => {
          preloaderEl.classList.add('stage-fade');

          setTimeout(() => {
            // Play gentle museum chime if sound is enabled
            if (isSoundEnabled) {
              playMuseumEntranceChime();
            }

            preloaderEl.classList.add('curtains-open');
            document.body.classList.remove('preloader-active');
            document.body.classList.add('preloader-unveiling');

            setTimeout(() => {
              preloaderEl.classList.add('unloaded');
              document.body.classList.add('museum-loaded');
              isPreloaderRunning = false;
              if (options.onComplete) options.onComplete();
            }, 1250);
          }, 320);
        }, 380);
      }
    }

    preloaderRaf = requestAnimationFrame(step);
  }

  function playMuseumEntranceChime() {
    if (!audioCtx) return;
    try {
      const chords = [440, 554.37, 659.25]; // A major triad arpeggio
      chords.forEach((freq, idx) => {
        setTimeout(() => {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
          gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 2.0);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start();
          osc.stop(audioCtx.currentTime + 2.0);
        }, idx * 120);
      });
    } catch(e) {}
  }

  // Allow clicking the top nav logo or brand insignia to replay the grand entrance
  const brandInsigniaEl = document.querySelector('.brand-insignia');
  if (brandInsigniaEl) {
    brandInsigniaEl.addEventListener('click', (e) => {
      e.preventDefault();
      runMuseumPreloader({ duration: 1800 });
    });
  }

  // Expose global replay function
  window.replayMuseumEntrance = (duration) => {
    runMuseumPreloader({ duration: duration || 2100 });
  };
  window.applyLanguage = applyLanguage;

  // Launch preloader on initial page entrance
  runMuseumPreloader();

  console.log('Kochka Heritage Art Hall — Multi-Language 5D Curation engine fully active.');
});
