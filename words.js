/* Word data for Farsi Fun. Loaded before the main script in index.html.
   Keeps index.html lean as the vocabulary grows. `words` and `CATS_MAP`
   become globals available to the inline script. */

/* ===================== WORDS ===================== */
const words = [
  {fa:"سیب", en:"apple", translit:"sib", emoji:"🍎", audio:"audio/sib.mp3", image:"images/sib.png"},
  {fa:"کتاب", en:"book", translit:"ketâb", emoji:"📖", audio:"audio/ketab.mp3", image:"images/ketab.png"},
  {fa:"گربه", en:"cat", translit:"gorbe", emoji:"🐱", audio:"audio/gorbe.mp3", image:"images/gorbe.png"},
  {fa:"سگ", en:"dog", translit:"sag", emoji:"🐶", audio:"audio/sag.mp3", image:"images/sag.png"},
  {fa:"آب", en:"water", translit:"âb", emoji:"💧", audio:"audio/ab.mp3", image:"images/ab.png"},
  {fa:"نان", en:"bread", translit:"nân", emoji:"🍞", audio:"audio/nan.mp3", image:"images/nan.png"},
  {fa:"چای", en:"tea", translit:"chây", emoji:"🍵", audio:"audio/chay.mp3", image:"images/chay.png"},
  {fa:"ماشین", en:"car", translit:"mâshin", emoji:"🚗", audio:"audio/mashin.mp3", image:"images/mashin.png"},
  {fa:"خانه", en:"house", translit:"khâne", emoji:"🏠", audio:"audio/khane.mp3", image:"images/khane.png"},
  {fa:"در", en:"door", translit:"dar", emoji:"🚪", audio:"audio/dar.mp3", image:"images/dar.png"},
  {fa:"سلام", en:"hello", translit:"salâm", emoji:"👋", audio:"audio/salam.mp3", image:"images/salam.png"},
  {fa:"خداحافظ", en:"goodbye", translit:"khodâhâfez", emoji:"👋", audio:"audio/khodahafez.mp3", image:"images/khodahafez.png"},
  {fa:"بله", en:"yes", translit:"bale", emoji:"✅", audio:"audio/bale.mp3", image:"images/bale.png"},
  {fa:"نه", en:"no", translit:"na", emoji:"❌", audio:"audio/na.mp3", image:"images/na.png"},
  {fa:"لطفاً", en:"please", translit:"lotfan", emoji:"🙏", audio:"audio/lotfan.mp3", image:"images/lotfan.png"},
  {fa:"مرسی", en:"thank you", translit:"merci", emoji:"🙏", audio:"audio/merci.mp3", image:"images/merci.png"},
  {fa:"صبح بخیر", en:"good morning", translit:"sobh bekheir", emoji:"🌅", audio:"audio/sobh_bekheir.mp3", image:"images/sobh_bekheir.png"},
  {fa:"شب بخیر", en:"good night", translit:"shab bekheir", emoji:"🌙", audio:"audio/shab_bekheir.mp3", image:"images/shab_bekheir.png"},
  {fa:"فردا", en:"tomorrow", translit:"fardâ", emoji:"📅", audio:"audio/farda.mp3", image:"images/farda.png"},
  {fa:"دیروز", en:"yesterday", translit:"diruz", emoji:"📅", audio:"audio/diruz.mp3", image:"images/diruz.png"},
  {fa:"امروز", en:"today", translit:"emruz", emoji:"📅", audio:"audio/emruz.mp3", image:"images/emruz.png"},
  {fa:"کره", en:"butter", translit:"kare", emoji:"🧈", audio:"audio/kare.mp3", image:"images/kare.png"},
  {fa:"پنیر", en:"cheese", translit:"panir", emoji:"🧀", audio:"audio/panir.mp3", image:"images/panir.png"},
  {fa:"تخم مرغ", en:"egg", translit:"tokhm morgh", emoji:"🥚", audio:"audio/tokhm_morgh.mp3", image:"images/tokhm_morgh.png"},
  {fa:"گوشت", en:"meat", translit:"gusht", emoji:"🥩", audio:"audio/gusht.mp3", image:"images/gusht.png"},
  {fa:"مرغ", en:"chicken", translit:"morgh", emoji:"🍗", audio:"audio/morgh.mp3", image:"images/morgh.png"},
  {fa:"گاو", en:"cow", translit:"gâv", emoji:"🐄", audio:"audio/gav.mp3", image:"images/gav.png"},
  {fa:"ماهی", en:"fish", translit:"mâhi", emoji:"🐟", audio:"audio/mahi.mp3", image:"images/mahi.png"},
  {fa:"برنج", en:"rice", translit:"berenj", emoji:"🍚", audio:"audio/berenj.mp3", image:"images/berenj.png"},
  {fa:"شکر", en:"sugar", translit:"shekar", emoji:"🍬", audio:"audio/shekar.mp3", image:"images/shekar.png"},
  {fa:"نمک", en:"salt", translit:"namak", emoji:"🧂", audio:"audio/namak.mp3", image:"images/namak.png"},
  {fa:"فلفل", en:"pepper", translit:"felfel", emoji:"🌶️", audio:"audio/felfel.mp3", image:"images/felfel.png"},
  {fa:"لیمو", en:"lemon", translit:"limu", emoji:"🍋", audio:"audio/limu.mp3", image:"images/limu.png"},
  {fa:"پرتقال", en:"orange", translit:"porteghâl", emoji:"🍊", audio:"audio/porteghal.mp3", image:"images/porteghal.png"},
  {fa:"موز", en:"banana", translit:"moz", emoji:"🍌", audio:"audio/moz.mp3", image:"images/moz.png"},
  {fa:"هندوانه", en:"watermelon", translit:"hendune", emoji:"🍉", audio:"audio/hendune.mp3", image:"images/hendune.png"},
  {fa:"انگور", en:"grape", translit:"angur", emoji:"🍇", audio:"audio/angur.mp3", image:"images/angur.png"},
  {fa:"کیوی", en:"kiwi", translit:"kivi", emoji:"🥝", audio:"audio/kivi.mp3", image:"images/kivi.png"},
  {fa:"توت فرنگی", en:"strawberry", translit:"tut farangi", emoji:"🍓", audio:"audio/tut_farangi.mp3", image:"images/tut_farangi.png"},
  {fa:"خیار", en:"cucumber", translit:"khiâr", emoji:"🥒", audio:"audio/khiar.mp3", image:"images/khiar.png"},
  {fa:"گوجه", en:"tomato", translit:"goje", emoji:"🍅", audio:"audio/goje.mp3", image:"images/goje.png"},
  {fa:"سیب زمینی", en:"potato", translit:"sib zamini", emoji:"🥔", audio:"audio/sib_zamini.mp3", image:"images/sib_zamini.png"},
  {fa:"هویج", en:"carrot", translit:"havij", emoji:"🥕", audio:"audio/havij.mp3", image:"images/havij.png"},
  {fa:"قارچ", en:"mushroom", translit:"ghârch", emoji:"🍄", audio:"audio/gharch.mp3", image:"images/gharch.png"},
  {fa:"بادمجان", en:"eggplant", translit:"bâdemjân", emoji:"🍆", audio:"audio/bademjan.mp3", image:"images/bademjan.png"},
  {fa:"لوبیا", en:"bean", translit:"lubiâ", emoji:"🫘", audio:"audio/lubia.mp3", image:"images/lubia.png"},
  {fa:"عدس", en:"lentil", translit:"adas", emoji:"🫘", audio:"audio/adas.mp3", image:"images/adas.png"},
  {fa:"غذا", en:"food", translit:"ghazâ", emoji:"🍽️", audio:"audio/ghaza.mp3", image:"images/ghaza.png"},
  {fa:"آبمیوه", en:"juice", translit:"âb mive", emoji:"🧃", audio:"audio/ab_mive.mp3", image:"images/ab_mive.png"},
  {fa:"شیر", en:"milk", translit:"shir", emoji:"🥛", audio:"audio/shir.mp3", image:"images/shir.png"},
  {fa:"قهوه", en:"coffee", translit:"ghahve", emoji:"☕", audio:"audio/ghahve.mp3", image:"images/ghahve.png"},
  {fa:"آبجو", en:"beer", translit:"âbjo", emoji:"🍺", audio:"audio/abjo.mp3", image:"images/abjo.png"},
  {fa:"شراب", en:"wine", translit:"sharâb", emoji:"🍷", audio:"audio/sharab.mp3", image:"images/sharab.png"},
  {fa:"روشن", en:"light", translit:"roshan", emoji:"💡", audio:"audio/roshan.mp3", image:"images/roshan.png"},
  {fa:"تاریک", en:"dark", translit:"târik", emoji:"🌑", audio:"audio/tarik.mp3", image:"images/tarik.png"},
  {fa:"سفید", en:"white", translit:"sefid", emoji:"⚪", audio:"audio/sefid.mp3", image:"images/sefid.png"},
  {fa:"سیاه", en:"black", translit:"siyâh", emoji:"⚫", audio:"audio/siyah.mp3", image:"images/siyah.png"},
  {fa:"قرمز", en:"red", translit:"ghermez", emoji:"🔴", audio:"audio/ghermez.mp3", image:"images/ghermez.png"},
  {fa:"آبی", en:"blue", translit:"âbi", emoji:"🔵", audio:"audio/abi.mp3", image:"images/abi.png"},
  {fa:"سبز", en:"green", translit:"sabz", emoji:"🟢", audio:"audio/sabz.mp3", image:"images/sabz.png"},
  {fa:"زرد", en:"yellow", translit:"zard", emoji:"🟡", audio:"audio/zard.mp3", image:"images/zard.png"},
  {fa:"بنفش", en:"purple", translit:"banafsh", emoji:"🟣", audio:"audio/banafsh.mp3", image:"images/banafsh.png"},
  {fa:"نارنجی", en:"orange (color)", translit:"nârenji", emoji:"🟠", audio:"audio/narenji.mp3", image:"images/narenji.png"},
  {fa:"صورتی", en:"pink", translit:"surati", emoji:"🌸", audio:"audio/surati.mp3", image:"images/surati.png"},
  {fa:"بستنی", en:"ice cream", translit:"bastani", emoji:"🍨", audio:"audio/bastani.mp3", image:"images/bastani.png"},
  {fa:"شکلات", en:"chocolate", translit:"shokolât", emoji:"🍫", audio:"audio/shokolat.mp3", image:"images/shokolat.png"},
  {fa:"کیک", en:"cake", translit:"keyk", emoji:"🎂", audio:"audio/keyk.mp3", image:"images/keyk.png"},
  {fa:"پول", en:"money", translit:"pul", emoji:"💵", audio:"audio/pul.mp3", image:"images/pul.png"},
  {fa:"کارت بانکی", en:"bank card", translit:"kârt bânki", emoji:"💳", audio:"audio/kart_banki.mp3", image:"images/kart_banki.png"},
  {fa:"هدیه", en:"gift", translit:"hedye", emoji:"🎁", audio:"audio/hedye.mp3", image:"images/hedye.png"},
  {fa:"عروسی", en:"wedding", translit:"arusi", emoji:"💒", audio:"audio/arusi.mp3", image:"images/arusi.png"},
  {fa:"تولد", en:"birthday", translit:"tavallod", emoji:"🎉", audio:"audio/tavallod.mp3", image:"images/tavallod.png"},
  {fa:"عشق", en:"love", translit:"eshgh", emoji:"❤️", audio:"audio/eshgh.mp3", image:"images/eshgh.png"},
  {fa:"شنا", en:"swim", translit:"shenâ", emoji:"🏊", audio:"audio/shena.mp3", image:"images/shena.png"},
  {fa:"بازی", en:"play", translit:"bâzi", emoji:"🎮", audio:"audio/bazi.mp3", image:"images/bazi.png"},
  {fa:"تماشا", en:"watch", translit:"tamâshâ", emoji:"📺", audio:"audio/tamasha.mp3", image:"images/tamasha.png"},
  {fa:"دوست دارم", en:"I like", translit:"dust dâram", emoji:"👍", audio:"audio/dust_daram.mp3", image:"images/dust_daram.png"},
  {fa:"می‌رم", en:"I go", translit:"miram", emoji:"🏃", audio:"audio/miram.mp3", image:"images/miram.png"},
  {fa:"میام", en:"I come", translit:"miâm", emoji:"🚶", audio:"audio/miam.mp3", image:"images/miam.png"},
  {fa:"دیدن", en:"see", translit:"didan", emoji:"👀", audio:"audio/didan.mp3", image:"images/didan.png"},
  {fa:"شنیدن", en:"hear", translit:"shenidan", emoji:"👂", audio:"audio/shenidan.mp3", image:"images/shenidan.png"},
  {fa:"گفتن", en:"say", translit:"goftan", emoji:"🗣️", audio:"audio/goftan.mp3", image:"images/goftan.png"},
  {fa:"خوردن", en:"eat", translit:"khordan", emoji:"🍽️", audio:"audio/khordan.mp3", image:"images/khordan.png"},
  {fa:"خواب", en:"sleep", translit:"khâb", emoji:"😴", audio:"audio/khab.mp3", image:"images/khab.png"},
  {fa:"بیدار", en:"awake", translit:"bidâr", emoji:"⏰", audio:"audio/bidar.mp3", image:"images/bidar.png"},
  {fa:"درس", en:"teach", translit:"dars", emoji:"👩‍🏫", audio:"audio/dars.mp3", image:"images/dars.png"},
  {fa:"کار", en:"work", translit:"kâr", emoji:"💼", audio:"audio/kar.mp3", image:"images/kar.png"},
  {fa:"خواندن", en:"read", translit:"khândan", emoji:"📖", audio:"audio/khandan.mp3", image:"images/khandan.png"},
  {fa:"نوشتن", en:"write", translit:"neveshtan", emoji:"✍️", audio:"audio/neveshtan.mp3", image:"images/neveshtan.png"},
  {fa:"پرسش", en:"ask/question", translit:"porsesh", emoji:"❓", audio:"audio/porsesh.mp3", image:"images/porsesh.png"},
  {fa:"پاسخ", en:"answer", translit:"pâsokh", emoji:"💬", audio:"audio/pasokh.mp3", image:"images/pasokh.png"},
  {fa:"خرید", en:"shop", translit:"kharid", emoji:"🛍️", audio:"audio/kharid.mp3", image:"images/kharid.png"},
  {fa:"رانندگی", en:"drive", translit:"rânandegi", emoji:"🚗", audio:"audio/ranandegi.mp3", image:"images/ranandegi.png"},
  {fa:"راه رفتن", en:"walk", translit:"râh raftan", emoji:"🚶", audio:"audio/rah_raftan.mp3", image:"images/rah_raftan.png"},
  {fa:"لبخند", en:"smile", translit:"labkhand", emoji:"😊", audio:"audio/labkhand.mp3", image:"images/labkhand.png"},
  {fa:"گریه", en:"cry", translit:"gerye", emoji:"😢", audio:"audio/gerye.mp3", image:"images/gerye.png"},
  {fa:"خنده", en:"laugh", translit:"khande", emoji:"😂", audio:"audio/khande.mp3", image:"images/khande.png"},
  {fa:"گرسنه", en:"hungry", translit:"gorsne", emoji:"🍽️", audio:"audio/gorsne.mp3", image:"images/gorsne.png"},
  {fa:"تشنه", en:"thirsty", translit:"tashne", emoji:"🥤", audio:"audio/tashne.mp3", image:"images/tashne.png"},
  {fa:"خسته", en:"tired", translit:"khasté", emoji:"😴", audio:"audio/khaste.mp3", image:"images/khaste.png"},
  {fa:"خوشحال", en:"happy", translit:"khoshhâl", emoji:"😄", audio:"audio/khoshhal.mp3", image:"images/khoshhal.png"},
  {fa:"ناراحت", en:"sad", translit:"nârâhat", emoji:"😔", audio:"audio/narahat.mp3", image:"images/narahat.png"},
  {fa:"عصبانی", en:"angry", translit:"asabâni", emoji:"😠", audio:"audio/asabani.mp3", image:"images/asabani.png"},
  {fa:"آرام", en:"calm", translit:"ârâm", emoji:"😌", audio:"audio/aram.mp3", image:"images/aram.png"},
  {fa:"بزرگ", en:"big", translit:"bozorg", emoji:"🔵", audio:"audio/bozorg.mp3", image:"images/bozorg.png"},
  {fa:"کوچک", en:"small", translit:"kuchak", emoji:"⚪", audio:"audio/kuchak.mp3", image:"images/kuchak.png"},
  {fa:"بلند", en:"tall", translit:"boland", emoji:"📏", audio:"audio/boland.mp3", image:"images/boland.png"},
  {fa:"کوتاه", en:"short", translit:"kutâh", emoji:"📏", audio:"audio/kutah.mp3", image:"images/kutah.png"},
  {fa:"گرم", en:"hot", translit:"garm", emoji:"🔥", audio:"audio/garm.mp3", image:"images/garm.png"},
  {fa:"سرد", en:"cold", translit:"sard", emoji:"❄️", audio:"audio/sard.mp3", image:"images/sard.png"},
  {fa:"گران", en:"expensive", translit:"gerân", emoji:"💰", audio:"audio/geran.mp3", image:"images/geran.png"},
  {fa:"ارزان", en:"cheap", translit:"arzân", emoji:"🪙", audio:"audio/arzan.mp3", image:"images/arzan.png"},
  {fa:"زیبا", en:"beautiful", translit:"zibâ", emoji:"🌸", audio:"audio/ziba.mp3", image:"images/ziba.png"},
  {fa:"زشت", en:"ugly", translit:"zesht", emoji:"🙈", audio:"audio/zesht.mp3", image:"images/zesht.png"},
  {fa:"نزدیک", en:"near", translit:"nazdik", emoji:"📍", audio:"audio/nazdik.mp3", image:"images/nazdik.png"},
  {fa:"دور", en:"far", translit:"dur", emoji:"🗺️", audio:"audio/dur.mp3", image:"images/dur.png"},
  {fa:"چپ", en:"left", translit:"chap", emoji:"⬅️", audio:"audio/chap.mp3", image:"images/chap.png"},
  {fa:"راست", en:"right", translit:"râst", emoji:"➡️", audio:"audio/rast.mp3", image:"images/rast.png"},
  {fa:"بالا", en:"up", translit:"bâlâ", emoji:"⬆️", audio:"audio/bala.mp3", image:"images/bala.png"},
  {fa:"پایین", en:"down", translit:"pâyin", emoji:"⬇️", audio:"audio/payin.mp3", image:"images/payin.png"},
  {fa:"کجا", en:"where", translit:"kojâ", emoji:"📍", audio:"audio/koja.mp3", image:"images/koja.png"},
  {fa:"کی", en:"when", translit:"key", emoji:"⏰", audio:"audio/key.mp3", image:"images/key.png"},
  {fa:"چطور", en:"how", translit:"chetur", emoji:"🤔", audio:"audio/chetur.mp3", image:"images/chetur.png"},
  {fa:"چرا", en:"why", translit:"cherâ", emoji:"❓", audio:"audio/chera.mp3", image:"images/chera.png"},
  {fa:"چه کسی", en:"who", translit:"che kasi", emoji:"🧍", audio:"audio/chekasi.mp3", image:"images/chekasi.png"},
  {fa:"چه چیزی", en:"what", translit:"che chizi", emoji:"📦", audio:"audio/chechizi.mp3", image:"images/chechizi.png"},
  {fa:"چند", en:"how many", translit:"chand", emoji:"🔢", audio:"audio/chand.mp3", image:"images/chand.png"},
  {fa:"چقدر", en:"how much", translit:"cheghadr", emoji:"💰", audio:"audio/cheghadr.mp3", image:"images/cheghadr.png"},
  {fa:"زیاد", en:"a lot", translit:"ziyâd", emoji:"🔆", audio:"audio/ziad.mp3", image:"images/ziad.png"},
  {fa:"کم", en:"a little", translit:"kam", emoji:"🔅", audio:"audio/kam.mp3", image:"images/kam.png"},
  {fa:"همیشه", en:"always", translit:"hamishe", emoji:"♾️", audio:"audio/hamishe.mp3", image:"images/hamishe.png"},
  {fa:"گاهی", en:"sometimes", translit:"gâhi", emoji:"🔄", audio:"audio/gahi.mp3", image:"images/gahi.png"},
  {fa:"هیچوقت", en:"never", translit:"hichvaqt", emoji:"🚫", audio:"audio/hichvaqt.mp3", image:"images/hichvaqt.png"},
  {fa:"امسال", en:"this year", translit:"emsâl", emoji:"📅", audio:"audio/emsal.mp3", image:"images/emsal.png"},
  {fa:"ساعت چند است؟", en:"what time is it?", translit:"sâ’at chand ast?", emoji:"⏰", audio:"audio/saatchandast.mp3", image:"images/saatchandast.png"},
  {fa:"حالت چطور است؟", en:"how are you?", translit:"hâlet chetur ast?", emoji:"🙂", audio:"audio/haletcheturast.mp3", image:"images/haletcheturast.png"},
  {fa:"خوبم", en:"I’m good", translit:"khubam", emoji:"😊", audio:"audio/khubam.mp3", image:"images/khubam.png"},
  {fa:"بد نیستم", en:"I’m okay", translit:"bad nistam", emoji:"😌", audio:"audio/badnistam.mp3", image:"images/badnistam.png"},
  {fa:"خسته‌ام", en:"I’m tired", translit:"khasteam", emoji:"😴", audio:"audio/khasteam.mp3", image:"images/khasteam.png"},
  {fa:"گرسنه‌ام", en:"I’m hungry", translit:"gorsneam", emoji:"🍽️", audio:"audio/gorsneam.mp3", image:"images/gorsneam.png"},
  {fa:"تشنه‌ام", en:"I’m thirsty", translit:"tashneam", emoji:"🥤", audio:"audio/tashneam.mp3", image:"images/tashneam.png"},
  {fa:"بله، حتماً", en:"yes, of course", translit:"bale hatman", emoji:"✅", audio:"audio/bale_hatman.mp3", image:"images/bale_hatman.png"},
  {fa:"نه، متشکرم", en:"no, thank you", translit:"na moteshakeram", emoji:"🙅", audio:"audio/na_moteshakeram.mp3", image:"images/na_moteshakeram.png"},
    {fa:"می‌خواهم", en:"I want", translit:"mikham", emoji:"🤲", audio:"audio/mikham.mp3", image:"images/mikham.png"},
{fa:"لازم دارم", en:"I need", translit:"lâzem dâram", emoji:"📌", audio:"audio/lazem_daram.mp3", image:"images/lazem_daram.png"},
{fa:"می‌توانم", en:"I can", translit:"mitavânam", emoji:"💪", audio:"audio/mitavanam.mp3", image:"images/mitavanam.png"},
{fa:"نمی‌توانم", en:"I can’t", translit:"nemitavânam", emoji:"🚫", audio:"audio/nemitavanam.mp3", image:"images/nemitavanam.png"},
{fa:"می‌دانم", en:"I know", translit:"midânam", emoji:"🧠", audio:"audio/midanam.mp3", image:"images/midanam.png"},
{fa:"نمی‌دانم", en:"I don’t know", translit:"nemidânam", emoji:"❓", audio:"audio/nemidanam.mp3", image:"images/nemidanam.png"},
{fa:"فهمیدم", en:"I understand", translit:"fahmidam", emoji:"👌", audio:"audio/fahmidam.mp3", image:"images/fahmidam.png"},
{fa:"نفهمیدم", en:"I didn’t understand", translit:"nafahmidam", emoji:"🤷", audio:"audio/nafahmidam.mp3", image:"images/nafahmidam.png"},
{fa:"می‌خواهم بروم", en:"I want to go", translit:"mikham beravam", emoji:"🏃", audio:"audio/mikham_beravam.mp3", image:"images/mikham_beravam.png"},
{fa:"می‌خواهم بخورم", en:"I want to eat", translit:"mikham bokhoram", emoji:"🍽️", audio:"audio/mikham_bokhoram.mp3", image:"images/mikham_bokhoram.png"},
{fa:"می‌خواهم بخوابم", en:"I want to sleep", translit:"mikham bekhâbam", emoji:"😴", audio:"audio/mikham_bekhabam.mp3", image:"images/mikham_bekhabam.png"},
{fa:"ببخشید", en:"excuse me / sorry", translit:"bebakhshid", emoji:"🙇", audio:"", image:"images/bebakhshid.png"},
{fa:"دوست ندارم", en:"I don’t like", translit:"dust nadâram", emoji:"🚫❤️", audio:"audio/dust_nadaram.mp3", image:"images/dust_nadaram.png"},
{fa:"عالی", en:"great", translit:"âli", emoji:"🌟", audio:"audio/ali.mp3", image:"images/ali.png"},
{fa:"خوب", en:"good", translit:"khub", emoji:"👍", audio:"audio/khub.mp3", image:"images/khub.png"},
{fa:"بد", en:"bad", translit:"bad", emoji:"👎", audio:"audio/bad.mp3", image:"images/bad.png"},
{fa:"سریع", en:"fast", translit:"sari'", emoji:"⚡", audio:"audio/sari.mp3", image:"images/sari.png"},
{fa:"آهسته", en:"slow", translit:"âheste", emoji:"🐢", audio:"audio/aheste.mp3", image:"images/aheste.png"},
{fa:"آسان", en:"easy", translit:"âsân", emoji:"👌", audio:"audio/asan.mp3", image:"images/asan.png"},
{fa:"سخت", en:"difficult", translit:"sakht", emoji:"💪", audio:"audio/sakht.mp3", image:"images/sakht.png"},
  /* ── Travel pack ── */
  {fa:"مامان", en:"mom", translit:"mâmân", emoji:"🤱", audio:"", image:"images/maman.png"},
  {fa:"بابا", en:"dad", translit:"bâbâ", emoji:"👨", audio:"", image:"images/baba.png"},
  {fa:"مامان بزرگ", en:"grandma", translit:"mâmân bozorg", emoji:"👵", audio:"", image:"images/maman_bozorg.png"},
  {fa:"بابا بزرگ", en:"grandpa", translit:"bâbâ bozorg", emoji:"👴", audio:"", image:"images/baba_bozorg.png"},
  {fa:"خواهر", en:"sister", translit:"khâhar", emoji:"👧", audio:"", image:""},
  {fa:"برادر", en:"brother", translit:"barâdar", emoji:"👦", audio:"", image:""},
  {fa:"عمه", en:"aunt (dad's side)", translit:"amme", emoji:"👩", audio:"", image:"images/amme.png"},
  {fa:"عمو", en:"uncle (dad's side)", translit:"amu", emoji:"👨", audio:"", image:"images/amu.png"},
  {fa:"خاله", en:"aunt (mom's side)", translit:"khâle", emoji:"👩", audio:"", image:""},
  {fa:"دایی", en:"uncle (mom's side)", translit:"dâyi", emoji:"👨", audio:"", image:""},
  {fa:"خانواده", en:"family", translit:"khânevâde", emoji:"👨‍👩‍👧‍👦", audio:"", image:""},
  {fa:"هواپیما", en:"airplane", translit:"havâpeymâ", emoji:"✈️", audio:"", image:"images/havapeyma.png"},
  {fa:"فرودگاه", en:"airport", translit:"forudgâh", emoji:"🛫", audio:"", image:""},
  {fa:"چمدان", en:"suitcase", translit:"chamedân", emoji:"🧳", audio:"", image:""},
  {fa:"پاسپورت", en:"passport", translit:"pâsport", emoji:"🛂", audio:"", image:""},
  {fa:"هتل", en:"hotel", translit:"hotel", emoji:"🏨", audio:"", image:"images/hotel.png"},
  {fa:"تاکسی", en:"taxi", translit:"tâksi", emoji:"🚕", audio:"", image:"images/taxi.png"},
  {fa:"اتوبوس", en:"bus", translit:"otobus", emoji:"🚌", audio:"", image:""},
  {fa:"قطار", en:"train", translit:"qatâr", emoji:"🚂", audio:"", image:""},
  {fa:"بلیط", en:"ticket", translit:"belit", emoji:"🎫", audio:"", image:""},
  {fa:"دوستت دارم", en:"I love you", translit:"dustat dâram", emoji:"❤️", audio:"", image:""},
  {fa:"دلم برات تنگ شده", en:"I missed you", translit:"delam barât tang shode", emoji:"🥺", audio:"", image:""},
  {fa:"کمک", en:"help", translit:"komak", emoji:"🆘", audio:"", image:""},
  {fa:"دستشویی", en:"bathroom", translit:"dastshui", emoji:"🚽", audio:"", image:""},
  {fa:"ممنون", en:"thanks (warm)", translit:"mamnun", emoji:"🙏", audio:"", image:""},
  {fa:"یک", en:"one", translit:"yek", emoji:"1️⃣", audio:"", image:""},
  {fa:"دو", en:"two", translit:"do", emoji:"2️⃣", audio:"", image:""},
  {fa:"سه", en:"three", translit:"se", emoji:"3️⃣", audio:"", image:""},
  {fa:"چهار", en:"four", translit:"chahâr", emoji:"4️⃣", audio:"", image:""},
  {fa:"پنج", en:"five", translit:"panj", emoji:"5️⃣", audio:"", image:""},
  {fa:"شش", en:"six", translit:"shesh", emoji:"6️⃣", audio:"", image:""},
  {fa:"هفت", en:"seven", translit:"haft", emoji:"7️⃣", audio:"", image:""},
  {fa:"هشت", en:"eight", translit:"hasht", emoji:"8️⃣", audio:"", image:""},
  {fa:"نُه", en:"nine", translit:"noh", emoji:"9️⃣", audio:"", image:""},
  {fa:"ده", en:"ten", translit:"dah", emoji:"🔟", audio:"", image:""},
  /* ===== +100 words: animals, body, clothes, home, nature, days ===== */
  {fa:"پرنده", en:"bird", translit:"parande", emoji:"🐦", audio:"", image:""},
  {fa:"اسب", en:"horse", translit:"asb", emoji:"🐴", audio:"", image:""},
  {fa:"گوسفند", en:"sheep", translit:"gusfand", emoji:"🐑", audio:"", image:""},
  {fa:"بز", en:"goat", translit:"boz", emoji:"🐐", audio:"", image:""},
  {fa:"موش", en:"mouse", translit:"mush", emoji:"🐭", audio:"", image:""},
  {fa:"ببر", en:"tiger", translit:"babr", emoji:"🐯", audio:"", image:""},
  {fa:"فیل", en:"elephant", translit:"fil", emoji:"🐘", audio:"", image:"images/fil.png"},
  {fa:"میمون", en:"monkey", translit:"meymun", emoji:"🐒", audio:"", image:""},
  {fa:"خرس", en:"bear", translit:"khers", emoji:"🐻", audio:"", image:""},
  {fa:"خرگوش", en:"rabbit", translit:"khargush", emoji:"🐰", audio:"", image:""},
  {fa:"اردک", en:"duck", translit:"ordak", emoji:"🦆", audio:"", image:""},
  {fa:"قورباغه", en:"frog", translit:"ghurbâghe", emoji:"🐸", audio:"", image:""},
  {fa:"مار", en:"snake", translit:"mâr", emoji:"🐍", audio:"", image:""},
  {fa:"پروانه", en:"butterfly", translit:"parvâne", emoji:"🦋", audio:"", image:""},
  {fa:"زنبور", en:"bee", translit:"zanbur", emoji:"🐝", audio:"", image:""},
  {fa:"عنکبوت", en:"spider", translit:"ankabut", emoji:"🕷️", audio:"", image:""},
  {fa:"لاک‌پشت", en:"turtle", translit:"lâkposht", emoji:"🐢", audio:"", image:""},
  {fa:"زرافه", en:"giraffe", translit:"zarâfe", emoji:"🦒", audio:"", image:""},
  {fa:"آهو", en:"deer", translit:"âhu", emoji:"🦌", audio:"", image:""},
  {fa:"روباه", en:"fox", translit:"rubâh", emoji:"🦊", audio:"", image:""},
  {fa:"خوک", en:"pig", translit:"khuk", emoji:"🐷", audio:"", image:""},
  {fa:"الاغ", en:"donkey", translit:"olâgh", emoji:"🫏", audio:"", image:""},
  {fa:"سر", en:"head", translit:"sar", emoji:"🧑", audio:"", image:""},
  {fa:"مو", en:"hair", translit:"mu", emoji:"💇", audio:"", image:""},
  {fa:"چشم", en:"eye", translit:"cheshm", emoji:"👁️", audio:"", image:""},
  {fa:"گوش", en:"ear", translit:"gush", emoji:"👂", audio:"", image:""},
  {fa:"بینی", en:"nose", translit:"bini", emoji:"👃", audio:"", image:""},
  {fa:"دهان", en:"mouth", translit:"dahân", emoji:"👄", audio:"", image:""},
  {fa:"دندان", en:"tooth", translit:"dandân", emoji:"🦷", audio:"", image:""},
  {fa:"دست", en:"hand", translit:"dast", emoji:"✋", audio:"", image:""},
  {fa:"انگشت", en:"finger", translit:"angosht", emoji:"👆", audio:"", image:""},
  {fa:"بازو", en:"arm", translit:"bâzu", emoji:"💪", audio:"", image:""},
  {fa:"پا", en:"foot", translit:"pâ", emoji:"🦶", audio:"", image:""},
  {fa:"زانو", en:"knee", translit:"zânu", emoji:"🦵", audio:"", image:""},
  {fa:"شکم", en:"tummy", translit:"shekam", emoji:"🤰", audio:"", image:""},
  {fa:"قلب", en:"heart", translit:"ghalb", emoji:"❤️", audio:"", image:""},
  {fa:"صورت", en:"face", translit:"surat", emoji:"😊", audio:"", image:""},
  {fa:"زبان", en:"tongue", translit:"zabân", emoji:"👅", audio:"", image:""},
  {fa:"پیراهن", en:"shirt", translit:"pirâhan", emoji:"👕", audio:"", image:""},
  {fa:"شلوار", en:"pants", translit:"shalvâr", emoji:"👖", audio:"", image:""},
  {fa:"لباس", en:"dress", translit:"lebâs", emoji:"👗", audio:"", image:""},
  {fa:"کفش", en:"shoes", translit:"kafsh", emoji:"👟", audio:"", image:""},
  {fa:"جوراب", en:"socks", translit:"jurâb", emoji:"🧦", audio:"", image:""},
  {fa:"کلاه", en:"hat", translit:"kolâh", emoji:"🎩", audio:"", image:""},
  {fa:"کت", en:"coat", translit:"kot", emoji:"🧥", audio:"", image:""},
  {fa:"روسری", en:"scarf", translit:"rusari", emoji:"🧣", audio:"", image:""},
  {fa:"دستکش", en:"gloves", translit:"dastkesh", emoji:"🧤", audio:"", image:""},
  {fa:"عینک", en:"glasses", translit:"eynak", emoji:"👓", audio:"", image:""},
  {fa:"انگشتر", en:"ring", translit:"angoshtar", emoji:"💍", audio:"", image:""},
  {fa:"دامن", en:"skirt", translit:"dâman", emoji:"👚", audio:"", image:""},
  {fa:"میز", en:"table", translit:"miz", emoji:"🍽️", audio:"", image:""},
  {fa:"صندلی", en:"chair", translit:"sandali", emoji:"🪑", audio:"", image:""},
  {fa:"تخت", en:"bed", translit:"takht", emoji:"🛏️", audio:"", image:""},
  {fa:"پنجره", en:"window", translit:"panjere", emoji:"🪟", audio:"", image:""},
  {fa:"اتاق", en:"room", translit:"otâgh", emoji:"🏠", audio:"", image:""},
  {fa:"آشپزخانه", en:"kitchen", translit:"âshpazkhâne", emoji:"🍳", audio:"", image:""},
  {fa:"چراغ", en:"lamp", translit:"cherâgh", emoji:"💡", audio:"", image:""},
  {fa:"قاشق", en:"spoon", translit:"ghâshogh", emoji:"🥄", audio:"", image:""},
  {fa:"چنگال", en:"fork", translit:"changâl", emoji:"🍴", audio:"", image:""},
  {fa:"چاقو", en:"knife", translit:"châghu", emoji:"🔪", audio:"", image:""},
  {fa:"بشقاب", en:"plate", translit:"boshghâb", emoji:"🍽️", audio:"", image:""},
  {fa:"فنجان", en:"cup", translit:"fenjân", emoji:"☕", audio:"", image:""},
  {fa:"لیوان", en:"glass", translit:"livân", emoji:"🥛", audio:"", image:""},
  {fa:"کلید", en:"key", translit:"kelid", emoji:"🔑", audio:"", image:"images/key.png"},
  {fa:"ساعت", en:"clock", translit:"sâ'at", emoji:"🕐", audio:"", image:""},
  {fa:"آینه", en:"mirror", translit:"âyene", emoji:"🪞", audio:"", image:""},
  {fa:"حوله", en:"towel", translit:"hole", emoji:"🧻", audio:"", image:""},
  {fa:"صابون", en:"soap", translit:"sâbun", emoji:"🧼", audio:"", image:""},
  {fa:"پتو", en:"blanket", translit:"patu", emoji:"🛌", audio:"", image:""},
  {fa:"تلفن", en:"phone", translit:"telefon", emoji:"📞", audio:"", image:""},
  {fa:"خورشید", en:"sun", translit:"khorshid", emoji:"☀️", audio:"", image:"images/khorshid.png"},
  {fa:"ماه", en:"moon", translit:"mâh", emoji:"🌙", audio:"", image:""},
  {fa:"ستاره", en:"star", translit:"setâre", emoji:"⭐", audio:"", image:""},
  {fa:"آسمان", en:"sky", translit:"âsmân", emoji:"🌌", audio:"", image:""},
  {fa:"ابر", en:"cloud", translit:"abr", emoji:"☁️", audio:"", image:""},
  {fa:"باران", en:"rain", translit:"bârân", emoji:"🌧️", audio:"", image:""},
  {fa:"برف", en:"snow", translit:"barf", emoji:"❄️", audio:"", image:""},
  {fa:"باد", en:"wind", translit:"bâd", emoji:"💨", audio:"", image:""},
  {fa:"درخت", en:"tree", translit:"derakht", emoji:"🌳", audio:"", image:""},
  {fa:"گل", en:"flower", translit:"gol", emoji:"🌸", audio:"", image:""},
  {fa:"چمن", en:"grass", translit:"chaman", emoji:"🌱", audio:"", image:""},
  {fa:"برگ", en:"leaf", translit:"barg", emoji:"🍃", audio:"", image:""},
  {fa:"دریا", en:"sea", translit:"daryâ", emoji:"🌊", audio:"", image:""},
  {fa:"کوه", en:"mountain", translit:"kuh", emoji:"⛰️", audio:"", image:""},
  {fa:"رودخانه", en:"river", translit:"rudkhâne", emoji:"🏞️", audio:"", image:""},
  {fa:"ساحل", en:"beach", translit:"sâhel", emoji:"🏖️", audio:"", image:""},
  {fa:"باغ", en:"garden", translit:"bâgh", emoji:"🌷", audio:"", image:""},
  {fa:"آتش", en:"fire", translit:"âtash", emoji:"🔥", audio:"", image:""},
  {fa:"شنبه", en:"Saturday", translit:"shanbe", emoji:"📅", audio:"", image:""},
  {fa:"یکشنبه", en:"Sunday", translit:"yekshanbe", emoji:"📅", audio:"", image:""},
  {fa:"دوشنبه", en:"Monday", translit:"doshanbe", emoji:"📅", audio:"", image:""},
  {fa:"سه‌شنبه", en:"Tuesday", translit:"seshanbe", emoji:"📅", audio:"", image:""},
  {fa:"چهارشنبه", en:"Wednesday", translit:"chahârshanbe", emoji:"📅", audio:"", image:""},
  {fa:"پنجشنبه", en:"Thursday", translit:"panjshanbe", emoji:"📅", audio:"", image:""},
  {fa:"جمعه", en:"Friday", translit:"jome", emoji:"📅", audio:"", image:""},
  {fa:"هفته", en:"week", translit:"hafte", emoji:"🗓️", audio:"", image:""},
  {fa:"روز", en:"day", translit:"ruz", emoji:"📆", audio:"", image:""},
  {fa:"شب", en:"night", translit:"shab", emoji:"🌃", audio:"", image:""},
  {fa:"اسم", en:"name", translit:"esm", emoji:"🏷️", audio:"", image:""},
  {fa:"دوست", en:"friend", translit:"dust", emoji:"🧑‍🤝‍🧑", audio:"", image:""},
  /* ── More words ── */
  {fa:"هلو", en:"peach", translit:"holu", emoji:"🍑", audio:"", image:""},
  {fa:"گیلاس", en:"cherry", translit:"gilâs", emoji:"🍒", audio:"", image:""},
  {fa:"گلابی", en:"pear", translit:"golâbi", emoji:"🍐", audio:"", image:""},
  {fa:"آناناس", en:"pineapple", translit:"ânânâs", emoji:"🍍", audio:"", image:""},
  {fa:"انبه", en:"mango", translit:"anbe", emoji:"🥭", audio:"", image:""},
  {fa:"نارگیل", en:"coconut", translit:"nârgil", emoji:"🥥", audio:"", image:""},
  {fa:"پیاز", en:"onion", translit:"piâz", emoji:"🧅", audio:"", image:""},
  {fa:"سیر", en:"garlic", translit:"sir", emoji:"🧄", audio:"", image:""},
  {fa:"ذرت", en:"corn", translit:"zorrat", emoji:"🌽", audio:"", image:""},
  {fa:"کاهو", en:"lettuce", translit:"kâhu", emoji:"🥬", audio:"", image:""},
  {fa:"سوپ", en:"soup", translit:"sup", emoji:"🍲", audio:"", image:""},
  {fa:"پیتزا", en:"pizza", translit:"pitzâ", emoji:"🍕", audio:"", image:""},
  {fa:"ساندویچ", en:"sandwich", translit:"sândevich", emoji:"🥪", audio:"", image:""},
  {fa:"عسل", en:"honey", translit:"asal", emoji:"🍯", audio:"", image:""},
  {fa:"ماست", en:"yogurt", translit:"mâst", emoji:"🍶", audio:"", image:""},
  {fa:"شتر", en:"camel", translit:"shotor", emoji:"🐫", audio:"", image:""},
  {fa:"پنگوئن", en:"penguin", translit:"penguen", emoji:"🐧", audio:"", image:""},
  {fa:"دلفین", en:"dolphin", translit:"dolfin", emoji:"🐬", audio:"", image:""},
  {fa:"نهنگ", en:"whale", translit:"nahang", emoji:"🐳", audio:"", image:""},
  {fa:"کوسه", en:"shark", translit:"kuse", emoji:"🦈", audio:"", image:""},
  {fa:"خرچنگ", en:"crab", translit:"kharchang", emoji:"🦀", audio:"", image:""},
  {fa:"هشت‌پا", en:"octopus", translit:"hashtpâ", emoji:"🐙", audio:"", image:""},
  {fa:"جوجه", en:"chick", translit:"juje", emoji:"🐤", audio:"", image:""},
  {fa:"سنجاب", en:"squirrel", translit:"sanjâb", emoji:"🐿️", audio:"", image:""},
  {fa:"مورچه", en:"ant", translit:"murche", emoji:"🐜", audio:"", image:""},
  {fa:"حلزون", en:"snail", translit:"halazun", emoji:"🐌", audio:"", image:""},
  {fa:"دریاچه", en:"lake", translit:"daryâche", emoji:"🏞️", audio:"", image:""},
  {fa:"جنگل", en:"forest", translit:"jangal", emoji:"🌲", audio:"", image:""},
  {fa:"جزیره", en:"island", translit:"jazire", emoji:"🏝️", audio:"", image:""},
  {fa:"صحرا", en:"desert", translit:"sahrâ", emoji:"🏜️", audio:"", image:""},
  {fa:"سنگ", en:"stone", translit:"sang", emoji:"🪨", audio:"", image:""},
  {fa:"رنگین‌کمان", en:"rainbow", translit:"ranginkamân", emoji:"🌈", audio:"", image:""},
  {fa:"یخ", en:"ice", translit:"yakh", emoji:"🧊", audio:"", image:""},
  {fa:"دوچرخه", en:"bicycle", translit:"docharkhe", emoji:"🚲", audio:"", image:""},
  {fa:"موتور", en:"motorcycle", translit:"motor", emoji:"🏍️", audio:"", image:""},
  {fa:"قایق", en:"boat", translit:"ghâyegh", emoji:"🛶", audio:"", image:""},
  {fa:"کشتی", en:"ship", translit:"kashti", emoji:"🚢", audio:"", image:""},
  {fa:"کامیون", en:"truck", translit:"kâmyon", emoji:"🚚", audio:"", image:""},
  {fa:"هلیکوپتر", en:"helicopter", translit:"helikopter", emoji:"🚁", audio:"", image:""},
  {fa:"پل", en:"bridge", translit:"pol", emoji:"🌉", audio:"", image:""},
  {fa:"دیوار", en:"wall", translit:"divâr", emoji:"🧱", audio:"", image:""},
  {fa:"تلویزیون", en:"television", translit:"televizion", emoji:"📺", audio:"", image:""},
  {fa:"پله", en:"stairs", translit:"pelle", emoji:"🪜", audio:"", image:""},
  {fa:"گلدان", en:"flowerpot", translit:"goldân", emoji:"🪴", audio:"", image:""},
  {fa:"دویدن", en:"to run", translit:"davidan", emoji:"🏃", audio:"", image:""},
  {fa:"رقصیدن", en:"to dance", translit:"raghsidan", emoji:"💃", audio:"", image:""},
  {fa:"خریدن", en:"to buy", translit:"kharidan", emoji:"🛒", audio:"", image:""},
  {fa:"پختن", en:"to cook", translit:"pokhtan", emoji:"🍳", audio:"", image:""},
  {fa:"شستن", en:"to wash", translit:"shostan", emoji:"🧼", audio:"", image:""},
  {fa:"نشستن", en:"to sit", translit:"neshastan", emoji:"🪑", audio:"", image:""},
  /* ── More words (batch 2) ── */
  {fa:"پاپ‌کورن", en:"popcorn", translit:"pâpkorn", emoji:"🍿", audio:"", image:""},
  {fa:"کلوچه", en:"cookie", translit:"kolucheh", emoji:"🍪", audio:"", image:""},
  {fa:"دونات", en:"donut", translit:"donât", emoji:"🍩", audio:"", image:""},
  {fa:"آبنبات", en:"candy", translit:"âbnabât", emoji:"🍬", audio:"", image:""},
  {fa:"پنکیک", en:"pancake", translit:"pankik", emoji:"🥞", audio:"", image:""},
  {fa:"سالاد", en:"salad", translit:"sâlâd", emoji:"🥗", audio:"", image:""},
  {fa:"تاکو", en:"taco", translit:"tâko", emoji:"🌮", audio:"", image:""},
  {fa:"اسپاگتی", en:"spaghetti", translit:"espâgeti", emoji:"🍝", audio:"", image:""},
  {fa:"آجیل", en:"nuts", translit:"âjil", emoji:"🥜", audio:"", image:""},
  {fa:"نوشابه", en:"soda", translit:"nushâbe", emoji:"🥤", audio:"", image:""},
  {fa:"لیموناد", en:"lemonade", translit:"limunâd", emoji:"🍋", audio:"", image:""},
  {fa:"توپ", en:"ball", translit:"tup", emoji:"⚽", audio:"", image:""},
  {fa:"بادبادک", en:"kite", translit:"bâdbâdak", emoji:"🪁", audio:"", image:""},
  {fa:"بادکنک", en:"balloon", translit:"bâdkonak", emoji:"🎈", audio:"", image:""},
  {fa:"عروسک", en:"doll", translit:"arusak", emoji:"🪆", audio:"", image:""},
  {fa:"طبل", en:"drum", translit:"tabl", emoji:"🥁", audio:"", image:""},
  {fa:"گیتار", en:"guitar", translit:"gitâr", emoji:"🎸", audio:"", image:""},
  {fa:"پیانو", en:"piano", translit:"piyâno", emoji:"🎹", audio:"", image:""},
  {fa:"زنگ", en:"bell", translit:"zang", emoji:"🔔", audio:"", image:""},
  {fa:"مدرسه", en:"school", translit:"madrese", emoji:"🏫", audio:"", image:""},
  {fa:"بیمارستان", en:"hospital", translit:"bimârestân", emoji:"🏥", audio:"", image:""},
  {fa:"کتابخانه", en:"library", translit:"ketâbkhâne", emoji:"📚", audio:"", image:""},
  {fa:"شهر", en:"city", translit:"shahr", emoji:"🏙️", audio:"", image:""},
  {fa:"روستا", en:"village", translit:"rustâ", emoji:"🏘️", audio:"", image:""},
  {fa:"مزرعه", en:"farm", translit:"mazrae", emoji:"🚜", audio:"", image:""},
  {fa:"مسجد", en:"mosque", translit:"masjed", emoji:"🕌", audio:"", image:""},
  {fa:"باغ‌وحش", en:"zoo", translit:"bâghevahsh", emoji:"🦁", audio:"", image:""},
  {fa:"رستوران", en:"restaurant", translit:"resturân", emoji:"🍴", audio:"", image:""},
  {fa:"دکتر", en:"doctor", translit:"doktor", emoji:"👨‍⚕️", audio:"", image:""},
  {fa:"معلم", en:"teacher", translit:"moallem", emoji:"👩‍🏫", audio:"", image:""},
  {fa:"پلیس", en:"police officer", translit:"polis", emoji:"👮", audio:"", image:""},
  {fa:"آشپز", en:"chef", translit:"âshpaz", emoji:"👨‍🍳", audio:"", image:""},
  {fa:"کشاورز", en:"farmer", translit:"keshâvarz", emoji:"🧑‍🌾", audio:"", image:""},
  {fa:"خلبان", en:"pilot", translit:"khalabân", emoji:"🧑‍✈️", audio:"", image:""},
  {fa:"پادشاه", en:"king", translit:"pâdeshâh", emoji:"🤴", audio:"", image:""},
  {fa:"ملکه", en:"queen", translit:"malake", emoji:"👸", audio:"", image:""},
  {fa:"طوفان", en:"storm", translit:"tufân", emoji:"🌀", audio:"", image:""},
  {fa:"مه", en:"fog", translit:"meh", emoji:"🌫️", audio:"", image:""},
  {fa:"غار", en:"cave", translit:"ghâr", emoji:"🕳️", audio:"", image:""},
  {fa:"آتشفشان", en:"volcano", translit:"âtashfeshân", emoji:"🌋", audio:"", image:""},
  {fa:"سیاره", en:"planet", translit:"sayâre", emoji:"🪐", audio:"", image:""},
  {fa:"زمین", en:"earth", translit:"zamin", emoji:"🌍", audio:"", image:""},
  {fa:"تپه", en:"hill", translit:"tape", emoji:"🏔️", audio:"", image:""},
  {fa:"کراوات", en:"tie", translit:"kerâvât", emoji:"👔", audio:"", image:""},
  {fa:"چکمه", en:"boots", translit:"chakme", emoji:"🥾", audio:"", image:""},
  {fa:"چتر", en:"umbrella", translit:"chatr", emoji:"☂️", audio:"", image:""},
  {fa:"ژاکت", en:"sweater", translit:"zhâkat", emoji:"🧥", audio:"", image:""},
  {fa:"کیف", en:"bag", translit:"kif", emoji:"👜", audio:"", image:""},
  {fa:"کوله‌پشتی", en:"backpack", translit:"kulepushti", emoji:"🎒", audio:"", image:""},
];

/* ── Word categories (indices match words array) ── */
const CATS_MAP = [
  ["food","cooking"],           // 0   apple
  [],                           // 1   book
  [],                           // 2   cat
  [],                           // 3   dog
  ["food","cooking","greetings"],// 4  water
  ["food","cooking"],           // 5   bread
  ["food","greetings"],         // 6   tea
  ["travel"],                   // 7   car
  [],                           // 8   house
  [],                           // 9   door
  ["greetings"],                // 10  hello
  ["greetings"],                // 11  goodbye
  ["greetings"],                // 12  yes
  ["greetings"],                // 13  no
  ["greetings"],                // 14  please
  ["greetings"],                // 15  thank you
  ["greetings"],                // 16  good morning
  ["greetings"],                // 17  good night
  ["travel"],                   // 18  tomorrow
  [],                           // 19  yesterday
  [],                           // 20  today
  ["food","cooking"],           // 21  butter
  ["food","cooking"],           // 22  cheese
  ["food","cooking"],           // 23  egg
  ["food","cooking"],           // 24  meat
  ["food","cooking"],           // 25  chicken
  [],                           // 26  cow
  ["food","cooking"],           // 27  fish
  ["food","cooking"],           // 28  rice
  ["food","cooking"],           // 29  sugar
  ["cooking"],                  // 30  salt
  ["cooking"],                  // 31  pepper
  ["food","cooking"],           // 32  lemon
  ["food"],                     // 33  orange
  ["food"],                     // 34  banana
  ["food"],                     // 35  watermelon
  ["food"],                     // 36  grape
  ["food"],                     // 37  kiwi
  ["food"],                     // 38  strawberry
  ["food","cooking"],           // 39  cucumber
  ["food","cooking"],           // 40  tomato
  ["food","cooking"],           // 41  potato
  ["food","cooking"],           // 42  carrot
  ["food","cooking"],           // 43  mushroom
  ["food","cooking"],           // 44  eggplant
  ["food","cooking"],           // 45  bean
  ["food","cooking"],           // 46  lentil
  ["food"],                     // 47  food
  ["food","greetings"],         // 48  juice
  ["food"],                     // 49  milk
  ["food","greetings"],         // 50  coffee
  ["food"],                     // 51  beer
  ["food"],                     // 52  wine
  [],                           // 53  light
  [],                           // 54  dark
  [],                           // 55  white
  [],                           // 56  black
  [],                           // 57  red
  [],                           // 58  blue
  [],                           // 59  green
  [],                           // 60  yellow
  [],                           // 61  purple
  [],                           // 62  orange (color)
  [],                           // 63  pink
  ["food"],                     // 64  ice cream
  ["food"],                     // 65  chocolate
  ["food","cooking"],           // 66  cake
  ["travel"],                   // 67  money
  ["travel"],                   // 68  bank card
  ["greetings"],                // 69  gift
  ["greetings"],                // 70  wedding
  ["greetings"],                // 71  birthday
  ["greetings"],                // 72  love
  [],                           // 73  swim
  [],                           // 74  play
  [],                           // 75  watch
  ["greetings"],                // 76  I like
  ["travel"],                   // 77  I go
  ["travel"],                   // 78  I come
  [],                           // 79  see
  [],                           // 80  hear
  ["greetings"],                // 81  say
  ["food"],                     // 82  eat
  ["travel"],                   // 83  sleep
  [],                           // 84  awake
  [],                           // 85  teach
  [],                           // 86  work
  [],                           // 87  read
  [],                           // 88  write
  ["greetings"],                // 89  ask/question
  ["greetings"],                // 90  answer
  ["travel"],                   // 91  shop
  ["travel"],                   // 92  drive
  ["travel"],                   // 93  walk
  ["greetings"],                // 94  smile
  [],                           // 95  cry
  ["greetings"],                // 96  laugh
  ["food"],                     // 97  hungry
  ["food"],                     // 98  thirsty
  ["travel"],                   // 99  tired
  ["greetings"],                // 100 happy
  [],                           // 101 sad
  [],                           // 102 angry
  [],                           // 103 calm
  [],                           // 104 big
  [],                           // 105 small
  [],                           // 106 tall
  [],                           // 107 short
  ["cooking"],                  // 108 hot
  ["cooking"],                  // 109 cold
  ["travel"],                   // 110 expensive
  ["travel"],                   // 111 cheap
  [],                           // 112 beautiful
  [],                           // 113 ugly
  ["travel"],                   // 114 near
  ["travel"],                   // 115 far
  ["travel"],                   // 116 left
  ["travel"],                   // 117 right
  ["travel"],                   // 118 up
  ["travel"],                   // 119 down
  ["travel","greetings"],       // 120 where
  ["greetings"],                // 121 when
  ["greetings"],                // 122 how
  ["greetings"],                // 123 why
  ["greetings"],                // 124 who
  ["greetings"],                // 125 what
  ["travel","greetings"],       // 126 how many
  ["travel"],                   // 127 how much
  [],                           // 128 a lot
  [],                           // 129 a little
  [],                           // 130 always
  [],                           // 131 sometimes
  [],                           // 132 never
  [],                           // 133 this year
  ["travel","greetings"],       // 134 what time is it?
  ["greetings"],                // 135 how are you?
  ["greetings"],                // 136 I'm good
  ["greetings"],                // 137 I'm okay
  ["travel","greetings"],       // 138 I'm tired
  ["food","greetings"],         // 139 I'm hungry
  ["food"],                     // 140 I'm thirsty
  ["greetings"],                // 141 yes, of course
  ["greetings"],                // 142 no, thank you
  ["greetings"],                // 143 I want
  ["greetings"],                // 144 I need
  ["greetings"],                // 145 I can
  ["greetings"],                // 146 I can't
  ["greetings"],                // 147 I know
  ["greetings"],                // 148 I don't know
  ["greetings"],                // 149 I understand
  ["greetings","travel"],       // 150 I didn't understand
  ["travel"],                   // 151 I want to go
  ["food"],                     // 152 I want to eat
  ["travel"],                   // 153 I want to sleep
  ["greetings","travel"],       // 154 excuse me / sorry
  ["greetings"],                // 155 I don't like
  ["greetings"],                // 156 great
  ["greetings"],                // 157 good
  [],                           // 158 bad
  ["travel"],                   // 159 fast
  ["travel","greetings"],       // 160 slow
  [],                           // 161 easy
  [],                           // 162 difficult
  /* travel pack — 163–197 */
  ["travel"],                   // 163 mom
  ["travel"],                   // 164 dad
  ["travel"],                   // 165 grandma
  ["travel"],                   // 166 grandpa
  ["travel"],                   // 167 sister
  ["travel"],                   // 168 brother
  ["travel"],                   // 169 aunt (dad's)
  ["travel"],                   // 170 uncle (dad's)
  ["travel"],                   // 171 aunt (mom's)
  ["travel"],                   // 172 uncle (mom's)
  ["travel"],                   // 173 family
  ["travel"],                   // 174 airplane
  ["travel"],                   // 175 airport
  ["travel"],                   // 176 suitcase
  ["travel"],                   // 177 passport
  ["travel"],                   // 178 hotel
  ["travel"],                   // 179 taxi
  ["travel"],                   // 180 bus
  ["travel"],                   // 181 train
  ["travel"],                   // 182 ticket
  ["travel","greetings"],       // 183 I love you
  ["travel","greetings"],       // 184 I missed you
  ["travel","greetings"],       // 185 help
  ["travel","greetings"],       // 186 bathroom
  ["travel","greetings"],       // 187 thanks (warm)
  ["travel","greetings"],       // 188 one
  ["travel","greetings"],       // 189 two
  ["travel","greetings"],       // 190 three
  ["travel","greetings"],       // 191 four
  ["travel","greetings"],       // 192 five
  ["travel","greetings"],       // 193 six
  ["travel","greetings"],       // 194 seven
  ["travel","greetings"],       // 195 eight
  ["travel","greetings"],       // 196 nine
  ["travel","greetings"],       // 197 ten
  /* +100 words 198-297 */
  ["animals"],  // 198 bird
  ["animals"],  // 199 horse
  ["animals"],  // 200 sheep
  ["animals"],  // 201 goat
  ["animals"],  // 202 mouse
  ["animals"],  // 203 tiger
  ["animals"],  // 204 elephant
  ["animals"],  // 205 monkey
  ["animals"],  // 206 bear
  ["animals"],  // 207 rabbit
  ["animals"],  // 208 duck
  ["animals"],  // 209 frog
  ["animals"],  // 210 snake
  ["animals"],  // 211 butterfly
  ["animals"],  // 212 bee
  ["animals"],  // 213 spider
  ["animals"],  // 214 turtle
  ["animals"],  // 215 giraffe
  ["animals"],  // 216 deer
  ["animals"],  // 217 fox
  ["animals"],  // 218 pig
  ["animals"],  // 219 donkey
  ["body"],  // 220 head
  ["body"],  // 221 hair
  ["body"],  // 222 eye
  ["body"],  // 223 ear
  ["body"],  // 224 nose
  ["body"],  // 225 mouth
  ["body"],  // 226 tooth
  ["body"],  // 227 hand
  ["body"],  // 228 finger
  ["body"],  // 229 arm
  ["body"],  // 230 foot
  ["body"],  // 231 knee
  ["body"],  // 232 tummy
  ["body"],  // 233 heart
  ["body"],  // 234 face
  ["body"],  // 235 tongue
  ["clothes"],  // 236 shirt
  ["clothes"],  // 237 pants
  ["clothes"],  // 238 dress
  ["clothes"],  // 239 shoes
  ["clothes"],  // 240 socks
  ["clothes"],  // 241 hat
  ["clothes"],  // 242 coat
  ["clothes"],  // 243 scarf
  ["clothes"],  // 244 gloves
  ["clothes"],  // 245 glasses
  ["clothes"],  // 246 ring
  ["clothes"],  // 247 skirt
  ["home"],  // 248 table
  ["home"],  // 249 chair
  ["home"],  // 250 bed
  ["home"],  // 251 window
  ["home"],  // 252 room
  ["home","cooking"],  // 253 kitchen
  ["home"],  // 254 lamp
  ["home","cooking"],  // 255 spoon
  ["home","cooking"],  // 256 fork
  ["home","cooking"],  // 257 knife
  ["home","cooking"],  // 258 plate
  ["home","cooking"],  // 259 cup
  ["home","cooking"],  // 260 glass
  ["home"],  // 261 key
  ["home"],  // 262 clock
  ["home"],  // 263 mirror
  ["home"],  // 264 towel
  ["home"],  // 265 soap
  ["home"],  // 266 blanket
  ["home"],  // 267 phone
  ["nature"],  // 268 sun
  ["nature"],  // 269 moon
  ["nature"],  // 270 star
  ["nature"],  // 271 sky
  ["nature"],  // 272 cloud
  ["nature"],  // 273 rain
  ["nature"],  // 274 snow
  ["nature"],  // 275 wind
  ["nature"],  // 276 tree
  ["nature"],  // 277 flower
  ["nature"],  // 278 grass
  ["nature"],  // 279 leaf
  ["nature"],  // 280 sea
  ["nature"],  // 281 mountain
  ["nature"],  // 282 river
  ["nature"],  // 283 beach
  ["nature"],  // 284 garden
  ["nature"],  // 285 fire
  ["travel"],  // 286 Saturday
  ["travel"],  // 287 Sunday
  ["travel"],  // 288 Monday
  ["travel"],  // 289 Tuesday
  ["travel"],  // 290 Wednesday
  ["travel"],  // 291 Thursday
  ["travel"],  // 292 Friday
  ["travel"],  // 293 week
  ["travel"],  // 294 day
  ["travel"],  // 295 night
  ["greetings","travel"],  // 296 name
  ["greetings","travel"],  // 297 friend
  ["food","cooking"],  // 298 peach
  ["food","cooking"],  // 299 cherry
  ["food","cooking"],  // 300 pear
  ["food","cooking"],  // 301 pineapple
  ["food","cooking"],  // 302 mango
  ["food","cooking"],  // 303 coconut
  ["food","cooking"],  // 304 onion
  ["food","cooking"],  // 305 garlic
  ["food","cooking"],  // 306 corn
  ["food","cooking"],  // 307 lettuce
  ["food","cooking"],  // 308 soup
  ["food"],  // 309 pizza
  ["food"],  // 310 sandwich
  ["food","cooking"],  // 311 honey
  ["food","cooking"],  // 312 yogurt
  ["animals"],  // 313 camel
  ["animals"],  // 314 penguin
  ["animals"],  // 315 dolphin
  ["animals"],  // 316 whale
  ["animals"],  // 317 shark
  ["animals"],  // 318 crab
  ["animals"],  // 319 octopus
  ["animals"],  // 320 chick
  ["animals"],  // 321 squirrel
  ["animals"],  // 322 ant
  ["animals"],  // 323 snail
  ["nature"],  // 324 lake
  ["nature"],  // 325 forest
  ["nature"],  // 326 island
  ["nature"],  // 327 desert
  ["nature"],  // 328 stone
  ["nature"],  // 329 rainbow
  ["nature"],  // 330 ice
  ["travel"],  // 331 bicycle
  ["travel"],  // 332 motorcycle
  ["travel"],  // 333 boat
  ["travel"],  // 334 ship
  ["travel"],  // 335 truck
  ["travel"],  // 336 helicopter
  ["travel"],  // 337 bridge
  ["home"],  // 338 wall
  ["home"],  // 339 television
  ["home"],  // 340 stairs
  ["home"],  // 341 flowerpot
  [],  // 342 to run
  [],  // 343 to dance
  [],  // 344 to buy
  [],  // 345 to cook
  [],  // 346 to wash
  [],  // 347 to sit
  ["food"],  // 348 popcorn
  ["food","cooking"],  // 349 cookie
  ["food"],  // 350 donut
  ["food"],  // 351 candy
  ["food","cooking"],  // 352 pancake
  ["food","cooking"],  // 353 salad
  ["food"],  // 354 taco
  ["food","cooking"],  // 355 spaghetti
  ["food"],  // 356 nuts
  ["food"],  // 357 soda
  ["food"],  // 358 lemonade
  [],  // 359 ball
  [],  // 360 kite
  [],  // 361 balloon
  [],  // 362 doll
  [],  // 363 drum
  [],  // 364 guitar
  [],  // 365 piano
  [],  // 366 bell
  [],  // 367 school
  [],  // 368 hospital
  [],  // 369 library
  [],  // 370 city
  [],  // 371 village
  [],  // 372 farm
  [],  // 373 mosque
  [],  // 374 zoo
  [],  // 375 restaurant
  [],  // 376 doctor
  [],  // 377 teacher
  [],  // 378 police officer
  [],  // 379 chef
  [],  // 380 farmer
  [],  // 381 pilot
  [],  // 382 king
  [],  // 383 queen
  ["nature"],  // 384 storm
  ["nature"],  // 385 fog
  ["nature"],  // 386 cave
  ["nature"],  // 387 volcano
  ["nature"],  // 388 planet
  ["nature"],  // 389 earth
  ["nature"],  // 390 hill
  ["clothes"],  // 391 tie
  ["clothes"],  // 392 boots
  ["clothes"],  // 393 umbrella
  ["clothes"],  // 394 sweater
  ["clothes"],  // 395 bag
  ["clothes"],  // 396 backpack
];
CATS_MAP.forEach((cats, i) => { if (words[i]) words[i].cats = cats; });
