(function () {
  'use strict';

  /* ---------- Data: newspaper clippings [file, Hindi caption, English caption] ---------- */
  var MEDIA = [
    ['025', 'उत्तर प्रदेश से चयनित दुष्यंत त्यागी को मिला राष्ट्रीय ‘अटल भूषण गौरव सम्मान’', 'Dushyant Tyagi, selected from Uttar Pradesh, receives the national “Atal Bhushan Gaurav Samman”'],
    ['004', 'ए.एस. इंटर कॉलेज में तीन हजार छात्र-छात्राओं को दिया निःशुल्क आत्मरक्षा प्रशिक्षण', 'Free self-defence training for 3,000 students at A.S. Inter College'],
    ['002', 'श्री कृष्ण इंटर कॉलेज, बलैनी में आत्मरक्षा प्रशिक्षण प्रारंभ – बागपत का पहला विद्यालय', 'Self-defence training begins at Shri Krishna Inter College, Baleni – first school in Baghpat'],
    ['009', 'दैनिक जागरण: ताइक्वांडो फाइट से कराया महिला सुरक्षा का अहसास', 'Dainik Jagran: Taekwondo bout drives home the message of women’s safety'],
    ['011', 'महिला सुरक्षा और आत्मरक्षा के प्रति जागरूकता का दिया संदेश – नौचंदी मेला', 'Message of women’s safety and self-defence awareness – Nauchandi Mela'],
    ['003', 'शिक्षा का अहम हिस्सा है आत्मरक्षा प्रशिक्षण – ऑक्सफोर्ड इंटरनेशनल स्कूल', 'Self-defence training is a vital part of education – Oxford International School'],
    ['043', 'ए.एस. इंटर कॉलेज, मवाना में 3,000 छात्र-छात्राओं का निःशुल्क आत्मरक्षा प्रशिक्षण शिविर', 'Free self-defence camp for 3,000 students at A.S. Inter College, Mawana'],
    ['010', 'आत्मरक्षा के प्रदर्शन से महिला सशक्तिकरण की सीख', 'Self-defence demonstration teaches women’s empowerment'],
    ['054', 'मेरठ के बाद अब बागपत – नॉर्थ इंडिया सेल्फ डिफेंस फेडरेशन ने बढ़ाया कदम', 'After Meerut, now Baghpat – NISDF expands its reach'],
    ['066', 'आरजी की बालिकाओं ने सीखा सेल्फ डिफेंस', 'Girls of R.G. Inter College learn self-defence'],
    ['034', 'छात्राएं सीखेंगी मार्शल आर्ट से आत्मरक्षा के गुर', 'Girls to learn self-defence through martial arts'],
    ['012', 'महिलाओं को आत्मरक्षा के लिए जागरूकता का दिया संदेश', 'Awareness message on self-defence for women'],
    ['074', 'ऑक्सफोर्ड इंटरनेशनल स्कूल ने बनाया इतिहास', 'Oxford International School creates history'],
    ['087', 'ईएसएफ स्किल्स एकेडमी ने जीते छह मेडल', 'ESF Skills Academy wins six medals'],
    ['084', 'ईएसएफ स्किल्स एकेडमी के खिलाड़ियों ने जीते गोल्ड समेत छह मेडल', 'ESF Skills Academy players win six medals including gold'],
    ['040', 'छात्राओं को आत्मरक्षा का प्रशिक्षण दिया', 'Girls given self-defence training'],
    ['041', 'छात्र-छात्राओं को दिया आत्मरक्षा प्रशिक्षण', 'Students given self-defence training'],
    ['042', 'छात्राओं को दिया आत्मरक्षा प्रशिक्षण', 'Girls given self-defence training'],
    ['005', 'ए.एस. इंटर कॉलेज में 3,000 छात्रों को निःशुल्क आत्मरक्षा प्रशिक्षण', 'Free self-defence training for 3,000 students at A.S. Inter College'],
    ['073', 'नॉर्थ इंडिया सेल्फ डिफेंस फेडरेशन – समाचार कवरेज', 'North India Self Defense Federation – news coverage'],
    ['088', 'ताइक्वांडो प्रतियोगिता में खिलाड़ियों की सफलता', 'Players succeed at Taekwondo competition'],
    ['001', 'उदय ब्रीफ – सामाजिक कार्यक्रम की खबर', 'Uday Brief – news of a community programme']
  ];

  /* ---------- Data: gallery [file, category, Hindi caption, English caption] ---------- */
  var GALLERY = [
    ['036', 'training', 'ए.एस. इंटर कॉलेज, मवाना – सामूहिक आत्मरक्षा प्रशिक्षण', 'A.S. Inter College, Mawana – mass self-defence training'],
    ['035', 'training', 'विद्यालय प्रांगण में छात्राओं का प्रशिक्षण', 'Girls training on the school ground'],
    ['017', 'events', 'नौचंदी मेला 2026 – प्रतिभागियों का सम्मान', 'Nauchandi Mela 2026 – participants honoured'],
    ['039', 'training', 'ए.एस. इंटर कॉलेज, मवाना', 'A.S. Inter College, Mawana'],
    ['013', 'events', 'मंच पर आत्मरक्षा तकनीकों का प्रदर्शन', 'Self-defence techniques demonstrated on stage'],
    ['047', 'training', 'आत्मरक्षा तकनीक का लाइव डेमो', 'Live self-defence demo'],
    ['052', 'events', 'आत्मरक्षा प्रशिक्षण कार्यक्रम का शुभारंभ – ए.एस. इंटर कॉलेज', 'Launch of the training programme – A.S. Inter College'],
    ['029', 'sports', 'ताइक्वांडो स्पैरिंग – विद्यालय में प्रतियोगिता', 'Taekwondo sparring at school'],
    ['037', 'training', 'सैकड़ों छात्राएं एक साथ प्रशिक्षण में', 'Hundreds of girls training together'],
    ['014', 'events', 'मंच पर ताइक्वांडो प्रदर्शन', 'Taekwondo demonstration on stage'],
    ['069', 'events', 'आर.जी. इंटर कॉलेज, मेरठ – भव्य शुभारंभ समारोह', 'R.G. Inter College, Meerut – grand opening ceremony'],
    ['020', 'training', 'छात्र-छात्राओं का अनुशासित प्रशिक्षण सत्र', 'A disciplined training session'],
    ['081', 'sports', 'जिला ताइक्वांडो चैंपियनशिप – पदक विजेता', 'District Taekwondo Championship – medal winners'],
    ['059', 'events', 'श्री कृष्ण इंटर कॉलेज, बलैनी – शुभारंभ समारोह', 'Shri Krishna Inter College, Baleni – opening ceremony'],
    ['044', 'training', 'खुले मैदान में आत्मरक्षा शिविर', 'Open-ground self-defence camp'],
    ['064', 'events', 'आर.जी. इंटर कॉलेज – प्रशिक्षकों का प्रदर्शन', 'R.G. Inter College – trainers’ demonstration'],
    ['033', 'training', 'छात्राओं का आत्मरक्षा अभ्यास', 'Girls practising self-defence'],
    ['027', 'sports', 'सुरक्षा किट के साथ ताइक्वांडो मुकाबला', 'Taekwondo bout with protective gear'],
    ['016', 'events', 'नौचंदी मेला 2026 – अतिथियों का स्वागत', 'Nauchandi Mela 2026 – welcoming guests'],
    ['045', 'training', 'विद्यालय में सामूहिक प्रशिक्षण', 'Group training at school'],
    ['061', 'events', 'श्री कृष्ण इंटर कॉलेज – मंच प्रदर्शन', 'Shri Krishna Inter College – stage demonstration'],
    ['082', 'sports', 'ESF Skills Academy – विजेता खिलाड़ी', 'ESF Skills Academy – winning players'],
    ['049', 'training', 'छात्रों का किक अभ्यास', 'Students practising kicks'],
    ['053', 'events', 'जनप्रतिनिधियों के साथ', 'With public representatives'],
    ['022', 'training', 'प्रशिक्षण सत्र', 'Training session'],
    ['075', 'training', 'ऑक्सफोर्ड इंटरनेशनल स्कूल – छात्राओं का प्रशिक्षण', 'Oxford International School – girls in training'],
    ['015', 'events', 'नौचंदी मेला 2026 – खिलाड़ियों का सम्मान', 'Nauchandi Mela 2026 – athletes honoured'],
    ['032', 'sports', 'ताइक्वांडो खिलाड़ी', 'Taekwondo players'],
    ['067', 'events', 'आर.जी. इंटर कॉलेज – शुभारंभ', 'R.G. Inter College – launch'],
    ['050', 'training', 'खुले मैदान में अभ्यास', 'Practice on the open ground'],
    ['018', 'events', 'अधिकारियों के साथ', 'With officials'],
    ['062', 'events', 'शुभारंभ समारोह – अतिथिगण', 'Opening ceremony – guests'],
    ['083', 'sports', 'ESF Skills Academy के खिलाड़ी', 'ESF Skills Academy players'],
    ['023', 'training', 'प्रशिक्षण सत्र', 'Training session'],
    ['046', 'events', 'छात्रा को सम्मानित करते हुए', 'A student being honoured'],
    ['071', 'events', 'अधिकारियों से भेंट', 'Meeting officials'],
    ['079', 'sports', 'जिला ताइक्वांडो चैंपियनशिप – पोडियम', 'District Taekwondo Championship – podium'],
    ['030', 'sports', 'ताइक्वांडो मुकाबला', 'Taekwondo bout'],
    ['038', 'training', 'विशाल प्रशिक्षण शिविर', 'Large training camp'],
    ['006', 'events', 'गणमान्य व्यक्तियों से भेंट', 'Meeting dignitaries'],
    ['007', 'events', 'गणमान्य व्यक्तियों के साथ', 'With dignitaries'],
    ['076', 'events', 'जनप्रतिनिधियों के साथ', 'With public representatives'],
    ['077', 'training', 'जागरूकता सत्र', 'Awareness session'],
    ['078', 'training', 'प्रशिक्षण सत्र', 'Training session'],
    ['092', 'events', 'सामाजिक शिविर', 'Community camp']
  ];

  var lang = 'hi';

  function el(tag, attrs, html) {
    var e = document.createElement(tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (html) e.innerHTML = html;
    return e;
  }

  /* ---------- Render media ---------- */
  var mediaGrid = document.getElementById('mediaGrid');
  MEDIA.forEach(function (m) {
    var src = 'assets/img/news/' + m[0] + '.jpg';
    var a = el('a', { href: src, class: 'media-item lightbox-link', 'data-caption': m[1], 'data-caption-en': m[2] });
    a.appendChild(el('img', { src: src, alt: m[2], loading: 'lazy' }));
    a.appendChild(el('p', { 'data-en': m[2] }, m[1]));
    mediaGrid.appendChild(a);
  });

  /* ---------- Render gallery ---------- */
  var galleryGrid = document.getElementById('galleryGrid');
  GALLERY.forEach(function (g) {
    var src = 'assets/img/gallery/' + g[0] + '.jpg';
    var a = el('a', { href: src, class: 'g-item lightbox-link', 'data-cat': g[1], 'data-caption': g[2], 'data-caption-en': g[3] });
    a.appendChild(el('img', { src: src, alt: g[3], loading: 'lazy' }));
    a.appendChild(el('span', { 'data-en': g[3] }, g[2]));
    galleryGrid.appendChild(a);
  });

  /* ---------- "View more": show only the first few photos / clippings ---------- */
  var small = window.matchMedia('(max-width: 600px)').matches;
  var MORE = [
    { grid: galleryGrid, btn: document.getElementById('galleryMore'), limit: small ? 6 : 12, open: false,
      hi: ['और फ़ोटो देखें', 'कम फ़ोटो दिखाएं'], en: ['View more photos', 'Show fewer photos'] },
    { grid: mediaGrid, btn: document.getElementById('mediaMore'), limit: small ? 4 : 8, open: false,
      hi: ['और समाचार देखें', 'कम समाचार दिखाएं'], en: ['View more news', 'Show less news'] }
  ];
  function applyMore(m) {
    var items = Array.prototype.filter.call(m.grid.children, function (x) { return !x.classList.contains('hide'); });
    Array.prototype.forEach.call(m.grid.children, function (x) { x.classList.remove('over'); });
    var extra = items.length - m.limit;
    if (!m.open) items.slice(m.limit).forEach(function (x) { x.classList.add('over'); });
    m.btn.hidden = extra <= 0;
    var t = (lang === 'en' ? m.en : m.hi)[m.open ? 1 : 0];
    m.btn.textContent = m.open ? '▲ ' + t : t + ' (+' + extra + ') ▼';
  }
  function refreshMore() { MORE.forEach(applyMore); }
  MORE.forEach(function (m) {
    m.btn.addEventListener('click', function () {
      m.open = !m.open;
      applyMore(m);
      if (!m.open) m.grid.closest('section').scrollIntoView({ behavior: 'smooth' });
    });
  });

  document.querySelectorAll('.filter').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.filter').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var f = btn.getAttribute('data-filter');
      galleryGrid.querySelectorAll('.g-item').forEach(function (item) {
        item.classList.toggle('hide', f !== 'all' && item.getAttribute('data-cat') !== f);
      });
      MORE[0].open = false;
      applyMore(MORE[0]);
    });
  });

  /* ---------- Language switch (Hindi <-> English) ---------- */
  var title = document.querySelector('title');
  function setLang(next) {
    lang = next === 'en' ? 'en' : 'hi';
    document.querySelectorAll('[data-en]').forEach(function (n) {
      if (n.dataset.hi === undefined) n.dataset.hi = n === title ? n.textContent : n.innerHTML;
      var v = lang === 'en' ? n.getAttribute('data-en') : n.dataset.hi;
      if (n === title) n.textContent = v; else n.innerHTML = v;
    });
    document.documentElement.lang = lang;
    document.documentElement.removeAttribute('data-lang-pending');
    document.querySelectorAll('.lang-opt').forEach(function (o) {
      o.classList.toggle('active', o.getAttribute('data-l') === lang);
    });
    document.getElementById('langToggle').setAttribute('aria-label', lang === 'en' ? 'हिंदी में देखें' : 'View in English');
    try { localStorage.setItem('nisdf-lang', lang); } catch (e) {}
    refreshMore();
  }
  document.getElementById('langToggle').addEventListener('click', function () {
    setLang(lang === 'en' ? 'hi' : 'en');
  });
  var initial = 'hi';
  try { initial = new URLSearchParams(location.search).get('lang') || localStorage.getItem('nisdf-lang') || 'hi'; } catch (e) {}
  setLang(initial);

  /* ---------- Lightbox ---------- */
  var lb = document.getElementById('lightbox');
  var lbImg = lb.querySelector('img');
  var lbCap = lb.querySelector('figcaption');
  var current = [], idx = 0;

  function caption(a) {
    return (lang === 'en' && a.getAttribute('data-caption-en')) || a.getAttribute('data-caption') || '';
  }
  function show(i) {
    idx = (i + current.length) % current.length;
    var a = current[idx];
    lbImg.src = a.getAttribute('href');
    lbImg.alt = caption(a);
    lbCap.textContent = caption(a);
  }
  function open(link) {
    var scope = link.closest('#galleryGrid, #mediaGrid');
    current = scope
      ? Array.prototype.filter.call(scope.querySelectorAll('.lightbox-link'), function (x) { return !x.classList.contains('hide'); })
      : [link];
    show(current.indexOf(link));
    lb.classList.add('open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  document.addEventListener('click', function (e) {
    var link = e.target.closest('.lightbox-link');
    if (link) { e.preventDefault(); open(link); }
  });
  lb.querySelector('.lb-close').addEventListener('click', close);
  lb.querySelector('.lb-prev').addEventListener('click', function () { show(idx - 1); });
  lb.querySelector('.lb-next').addEventListener('click', function () { show(idx + 1); });
  lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(idx - 1);
    if (e.key === 'ArrowRight') show(idx + 1);
  });

  /* ---------- Mobile nav ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  toggle.addEventListener('click', function () {
    var openNow = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', openNow ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- Counters ---------- */
  function fmt(n) { return n.toLocaleString('en-IN'); }
  function runCounter(node) {
    var target = +node.getAttribute('data-count');
    var start = null, dur = 1600;
    function step(t) {
      if (!start) start = t;
      var p = Math.min((t - start) / dur, 1);
      node.textContent = fmt(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------- Reveal on scroll ---------- */
  var revealTargets = document.querySelectorAll('.section-head, .card, .school-col, .about-grid > *, .director-grid > *, .timeline li, .react-box');
  revealTargets.forEach(function (n) { n.classList.add('reveal'); });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        if (en.target.hasAttribute('data-count')) runCounter(en.target);
        else en.target.classList.add('in');
        io.unobserve(en.target);
      });
    }, { threshold: 0.15 });
    revealTargets.forEach(function (n) { io.observe(n); });
    document.querySelectorAll('[data-count]').forEach(function (n) { io.observe(n); });
  } else {
    revealTargets.forEach(function (n) { n.classList.add('in'); });
    document.querySelectorAll('[data-count]').forEach(function (n) { n.textContent = fmt(+n.getAttribute('data-count')); });
  }

  /* ---------- Contact form -> WhatsApp ---------- */
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var f = e.target;
    var L = lang === 'en'
      ? ['Hello NISDF,', 'Name', 'Mobile', 'I am a']
      : ['नमस्ते NISDF,', 'नाम', 'मोबाइल', 'मैं'];
    var text = L[0] + '\n\n' +
      L[1] + ': ' + f.name.value + '\n' +
      L[2] + ': ' + f.phone.value + '\n' +
      L[3] + ': ' + f.type.options[f.type.selectedIndex].text + '\n\n' +
      f.message.value;
    window.open('https://wa.me/918218967722?text=' + encodeURIComponent(text), '_blank', 'noopener');
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
