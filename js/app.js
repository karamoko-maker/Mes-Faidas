/* Mes Faidas v4 — logique de l’application */
const ISTIGH = {label:'Astaghfiroullah', ar:'أَسْتَغْفِرُ ٱللّٰهَ', n:100};
const SALAT = {label:'Salat ala Nabbi', ar:'ٱللّٰهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ', n:100};
const MODULES = [
 /* ---------- PAR SOURATE ---------- */
 {id:'47', kind:'sourate', top:'47', sub:'Muhammad', eyebrow:'Sourate 47', name:'Muhammad', arName:'محمد', objectif:'Amélioration générale de la vie et des finances', cycles:[7],
  concept:{tr:"Kaffara 'anhum sayyi'âtihim wa aslaha bâlahum", ar:'كَفَّرَ عَنْهُمْ سَيِّئَاتِهِمْ وَأَصْلَحَ بَالَهُمْ', sens:"Il leur efface leurs mauvaises actions et améliore leur condition. (47 : 2)"},
  steps:[ISTIGH, SALAT,
   {label:'Versets 1 à 3 de la sourate', note:'Récite les trois premiers versets d’un trait.', n:7},
   {label:'« Kaffara ʿanhum… wa aslaha bâlahum »', ar:'كَفَّرَ عَنْهُمْ سَيِّئَاتِهِمْ وَأَصْلَحَ بَالَهُمْ', n:313}],
  option:'<b>Option alternative :</b> écrire 7 fois le verset 2, laisser l’écriture infuser dans de l’eau, puis s’en laver le visage.'},
 {id:'77', kind:'sourate', top:'77', sub:'Al-Moursalate', eyebrow:'Sourate 77', name:'Al-Moursalate', arName:'المرسلات', objectif:'Destruction des blocages et abondance', cycles:[3,7],
  concept:{tr:"Wayloun yawma'idhin lil-moukadhibîn", ar:'وَيْلٌ يَوْمَئِذٍ لِّلْمُكَذِّبِينَ', sens:"Malheur, ce jour-là, à ceux qui démentent. Ce verset revient 10 fois dans la sourate."},
  steps:[ISTIGH, SALAT,
   {label:'Lecture complète de la sourate', note:'Répète 7 ou 11 fois « Wayloun… » à chacune de ses 10 apparitions.', n:3},
   {label:'Ya Razzaq, Ya Wahhab, Ya Fattah', ar:'يَا رَزَّاقُ يَا وَهَّابُ يَا فَتَّاحُ', n:313}],
  secret:{titre:'Verset 43, chaque matin', tr:"Kolû wa ichrabû hanî'an bimâ kountoum ta'maloûn", ar:'كُلُوا وَاشْرَبُوا هَنِيئًا بِمَا كُنتُمْ تَعْمَلُونَ', desc:'70 fois chaque matin, pour la baraka du foyer.', n:70}},
 {id:'78', kind:'sourate', top:'78', sub:'An-Naba', eyebrow:'Sourate 78', name:'An-Naba', arName:'النبأ', objectif:'Ouverture du Rizq et réussite des activités du jour', cycles:[7],
  concept:{tr:"Wa ja'alnan-nahâra ma'âchâ", ar:'وَجَعَلْنَا النَّهَارَ مَعَاشًا', sens:"Et Nous avons fait du jour un temps pour gagner sa vie. (78 : 11)"},
  steps:[ISTIGH, SALAT,
   {label:'Lecture complète de la sourate', note:'Sourate mémorisée : récite-la de cœur, en révision.', n:3},
   {label:'Verset 11 « Wa ja‘alnan-nahâra ma‘âchâ »', ar:'وَجَعَلْنَا النَّهَارَ مَعَاشًا', note:'Idéalement après Fajr, avant de sortir travailler.', n:70},
   {label:'Ya Razzaq', ar:'يَا رَزَّاقُ', n:313}],
  secret:{titre:'Verset 36, après chaque salat', tr:"Jazâ'an min rabbika 'atâ'an hisâbâ", ar:'جَزَاءً مِّن رَّبِّكَ عَطَاءً حِسَابًا', desc:'« Une rétribution de ton Seigneur, un don abondant. » 11 fois après chaque prière.', n:11}},
 {id:'14', kind:'sourate', top:'14', sub:'Ibrahim', eyebrow:'Sourate 14', name:'Ibrahim', arName:'إبراهيم', objectif:'Gratitude, augmentation des bienfaits et protection de la famille', cycles:[7],
  concept:{tr:"La'in chakartoum la-azîdannakoum", ar:'لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ', sens:"Si vous êtes reconnaissants, J’augmenterai certainement [Mes bienfaits] pour vous. (14 : 7)"},
  steps:[ISTIGH, SALAT,
   {label:'Lecture complète de la sourate', n:1},
   {label:'« La’in chakartoum la-azîdannakoum »', ar:'لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ', n:70},
   {label:'Al-hamdou lillâh', ar:'ٱلْحَمْدُ لِلّٰهِ', note:'En pensant à un bienfait précis à chaque dizaine.', n:313}],
  secret:{titre:'Du‘a d’Ibrahim, verset 40', tr:"Rabbij'alnî mouqîmas-salâti wa min dhourriyyatî, rabbanâ wa taqabbal dou'â'", ar:'رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي ۚ رَبَّنَا وَتَقَبَّلْ دُعَاءِ', desc:'3 fois après chaque salat, pour soi et sa descendance.', n:3}},

 /* ---------- PAR BESOIN ---------- */
 {id:'enfant', kind:'besoin', top:'Enfant', sub:'ذُرِّيَّة', eyebrow:'Besoin · Sourates 19, 21 et 3', name:'Avoir un enfant', arName:'ذُرِّيَّة', objectif:'Demander une descendance pieuse, sur le modèle de la prière de Zakariya', cycles:[7,40],
  care:'Ce rituel accompagne le suivi médical du couple, sans le remplacer.',
  concept:{tr:"Rabbi lâ tadharnî fardan wa anta khayroul-wârithîn", ar:'رَبِّ لَا تَذَرْنِي فَرْدًا وَأَنتَ خَيْرُ الْوَارِثِينَ', sens:"Seigneur, ne me laisse pas seul, et Tu es le meilleur des héritiers. (21 : 89)"},
  steps:[ISTIGH, SALAT,
   {label:'Sourate Maryam, versets 1 à 11', note:'Le récit de la prière de Zakariya, exaucée par la naissance de Yahya.', n:3},
   {label:'« Rabbi lâ tadharnî fardan… »', ar:'رَبِّ لَا تَذَرْنِي فَرْدًا وَأَنتَ خَيْرُ الْوَارِثِينَ', n:70},
   {label:'Yâ Wahhâb', ar:'يَا وَهَّابُ', note:'Le Donateur : celui qui offre sans contrepartie.', n:313}],
  secret:{titre:'Verset 3 : 38, après chaque salat', tr:"Rabbi hab lî min ladounka dhourriyyatan tayyibatan innaka samî'oud-dou'â'", ar:'رَبِّ هَبْ لِي مِن لَّدُنكَ ذُرِّيَّةً طَيِّبَةً ۖ إِنَّكَ سَمِيعُ الدُّعَاءِ', desc:'« Seigneur, accorde-moi de Ta part une descendance bonne. » 7 fois après chaque prière.', n:7},
  option:'<b>En couple :</b> quand c’est possible, faites le rituel ensemble et terminez par une du‘a commune.'},
 {id:'piete', kind:'besoin', top:'Piété', sub:'تَقْوَى', eyebrow:'Besoin · Sourates 13, 3 et 67', name:'La piété du cœur', arName:'تَقْوَى', objectif:'Un cœur apaisé, ferme dans la foi et proche d’Allah', cycles:[7,40],
  concept:{tr:"Alâ bidhikrillâhi tatma'innoul-qouloûb", ar:'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ', sens:"C’est par le rappel d’Allah que les cœurs s’apaisent. (13 : 28)"},
  steps:[ISTIGH, SALAT,
   {label:'« Yâ Mouqallibal-qouloûb, thabbit qalbî ‘alâ dînik »', ar:'يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ', note:'Du‘a que le Prophète ﷺ répétait souvent.', n:70},
   {label:'Lâ ilâha illallâh', ar:'لَا إِلَٰهَ إِلَّا ٱللّٰهُ', n:313},
   {label:'Sourate Al-Moulk (67), le soir', note:'À lire avant de dormir.', n:1}],
  secret:{titre:'Verset 3 : 8, après chaque salat', tr:"Rabbanâ lâ touzigh qouloubanâ ba'da idh hadaytanâ wa hab lanâ min ladounka rahmatan innaka antal-wahhâb", ar:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً ۚ إِنَّكَ أَنتَ الْوَهَّابُ', desc:'« Ne laisse pas dévier nos cœurs après nous avoir guidés. » 3 fois après chaque prière.', n:3}},
 {id:'foyer', kind:'besoin', top:'Foyer', sub:'مَوَدَّة', eyebrow:'Besoin · Sourates 25 et 28', name:'Mariage et foyer', arName:'مَوَدَّة', objectif:'Trouver un bon conjoint, et l’entente et la douceur dans le foyer', cycles:[7,40],
  concept:{tr:"Rabbanâ hab lanâ min azwâjinâ wa dhourriyyâtinâ qourrata a'youn", ar:'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ', sens:"Seigneur, fais de nos conjoints et de nos enfants la fraîcheur de nos yeux. (25 : 74)"},
  steps:[ISTIGH, SALAT,
   {label:'« Rabbanâ hab lanâ min azwâjinâ… »', ar:'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا', n:70},
   {label:'Yâ Wadoûd', ar:'يَا وَدُودُ', note:'Le Très-Aimant : pour l’amour et l’entente.', n:313}],
  secret:{titre:'Du‘a de Moussa, verset 28 : 24', tr:"Rabbi innî limâ anzalta ilayya min khayrin faqîr", ar:'رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ', desc:'« Seigneur, j’ai grand besoin du bien que Tu feras descendre vers moi. » Moussa l’a dite avant de trouver épouse et refuge. 11 fois après Fajr.', n:11}},
 {id:'guerison', kind:'besoin', top:'Guérison', sub:'شِفَاء', eyebrow:'Besoin · Sourates 1, 26 et 21', name:'Guérison', arName:'شِفَاء', objectif:'Demander la guérison pour soi ou pour un proche', cycles:[7],
  care:'En complément des soins médicaux, jamais à leur place.',
  concept:{tr:"Wa idhâ maridtou fahouwa yachfîn", ar:'وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ', sens:"Et quand je suis malade, c’est Lui qui me guérit. (26 : 80)"},
  steps:[ISTIGH, SALAT,
   {label:'Sourate Al-Fâtiha', note:'Récite-la puis souffle légèrement sur toi ou dans un verre d’eau à boire.', n:7},
   {label:'Du‘a d’Ayyoub « Annî massaniyad-dourrou… »', ar:'أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ', n:70},
   {label:'Yâ Châfî', ar:'يَا شَافِي', n:313}],
  secret:{titre:'Main sur la douleur', tr:"A'oûdhou billâhi wa qoudratihî min charri mâ ajidou wa ouhâdhir", ar:'أَعُوذُ بِاللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ', desc:'Pose la main sur l’endroit douloureux, dis « Bismillâh » 3 fois, puis cette formule 7 fois (Sunna).', n:7}},
 {id:'serenite', kind:'besoin', top:'Sérénité', sub:'يُسْر', eyebrow:'Besoin · Sourates 94, 21 et 3', name:'Sérénité et sortie de l’épreuve', arName:'يُسْر', objectif:'Soulager l’angoisse, les soucis et les moments difficiles', cycles:[3,7],
  concept:{tr:"Fa-inna ma'al-'ousri yousrâ", ar:'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا', sens:"Certes, avec la difficulté vient la facilité. (94 : 5)"},
  steps:[ISTIGH, SALAT,
   {label:'Sourate Ach-Charh (94)', n:7},
   {label:'Du‘a de Younous « Lâ ilâha illâ anta… »', ar:'لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ', note:'Dite par Younous dans le ventre de la baleine. (21 : 87)', n:313}],
  secret:{titre:'Verset 3 : 173', tr:"Hasbounallâhou wa ni'mal-wakîl", ar:'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ', desc:'« Allah nous suffit, Il est le meilleur garant. » 70 fois quand l’angoisse monte.', n:70}},
 {id:'protection', kind:'besoin', top:'Protection', sub:'حِفْظ', eyebrow:'Besoin · Sourates 2, 112, 113, 114', name:'Protection', arName:'حِفْظ', objectif:'Se protéger, soi, sa famille et ses biens, matin et soir', cycles:[7],
  concept:{tr:"Fallâhou khayroun hâfizâ wa houwa arhamour-râhimîn", ar:'فَاللَّهُ خَيْرٌ حَافِظًا ۖ وَهُوَ أَرْحَمُ الرَّاحِمِينَ', sens:"Allah est le meilleur gardien, et Il est le plus Miséricordieux. (12 : 64)"},
  steps:[ISTIGH, SALAT,
   {label:'Âyat al-Koursî (2 : 255)', note:'Une fois le matin, une fois le soir.', n:2},
   {label:'Al-Ikhlâs, Al-Falaq, An-Nâs', note:'3 fois le matin et 3 fois le soir (Sunna).', n:6},
   {label:'« Bismillâhil-ladhî lâ yadourrou… »', ar:'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ', note:'3 fois le matin et 3 fois le soir (Sunna).', n:6}],
  option:'<b>Avant de dormir :</b> réciter les 3 Qoul dans ses mains jointes, souffler dedans, puis les passer sur le corps, 3 fois (Sunna).'}
];

/* ---------- Apparence ---------- */
const PAL = {
  emeraude:{name:'Émeraude', L:{bg:'#EDF1EC',surface:'#FBFCFA',line:'#D3DCD5',accent:'#0F6B52','accent-soft':'#DAEAE2','accent-ink':'#0A5240'}, D:{bg:'#0C1512',surface:'#14201B',line:'#25342E',accent:'#4DC29B','accent-soft':'#17322A','accent-ink':'#86DDBE'}},
  ambre:{name:'Ambre', L:{bg:'#F1EEE8',surface:'#FCFBF8',line:'#DDD6CA',accent:'#9A5B0C','accent-soft':'#F4E6D2','accent-ink':'#7A4708'}, D:{bg:'#15120D',surface:'#1F1A13',line:'#362E22',accent:'#E3A04B','accent-soft':'#33260F','accent-ink':'#F0C080'}},
  nuit:{name:'Bleu nuit', L:{bg:'#ECEFF4',surface:'#FAFBFD',line:'#D2D9E3',accent:'#1F4E8C','accent-soft':'#DCE6F3','accent-ink':'#173D6E'}, D:{bg:'#0C111A',surface:'#141B26',line:'#253042',accent:'#6FA3E8','accent-soft':'#172738','accent-ink':'#A8C8F2'}},
  amethyste:{name:'Améthyste', L:{bg:'#EFEDF3',surface:'#FBFAFD',line:'#DAD4E3',accent:'#5B3E96','accent-soft':'#E6DFF2','accent-ink':'#472F78'}, D:{bg:'#110E18',surface:'#1A1623',line:'#2E2840',accent:'#A98BE6','accent-soft':'#261E38','accent-ink':'#CBB8F2'}},
  grenat:{name:'Grenat', L:{bg:'#F3EDEE',surface:'#FDFAFA',line:'#E2D4D6',accent:'#8E2A3B','accent-soft':'#F2DDE0','accent-ink':'#70202E'}, D:{bg:'#160D0F',surface:'#211517',line:'#3A2629',accent:'#E07A8C','accent-soft':'#351A1F','accent-ink':'#F0AAB6'}}
};
const BASE = {L:{ink:'#18211D',muted:'#5B6661',gold:'#A57619','gold-soft':'#F3EAD6','on-accent':'#FFFFFF'}, D:{ink:'#E5EBE8',muted:'#93A09A',gold:'#D9AF56','gold-soft':'#2A2516'}};
const FONTS = [{id:'Amiri',name:'Amiri'},{id:'Scheherazade New',name:'Scheherazade'},{id:'Noto Naskh Arabic',name:'Naskh'}];
const LOOK0 = {theme:'auto',accent:'emeraude',arFont:'Amiri',arScale:1,vib:true};

const KEY='mesFaidas_v1';
let S=null; try{S=JSON.parse(localStorage.getItem(KEY))}catch(e){}
if(!S||typeof S!=='object') S={};
S.active=S.active||'47'; S.mods=S.mods||{}; S.look=Object.assign({},LOOK0,S.look||{});
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}};
const root=document.documentElement;
const mql=window.matchMedia?matchMedia('(prefers-color-scheme: dark)'):null;
function isDark(){
  const t=S.look.theme;
  if(t==='dark') return true; if(t==='light') return false;
  const host=root.getAttribute('data-theme');
  if(host==='dark') return true; if(host==='light') return false;
  return !!(mql&&mql.matches);
}
function applyLook(){
  const P=PAL[S.look.accent]||PAL.emeraude, dark=isDark();
  const v=Object.assign({}, dark?BASE.D:BASE.L, dark?P.D:P.L);
  if(dark) v['on-accent']=P.D.bg;
  for(const k in v) root.style.setProperty('--'+k, v[k]);
  root.style.setProperty('color-scheme', dark?'dark':'light');
  root.setAttribute('data-bs-theme', dark?'dark':'light');
  root.style.setProperty('--f-ar', `'${S.look.arFont}','Amiri','Noto Naskh Arabic','Traditional Arabic',serif`);
  root.style.setProperty('--ar-scale', S.look.arScale);
}
function renderLook(){
  const L=S.look;
  document.getElementById('lookBody').innerHTML=`
  <div class="vstack gap-4">
    <div>
      <div class="label mb-2">Thème</div>
      <div class="btn-group w-100" role="group" aria-label="Thème">
        ${[['auto','Automatique'],['light','Clair'],['dark','Sombre']].map(([k,n])=>`<button type="button" class="btn btn-outline-primary ${L.theme===k?'active':''}" aria-pressed="${L.theme===k}" data-look-theme="${k}">${n}</button>`).join('')}
      </div>
    </div>
    <div>
      <div class="label mb-2">Couleur</div>
      <div class="swatches">
        ${Object.entries(PAL).map(([k,p])=>`<button type="button" class="swatch" style="--sw:${isDark()?p.D.accent:p.L.accent}" aria-pressed="${L.accent===k}" data-look-accent="${k}"><span></span><small>${p.name}</small></button>`).join('')}
      </div>
    </div>
    <div>
      <div class="label mb-2">Écriture arabe</div>
      <div class="btn-group w-100" role="group" aria-label="Police arabe">
        ${FONTS.map(f=>`<button type="button" class="btn btn-outline-primary fontbtn ${L.arFont===f.id?'active':''}" aria-pressed="${L.arFont===f.id}" data-look-font="${f.id}" style="--fb:'${f.id}',serif"><span class="ar-s" lang="ar">بِسْمِ ٱللَّه</span><small>${f.name}</small></button>`).join('')}
      </div>
    </div>
    <div>
      <label for="arScale" class="label d-block mb-1">Taille de l’arabe · <span id="scaleVal">${Math.round(L.arScale*100)} %</span></label>
      <input type="range" class="form-range" id="arScale" min="0.85" max="1.5" step="0.05" value="${L.arScale}">
      <div class="preview" lang="ar">بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</div>
    </div>
    <div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" role="switch" id="vib" ${L.vib?'checked':''}>
      <label class="form-check-label" for="vib">Vibrer à chaque grain du chapelet</label>
    </div>
    <button type="button" class="btn btn-outline-secondary btn-sm align-self-start" data-look-reset>Rétablir l’apparence d’origine</button>
  </div>`;
}

/* ---------- Salât : horaires ---------- */
const PRAYERS=[
 {k:'fajr',fr:'Fajr',ar:'الفجر',rk:2,voice:'Haute',sunna:'2 rak’as avant (Raghîba)'},
 {k:'dhuhr',fr:'Dhuhr',ar:'الظهر',rk:4,voice:'Basse',sunna:'Sunna avant et après, selon l’école'},
 {k:'asr',fr:'Asr',ar:'العصر',rk:4,voice:'Basse',sunna:'Rak’as surérogatoires avant'},
 {k:'maghrib',fr:'Maghrib',ar:'المغرب',rk:3,voice:'Haute ×2',sunna:'2 rak’as après'},
 {k:'isha',fr:'Isha',ar:'العشاء',rk:4,voice:'Haute ×2',sunna:'2 rak’as après, puis Chaf‘ et Witr'}
];
const CITIES={abidjan:{n:'Abidjan',lat:5.36,lng:-4.008},bouake:{n:'Bouaké',lat:7.69,lng:-5.03},yamoussoukro:{n:'Yamoussoukro',lat:6.82,lng:-5.28},daloa:{n:'Daloa',lat:6.877,lng:-6.45},korhogo:{n:'Korhogo',lat:9.458,lng:-5.63},sanpedro:{n:'San-Pédro',lat:4.748,lng:-6.636},man:{n:'Man',lat:7.412,lng:-7.554}};
S.rem=Object.assign({on:false,before:5,city:'abidjan'},S.rem||{});
S.guide=Object.assign({prayer:'fajr',gender:'femme',arms:'sadl'},S.guide||{});
const fired={}; let remPrayer='fajr';

const D2R=Math.PI/180, R2D=180/Math.PI;
const dsin=d=>Math.sin(d*D2R), dcos=d=>Math.cos(d*D2R), dtan=d=>Math.tan(d*D2R);
const dasin=x=>Math.asin(x)*R2D, dacos=x=>Math.acos(x)*R2D, datan2=(y,x)=>Math.atan2(y,x)*R2D, dacot=x=>Math.atan(1/x)*R2D;
const fixA=(a,b)=>{a=a-b*Math.floor(a/b);return a<0?a+b:a};
/* Méthode Ligue islamique mondiale : Fajr 18°, Isha 17°, Asr ombre ×1 */
function prayerTimes(date,lat,lng,tz){
  let Y=date.getFullYear(),M=date.getMonth()+1; const d=date.getDate(); if(M<=2){Y-=1;M+=12}
  const A=Math.floor(Y/100), B=2-A+Math.floor(A/4);
  const jd0=Math.floor(365.25*(Y+4716))+Math.floor(30.6001*(M+1))+d+B-1524.5-lng/(15*24);
  const sun=jd=>{const D=jd-2451545.0,g=fixA(357.529+0.98560028*D,360),q=fixA(280.459+0.98564736*D,360),
    L=fixA(q+1.915*dsin(g)+0.020*dsin(2*g),360),e=23.439-0.00000036*D,
    RA=datan2(dcos(e)*dsin(L),dcos(L))/15; return {decl:dasin(dsin(e)*dsin(L)),eqt:q/15-fixA(RA,24)}};
  const mid=t=>fixA(12-sun(jd0+t).eqt,24);
  const ang=(a,t,ccw)=>{const decl=sun(jd0+t).decl,T=dacos((-dsin(a)-dsin(decl)*dsin(lat))/(dcos(decl)*dcos(lat)))/15; return mid(t)+(ccw?-T:T)};
  const asr=(f,t)=>ang(-dacot(f+dtan(Math.abs(lat-sun(jd0+t).decl))),t);
  let h={fajr:5,sunrise:6,dhuhr:12,asr:13,maghrib:18,isha:18};
  for(let k=0;k<2;k++){const t=x=>x/24;
    h={fajr:ang(18,t(h.fajr),true),sunrise:ang(0.833,t(h.sunrise),true),dhuhr:mid(t(h.dhuhr)),asr:asr(1,t(h.asr)),maghrib:ang(0.833,t(h.maghrib)),isha:ang(17,t(h.isha))};}
  const out={}; for(const k in h) out[k]=h[k]+tz-lng/15+(k==='dhuhr'?1/60:0); return out;
}
function timesFor(day){const c=CITIES[S.rem.city]||CITIES.abidjan; return prayerTimes(day,c.lat,c.lng,-day.getTimezoneOffset()/60);}
function toDate(day,h){return new Date(new Date(day.getFullYear(),day.getMonth(),day.getDate()).getTime()+Math.round(h*60)*60000);}
const hm=d=>String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0');
function schedule(day){const t=timesFor(day); return {list:PRAYERS.map(p=>Object.assign({},p,{at:toDate(day,t[p.k])})), sunrise:toDate(day,t.sunrise)};}
function nextPrayer(now){const s=schedule(now).list; let n=s.find(p=>p.at>now); if(!n){const tm=new Date(now); tm.setDate(tm.getDate()+1); n=schedule(tm).list[0];} return n;}
function until(ms){const m=Math.max(0,Math.ceil(ms/60000)),h=Math.floor(m/60),mi=m%60; return h?`${h} h ${String(mi).padStart(2,'0')}`:`${mi} min`;}

/* ---------- Salât : rappel ---------- */
let actx=null;
function ensureAudio(){try{actx=actx||new (window.AudioContext||window.webkitAudioContext)(); if(actx.state==='suspended') actx.resume();}catch(e){}}
function chime(){
  if(!actx) return; const t0=actx.currentTime+.05;
  [659.25,783.99,987.77,783.99].forEach((f,i)=>{try{const o=actx.createOscillator(),g=actx.createGain(),s=t0+i*.5;
    o.type='sine';o.frequency.value=f;g.gain.setValueAtTime(0,s);g.gain.linearRampToValueAtTime(.22,s+.03);g.gain.exponentialRampToValueAtTime(.001,s+1.3);
    o.connect(g);g.connect(actx.destination);o.start(s);o.stop(s+1.4);}catch(e){}});
}
function fireReminder(p,early){
  remPrayer=p.k;
  document.getElementById('remBody').innerHTML=`
    <div class="label">${early?'Dans '+S.rem.before+' minutes':'C’est l’heure'}</div>
    <div class="rem-ar" lang="ar">حَيَّ عَلَى الصَّلَاةِ</div>
    <div class="fst-italic">Hayya ‘alas-salâh · Venez à la prière</div>
    <h3 class="np-name mt-3" id="remTitle">${p.fr} <span class="ar" lang="ar">${p.ar}</span></h3>
    <div class="mt-1">${hm(p.at)} · ${p.rk} rak’as</div>`;
  const el=document.getElementById('remModal');
  if(window.bootstrap) bootstrap.Modal.getOrCreateInstance(el).show(); else {el.classList.add('show');el.style.display='block';}
  chime(); buzz([300,150,300]);
}
function tickSalat(){
  const now=new Date();
  if(S.rem.on){
    const day=now.getFullYear()+'-'+now.getMonth()+'-'+now.getDate();
    schedule(now).list.forEach(p=>{const trig=p.at.getTime()-S.rem.before*60000, key=day+p.k;
      if(now>=trig&&now-trig<3*60000&&!fired[key]){fired[key]=1; fireReminder(p,S.rem.before>0);}});
  }
  if(S.salat&&document.getElementById('npBox')) fillTimes();
}

/* ---------- Salât : guide manga ---------- */
const POSES={
 stand:{toe:[136,210],ankle:[122,208],knee:[121,170],hip:[120,128],sh:[121,76],elbow:[122,104],hand:[123,130],head:[123,56],face:0},
 qabd:{toe:[136,210],ankle:[122,208],knee:[121,170],hip:[120,128],sh:[121,76],elbow:[123,106],hand:[139,104],head:[123,56],face:0},
 takbir:{toe:[136,210],ankle:[122,208],knee:[121,170],hip:[120,128],sh:[121,76],elbow:[134,88],hand:[134,58],head:[123,56],face:0},
 ruku:{toe:[136,210],ankle:[122,208],knee:[124,170],hip:[116,128],sh:[162,124],elbow:[146,146],hand:[128,166],head:[180,124],face:55},
 sujud:{toe:[88,210],ankle:[92,196],knee:[132,208],hip:[118,170],sh:[166,190],elbow:[166,205],hand:[182,210],head:[184,196],face:90},
 sit:{toe:[92,210],ankle:[106,206],knee:[146,207],hip:[110,190],sh:[114,138],elbow:[120,165],hand:[140,190],head:[116,118],face:5}
};
const G={steps:[],i:0,playing:false,timer:null,cur:null,anim:0};
const AR={
 takbir:'اللَّهُ أَكْبَرُ', fatiha1:'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
 ruku:'سُبْحَانَ رَبِّيَ الْعَظِيمِ', itidal:'سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ ۝ رَبَّنَا وَلَكَ الْحَمْدُ',
 sujud:'سُبْحَانَ رَبِّيَ الْأَعْلَى', jalsa:'رَبِّ اغْفِرْ لِي',
 tash:'التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ…', ibra:'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ…',
 salam:'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ'
};
function buildSteps(pk){
  const P=PRAYERS.find(p=>p.k===pk), N=P.rk, loud=r=>pk==='fajr'||((pk==='maghrib'||pk==='isha')&&r<=2), out=[];
  out.push({pose:'stand',r:0,title:'Intention',fr:`Debout face à la Qibla, formule dans ton cœur l’intention de prier ${P.fr} : ${N} rak’as, pour Allah.`,note:'La niyya se fait dans le cœur, sans la prononcer.'});
  out.push({pose:'takbir',r:1,title:'Takbîr d’ouverture',ar:AR.takbir,tr:'Allâhou akbar',fr:'Allah est le plus Grand.',note:'Mains levées à hauteur des épaules ou des oreilles.'});
  for(let r=1;r<=N;r++){
    out.push({pose:'qiyam',r,long:true,title:'Debout (qiyâm)',ar:AR.fatiha1,tr:'Al-Fâtiha',fr:r<=2?'Récite la Fâtiha, puis une courte sourate (par exemple Al-Ikhlâs).':'Récite seulement la Fâtiha.',note:(r>1?'En te relevant : « Allâhou akbar ». ':'')+(loud(r)?'À voix haute.':'À voix basse.')});
    out.push({pose:'ruku',r,title:'Inclinaison (roukoû‘)',ar:AR.ruku,tr:'Soubhâna rabbiyal-‘azîm ×3',fr:'Gloire à mon Seigneur, le Très-Grand.',note:'En descendant : « Allâhou akbar ». Dos droit, mains sur les genoux.'});
    out.push({pose:'stand',r,title:'Redressement (i‘tidâl)',ar:AR.itidal,tr:'Sami‘Allâhou liman hamidah · Rabbanâ wa lakal-hamd',fr:'Allah entend celui qui Le loue. Notre Seigneur, à Toi la louange.'});
    out.push({pose:'sujud',r,title:'Prosternation (soujoûd)',ar:AR.sujud,tr:'Soubhâna rabbiyal-a‘lâ ×3',fr:'Gloire à mon Seigneur, le Très-Haut.',note:'En descendant : « Allâhou akbar ». Front, nez, mains, genoux et orteils au sol.'});
    out.push({pose:'sit',r,title:'Assise (jalsa)',ar:AR.jalsa,tr:'Rabbighfir lî ×2',fr:'Seigneur, pardonne-moi.',note:'« Allâhou akbar » en te redressant.'});
    out.push({pose:'sujud',r,title:'2ᵉ prosternation',ar:AR.sujud,tr:'Soubhâna rabbiyal-a‘lâ ×3',fr:'Gloire à mon Seigneur, le Très-Haut.',note:'« Allâhou akbar » en te prosternant.'});
    if(r===2&&N>2) out.push({pose:'sit',finger:true,r,long:true,title:'Tachahhoud du milieu',ar:AR.tash,tr:'At-tahiyyâtou lillâhi was-salawâtou wat-tayyibât…',fr:'Les salutations sont à Allah, ainsi que les prières et les bonnes choses…',note:'Index droit levé. Puis « Allâhou akbar » et relève-toi pour la rak’a suivante.'});
  }
  out.push({pose:'sit',finger:true,r:N,long:true,title:'Tachahhoud final',ar:AR.tash,tr:'At-tahiyyâtou lillâhi was-salawâtou wat-tayyibât…',fr:'Les salutations sont à Allah, ainsi que les prières et les bonnes choses…',note:'Index droit levé. Texte complet plus bas.'});
  out.push({pose:'sit',r:N,long:true,title:'Prière sur le Prophète ﷺ',ar:AR.ibra,tr:'Allâhoumma salli ‘alâ Mouhammadin wa ‘alâ âli Mouhammad…',fr:'Ô Allah, prie sur Muhammad et sur la famille de Muhammad…',note:'Salât Ibrâhîmiyya : texte complet plus bas.'});
  out.push({pose:'sit',turn:'r',r:N,title:'Salut à droite',ar:AR.salam,tr:'As-salâmou ‘alaykoum wa rahmatoullâh',fr:'Que la paix et la miséricorde d’Allah soient sur vous.',note:'Tourne la tête vers la droite.'});
  out.push({pose:'sit',turn:'l',r:N,title:'Salut à gauche',ar:AR.salam,tr:'As-salâmou ‘alaykoum wa rahmatoullâh',fr:'Que la paix et la miséricorde d’Allah soient sur vous.',note:'Puis vers la gauche. Chez les malikites, un seul salut à droite suffit.'});
  return out;
}
const poseOf=st=>JSON.parse(JSON.stringify(POSES[st.pose==='qiyam'?(S.guide.arms==='qabd'?'qabd':'stand'):st.pose]));
const P2=p=>p[0].toFixed(1)+' '+p[1].toFixed(1);
const dirv=(a,r)=>[Math.cos(a*D2R)*r,Math.sin(a*D2R)*r];
function drawFigure(p,st){
  const fem=S.guide.gender==='femme', robe=fem?'var(--accent)':'var(--surface)';
  const path=pts=>'M'+pts.map(P2).join(' L');
  const set=(id,d)=>{const e=document.getElementById(id); if(e) e.setAttribute('d',d);};
  ['legO','legF'].forEach(id=>set(id,path([p.toe,p.ankle,p.knee,p.hip])));
  ['torsoO','torsoF'].forEach(id=>set(id,path([p.hip,p.sh])));
  ['armO','armF'].forEach(id=>set(id,path([p.sh,p.elbow,p.hand])));
  document.getElementById('legF').setAttribute('stroke',robe);
  document.getElementById('torsoF').setAttribute('stroke',robe);
  document.getElementById('armF').setAttribute('stroke',robe);
  const h=p.head, sh=p.sh;
  let g='';
  if(fem){
    const fc=[h[0]+dirv(p.face,6.5)[0],h[1]+dirv(p.face,6.5)[1]];
    g+=`<path d="M${P2(h)} L${P2(sh)}" stroke="var(--ink)" stroke-width="31" stroke-linecap="round"/>
        <path d="M${P2(h)} L${P2(sh)}" stroke="var(--accent-ink)" stroke-width="25" stroke-linecap="round"/>
        <circle cx="${h[0]}" cy="${h[1]}" r="17" fill="var(--accent-ink)" stroke="var(--ink)" stroke-width="3"/>
        <circle cx="${fc[0].toFixed(1)}" cy="${fc[1].toFixed(1)}" r="8.5" fill="var(--skin)" stroke="var(--ink)" stroke-width="1.6"/>`;
  } else {
    const a=p.face-90, a1=a-75, a2=a+75, s=dirv(a1,13), e=dirv(a2,13);
    const arc=`M${(h[0]+s[0]).toFixed(1)} ${(h[1]+s[1]).toFixed(1)} A13 13 0 0 1 ${(h[0]+e[0]).toFixed(1)} ${(h[1]+e[1]).toFixed(1)}`;
    g+=`<path d="M${P2(h)} L${P2(sh)}" stroke="var(--ink)" stroke-width="13" stroke-linecap="round"/>
        <path d="M${P2(h)} L${P2(sh)}" stroke="var(--skin)" stroke-width="8" stroke-linecap="round"/>
        <circle cx="${h[0]}" cy="${h[1]}" r="15" fill="var(--skin)" stroke="var(--ink)" stroke-width="3"/>
        <path d="${arc}" fill="none" stroke="var(--ink)" stroke-width="10" stroke-linecap="round"/>
        <path d="${arc}" fill="none" stroke="var(--accent)" stroke-width="6" stroke-linecap="round"/>`;
  }
  document.getElementById('headG').innerHTML=g;
  const hc=document.getElementById('handC'); hc.setAttribute('cx',p.hand[0].toFixed(1)); hc.setAttribute('cy',p.hand[1].toFixed(1));
  document.getElementById('finger').setAttribute('d',st&&st.finger?`M${P2(p.hand)} L${(p.hand[0]+10).toFixed(1)} ${(p.hand[1]-8).toFixed(1)}`:'');
  let m='';
  if(st&&st.turn){const x=st.turn==='r'?h[0]+24:h[0]-24, sgn=st.turn==='r'?1:-1;
    m=`<path d="M${x} ${h[1]-14} q ${8*sgn} 14 0 28" fill="none" stroke="var(--ink)" stroke-width="3" stroke-linecap="round"/>
       <path d="M${x+6*sgn} ${h[1]-8} q ${6*sgn} 8 0 16" fill="none" stroke="var(--ink)" stroke-width="2" stroke-linecap="round"/>
       <text x="${st.turn==='r'?h[0]+36:h[0]-36}" y="${h[1]-18}" text-anchor="middle" class="qibla">${st.turn==='r'?'DROITE':'GAUCHE'}</text>`;}
  if(st&&st.pose==='takbir') m=`<text x="${h[0]+30}" y="${h[1]-22}" class="qibla">!</text>`;
  document.getElementById('motion').innerHTML=m;
}
function animateTo(target,st){
  cancelAnimationFrame(G.anim);
  const from=G.cur||target, reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches, dur=reduce?0:650, t0=performance.now();
  const keys=Object.keys(target).filter(k=>Array.isArray(target[k]));
  const frame=now=>{
    const k=dur?Math.min(1,(now-t0)/dur):1, e=k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2, p={};
    keys.forEach(n=>p[n]=[from[n][0]+(target[n][0]-from[n][0])*e, from[n][1]+(target[n][1]-from[n][1])*e]);
    p.face=from.face+(target.face-from.face)*e;
    drawFigure(p,k>=1?st:null); G.cur=p;
    if(k<1) G.anim=requestAnimationFrame(frame);
  };
  G.anim=requestAnimationFrame(frame);
}
function showStep(flash){
  const st=G.steps[G.i], P=PRAYERS.find(p=>p.k===S.guide.prayer), n=G.steps.length;
  const cap=document.getElementById('gCap'); if(!cap) return;
  cap.innerHTML=`<span>${st.r?'Rak’a '+st.r+' sur '+P.rk:'Préparation'}</span><span>${G.i+1} / ${n}</span>`;
  document.getElementById('gBubble').innerHTML=`<div class="b-title">${st.title}</div>${st.ar?`<div class="b-ar" lang="ar">${st.ar}</div>`:''}${st.tr?`<div class="b-tr">${st.tr}</div>`:''}<div class="b-fr">${st.fr}</div>${st.note?`<div class="b-note">${st.note}</div>`:''}`;
  document.getElementById('gBar').style.width=Math.round((G.i+1)/n*100)+'%';
  document.getElementById('gPlay').textContent=G.playing?'❚❚ Pause':'▶ Lecture';
  if(flash){const sp=document.getElementById('speed'); sp.classList.remove('flash'); void sp.getBoundingClientRect(); sp.classList.add('flash');}
  animateTo(poseOf(st),st);
}
function schedulePlay(){
  clearTimeout(G.timer);
  if(!G.playing) return;
  G.timer=setTimeout(()=>{ if(G.i<G.steps.length-1){G.i++; showStep(true); schedulePlay();} else {G.playing=false; showStep(false);} }, G.steps[G.i].long?7000:4200);
}
function setGuidePrayer(k){S.guide.prayer=k; G.steps=buildSteps(k); G.i=0; save();}

/* ---------- Salât : vue ---------- */
function speedLines(){let s='';for(let i=0;i<22;i++){const a=i*(360/22), c=[120,130], p1=dirv(a,92), p2=dirv(a,130); s+=`<line x1="${(c[0]+p1[0]).toFixed(1)}" y1="${(c[1]+p1[1]).toFixed(1)}" x2="${(c[0]+p2[0]).toFixed(1)}" y2="${(c[1]+p2[1]).toFixed(1)}" stroke="var(--ink)" stroke-width="${i%3?1.5:3}"/>`;}return s;}
function fillTimes(){
  const now=new Date(), sc=schedule(now), nx=nextPrayer(now), c=CITIES[S.rem.city]||CITIES.abidjan;
  document.getElementById('npBox').innerHTML=`
    <div class="eyebrow">Prochaine prière · ${c.n}</div>
    <div class="d-flex justify-content-between align-items-end gap-3 flex-wrap">
      <div><h2 class="np-name">${nx.fr}<span class="ar" lang="ar">${nx.ar}</span></h2><div class="np-time">${hm(nx.at)}</div></div>
      <div class="np-count text-end">dans ${until(nx.at-now)}<br>${nx.rk} rak’as</div>
    </div>`;
  const rows=[];
  sc.list.forEach((p,i)=>{
    rows.push(`<tr class="${p.k===nx.k&&p.at>now?'is-next':''}"><td class="pn"><b>${p.fr}</b><span class="ar" lang="ar">${p.ar}</span><small>${p.sunna}</small></td><td>${hm(p.at)}</td><td class="text-center"><span class="rk">${p.rk}</span></td><td>${p.voice}</td></tr>`);
    if(i===0) rows.push(`<tr class="muted-row"><td class="pn"><b>Lever du soleil</b><small>Fin du temps de Fajr</small></td><td>${hm(sc.sunrise)}</td><td></td><td></td></tr>`);
  });
  document.getElementById('timesBody').innerHTML=rows.join('');
}
function renderSalat(){
  if(!G.steps.length) G.steps=buildSteps(S.guide.prayer);
  const g=S.guide, chip=(attr,val,cur,label)=>`<button type="button" class="chip ${cur===val?'on':''}" ${attr}="${val}">${label}</button>`;
  document.getElementById('view').innerHTML=`
  <div class="vstack" style="gap:22px">
    <section class="next">
      <div id="npBox"></div>
      <button type="button" class="btn btn-onaccent w-100 d-inline-flex justify-content-center align-items-center gap-2" data-rem-toggle>
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 17V11a6 6 0 0 1 12 0v6l2 2H4z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M10 21h4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        ${S.rem.on?'Rappel de la prière activé':'Activer le rappel de la prière'}
      </button>
      <div class="rem-opts">
        <select class="form-select form-select-sm" id="remBefore" aria-label="Moment du rappel">
          ${[0,5,10,15].map(v=>`<option value="${v}" ${S.rem.before===v?'selected':''}>${v?v+' min avant':'À l’heure'}</option>`).join('')}
        </select>
        <select class="form-select form-select-sm" id="remCity" aria-label="Ville">
          ${Object.entries(CITIES).map(([k,c])=>`<option value="${k}" ${S.rem.city===k?'selected':''}>${c.n}</option>`).join('')}
        </select>
      </div>
      <small>Le rappel sonne tant que l’app reste ouverte. Horaires calculés (Fajr 18°, Isha 17°) : compare-les avec ta mosquée. <button type="button" class="btn btn-link btn-sm p-0 align-baseline" style="color:var(--on-accent)" data-rem-test>Tester le son</button></small>
    </section>

    <section>
      <div class="label mb-2">Horaires et rak’as du jour</div>
      <div class="table-responsive"><table class="table prayer-table align-middle mb-2">
        <thead><tr><th>Prière</th><th>Heure</th><th class="text-center">Rak’as</th><th>Lecture</th></tr></thead>
        <tbody id="timesBody"></tbody>
      </table></div>
      <p class="option"><b>Vendredi :</b> la Joumou‘a (2 rak’as à voix haute, après le sermon) remplace Dhuhr. Les rak’as indiquées sont les rak’as obligatoires (fard).</p>
    </section>

    <section>
      <div class="label mb-2">Comment prier, pas à pas</div>
      <div class="meta mt-0 mb-2">${PRAYERS.map(p=>chip('data-g-prayer',p.k,g.prayer,`${p.fr} · ${p.rk}`)).join('')}</div>
      <div class="meta mt-0 mb-3">
        ${chip('data-g-gender','femme',g.gender,'Femme')}${chip('data-g-gender','homme',g.gender,'Homme')}
        ${chip('data-g-arms','sadl',g.arms,'Bras le long du corps')}${chip('data-g-arms','qabd',g.arms,'Bras croisés')}
      </div>
      <div class="manga">
        <div class="panel-cap" id="gCap"></div>
        <svg id="stage" viewBox="0 0 240 240" role="img" aria-label="Illustration de la position de prière">
          <defs><pattern id="tone" width="6" height="6" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r="1" fill="var(--line)"/></pattern></defs>
          <rect x="2" y="2" width="236" height="236" rx="6" fill="var(--surface)"/>
          <rect x="2" y="2" width="236" height="236" rx="6" fill="url(#tone)"/>
          <g id="speed">${speedLines()}</g>
          <text x="226" y="26" text-anchor="end" class="qibla">QIBLA →</text>
          <rect x="62" y="211" width="152" height="6" rx="2" fill="var(--gold)" stroke="var(--ink)" stroke-width="2"/>
          <line x1="10" y1="218" x2="230" y2="218" stroke="var(--ink)" stroke-width="3"/>
          <g fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path id="legO" stroke="var(--ink)" stroke-width="17"/><path id="legF" stroke-width="11"/>
            <path id="torsoO" stroke="var(--ink)" stroke-width="27"/><path id="torsoF" stroke-width="21"/>
          </g>
          <g id="headG"></g>
          <g fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path id="armO" stroke="var(--ink)" stroke-width="13"/><path id="armF" stroke-width="8"/>
            <path id="finger" stroke="var(--ink)" stroke-width="3"/>
          </g>
          <circle id="handC" r="5" fill="var(--skin)" stroke="var(--ink)" stroke-width="2"/>
          <g id="motion"></g>
          <rect x="2" y="2" width="236" height="236" rx="6" fill="none" stroke="var(--ink)" stroke-width="4"/>
        </svg>
        <div class="bubble" id="gBubble" aria-live="polite"></div>
        <div class="progress mt-3" role="progressbar" aria-label="Avancement de la prière"><div class="progress-bar" id="gBar"></div></div>
        <div class="g-controls">
          <button type="button" class="btn btn-outline-secondary" data-g-prev>◀ Retour</button>
          <button type="button" class="btn btn-primary" id="gPlay" data-g-play>▶ Lecture</button>
          <button type="button" class="btn btn-outline-secondary" data-g-next>Suivant ▶</button>
        </div>
      </div>
    </section>

    <section>
      <div class="label mb-2">Ce qu’il faut dire, en entier</div>
      <div class="accordion" id="accTexts">
        ${[
          ['accF','Al-Fâtiha (à chaque rak’a)','بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ۝ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ۝ الرَّحْمَٰنِ الرَّحِيمِ ۝ مَالِكِ يَوْمِ الدِّينِ ۝ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ۝ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۝ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ','Bismillâhir-rahmânir-rahîm. Al-hamdou lillâhi rabbil-‘âlamîn. Ar-rahmânir-rahîm. Mâliki yawmid-dîn. Iyyâka na‘boudou wa iyyâka nasta‘în. Ihdinas-sirâtal-moustaqîm. Sirâtal-ladhîna an‘amta ‘alayhim, ghayril-maghdoûbi ‘alayhim wa lad-dâllîn. (Âmîn)'],
          ['accI','Al-Ikhlâs (courte sourate)','قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ','Qoul houwallâhou ahad. Allâhous-samad. Lam yalid wa lam yoûlad. Wa lam yakoul-lahou koufouwan ahad.'],
          ['accT','Tachahhoud','التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ','At-tahiyyâtou lillâhi was-salawâtou wat-tayyibât. As-salâmou ‘alayka ayyouhan-nabiyyou wa rahmatoullâhi wa barakâtouh. As-salâmou ‘alaynâ wa ‘alâ ‘ibâdillâhis-sâlihîn. Ach-hadou an lâ ilâha illallâh, wa ach-hadou anna Mouhammadan ‘abdouhou wa rasoûlouh. (Les malikites récitent la version de ‘Oumar, très proche.)'],
          ['accS','Salât Ibrâhîmiyya','اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ','Allâhoumma salli ‘alâ Mouhammadin wa ‘alâ âli Mouhammad, kamâ sallayta ‘alâ Ibrâhîma wa ‘alâ âli Ibrâhîm, innaka hamîdoun majîd. Allâhoumma bârik ‘alâ Mouhammadin wa ‘alâ âli Mouhammad, kamâ bârakta ‘alâ Ibrâhîma wa ‘alâ âli Ibrâhîm, innaka hamîdoun majîd.']
        ].map(([id,t,ar,tr])=>`<div class="accordion-item"><h3 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${id}" aria-expanded="false" aria-controls="${id}">${t}</button></h3><div id="${id}" class="accordion-collapse collapse"><div class="accordion-body"><div class="acc-ar" lang="ar">${ar}</div><div class="acc-tr">${tr}</div></div></div></div>`).join('')}
      </div>
    </section>

    <p class="option"><b>Vidéos :</b> une vidéo ne peut pas être intégrée dans cette app. Pour voir des dessins animés sur la prière, <a href="https://www.youtube.com/results?search_query=apprendre+la+pri%C3%A8re+musulmane+dessin+anim%C3%A9" target="_blank" rel="noopener">cherche-les sur YouTube</a>.</p>
  </div>`;
  fillTimes();
  G.cur=null; showStep(false); schedulePlay();
}

/* ---------- Rituels ---------- */
const byId=id=>MODULES.find(m=>m.id===id)||MODULES[0];
const today=()=>{const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')};
function mod(id){
  if(!S.mods[id]) S.mods[id]={days:[],step:0,memo:(id==='47'||id==='78'),cycle:null,counts:{date:'',c:[],s:0}};
  return S.mods[id];
}
function counts(M){
  const m=mod(M.id), t=today();
  if(m.counts.date!==t||m.counts.c.length!==M.steps.length){m.counts={date:t,c:M.steps.map(()=>0),s:0}; m.step=0;}
  return m.counts;
}
const cycleLen=(M,m)=>(m.cycle&&M.cycles.includes(m.cycle))?m.cycle:M.cycles[M.cycles.length-1];
function current(M,m,c){
  if(m.step==='s'&&M.secret) return {label:M.secret.titre,ar:M.secret.ar,n:M.secret.n,count:c.s};
  const i=typeof m.step==='number'&&m.step<M.steps.length?m.step:0; m.step=i; const st=M.steps[i];
  return {label:st.label,ar:st.ar,n:st.n,count:c.c[i]};
}
const esc=s=>String(s).replace(/[&<>"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
const pct=(a,b)=>Math.min(100,Math.round(a/b*100));
const R=94, CIRC=2*Math.PI*R;
let armedReset=false;

function render(){
  const M=byId(S.active), m=mod(M.id), c=counts(M), L=cycleLen(M,m);
  const group=S.salat?'salat':M.kind; save();
  clearTimeout(G.timer); cancelAnimationFrame(G.anim);
  document.getElementById('seg').innerHTML=[['sourate','Sourates'],['besoin','Besoins'],['salat','Salât']].map(([k,n])=>`<button type="button" class="btn btn-outline-primary ${group===k?'active':''}" aria-pressed="${group===k}" data-group="${k}">${n}</button>`).join('');
  const list=MODULES.filter(x=>x.kind===group), tabs=document.getElementById('tabs');
  tabs.hidden=!!S.salat;
  if(S.salat){ renderSalat(); return; }
  tabs.className='tabs '+(group==='sourate'?'g4':'g3');
  tabs.innerHTML=list.map(x=>`<button type="button" class="tab" role="tab" aria-selected="${x.id===M.id}" data-tab="${x.id}"><span class="n">${x.top}</span><span class="t ${x.kind==='besoin'?'ar':''}">${x.sub}</span></button>`).join('');
  const cur=current(M,m,c), p=Math.min(1,cur.count/cur.n);
  const doneDays=m.days.length, todayDone=m.days.includes(today());
  const dayLabel=doneDays>=L?`Cycle terminé · ${L} jours`:`Jour ${doneDays+(todayDone?0:1)} sur ${L}`;
  document.getElementById('view').innerHTML=`
  <div class="vstack" style="gap:22px">
    <section>
      <div class="hero">
        <div><div class="eyebrow">${M.eyebrow}</div><h2>${M.name}</h2><p>${M.objectif}</p></div>
        <div class="ar-name" lang="ar" dir="rtl">${M.arName}</div>
      </div>
      <div class="meta">
        ${M.cycles.length>1?M.cycles.map(n=>`<button type="button" class="chip ${L===n?'on':''}" data-cycle="${n}">${n} jours</button>`).join(''):`<span class="chip">Rituel de ${L} jours</span>`}
        ${M.kind==='sourate'?`<button type="button" class="chip ${m.memo?'on':''}" data-memo>${m.memo?'✓ Mémorisée':'En mémorisation'}</button>`:''}
      </div>
      ${M.care?`<div class="care">${M.care}</div>`:''}
    </section>

    <section class="formula">
      <div class="label">Formule clé</div>
      <div class="ar" lang="ar">${M.concept.ar}</div>
      <div class="tr">${M.concept.tr}</div>
      <div class="sens">${M.concept.sens}</div>
    </section>

    <section class="cycle">
      <div class="txt"><span class="label">Progression</span><strong>${dayLabel}</strong></div>
      <div class="beads ${L>7?'many':''}" aria-label="${doneDays} jours accomplis sur ${L}">
        ${Array.from({length:L},(_,i)=>`<span class="bead ${i<doneDays?'done':''} ${i===doneDays&&doneDays<L?'now':''}"></span>`).join('')}
      </div>
    </section>

    <section class="counter">
      <div class="label">${m.step==='s'?'Secret quotidien':'Étape '+(m.step+1)+' sur '+M.steps.length}</div>
      <div class="what">${esc(cur.label)}</div>
      ${cur.ar?`<div class="ar" lang="ar">${cur.ar}</div>`:''}
      <button type="button" class="tap ${cur.count>=cur.n?'full':''}" id="tap" aria-label="Compter : ${cur.count} sur ${cur.n}">
        <svg viewBox="0 0 220 220" aria-hidden="true"><circle cx="110" cy="110" r="${R}" fill="none" stroke="var(--line)" stroke-width="6"/><circle id="ring" cx="110" cy="110" r="${R}" fill="none" stroke="${cur.count>=cur.n?'var(--on-accent)':'var(--accent)'}" stroke-width="6" stroke-linecap="round" stroke-dasharray="${CIRC}" stroke-dashoffset="${CIRC*(1-p)}"/></svg>
        <span class="num" id="num">${cur.count}</span>
        <span class="of">sur ${cur.n}</span>
        <span class="hint">${cur.count>=cur.n?'Accompli':'Touche pour compter'}</span>
      </button>
      <div class="actions">
        <button type="button" class="btn btn-outline-secondary btn-sm" data-act="minus">− 1</button>
        <button type="button" class="btn btn-outline-secondary btn-sm" data-act="zero">Remettre à 0</button>
        <button type="button" class="btn btn-primary btn-sm" data-act="fill">Marquer fait</button>
      </div>
    </section>

    <section>
      <div class="label mb-2">Rituel du jour</div>
      <div class="list-group steps">
        ${M.steps.map((st,i)=>{const d=c.c[i]>=st.n, q=pct(c.c[i],st.n);return `<button type="button" class="list-group-item list-group-item-action step ${d?'done':''} ${m.step===i?'is-current':''}" data-step="${i}">
          <span class="ix">${d?'✓':i+1}</span>
          <span class="lbl"><b>${esc(st.label)}</b>${st.note?`<small>${st.note}</small>`:''}
            <span class="progress mt-1" role="progressbar" aria-label="Avancement" aria-valuenow="${q}" aria-valuemin="0" aria-valuemax="100"><span class="progress-bar" data-bar="${i}" style="width:${q}%"></span></span></span>
          <span class="badge rounded-pill pg" data-pg="${i}">${c.c[i]} / ${st.n}</span>
        </button>`}).join('')}
      </div>
    </section>

    ${M.secret?`<section class="secret ${m.step==='s'?'active':''}">
      <div class="label">Secret quotidien · ${M.secret.titre}</div>
      <div class="ar" lang="ar">${M.secret.ar}</div>
      <p><i>${M.secret.tr}</i></p>
      <p style="color:var(--muted);font-size:14px">${M.secret.desc}</p>
      <button type="button" class="btn btn-gold btn-sm align-self-start" data-secret>${c.s>=M.secret.n?'✓ Fait aujourd’hui':(m.step==='s'?'Compteur actif · '+c.s+' / '+M.secret.n:'Compter ('+c.s+' / '+M.secret.n+')')}</button>
    </section>`:''}

    ${M.option?`<p class="option">${M.option}</p>`:''}

    <div><button type="button" class="btn ${armedReset?'btn-outline-danger':'btn-outline-secondary'} btn-sm" data-act="resetcycle">${armedReset?'Confirmer : recommencer le cycle':'Recommencer le cycle'}</button></div>
  </div>`;
}

function updateLive(){
  const M=byId(S.active), m=mod(M.id), c=counts(M), cur=current(M,m,c);
  document.getElementById('num').textContent=cur.count;
  document.getElementById('ring').setAttribute('stroke-dashoffset',CIRC*(1-Math.min(1,cur.count/cur.n)));
  document.getElementById('tap').setAttribute('aria-label',`Compter : ${cur.count} sur ${cur.n}`);
  if(typeof m.step==='number'){
    const i=m.step, pg=document.querySelector(`[data-pg="${i}"]`), bar=document.querySelector(`[data-bar="${i}"]`);
    if(pg) pg.textContent=`${c.c[i]} / ${M.steps[i].n}`;
    if(bar) bar.style.width=pct(c.c[i],M.steps[i].n)+'%';
  }
}
let toastT;
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.hidden=false;clearTimeout(toastT);toastT=setTimeout(()=>t.hidden=true,2600)}
const buzz=ms=>{if(!S.look.vib) return; try{navigator.vibrate&&navigator.vibrate(ms)}catch(e){}};

function checkDay(M,m,c){
  const L=cycleLen(M,m);
  if(M.steps.every((st,i)=>c.c[i]>=st.n)&&!m.days.includes(today())&&m.days.length<L){
    m.days.push(today());
    toast(m.days.length>=L?'Cycle terminé. Qu’Allah accepte !':`Jour ${m.days.length} validé, barakAllahou fik`);
  }
}
function afterComplete(M,m,c){
  buzz([40,60,40]);
  setTimeout(()=>{
    if(typeof m.step==='number'){
      const next=M.steps.findIndex((st,i)=>c.c[i]<st.n);
      if(next>=0) m.step=next;
      checkDay(M,m,c);
    } else toast('Secret du jour accompli');
    save(); render();
  },380);
}
const focusTap=()=>document.getElementById('tap').scrollIntoView({block:'center',behavior:'smooth'});

/* Panneau Apparence : sans Bootstrap JS, on l'ouvre à la main */
function openPanelFallback(open){
  const p=document.getElementById('lookPanel');
  p.classList.toggle('show',open); p.style.visibility=open?'visible':'';
}

document.addEventListener('click',e=>{
  const t=e.target.closest('button'); if(!t) return;
  /* Apparence */
  if(t.id==='lookBtn'){ renderLook(); if(!window.bootstrap) openPanelFallback(true); return; }
  if(t.matches('[data-bs-dismiss="offcanvas"]')){ if(!window.bootstrap) openPanelFallback(false); return; }
  if(t.dataset.lookTheme){S.look.theme=t.dataset.lookTheme; applyLook(); renderLook(); save(); return;}
  if(t.dataset.lookAccent){S.look.accent=t.dataset.lookAccent; applyLook(); renderLook(); save(); return;}
  if(t.dataset.lookFont){S.look.arFont=t.dataset.lookFont; applyLook(); renderLook(); save(); return;}
  if(t.hasAttribute('data-look-reset')){S.look=Object.assign({},LOOK0); applyLook(); renderLook(); save(); toast('Apparence d’origine rétablie'); return;}
  if(t.closest('#lookPanel')) return;

  /* Fenêtres Bootstrap sans le script : repli manuel */
  if(!window.bootstrap&&t.dataset.bsToggle==='collapse'){const c=document.querySelector(t.dataset.bsTarget); if(c){const o=!c.classList.contains('show'); c.classList.toggle('show',o); t.classList.toggle('collapsed',!o); t.setAttribute('aria-expanded',o);} return;}
  if(!window.bootstrap&&t.matches('[data-bs-dismiss="modal"]')){const el=document.getElementById('remModal'); el.classList.remove('show'); el.style.display='none';}

  /* Salât */
  if(S.rem.on) ensureAudio();
  if(t.hasAttribute('data-goto-guide')){S.salat=true; setGuidePrayer(remPrayer); G.playing=false; render(); setTimeout(()=>{const s=document.getElementById('stage'); if(s) s.scrollIntoView({block:'center',behavior:'smooth'});},350); return;}
  if(t.hasAttribute('data-rem-toggle')){S.rem.on=!S.rem.on; save(); if(S.rem.on){ensureAudio(); chime(); toast('Rappel activé : garde l’app ouverte pour l’entendre');} else toast('Rappel désactivé'); render(); return;}
  if(t.hasAttribute('data-rem-test')){ensureAudio(); setTimeout(chime,80); return;}
  if(t.dataset.gPrayer){setGuidePrayer(t.dataset.gPrayer); G.playing=false; render(); document.getElementById('stage').scrollIntoView({block:'center',behavior:'smooth'}); return;}
  if(t.dataset.gGender){S.guide.gender=t.dataset.gGender; save(); document.querySelectorAll('[data-g-gender]').forEach(b=>b.classList.toggle('on',b.dataset.gGender===S.guide.gender)); if(G.cur) drawFigure(G.cur,G.steps[G.i]); return;}
  if(t.dataset.gArms){S.guide.arms=t.dataset.gArms; save(); document.querySelectorAll('[data-g-arms]').forEach(b=>b.classList.toggle('on',b.dataset.gArms===S.guide.arms)); showStep(false); return;}
  if(t.hasAttribute('data-g-prev')){if(G.i>0){G.i--; showStep(true);} schedulePlay(); return;}
  if(t.hasAttribute('data-g-next')){if(G.i<G.steps.length-1){G.i++; showStep(true);} schedulePlay(); return;}
  if(t.hasAttribute('data-g-play')){ if(!G.playing&&G.i>=G.steps.length-1) G.i=0; G.playing=!G.playing; showStep(false); schedulePlay(); return;}

  /* Rituels */
  const M=byId(S.active), m=mod(M.id), c=counts(M);
  if(t.dataset.act!=='resetcycle') armedReset=false;
  if(t.dataset.group){ const g=t.dataset.group; G.playing=false;
    if(g==='salat') S.salat=true; else { S.salat=false; if(g!==M.kind) S.active=(S['last_'+g])||MODULES.find(x=>x.kind===g).id; }
    save(); render(); window.scrollTo({top:0}); return; }
  if(t.dataset.tab){S.active=t.dataset.tab; S['last_'+byId(t.dataset.tab).kind]=t.dataset.tab; save(); render(); window.scrollTo({top:0}); return;}
  if(t.id==='tap'){
    if(m.step==='s'){ if(c.s>=M.secret.n) return; c.s++; save(); updateLive(); buzz(8); if(c.s>=M.secret.n) afterComplete(M,m,c); }
    else { const i=m.step, n=M.steps[i].n; if(c.c[i]>=n) return; c.c[i]++; save(); updateLive(); buzz(8); if(c.c[i]>=n) afterComplete(M,m,c); }
    return;
  }
  if(t.dataset.step!==undefined){m.step=+t.dataset.step;save();render();focusTap();return;}
  if(t.hasAttribute('data-secret')){m.step='s';save();render();focusTap();return;}
  if(t.dataset.cycle){m.cycle=+t.dataset.cycle;save();render();return;}
  if(t.hasAttribute('data-memo')){m.memo=!m.memo;save();render();return;}
  const act=t.dataset.act;
  if(act==='minus'||act==='zero'||act==='fill'){
    const cur=current(M,m,c);
    const v=act==='minus'?Math.max(0,cur.count-1):act==='zero'?0:cur.n;
    if(m.step==='s') c.s=v; else c.c[m.step]=v;
    save(); render();
    if(act==='fill') afterComplete(M,m,c);
    return;
  }
  if(act==='resetcycle'){
    if(!armedReset){armedReset=true;render();return;}
    armedReset=false; m.days=[]; m.counts={date:'',c:[],s:0}; save(); render(); toast('Nouveau cycle commencé');
  }
});
document.addEventListener('input',e=>{
  if(e.target.id==='arScale'){S.look.arScale=+e.target.value; applyLook(); const v=document.getElementById('scaleVal'); if(v) v.textContent=Math.round(S.look.arScale*100)+' %'; save();}
});
document.addEventListener('change',e=>{
  if(e.target.id==='vib'){S.look.vib=e.target.checked; save();}
  if(e.target.id==='remBefore'){S.rem.before=+e.target.value; save();}
  if(e.target.id==='remCity'){S.rem.city=e.target.value; save(); fillTimes();}
});
if(mql&&mql.addEventListener) mql.addEventListener('change',()=>{applyLook(); renderLook();});
try{ new MutationObserver(()=>{applyLook(); renderLook();}).observe(root,{attributes:true,attributeFilter:['data-theme']}); }catch(e){}

applyLook();
renderLook();
render();
setInterval(tickSalat,15000);
document.addEventListener('visibilitychange',()=>{if(!document.hidden) tickSalat();});
