
const dict = {
  pl:{h1:"Nowoczesne sufity to sufity napinane",sub:"MV Design — eleganckie rozwiązania dla Twojego wnętrza",
      cta_call:"Zadzwoń teraz",cta_ig:"Facebook",
      f1:"10 lat gwarancji",f2:"Profesjonalny montaż",f3:"Nowoczesne rozwiązania",
      about_h:"Dlaczego my",about_p:"Specjalizujemy się w sufitach napinanych — precyzyjny montaż, terminowość i najwyższa estetyka.",
      contact_h:"Kontakt",phone_label:"Telefon",form_h:"Szybkie zapytanie",form_name:"Imię",form_msg:"Wiadomość",form_send:"Wyślij (otworzy e-mail)",
      footer:"© MV Design — Sufity Napinane"},
  ua:{h1:"Сучасні стелі — це натяжні стелі",sub:"MV Design — елегантні рішення для вашого інтер’єру",
      cta_call:"Подзвонити",cta_ig:"Facebook",
      f1:"10 років гарантії",f2:"Професійний монтаж",f3:"Сучасні рішення",
      about_h:"Чому ми",about_p:"Спеціалізуємося на натяжних стелях — точний монтаж, терміни та найвища естетика.",
      contact_h:"Контакти",phone_label:"Телефон",form_h:"Швидкий запит",form_name:"Ім’я",form_msg:"Повідомлення",form_send:"Надіслати (відкриє e-mail)",
      footer:"© MV Design — Натяжні стелі"}
};
const tel = "+48575514336";
const fb = "https://www.facebook.com/share/1BHzENvTGB/?mibextid=wwXIfr";

function setLang(lang){
  const t = dict[lang];
  for(const [key,val] of Object.entries(t)){
    const el = document.querySelector(`[data-i18n="${key}"]`);
    if(el) el.textContent = val;
  }
  document.querySelectorAll('[data-lang]').forEach(b=>b.classList.toggle('active', b.dataset.lang===lang));
}

window.addEventListener('DOMContentLoaded', ()=>{
  setLang('pl');
  document.querySelectorAll('[data-lang]').forEach(btn=> btn.addEventListener('click', ()=> setLang(btn.dataset.lang)));
  document.querySelectorAll('.js-tel').forEach(a=> a.href = "tel:"+tel);
  document.querySelectorAll('.js-fb').forEach(a=> a.href = fb);
  const wa = document.querySelectorAll('.js-wa');
  wa.forEach(a=> a.href = "https://wa.me/" + tel.replace(/\D/g,''));

  // Contact form (mailto + fallback)
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const msg = document.getElementById('msg').value.trim();
      const body = encodeURIComponent(`Imię/Ім’я: ${name}\nWiadomość/Повідомлення: ${msg}`);
      const mail = "Vrwroclawpl@gmail.com";
      const mailto = `mailto:${mail}?subject=Zapytanie — MV Design&body=${body}`;
      window.location.href = mailto;
      setTimeout(()=>{
        try{
          navigator.clipboard.writeText(`Email: ${mail}\n${decodeURIComponent(body)}`);
          alert("Jeśli poczta się nie otworzyła, treść wiadomości skopiowano do schowka — wklej w e-mail lub napisz w WhatsApp.");
        }catch(e){}
      }, 600);
    });
  }

  // Lightbox
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  document.querySelectorAll('[data-full]').forEach(card=>{
    card.addEventListener('click', ()=>{
      lbImg.src = card.dataset.full;
      lb.classList.add('show');
    });
  });
  lb.addEventListener('click', ()=> lb.classList.remove('show'));
});
