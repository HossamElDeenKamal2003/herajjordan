<template>
    <div class="dialog-overlay" v-if="isVisible">
        <div class="dialog-content">
            <div class="quraan" v-if="step === 0">
                <div class="quraan-text">
                    <h1>» إتفاقية الرسوم</h1>
                    <h2>بسم الله الرحمن الرحيم</h2>
                    <p>
                        قال الله تعالى:" وَأَوْفُواْ بِعَهْدِ اللهِ إِذَا عَاهَدتُّمْ وَلاَ تَنقُضُواْ الأَيْمَانَ
                        بَعْدَ تَوْكِيدِهَا وَقَدْ جَعَلْتُمُ اللهَ عَلَيْكُمْ كَفِيلاً "صدق الله العظيم
                    </p>
                    <p>
                        * اتعهد واقسم بالله أنا المعلن أن أدفع رسوم الموقع وهي 1% من قيمة البيع سواء تم البيع عن طريق
                        الموقع أو بسببه.
                    </p>
                    <p>
                        * كما أتعهد بدفع الرسوم خلال 10 أيام من استلام كامل مبلغ المبايعة.
                    </p>
                    <p>
                        ملاحظة: رسوم الموقع هي على المعلن ولاتبرأ ذمة المعلن من الرسوم إلا في حال دفعها.
                    </p>
                </div>
            </div>
            <div class="first-step" v-if="step === 1">
                <h2>اضافة منتح</h2>
                <input type="text" v-model="title" placeholder="Title" />
                <input type="text" v-model="price" placeholder="Price" />
                <textarea rows="10" cols="20" v-model="description" placeholder="Description"></textarea>
                <textarea rows="10" cols="20" v-model="content" placeholder="Content"></textarea>
                <div>
                    <select v-model="city" id="city" class="custom-select">
                        <option value="">اختر المدينة</option>
                        <option value="1">عمان</option>
                        <option value="2">اربد</option>
                        <option value="3">الزرقاء</option>
                        <option value="4">السلط</option>
                        <option value="5">المفرق</option>
                        <option value="6">الكرك</option>
                        <option value="7">مادبا</option>
                        <option value="8">جرش</option>
                        <option value="9">عجلون</option>
                        <option value="10">العقبة</option>
                        <option value="11">معان</option>
                        <option value="12">الطفيلة</option>
                    </select>
                </div>
                <div>
                    <select v-model="category" id="category" class="custom-select">
                        <option value="">اختر نوع المنشور</option>
                        <option value="1">سيارات</option>
                        <option value="2">عقار</option>
                        <option value="3">اجهزة</option>
                        <option value="4">اثاث</option>
                        <option value="5">وظائف</option>
                        <option value="6">مستلزمات شخصية</option>
                        <option value="7">حيوانات</option>
                    </select>
                </div>
                <select v-model="metaCategory" id="metaCategory" class="custom-select" v-if="category === '1'">
                    <option value="">اختر نوع السيارة</option>
                    <option value="fiat">فيات</option>
                    <option value="ford">فورد</option>
                    <option value="toyota">تويوتا</option>
                    <option value="jetour">جيتور</option>
                    <option value="hyundai">هيونداي</option>
                    <option value="honda">هوندا</option>
                    <option value="mazda">مازدا</option>
                    <option value="chevrolet">شيفروليه</option>
                    <option value="nissan">نيسان</option>
                    <option value="lexus">لكزس</option>
                    <option value="chery">تشيري</option>
                    <option value="kia">كيا</option>
                    <option value="mg">إم جي</option>
                    <option value="genesis">جينيسيس</option>
                    <option value="gmc">جي ام سي</option>
                    <option value="trucks">شاحنات</option>
                    <option value="mercedes">مرسيدس بنز</option>
                    <option value="bmw">بي ام دبليو</option>
                    <option value="geely">جيلي</option>
                    <option value="dodge">دودج</option>
                    <option value="chrysler">كرايسلر</option>
                    <option value="jeep">جيب</option>

                    <!-- Newly added car categories -->
                    <option value="mitsubishi">ميتسوبيشي</option>
                    <option value="isuzu">إيسوزو</option>
                    <option value="landRover">لاند روفر</option>
                    <option value="cadillac">كاديلاك</option>
                    <option value="porsche">بورش</option>
                    <option value="audi">أودي</option>
                    <option value="suzuki">سوزوكي</option>
                    <option value="infiniti">إنفينيتي</option>
                    <option value="hummer">همر</option>
                    <option value="lincoln">لينكولن</option>
                    <option value="volkswagen">فولكس فاجن</option>
                    <option value="daihatsu">دايهاتسو</option>
                    <option value="mercury">ميرسي</option>
                    <option value="volvo">فولفو</option>
                    <option value="peugeot">بيجو</option>
                    <option value="bentley">بنتلي</option>
                    <option value="jaguar">جاكوار</option>
                    <option value="subaru">سوبارو</option>
                    <option value="zxauto">ZX</option>
                    <option value="changan">شنجان</option>
                    <option value="renault">رينو</option>
                    <option value="buick">بويك</option>
                    <option value="maserati">مازيراتي</option>
                    <option value="rollsRoyce">رولز رويس</option>
                    <option value="lamborghini">لامبورغيني</option>
                    <option value="ferrari">فيراري</option>
                    <option value="citroen">سيتروين</option>
                    <option value="seat">سيات</option>
                    <option value="saab">ساب</option>
                    <option value="daewoo">دايو</option>
                    <option value="skoda">شكودا</option>
                    <option value="opel">أوبل</option>
                    <option value="lynkco">لينكيكو</option>
                    <option value="tank">تانك</option>
                </select>

                <div v-if="category === '1'">
                    <select v-model="modelCar" class="custom-select">
                        <option value="">اختر السنة</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                        <option value="2007">2007</option>
                        <option value="2006">2006</option>
                        <option value="2005">2005</option>
                        <option value="2004">2004</option>
                        <option value="2003">2003</option>
                        <option value="2002">2002</option>
                        <option value="2001">2001</option>
                        <option value="2000">2000</option>
                    </select>
                </div>
                <div v-if="category === '1' || category === '2'">
                    <select v-model="special" class="custom-select">
                        <option value="">بيع ام ايجار</option>
                        <option value="buy">بيع</option>
                        <option value="rent">ايجار</option>
                    </select>

                </div>
                <div v-if="category === '1' && metaCategory === 'fiat'">
                    <select v-model="carType" id="carType" class="custom-select">
                        <option value=""> اختر موديل السيارة</option>
                        <option value="fiat500">فيات 500</option>
                        <option value="fiatPanda">فيات باندا</option>
                        <option value="fiatTipo">فيات تيبو</option>
                        <option value="fiat124Spider">فيات 124 سبايدر</option>
                        <option value="fiatDucato">فيات دوكاتو</option>
                        <option value="fiatDoblo">فيات دوبلو</option>
                        <option value="fiat500X">فيات 500X</option>
                        <option value="fiatFreemont">فيات فريمنت</option>
                        <option value="fiat126">فيات 126</option>
                        <option value="fiat147">فيات 147</option>
                        <option value="fiatPunto">فيات Punto</option>
                        <option value="fiatQubo">فيات Qubo</option>
                        <option value="fiatAbarth500">فيات Abarth 500</option>
                        <option value="fiatAbarth124Spider">فيات Abarth 124 سبايدر</option>
                        <option value="fiatMultipla">فيات Multipla</option>
                    </select>
                </div>
                <div v-if="category === '1' && metaCategory === 'subaru'">
                    <select v-model="carType" id="subaruModels" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="subaruOutback">سوبارو أوتباك</option>
                        <option value="subaruForester">سوبارو فوريستر</option>
                        <option value="subaruCrosstrek">سوبارو كروس تريك</option>
                        <option value="subaruImpreza">سوبارو إمبريزا</option>
                        <option value="subaruLegacy">سوبارو ليجاسي</option>
                        <option value="subaruAscent">سوبارو أسنت</option>
                        <option value="subaruWRX">سوبارو WRX</option>
                        <option value="subaruWRX_STI">سوبارو WRX STI</option>
                        <option value="subaruBRZ">سوبارو BRZ</option>
                        <option value="subaruBaja">سوبارو باجا</option>
                        <option value="subaruTribeca">سوبارو تريبيكا</option>
                        <option value="subaruSVX">سوبارو SVX</option>
                        <option value="subaru360">سوبارو 360</option>
                        <option value="subaruLoyale">سوبارو لوالي</option>
                        <option value="subaruJusty">سوبارو جاستي</option>
                    </select>
                </div>

                <div v-if="category === '1' && metaCategory === 'zxauto'">
                    <select v-model="carType" id="zxautoModels" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="zxautoLandwind">ZXAuto لاندويند</option>
                        <option value="zxautoJMC">ZXAuto JMC</option>
                        <option value="zxautoCoolbear">ZXAuto كولبير</option>
                        <option value="zxautoAoxin">ZXAuto آوكسين</option>
                        <option value="zxautoZS">ZXAuto ZS</option>
                        <option value="zxautoEado">ZXAuto إيدو</option>
                        <option value="zxautoTana">ZXAuto تانا</option>
                        <option value="zxautoHuoyun">ZXAuto هويوان</option>
                        <option value="zxautoT8">ZXAuto T8</option>
                        <option value="zxautoDadi">ZXAuto دادي</option>
                    </select>
                </div>

                <div v-if="category === '1' && metaCategory === 'changan'">
                    <select v-model="carType" id="changanModels" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="changanCS35">شانجان CS35</option>
                        <option value="changanCS55">شانجان CS55</option>
                        <option value="changanCS75">شانجان CS75</option>
                        <option value="changanCS95">شانجان CS95</option>
                        <option value="changanEado">شانجان إيدو</option>
                        <option value="changanAlsvin">شانجان ألسفين</option>
                        <option value="changanHunter">شانجان هانتر</option>
                        <option value="changanVan">شانجان فان</option>
                        <option value="changanCX70">شانجان CX70</option>
                        <option value="changanBenni">شانجان بيني</option>
                        <option value="changanRaeton">شانجان ريتون</option>
                        <option value="changanCS15">شانجان CS15</option>
                        <option value="changanKaicheng">شانجان كايتشنغ</option>
                        <option value="changanA800">شانجان A800</option>
                    </select>
                </div>

                <div v-if="category === '1' && metaCategory === 'renault'">
                    <select v-model="carType" id="renaultModels" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="renaultClio">رينو كليو</option>
                        <option value="renaultCaptur">رينو كابتور</option>
                        <option value="renaultMegane">رينو ميغان</option>
                        <option value="renaultKoleos">رينو كوليوس</option>
                        <option value="renaultKadjar">رينو كادجار</option>
                        <option value="renaultArkana">رينو أركانا</option>
                        <option value="renaultTalisman">رينو تاليسمان</option>
                        <option value="renaultZoe">رينو زوي</option>
                        <option value="renaultEspace">رينو إسباس</option>
                        <option value="renaultLaguna">رينو لاغونا</option>
                        <option value="renaultScenic">رينو سينيك</option>
                        <option value="renaultTrafic">رينو ترافك</option>
                        <option value="renaultKangoo">رينو كانغو</option>
                        <option value="renault5">رينو 5</option>
                        <option value="renault12">رينو 12</option>
                    </select>
                </div>

                <div v-if="category === '1' && metaCategory === 'buick'">
                    <select v-model="carType" id="buickModels" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="buickEnclave">بويك إنكلاف</option>
                        <option value="buickEncore">بويك إنكور</option>
                        <option value="buickEncoreGX">بويك إنكور GX</option>
                        <option value="buickLaCrosse">بويك لاكروس</option>
                        <option value="buickRegal">بويك ريجال</option>
                        <option value="buickVerano">بويك فيرانيو</option>
                        <option value="buickCascada">بويك كاسكادا</option>
                        <option value="buickCentury">بويك سنتشوري</option>
                        <option value="buickElectra">بويك إليكترا</option>
                        <option value="buickSkylark">بويك سكايلاك</option>
                        <option value="buickRiviera">بويك ريفييرا</option>
                        <option value="buickRoadmaster">بويك رودماستر</option>
                        <option value="buickTerraza">بويك تيرازا</option>
                        <option value="buickRainier">بويك راينيير</option>
                        <option value="buickLucerne">بويك لوسيرن</option>
                    </select>
                </div>

                <div v-if="category === '1' && metaCategory === 'maserati'">
                    <select v-model="carType" id="maseratiModels" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="maseratiGhibli">مازيراتي غيبلي</option>
                        <option value="maseratiLevante">مازيراتي ليفانتي</option>
                        <option value="maseratiQuattroporte">مازيراتي كواتروبورتي</option>
                        <option value="maseratiAlfieri">مازيراتي ألفيري</option>
                        <option value="maseratiGranTurismo">مازيراتي غران توريزمو</option>
                        <option value="maseratiGranCabrio">مازيراتي غران كابريو</option>
                        <option value="maseratiKhamsin">مازيراتي خميسين</option>
                        <option value="maseratiBora">مازيراتي بورا</option>
                        <option value="maseratiBiturbo">مازيراتي بي توربو</option>
                        <option value="maserati3200GT">مازيراتي 3200 GT</option>
                        <option value="maseratiMistral">مازيراتي ميسtral</option>
                        <option value="maseratiSebring">مازيراتي سيبرينغ</option>
                    </select>
                </div>
                <!-- Opel Car Models -->
                <div v-if="category === '1' && metaCategory === 'opel'">
                    <select v-model="carType" id="opelModels" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="opelAstra">أوبل أسترا</option>
                        <option value="opelCorsa">أوبل كورسا</option>
                        <option value="opelInsignia">أوبل إنسيغنيا</option>
                        <option value="opelMokka">أوبل موكا</option>
                        <option value="opelZafira">أوبل زافيرا</option>
                        <option value="opelGrandland">أوبل غراند لاند</option>
                        <option value="opelAdam">أوبل آدم</option>
                        <option value="opelMeriva">أوبل ميريفا</option>
                        <option value="opelCombo">أوبل كومبو</option>
                        <option value="opelAstraK">أوبل أسترا ك</option>
                        <option value="opelVectra">أوبل فيكترا</option>
                        <option value="opelAntara">أوبل أنطارة</option>
                        <option value="opelGTC">أوبل جي تي سي</option>
                        <option value="opelKarl">أوبل كارل</option>
                        <option value="opelFrontera">أوبل فرونتيرا</option>
                        <option value="opelKadett">أوبل كاديت</option>
                        <option value="opelMovano">أوبل موفانو</option>
                        <option value="opelOmega">أوبل أوميغا</option>
                        <option value="opelSignum">أوبل سيغنوم</option>
                    </select>
                </div>

                <!-- Lynk & Co Car Models -->
                <div v-if="category === '1' && metaCategory === 'lynkco'">
                    <select v-model="carType" id="lynkCoModels" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="lynk01">لينك & كو 01</option>
                        <option value="lynk02">لينك & كو 02</option>
                        <option value="lynk03">لينك & كو 03</option>
                        <option value="lynk04">لينك & كو 04</option>
                        <option value="lynk05">لينك & كو 05</option>
                        <option value="lynk06">لينك & كو 06</option>
                    </select>
                </div>

                <!-- Tank Car Models -->
                <div v-if="category === '1' && metaCategory === 'tank'">
                    <select v-model="carType" id="tankModels" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="tank300">تانك 300</option>
                        <option value="tank500">تانك 500</option>
                        <option value="tank700">تانك 700</option>
                        <option value="tank800">تانك 800</option>
                    </select>
                </div>

                <div v-if="category === '1' && metaCategory === 'rollsRoyce'">
                    <select v-model="carType" id="rollsRoyceModels" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="rollsRoycePhantom">رولز رويس فانتوم</option>
                        <option value="rollsRoyceGhost">رولز رويس غاست</option>
                        <option value="rollsRoyceCullinan">رولز رويس كولينان</option>
                        <option value="rollsRoyceWraith">رولز رويس رايث</option>
                        <option value="rollsRoyceDawn">رولز رويس داون</option>
                        <option value="rollsRoyceSilverShadow">رولز رويس سيلفر شادو</option>
                        <option value="rollsRoyceSilverSpirit">رولز رويس سيلفر سبيريت</option>
                        <option value="rollsRoyceSilverCloud">رولز رويس سيلفر كلاود</option>
                        <option value="rollsRoyceCorniche">رولز رويس كورنيش</option>
                        <option value="rollsRoycePhantomDrophead">رولز رويس فانتوم دروب هيد</option>
                    </select>
                </div>


                <div v-if="category === '1' && metaCategory === 'lamborghini'">
                    <select v-model="carType" id="lamborghiniModels" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="lamborghiniHuracan">لامبورغيني هوراكان</option>
                        <option value="lamborghiniAventador">لامبورغيني أفينتادور</option>
                        <option value="lamborghiniUrus">لامبورغيني أوروس</option>
                        <option value="lamborghiniGallardo">لامبورغيني غالاردو</option>
                        <option value="lamborghiniDiablo">لامبورغيني ديابلو</option>
                        <option value="lamborghiniCountach">لامبورغيني كونتاش</option>
                        <option value="lamborghiniMurcielago">لامبورغيني مورسيلاجو</option>
                        <option value="lamborghiniSian">لامبورغيني سيان</option>
                        <option value="lamborghiniReventon">لامبورغيني ريفينتون</option>
                        <option value="lamborghiniCentenario">لامبورغيني سنتيناريو</option>
                        <option value="lamborghiniMiura">لامبورغيني ميوارا</option>
                        <option value="lamborghiniAsterion">لامبورغيني أستريوس</option>
                    </select>
                </div>

                <div v-if="category === '1' && metaCategory === 'ferrari'">
                    <select v-model="carType" id="ferrariModels" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="ferrari488">فيراري 488</option>
                        <option value="ferrariPortofino">فيراري بورتوفينو</option>
                        <option value="ferrariF8Tributo">فيراري F8 تريبيوتو</option>
                        <option value="ferrariRoma">فيراري روما</option>
                        <option value="ferrariLaFerrari">فيراري لافيراري</option>
                        <option value="ferrariEnzo">فيراري إنزو</option>
                        <option value="ferrari458">فيراري 458</option>
                        <option value="ferrariCalifornia">فيراري كاليفورنيا</option>
                        <option value="ferrariTestarossa">فيراري تيستاروسا</option>
                        <option value="ferrariF40">فيراري F40</option>
                        <option value="ferrariF50">فيراري F50</option>
                    </select>
                </div>

                <div v-if="category === '1' && metaCategory === 'citroen'">
                    <select v-model="carType" id="citroenModels" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="citroenC3">سيتروين C3</option>
                        <option value="citroenC4">سيتروين C4</option>
                        <option value="citroenC5">سيتروين C5</option>
                        <option value="citroenC1">سيتروين C1</option>
                        <option value="citroenBerlingo">سيتروين برلينغو</option>
                        <option value="citroenCactus">سيتروين كاكتوس</option>
                        <option value="citroenDS3">سيتروين DS3</option>
                        <option value="citroenDS5">سيتروين DS5</option>
                        <option value="citroenC4Picasso">سيتروين C4 بيكاسو</option>
                        <option value="citroenGrandC4Picasso">سيتروين جراند C4 بيكاسو</option>
                    </select>
                </div>

                <div v-if="category === '1' && metaCategory === 'seat'">
                    <select v-model="carType" id="seatModels" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="seatLeon">SEAT ليون</option>
                        <option value="seatIbiza">SEAT إيبيزا</option>
                        <option value="seatArona">SEAT أرونا</option>
                        <option value="seatTarraco">SEAT تارّاقو</option>
                        <option value="seatAlhambra">SEAT ألهمبرا</option>
                        <option value="seatMii">SEAT مي</option>
                        <option value="seatToledo">SEAT توليدو</option>
                        <option value="seatExeo">SEAT إكسييو</option>
                        <option value="seatAteca">SEAT أتيكا</option>
                        <option value="seatCupra">SEAT كوبره</option>
                    </select>
                </div>

                <div v-if="category === '1' && metaCategory === 'saab'">
                    <select v-model="carType" id="saabModels" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="saab9-3">ساب 9-3</option>
                        <option value="saab9-5">ساب 9-5</option>
                        <option value="saab900">ساب 900</option>
                        <option value="saab93">ساب 93</option>
                        <option value="saab9-4X">ساب 9-4X</option>
                        <option value="saabSonett">ساب سونيت</option>
                        <option value="saab95">ساب 95</option>
                        <option value="saabSonettIII">ساب سونيت III</option>
                        <option value="saab99">ساب 99</option>
                        <option value="saab9000">ساب 9000</option>
                    </select>
                </div>

                <div v-if="category === '1' && metaCategory === 'daewoo'">
                    <select v-model="carType" id="daewooModels" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="daewooLanos">دايو لانوس</option>
                        <option value="daewooNexia">دايو نكزيا</option>
                        <option value="daewooMatiz">دايو ماتيزي</option>
                        <option value="daewooTico">دايو تيكو</option>
                        <option value="daewooLeganza">دايو ليغانزا</option>
                        <option value="daewooKalos">دايو كالس</option>
                        <option value="daewooMusso">دايو موسو</option>
                        <option value="daewooRacer">دايو ريسر</option>
                        <option value="daewooTico">دايو تيكو</option>
                        <option value="daewooDamas">دايو داماس</option>
                    </select>
                </div>

                <div v-if="category === '1' && metaCategory === 'skoda'">
                    <select v-model="carType" id="skodaModels" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="skodaOctavia">شوكودا أوكتافيا</option>
                        <option value="skodaFabia">شوكودا فابيا</option>
                        <option value="skodaSuperb">شوكودا سوبرب</option>
                        <option value="skodaKodiaq">شوكودا كودياك</option>
                        <option value="skodaKaroq">شوكودا كاروك</option>
                        <option value="skodaScala">شوكودا سكالا</option>
                        <option value="skodaCitigo">شوكودا سيتغو</option>
                        <option value="skodaYeti">شوكودا يتي</option>
                        <option value="skodaRoomster">شوكودا رومستر</option>
                        <option value="skodaRapid">شوكودا رابد</option>
                    </select>
                </div>

                <div v-if="category === '1' && metaCategory === 'suzuki'">
                    <select v-model="carType" id="carType" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="jimny">سوزوكي جيمني</option>
                        <option value="vitara">سوزوكي فيتارا</option>
                        <option value="sCross">سوزوكي S-Cross</option>
                        <option value="swift">سوزوكي سويفت</option>
                        <option value="baleno">سوزوكي بالينو</option>
                        <option value="alto">سوزوكي ألتو</option>
                        <option value="ertiga">سوزوكي إرتيجا</option>
                        <option value="celerio">سوزوكي سيليريو</option>
                        <option value="sx4">سوزوكي SX4</option>
                        <option value="grandVitara">سوزوكي غراند فيتارا</option>
                        <option value="forenza">سوزوكي فورينزا</option>
                        <option value="kizashi">سوزوكي كيزاشي</option>
                        <option value="wagonR">سوزوكي واغن R</option>
                        <option value="swiftSport">سوزوكي سويفت سبورت</option>
                        <option value="equator">سوزوكي إكويتر</option>
                        <option value="cappuccino">سوزوكي كابوتشينو</option>
                    </select>
                </div>
                <div v-if="metaCategory === 'daihatsu'">
                    <select v-model="carType" id="daihatsuCarModels" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="daihatsuTerios">دايهاتسو تيريوس</option>
                        <option value="daihatsuRocky">دايهاتسو روكي</option>
                        <option value="daihatsuAyla">دايهاتسو أيلة</option>
                        <option value="daihatsuSirion">دايهاتسو سيريون</option>
                        <option value="daihatsuMira">دايهاتسو ميرا</option>
                        <option value="daihatsuCuore">دايهاتسو كوري</option>
                        <option value="daihatsuGranMax">دايهاتسو جراند ماكس</option>
                        <option value="daihatsuHijet">دايهاتسو هايجي</option>
                        <option value="daihatsuCharade">دايهاتسو شيراد</option> <!-- Older model -->
                        <option value="daihatsuApplause">دايهاتسو أبلاوز</option> <!-- Older model -->
                        <option value="daihatsuMax">دايهاتسو ماكس</option> <!-- Older model -->
                        <option value="daihatsuMateria">دايهاتسو ماتيريا</option> <!-- Older model -->
                        <option value="daihatsuDelta">دايهاتسو دلتا</option>
                    </select>
                </div>
                <div v-if="metaCategory === 'mercury'">
                    <select v-model="carType" id="mercuryCarModels" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="mercuryGrandMarquis">ميركوري غراند ماركيز</option>
                        <option value="mercuryMountaineer">ميركوري ماونتنير</option>
                        <option value="mercuryMariner">ميركوري مارينر</option>
                        <option value="mercuryMilan">ميركوري ميلان</option>
                        <option value="mercurySable">ميركوري سابل</option>
                        <option value="mercuryCougar">ميركوري كوغار</option>
                        <option value="mercuryMystique">ميركوري ميستيك</option>
                        <option value="mercuryVillager">ميركوري فيلاجر</option>
                        <option value="mercuryComet">ميركوري كوميت</option> <!-- Classic model -->
                        <option value="mercuryCapri">ميركوري كابري</option> <!-- Classic model -->
                        <option value="mercuryMarauder">ميركوري مارودر</option> <!-- Classic model -->
                        <option value="mercuryMontego">ميركوري مونتيغو</option> <!-- Older model -->
                        <option value="mercuryTracer">ميركوري تريسر</option> <!-- Older model -->
                        <option value="mercuryZephyr">ميركوري زيفير</option> <!-- Older model -->
                    </select>
                </div>
                <div v-if="metaCategory === 'volvo'">
                    <select v-model="carType" id="volvoCarModels" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="volvoS60">فولفو S60</option>
                        <option value="volvoS90">فولفو S90</option>
                        <option value="volvoV60">فولفو V60</option>
                        <option value="volvoV90">فولفو V90</option>
                        <option value="volvoXC40">فولفو XC40</option>
                        <option value="volvoXC60">فولفو XC60</option>
                        <option value="volvoXC90">فولفو XC90</option>
                        <option value="volvoC30">فولفو C30</option> <!-- Older model -->
                        <option value="volvoC70">فولفو C70</option> <!-- Older model -->
                        <option value="volvoS40">فولفو S40</option> <!-- Older model -->
                        <option value="volvoS70">فولفو S70</option> <!-- Older model -->
                        <option value="volvoV70">فولفو V70</option> <!-- Older model -->
                        <option value="volvoV40">فولفو V40</option> <!-- Older model -->
                        <option value="volvo240">فولفو 240</option> <!-- Classic model -->
                        <option value="volvo850">فولفو 850</option> <!-- Classic model -->
                    </select>
                </div>
                <div v-if="metaCategory === 'peugeot'">
                    <select v-model="carType" id="peugeotCarModels" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="peugeot208">بيجو 208</option>
                        <option value="peugeot2008">بيجو 2008</option>
                        <option value="peugeot301">بيجو 301</option>
                        <option value="peugeot308">بيجو 308</option>
                        <option value="peugeot3008">بيجو 3008</option>
                        <option value="peugeot508">بيجو 508</option>
                        <option value="peugeot5008">بيجو 5008</option>
                        <option value="peugeotPartner">بيجو بارنتر</option>
                        <option value="peugeotExpert">بيجو إكسبرت</option>
                        <option value="peugeotBoxer">بيجو بوكسير</option>
                        <option value="peugeot206">بيجو 206</option> <!-- Older model -->
                        <option value="peugeot207">بيجو 207</option> <!-- Older model -->
                        <option value="peugeot407">بيجو 407</option> <!-- Older model -->
                        <option value="peugeot508SW">بيجو 508 SW</option> <!-- Station wagon variant -->
                        <option value="peugeot4007">بيجو 4007</option> <!-- SUV model -->
                        <option value="peugeot607">بيجو 607</option> <!-- Older model -->
                        <option value="peugeot805">بيجو 805</option> <!-- Older model -->
                    </select>
                </div>
                <div v-if="metaCategory === 'bentley'">
                    <select v-model="carType" id="bentleyCarModels" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="bentleyContinentalGT">بنتلي كونتيننتال GT</option>
                        <option value="bentleyContinentalGTC">بنتلي كونتيننتال GTC</option>
                        <option value="bentleyFlyingSpur">بنتلي فلاينغ سبور</option>
                        <option value="bentleyBentayga">بنتلي بنتايغا</option>
                        <option value="bentleyMulsanne">بنتلي مولسان</option> <!-- Older model -->
                        <option value="bentleyArnage">بنتلي أرناجي</option> <!-- Classic model -->
                        <option value="bentleyBrooklands">بنتلي بروكلاندز</option> <!-- Classic model -->
                        <option value="bentleyAzure">بنتلي أزور</option> <!-- Classic model -->
                        <option value="bentleyTurboR">بنتلي توربو R</option> <!-- Classic model -->
                        <option value="bentleyEight">بنتلي إيت</option> <!-- Classic model -->
                        <option value="bentleyRType">بنتلي R-Type</option> <!-- Classic model -->
                        <option value="bentleyS1">بنتلي S1</option> <!-- Classic model -->
                        <option value="bentleySpeedSix">بنتلي سبيد سيكس</option> <!-- Classic model -->
                    </select>
                </div>
                <div v-if="metaCategory === 'jaguar'">
                    <select v-model="carType" id="jaguarCarModels" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="jaguarFType">جاجوار F-Type</option>
                        <option value="jaguarFPACE">جاجوار F-PACE</option>
                        <option value="jaguarEPACE">جاجوار E-PACE</option>
                        <option value="jaguarXE">جاجوار XE</option>
                        <option value="jaguarXF">جاجوار XF</option>
                        <option value="jaguarXJ">جاجوار XJ</option> <!-- Older model -->
                        <option value="jaguarXK">جاجوار XK</option> <!-- Older model -->
                        <option value="jaguarXType">جاجوار X-Type</option> <!-- Older model -->
                        <option value="jaguarSType">جاجوار S-Type</option> <!-- Older model -->
                        <option value="jaguarDType">جاجوار D-Type</option> <!-- Classic model -->
                        <option value="jaguarCType">جاجوار C-Type</option> <!-- Classic model -->
                        <option value="jaguarMK2">جاجوار MK2</option> <!-- Classic model -->
                        <option value="jaguarSS100">جاجوار SS100</option> <!-- Classic model -->
                    </select>
                </div>

                <div v-if="category === '1' && metaCategory === 'infiniti'">
                    <select v-model="carType" id="carType" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="q50">إنفينيتي Q50</option>
                        <option value="q60">إنفينيتي Q60</option>
                        <option value="q70">إنفينيتي Q70</option>
                        <option value="q80">إنفينيتي Q80 إنسبيريشن</option>
                        <option value="qx50">إنفينيتي QX50</option>
                        <option value="qx55">إنفينيتي QX55</option>
                        <option value="qx60">إنفينيتي QX60</option>
                        <option value="qx80">إنفينيتي QX80</option>
                        <option value="g35">إنفينيتي G35</option>
                        <option value="g37">إنفينيتي G37</option>
                        <option value="fx35">إنفينيتي FX35</option>
                        <option value="fx50">إنفينيتي FX50</option>
                        <option value="m35">إنفينيتي M35</option>
                        <option value="m37">إنفينيتي M37</option>
                        <option value="jx35">إنفينيتي JX35</option>
                    </select>
                </div>

                <div v-if="category === '1' && metaCategory === 'hummer'">
                    <select v-model="carType" id="carType" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="h1">همر H1</option>
                        <option value="h2">همر H2</option>
                        <option value="h3">همر H3</option>
                        <option value="h3t">همر H3T</option>
                        <option value="ev">همر EV</option>
                    </select>
                </div>

                <div v-if="category === '1' && metaCategory === 'lincoln'">
                    <select v-model="carType" id="carType" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="navigator">لينكولن نافيجاتور</option>
                        <option value="aviator">لينكولن أفييتور</option>
                        <option value="corsair">لينكولن كورسير</option>
                        <option value="nautilus">لينكولن نوتيلوس</option>
                        <option value="continental">لينكولن كونتيننتال</option>
                        <option value="mkc">لينكولن MKC</option>
                        <option value="mks">لينكولن MKS</option>
                        <option value="mkt">لينكولن MKT</option>
                        <option value="mkx">لينكولن MKX</option>
                        <option value="townCar">لينكولن تاون كار</option>
                        <option value="ls">لينكولن LS</option>
                        <option value="zephyr">لينكولن زيفير</option>
                        <option value="modelL">لينكولن موديل L</option>
                    </select>
                </div>

                <div v-if="category === '1' && metaCategory === 'volkswagen'">
                    <select v-model="carType" id="carType" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="golf">فولكس فاجن غولف</option>
                        <option value="jetta">فولكس فاجن جيتا</option>
                        <option value="passat">فولكس فاجن باسات</option>
                        <option value="arteon">فولكس فاجن أرتيون</option>
                        <option value="tiguan">فولكس فاجن تيغوان</option>
                        <option value="id4">فولكس فاجن ID.4</option>
                        <option value="id3">فولكس فاجن ID.3</option>
                        <option value="beetle">فولكس فاجن بيجل</option>
                        <option value="polo">فولكس فاجن بولو</option>
                        <option value="atlas">فولكس فاجن أتلانتا</option>
                        <option value="touareg">فولكس فاجن تواريغ</option>
                        <option value="scirocco">فولكس فاجن سكيروكو</option>
                        <option value="corrado">فولكس فاجن كورادو</option>
                        <option value="rabbit">فولكس فاجن رابيت</option>
                        <option value="sharan">فولكس فاجن شيران</option>
                        <option value="transporter">فولكس فاجن ترانسپورتر</option>
                    </select>
                </div>

                <div v-if="metaCategory === 'geely'">
                    <select v-model="carType" id="geelyCarModels" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="Geely Emgrand">جيلي إمجراند</option>
                        <option value="Geely Coolray">جيلي كولراي</option>
                        <option value="Geely Azkarra">جيلي أزكارا</option>
                        <option value="Geely Atlas">جيلي أتلانتيك</option>
                        <option value="Geely Preface">جيلي بريفيس</option>
                        <option value="Geely Boyue">جيلي بويي</option>
                        <option value="Geely GC6">جيلي GC6</option>
                        <option value="Geely GC9">جيلي GC9</option>
                        <option value="Geely GE">جيلي GE</option>
                        <option value="Geely Jingang">جيلي جينغنغ</option>
                        <option value="Geely Binyue">جيلي بينيوا</option>
                        <option value="Geely Haoyue">جيلي هايوي</option>
                        <option value="Geely Geometry A">جيلي جيو متري A</option>
                        <option value="Geely Geometry C">جيلي جيو متري C</option>
                        <option value="Geely Starlink">جيلي ستارلينك</option>

                    </select>
                </div>

                <!-- Dodge Car Models -->
                <div v-if="metaCategory === 'dodge'">
                    <select v-model="carType" id="dodgeCarModels" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="Dodge Charger">دودج تشارجر</option>
                        <option value="Dodge Challenger">دودج تشالنجر</option>
                        <option value="Dodge Durango">دودج دورانغو</option>
                        <option value="Dodge Journey">دودج جيرني</option>
                        <option value="Dodge Viper">دودج فايبر</option>
                        <option value="Dodge Neon">دودج نيون</option>
                        <option value="Dodge Dart">دودج دارت</option>
                        <option value="Dodge Ram 1500">دودج رام 1500</option>
                        <option value="Dodge Ram 2500">دودج رام 2500</option>
                        <option value="Dodge Ram 3500">دودج رام 3500</option>
                        <option value="Dodge Magnum">دودج ماغنوم</option>
                        <option value="Dodge Dakota">دودج داكوتا</option>
                        <option value="Dodge Grand Caravan">دودج غراند كارافان</option>
                        <option value="Dodge Avenger">دودج أفنجر</option>
                        <option value="Dodge Intrepid">دودج إنتربيد</option>

                    </select>
                </div>

                <!-- Chrysler Car Models -->
                <div v-if="metaCategory === 'chrysler'">
                    <select v-model="carType" id="chryslerCarModels" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="Chrysler 300">كرايسلر 300</option>
                        <option value="Chrysler Pacifica">كرايسلر باسيفيكا</option>
                        <option value="Chrysler Voyager">كرايسلر فويجر</option>
                        <option value="Chrysler Aspen">كرايسلر آسبن</option>
                        <option value="Chrysler Sebring">كرايسلر سيبرينغ</option>
                        <option value="Chrysler Town & Country">كرايسلر تاون آند كانتري</option>
                        <option value="Chrysler Crossfire">كرايسلر كروس فاير</option>
                        <option value="Chrysler 200">كرايسلر 200</option>
                        <option value="Chrysler Newport">كرايسلر نيو بورت</option>
                        <option value="Chrysler Saratoga">كرايسلر ساراتوجا</option>
                        <option value="Chrysler PT Cruiser">كرايسلر بي تي كروزر</option>
                        <option value="Chrysler Concorde">كرايسلر كونكورد</option>
                        <option value="Chrysler LeBaron">كرايسلر لي بارون</option>
                        <option value="Chrysler Imperial">كرايسلر إمبريال</option>
                        <option value="Chrysler Windsor">كرايسلر ويندسور</option>

                    </select>
                </div>

                <!-- Jeep Car Models -->
                <div v-if="metaCategory === 'jeep'">
                    <select v-model="carType" id="jeepCarModels" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="Jeep Wrangler">جيب رانجلر</option>
                        <option value="Jeep Gladiator">جيب غلادياتور</option>
                        <option value="Jeep Cherokee">جيب شيروكي</option>
                        <option value="Jeep Grand Cherokee">جيب جراند شيروكي</option>
                        <option value="Jeep Compass">جيب كومباس</option>
                        <option value="Jeep Renegade">جيب رينيغيد</option>
                        <option value="Jeep Wagoneer">جيب واگونير</option>
                        <option value="Jeep Grand Wagoneer">جيب جراند واجونير</option>
                        <option value="Jeep Liberty">جيب ليبرتي</option>
                        <option value="Jeep Patriot">جيب باتريوت</option>
                        <option value="Jeep CJ Series">جيب CJ سيريز</option>
                        <option value="Jeep Cherokee XJ">جيب شيروكي XJ</option>

                    </select>
                </div>
                <!-- Mitsubishi Car Models -->
                <div v-if="metaCategory === 'mitsubishi'">
                    <select v-model="carType" id="mitsubishiCarModels" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="Mitsubishi Outlander">ميتسوبيشي أوتلاندر</option>
                        <option value="Mitsubishi Outlander Sport (ASX)">ميتسوبيشي أوتلاندر سبورت (ASX)</option>
                        <option value="Mitsubishi Eclipse Cross">ميتسوبيشي إكليبس كروس</option>
                        <option value="Mitsubishi Mirage">ميتسوبيشي ميرانج</option>
                        <option value="Mitsubishi Galant">ميتسوبيشي غالانت</option>
                        <option value="Mitsubishi Lancer">ميتسوبيشي لانسر</option>
                        <option value="Mitsubishi Lancer Evolution">ميتسوبيشي لانسر إيفولوشن</option>
                        <option value="Mitsubishi Pajero">ميتسوبيشي باجيرو</option>
                        <option value="Mitsubishi Montero">ميتسوبيشي مونتيرو</option>
                        <option value="Mitsubishi RVR">ميتسوبيشي RVR</option>
                        <option value="Mitsubishi i-MiEV">ميتسوبيشي i-MiEV</option>
                        <option value="Mitsubishi 3000GT">ميتسوبيشي 3000GT</option>
                        <option value="Mitsubishi Mighty Max">ميتسوبيشي مايتي ماكس</option>
                        <option value="Mitsubishi Eclipse">ميتسوبيشي إكليبس</option>

                    </select>
                </div>

                <!-- Isuzu Car Models -->
                <div v-if="metaCategory === 'isuzu'">
                    <select v-model="carType" id="isuzuCarModels" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="Isuzu D-Max">إيسوزو D-Max</option>
                        <option value="Isuzu MU-X">إيسوزو MU-X</option>
                        <option value="Isuzu Trooper">إيسوزو تروبر</option>
                        <option value="Isuzu Rodeo">إيسوزو روديو</option>
                        <option value="Isuzu Ascender">إيسوزو أسيتر</option>
                        <option value="Isuzu Amigo">إيسوزو أميغو</option>
                        <option value="Isuzu Hombre">إيسوزو أومبري</option>
                        <option value="Isuzu NPR">إيسوزو NPR</option>
                        <option value="Isuzu N-Series">إيسوزو N-Series</option>
                        <option value="Isuzu F-Series">إيسوزو F-Series</option>
                        <option value="Isuzu Elf">إيسوزو إلف</option>
                        <option value="Isuzu Wizard">إيسوزو ويزارد</option>
                        <option value="Isuzu Bellett">إيسوزو بيلت</option>

                    </select>
                </div>

                <!-- Land Rover Car Models -->
                <div v-if="metaCategory === 'landRover'">
                    <select v-model="carType" id="landRoverCarModels" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="Land Rover Defender">لاند روفر ديفندر</option>
                        <option value="Land Rover Discovery">لاند روفر ديسكفري</option>
                        <option value="Land Rover Discovery Sport">لاند روفر ديسكفري سبورت</option>
                        <option value="Land Rover Range Rover">لاند روفر رينج روفر</option>
                        <option value="Land Rover Range Rover Sport">لاند روفر رينج روفر سبورت</option>
                        <option value="Land Rover Range Rover Velar">لاند روفر رينج روفر فيلار</option>
                        <option value="Land Rover Range Rover Evoque">لاند روفر رينج روفر إيفوك</option>
                        <option value="Land Rover Freelander">لاند روفر فري لاندير</option>
                        <option value="Land Rover Series I">لاند روفر سلسلة I</option>
                        <option value="Land Rover Series II">لاند روفر سلسلة II</option>
                        <option value="Land Rover Series III">لاند روفر سلسلة III</option>
                        <option value="Land Rover LR2">لاند روفر LR2</option>
                        <option value="Land Rover LR3">لاند روفر LR3</option>
                        <option value="Land Rover LR4">لاند روفر LR4</option>
                    </select>
                </div>

                <!-- Cadillac Car Models -->
                <div v-if="metaCategory === 'cadillac'">
                    <select v-model="carType" id="cadillacCarModels" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="Cadillac Escalade">كاديلاك إسكاليد</option>
                        <option value="Cadillac XT4">كاديلاك XT4</option>
                        <option value="Cadillac XT5">كاديلاك XT5</option>
                        <option value="Cadillac XT6">كاديلاك XT6</option>
                        <option value="Cadillac CT4">كاديلاك CT4</option>
                        <option value="Cadillac CT5">كاديلاك CT5</option>
                        <option value="Cadillac CT6">كاديلاك CT6</option>
                        <option value="Cadillac ATS">كاديلاك ATS</option>
                        <option value="Cadillac CTS">كاديلاك CTS</option>
                        <option value="Cadillac SRX">كاديلاك SRX</option>
                        <option value="Cadillac STS">كاديلاك STS</option>
                        <option value="Cadillac XTS">كاديلاك XTS</option>
                        <option value="Cadillac DeVille">كاديلاك ديفيل</option>
                        <option value="Cadillac Fleetwood">كاديلاك فليتوود</option>
                        <option value="Cadillac Seville">كاديلاك سيفيل</option>

                    </select>
                </div>

                <!-- Porsche Car Models -->
                <div v-if="metaCategory === 'porsche'">
                    <select v-model="carType" id="porscheCarModels" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="Porsche 911">بورش 911</option>
                        <option value="Porsche 718 Cayman">بورش 718 كايمان</option>
                        <option value="Porsche 718 Boxster">بورش 718 بوكستر</option>
                        <option value="Porsche Panamera">بورش باناميرا</option>
                        <option value="Porsche Macan">بورش ماكان</option>
                        <option value="Porsche Cayenne">بورش كايين</option>
                        <option value="Porsche Taycan">بورش تايكان</option>
                        <option value="Porsche 944">بورش 944</option>
                        <option value="Porsche 968">بورش 968</option>
                        <option value="Porsche 928">بورش 928</option>
                        <option value="Porsche Carrera GT">بورش كاريرا GT</option>
                        <option value="Porsche 356">بورش 356</option>
                        <option value="Porsche 917">بورش 917</option>
                        <option value="Porsche Boxster">بورش بوكستر</option>
                    </select>
                </div>


                <!-- Audi Car Models -->
                <div v-if="metaCategory === 'audi'">
                    <select v-model="carType" id="audiCarModels" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="Audi A1">أودي A1</option>
                        <option value="Audi A3">أودي A3</option>
                        <option value="Audi A4">أودي A4</option>
                        <option value="Audi A5">أودي A5</option>
                        <option value="Audi A6">أودي A6</option>
                        <option value="Audi A7">أودي A7</option>
                        <option value="Audi A8">أودي A8</option>
                        <option value="Audi Q2">أودي Q2</option>
                        <option value="Audi Q3">أودي Q3</option>
                        <option value="Audi Q4 e-tron">أودي Q4 e-tron</option>
                        <option value="Audi Q5">أودي Q5</option>
                        <option value="Audi Q7">أودي Q7</option>
                        <option value="Audi Q8">أودي Q8</option>
                        <option value="Audi TT">أودي TT</option>
                        <option value="Audi R8">أودي R8</option>
                        <option value="Audi S1">أودي S1</option>
                        <option value="Audi S3">أودي S3</option>
                        <option value="Audi S4">أودي S4</option>
                        <option value="Audi S5">أودي S5</option>
                        <option value="Audi S6">أودي S6</option>
                        <option value="Audi S7">أودي S7</option>
                        <option value="Audi S8">أودي S8</option>
                        <option value="Audi RS3">أودي RS3</option>
                        <option value="Audi RS4">أودي RS4</option>
                        <option value="Audi RS5">أودي RS5</option>
                        <option value="Audi RS6">أودي RS6</option>
                        <option value="Audi RS7">أودي RS7</option>
                        <option value="Audi Q5 Sportback">أودي Q5 سبورت باك</option>
                        <option value="Audi A3 Sportback">أودي A3 سبورت باك</option>
                    </select>
                </div>

                <div v-if="metaCategory === 'genesis'">
                    <select v-model="carType" id="carType" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="genesisG70">جينيسيس G70</option>
                        <option value="genesisG80">جينيسيس G80</option>
                        <option value="genesisG90">جينيسيس G90</option>
                        <option value="genesisGV70">جينيسيس GV70</option>
                        <option value="genesisGV80">جينيسيس GV80</option>
                        <option value="genesisEssentia">جينيسيس Essentia</option>
                        <option value="genesisMint">جينيسيس Mint</option>
                        <option value="genesisG80Electrified">جينيسيس G80 Electrified</option>
                        <option value="genesisGV60">جينيسيس GV60</option>
                    </select>
                </div>
                <div v-if="metaCategory === 'gmc'">
                    <select v-model="carType" id="carType" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="gmcSierra1500">جي إم سي سييرا 1500</option>
                        <option value="gmcSierraHD">جي إم سي سييرا HD</option>
                        <option value="gmcCanyon">جي إم سي كانيون</option>
                        <option value="gmcTerrain">جي إم سي تيرين</option>
                        <option value="gmcAcadia">جي إم سي أكاديا</option>
                        <option value="gmcYukon">جي إم سي يوكون</option>
                        <option value="gmcYukonXL">جي إم سي يوكون XL</option>
                        <option value="gmcSavana">جي إم سي سافانا</option>
                        <option value="gmcHummerEV">جي إم سي همر EV</option>
                        <option value="gmcHummerH2">جي إم سي همر H2</option>
                        <option value="gmcEnvoy">جي إم سي إنفوي</option>
                        <option value="gmcJimmy">جي إم سي جيمي</option>
                        <option value="gmcSierraDenali">جي إم سي سييرا دينالي</option>
                        <option value="gmcTerrainDenali">جي إم سي تيرين دينالي</option>
                    </select>
                </div>
                <div v-if="metaCategory === 'trucks'">
                    <select v-model="carType" id="carType" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="fordFSeries">فورد F-Series</option>
                        <option value="chevroletSilverado">شيفروليه سيلفرادو</option>
                        <option value="ram1500">رام 1500</option>
                        <option value="toyotaTundra">تويوتا تندرا</option>
                        <option value="nissanTitan">نيسان تيتان</option>
                        <option value="gmcSierra">جي إم سي سييرا</option>
                        <option value="freightlinerCascadia">فريتلاينر كاسكاديا</option>
                        <option value="kenworthT680">كنوورث T680</option>
                        <option value="peterbilt579">بيتر بيلت 579</option>
                        <option value="mackAnthem">ماك أنثيم</option>
                        <option value="internationalLTSeries">إنترناشونال LT Series</option>
                        <option value="volvoVNLSeries">فولفو VNL Series</option>
                        <option value="cat797F">CAT 797F (Dump Truck)</option>
                        <option value="catD11">CAT D11 (Bulldozer)</option>
                        <option value="komatsuPC8000">كوماتسو PC8000 (Excavator)</option>
                        <option value="johnDeere744L">جون دير 744L (Wheel Loader)</option>
                        <option value="hitachiZW370">هيتاشي ZW370 (Wheel Loader)</option>
                        <option value="caseCX250D">كيس CX250D (Excavator)</option>
                        <option value="bobcatE165">بوبكات E165 (Excavator)</option>
                        <option value="jcb3CX">JCB 3CX (Backhoe Loader)</option>
                        <option value="caterpillar320">كاتربيلر 320 (Excavator)</option>
                    </select>
                </div>
                <div v-if="category === '1' && metaCategory === 'ford'">
                    <select v-model="carType" id="carType" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="crownVictoria">فورد كراون فيكتوريا</option>
                        <option value="grandMarquis">فورد جراند ماركيز</option>
                        <option value="explorer">فورد إكسبلورر</option>
                        <option value="taurus">فورد تاوروس</option>
                        <option value="expedition">فورد إكسبيديشن</option>
                        <option value="mustang">فورد موستانغ</option>
                        <option value="edge">فورد إيدج</option>
                        <option value="f150">فورد F150</option>
                        <option value="territory">فورد تيريتوري</option>
                        <option value="fusion">فورد فيوجن</option>
                        <option value="windstar">فورد ويندستار</option>
                        <option value="flex">فورد فليكس</option>
                        <option value="fox">فورد فوكس</option>
                        <option value="mondeo">فورد مونديو</option>
                        <option value="f250">فورد F250</option>
                        <option value="f350">فورد F350</option>
                        <option value="ranger">فورد رينجر</option>
                        <option value="xcorgan">فورد X Corgan</option>
                        <option value="pickup">فورد بيك أب</option>
                        <option value="escape">فورد إيسكيب</option>
                        <option value="splash">فورد سبلش</option>
                        <option value="panther">فورد بانثر</option>
                        <option value="thunderbird">فورد ثندربيرد</option>
                        <option value="f450">فورد F450</option>
                        <option value="f550">فورد F550</option>
                        <option value="escort">فورد إسكورت</option>
                        <option value="ecosport">فورد إيكوسبورت</option>
                        <option value="vansford">فورد فانات</option>
                        <option value="figo">فورد فيغو</option>
                        <option value="bronco">فورد برونكو</option>
                        <option value="everest">فورد إيفرست</option>
                    </select>
                   
                </div>
                <div v-if="category === '1' && metaCategory === 'kia'">
                    <select v-model="carType" id="carType" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="cerato">كيا سيراتو</option>
                        <option value="rio">كيا ريو</option>
                        <option value="pegas">كيا بيغاس</option>
                        <option value="sportage">كيا سبورتاج</option>
                        <option value="sorento">كيا سورينتو</option>
                        <option value="stinger">كيا ستينجر</option>
                        <option value="seltos">كيا سيلتوس</option>
                        <option value="niro">كيا نيرو</option>
                        <option value="k5">كيا K5</option>
                        <option value="sonet">كيا سونيت</option>
                        <option value="ns">كيا NS</option>
                        <option value="telluride">كيا تيليوريد</option>
                        <option value="optima">كيا أوبتيما</option>
                        <option value="cadenza">كيا كادينزا</option>
                        <option value="carnival">كيا كارنيفال</option>
                        <option value="opirus">كيا أوبيروس</option>
                        <option value="cairns">كيا كيرنز</option>
                        <option value="picanto">كيا بيكانتو</option>
                        <option value="mohave">كيا موهافي</option>
                        <option value="corres">كيا كورس</option>
                        <option value="soul">كيا سول</option>
                        <option value="sephia">كيا سيفيا</option>
                        <option value="k900">كيا K900</option>
                    </select>
                </div>

                <!-- Car Type Selection for MG -->
                <div v-if="category === '1' && metaCategory === 'mg'">
                    <select v-model="carType" id="carType" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="mgZS">إم جي ZS</option>
                        <option value="mgZSEV">إم جي ZS EV</option>
                        <option value="mgHector">إم جي هيكتور</option>
                        <option value="mgHectorPlus">إم جي هيكتور بلس</option>
                        <option value="mgAstor">إم جي أستون</option>
                        <option value="mgGloster">إم جي غلوسر</option>
                        <option value="mg6">إم جي 6</option>
                        <option value="mg3">إم جي 3</option>
                        <option value="mgCyberster">إم جي سايبرستر</option>
                        <option value="mgMarvelR">إم جي مارفل R</option>
                        <option value="mgMG3">إم جي MG3</option>
                        <option value="mgMG6">إم جي MG6</option>
                        <option value="mgMG5">إم جي MG5</option>
                        <option value="mgMGZSEV">إم جي MG ZS EV</option>
                        <option value="mgGS">إم جي GS</option>
                        <option value="mgXPower">إم جي XPower</option>
                        <option value="mgEX234">إم جي EX234</option>
                    </select>
                </div>

                <div v-if="category === '1' && metaCategory === 'toyota'">
                    <select v-model="carType" id="carType" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="toyota4Runner">تويوتا 4Runner</option>
                        <option value="toyotaAvalon">تويوتا أفالون</option>
                        <option value="toyotaCamry">تويوتا كامري</option>
                        <option value="toyotaCorolla">تويوتا كورولا</option>
                        <option value="toyotaCHR">تويوتا C-HR</option>
                        <option value="toyotaHighlander">تويوتا هايلاندر</option>
                        <option value="toyotaLandCruiser">تويوتا لاند كروزر</option>
                        <option value="toyotaMirai">تويوتا ميراي</option>
                        <option value="toyotaPrius">تويوتا بريوس</option>
                        <option value="toyotaRAV4">تويوتا RAV4</option>
                        <option value="toyotaSequoia">تويوتا سيكويا</option>
                        <option value="toyotaSienna">تويوتا سيينا</option>
                        <option value="toyotaTacoma">تويوتا تاكوما</option>
                        <option value="toyotaTundra">تويوتا تندرا</option>
                        <option value="toyotaYaris">تويوتا ياريس</option>
                        <option value="toyotaGR86">تويوتا GR86</option>
                        <option value="toyotaSupra">تويوتا سوبرا</option>
                        <option value="toyotaHilux">تويوتا هايلوكس</option>
                        <option value="toyotaVenza">تويوتا فينزا</option>
                        <option value="toyotaSienta">تويوتا سينتا</option>
                    </select>
                </div>
                <div v-if="category === '1' && metaCategory === 'lexus'">
                    <select v-model="carType" id="carType" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="lexusES">لكزس ES</option>
                        <option value="lexusGS">لكزس GS</option>
                        <option value="lexusIS">لكزس IS</option>
                        <option value="lexusNX">لكزس NX</option>
                        <option value="lexusRX">لكزس RX</option>
                        <option value="lexusGX">لكزس GX</option>
                        <option value="lexusLX">لكزس LX</option>
                        <option value="lexusRC">لكزس RC</option>
                        <option value="lexusLC">لكزس LC</option>
                        <option value="lexusUX">لكزس UX</option>
                        <option value="lexusLS">لكزس LS</option>
                        <option value="lexusRZ">لكزس RZ (كهربائي)</option>
                        <option value="lexusCT">لكزس CT (متوقف في بعض الأسواق)</option>
                    </select>
                </div>

                <div v-if="category === '1' && metaCategory === 'bmw'">
                    <select v-model="carType" id="carType" class="custom-select">
                        <option value=""> اختر موديل السيارة</option>
                        <option value="bmwSeries1">بي إم دبليو سيريس 1</option>
                        <option value="bmwSeries2">بي إم دبليو سيريس 2</option>
                        <option value="bmwSeries3">بي إم دبليو سيريس 3</option>
                        <option value="bmwSeries4">بي إم دبليو سيريس 4</option>
                        <option value="bmwSeries5">بي إم دبليو سيريس 5</option>
                        <option value="bmwSeries6">بي إم دبليو سيريس 6</option>
                        <option value="bmwSeries7">بي إم دبليو سيريس 7</option>
                        <option value="bmwSeries8">بي إم دبليو سيريس 8</option>
                        <option value="bmwX1">بي إم دبليو X1</option>
                        <option value="bmwX2">بي إم دبليو X2</option>
                        <option value="bmwX3">بي إم دبليو X3</option>
                        <option value="bmwX4">بي إم دبليو X4</option>
                        <option value="bmwX5">بي إم دبليو X5</option>
                        <option value="bmwX6">بي إم دبليو X6</option>
                        <option value="bmwZ3">بي إم دبليو Z3</option>
                        <option value="bmwZ4">بي إم دبليو Z4</option>
                        <option value="bmwM2">بي إم دبليو M2</option>
                        <option value="bmwM3">بي إم دبليو M3</option>
                        <option value="bmwM4">بي إم دبليو M4</option>
                        <option value="bmwM5">بي إم دبليو M5</option>
                    </select>
                </div>
                <div v-if="category === '1' && metaCategory === 'mazda'">
                    <select v-model="carType" id="carType" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="mazda2">مازدا 2</option>
                        <option value="mazda3">مازدا 3</option>
                        <option value="mazda6">مازدا 6</option>
                        <option value="mazdaCX3">مازدا CX-3</option>
                        <option value="mazdaCX30">مازدا CX-30</option>
                        <option value="mazdaCX5">مازدا CX-5</option>
                        <option value="mazdaCX9">مازدا CX-9</option>
                        <option value="mazdaMX5Miata">مازدا MX-5 مياتا</option>
                        <option value="mazdaMX30">مازدا MX-30 (موديل كهربائي جديد)</option>
                        <option value="mazdaRX7">مازدا RX-7 (متوقف)</option>
                        <option value="mazdaRX8">مازدا RX-8 (متوقف)</option>
                        <option value="mazdaTribute">مازدا تريبيوت (متوقف)</option>
                        <option value="mazdaMillenia">مازدا ميلينيا (متوقف)</option>
                        <option value="mazda3Axela">مازدا 3 أكسيلا (اسم مستخدم في بعض الأسواق)</option>
                        <option value="mazda5">مازدا 5 (متوقف)</option>
                        <option value="mazdaMPV">مازدا MPV (متوقف)</option>
                        <option value="mazdaBSeries">مازدا B-سيريز (شاحنات بيك آب، متوقفة)</option>
                    </select>
                </div>
                <div v-if="category === '1' && metaCategory === 'chevrolet'">
                    <select v-model="carType" id="carType" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="chevroletSpark">شيفروليه سبارك</option>
                        <option value="chevroletSonic">شيفروليه سونيك</option>
                        <option value="chevroletMalibu">شيفروليه ماليبو</option>
                        <option value="chevroletCamaro">شيفروليه كامارو</option>
                        <option value="chevroletCorvette">شيفروليه كورفيت</option>
                        <option value="chevroletImpala">شيفروليه إمبالا (متوقف)</option>
                        <option value="chevroletVolt">شيفروليه فولت (متوقف)</option>
                        <option value="chevroletBoltEV">شيفروليه بولت EV</option>
                        <option value="chevroletTrailblazer">شيفروليه تريل بليزر</option>
                        <option value="chevroletEquinox">شيفروليه إكينوكس</option>
                        <option value="chevroletTraverse">شيفروليه ترافرس</option>
                        <option value="chevroletTahoe">شيفروليه تاهو</option>
                        <option value="chevroletSuburban">شيفروليه سوبربان</option>
                        <option value="chevroletColorado">شيفروليه كولورادو</option>
                        <option value="chevroletSilverado1500">شيفروليه سيلفرادو 1500</option>
                        <option value="chevroletSilveradoHD">شيفروليه سيلفرادو HD</option>
                        <option value="chevroletBlazer">شيفروليه بليزر</option>
                        <option value="chevroletAstro">شيفروليه أسترو (متوقف)</option>
                        <option value="chevroletHHR">شيفروليه HHR (متوقف)</option>
                        <option value="chevroletS10">شيفروليه S10 (متوقف)</option>
                        <option value="chevroletCaprice">شيفروليه كابريس (متوقف)</option>
                        <option value="chevroletElCamino">شيفروليه إل كامينو (متوقف)</option>
                    </select>
                </div>
                <div v-if="category === '1' && metaCategory === 'nissan'">
                    <select v-model="carType" id="carType" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="nissanAltima">نيسان ألتيما</option>
                        <option value="nissanMaxima">نيسان ماكسيما</option>
                        <option value="nissanSentra">نيسان سنترا</option>
                        <option value="nissanVersa">نيسان فيرسا</option>
                        <option value="nissan370Z">نيسان 370Z</option>
                        <option value="nissanGTR">نيسان GT-R</option>
                        <option value="nissanLeaf">نيسان ليف (كهربائي)</option>
                        <option value="nissanRogue">نيسان روغ</option>
                        <option value="nissanMurano">نيسان مورانو</option>
                        <option value="nissanPathfinder">نيسان باثفايندر</option>
                        <option value="nissanArmada">نيسان أرمادا</option>
                        <option value="nissanKicks">نيسان كيكس</option>
                        <option value="nissanJuke">نيسان جوك (متوقف في بعض الأسواق)</option>
                        <option value="nissanFrontier">نيسان فرونتير</option>
                        <option value="nissanTitan">نيسان تيتان</option>
                        <option value="nissanXterra">نيسان إكستيرا (متوقف)</option>
                        <option value="nissanNVCargo">نيسان NV كارجو (متوقف)</option>
                        <option value="nissanPulsar">نيسان بلسار (متوقف في بعض الأسواق)</option>
                        <option value="nissanQashqai">نيسان قاشقاي (روج سبورت في بعض الأسواق)</option>
                    </select>
                </div>

                <div v-if="category === '1' && metaCategory === 'mercedes'">
                    <select v-model="carType" id="carType" class="custom-select">
                        <option value=""> اختر موديل السيارة</option>
                        <option value="mercedesAClass">مرسيدس A-Class</option>
                        <option value="mercedesBClass">مرسيدس B-Class</option>
                        <option value="mercedesCClass">مرسيدس C-Class</option>
                        <option value="mercedesEClass">مرسيدس E-Class</option>
                        <option value="mercedesSClass">مرسيدس S-Class</option>
                        <option value="mercedesCLA">مرسيدس CLA</option>
                        <option value="mercedesCLS">مرسيدس CLS</option>
                        <option value="mercedesGLA">مرسيدس GLA</option>
                        <option value="mercedesGLC">مرسيدس GLC</option>
                        <option value="mercedesGLE">مرسيدس GLE</option>
                        <option value="mercedesGLS">مرسيدس GLS</option>
                        <option value="mercedesGClass">مرسيدس G-Class</option>
                        <option value="mercedesSL">مرسيدس SL</option>
                        <option value="mercedesSLSAMG">مرسيدس SLS AMG</option>
                        <option value="mercedesEQC">مرسيدس EQC</option>
                    </select>
                </div>

                <div v-if="category === '1' && metaCategory === 'hyundai'">
                    <select v-model="carType" id="carType" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="sonata">هيونداي سوناتا</option>
                        <option value="elantra">هيونداي إلنترا</option>
                        <option value="accent">هيونداي أكسنت</option>
                        <option value="azera">هيونداي أزيرا</option>
                        <option value="sentavi">هيونداي سنتافي</option>
                        <option value="tucson">هيونداي توكسون</option>
                        <option value="veloster">هيونداي فيلوستر</option>
                        <option value="kona">هيونداي كونا</option>
                        <option value="creta">هيونداي كريتا</option>
                        <option value="venue">هيونداي فينيو</option>
                        <option value="palisade">هيونداي باليسايد</option>
                        <option value="grandSantaFe">هيونداي جراند سانتا في</option>
                        <option value="trajet">هيونداي تراجيت</option>
                        <option value="h1">هيونداي H1</option>
                        <option value="staria">هيونداي ستاريا</option>
                        <option value="stragazer">هيونداي سترا غازر</option>
                        <option value="i40">هيونداي i40</option>
                        <option value="centennial">هيونداي سينتينيال</option>
                        <option value="coupe">هيونداي كوبيه</option>
                        <option value="i10">هيونداي i10</option>
                        <option value="veracruz">هيونداي فيراكروز</option>
                        <option value="terracan">هيونداي تيركان</option>
                        <option value="matrix">هيونداي ماتريكس</option>
                        <option value="galloper">هيونداي غالوبر</option>
                        <option value="i30">هيونداي i30</option>
                    </select>
                </div>

                <div v-if="category === '1' && metaCategory === 'honda'">
                    <select v-model="carType" id="carType" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="hondaAccord">هوندا أكورد</option>
                        <option value="hondaCivic">هوندا سيفيك</option>
                        <option value="hondaCRV">هوندا CR-V</option>
                        <option value="hondaHRV">هوندا HR-V</option>
                        <option value="hondaInsight">هوندا إنسايت</option>
                        <option value="hondaOdyssey">هوندا أوديسي</option>
                        <option value="hondaPassport">هوندا باسبورت</option>
                        <option value="hondaPilot">هوندا بايلوت</option>
                        <option value="hondaRidgeline">هوندا ريدج لاين</option>
                        <option value="hondaFit">هوندا فيت (متوقف في بعض الأسواق)</option>
                        <option value="hondaS2000">هوندا S2000 (متوقف)</option>
                        <option value="hondaClarity">هوندا كلاريتي (متوقف في بعض الأسواق)</option>
                        <option value="hondaZRV">هوندا ZR-V (موديل جديد في بعض الأسواق)</option>
                    </select>
                </div>
                <div v-if="category === '1' && metaCategory === 'chery'">
                    <select v-model="carType" id="carType" class="custom-select">
                        <option value="">اختر موديل السيارة</option>
                        <option value="cheryTiggo2">تشيري تيغو 2</option>
                        <option value="cheryTiggo3">تشيري تيغو 3</option>
                        <option value="cheryTiggo5">تشيري تيغو 5</option>
                        <option value="cheryTiggo7">تشيري تيغو 7</option>
                        <option value="cheryTiggo8">تشيري تيغو 8</option>
                        <option value="cheryArrizo5">تشيري أريزو 5</option>
                        <option value="cheryArrizo6">تشيري أريزو 6</option>
                        <option value="cheryArrizoGX">تشيري أريزو GX</option>
                        <option value="cheryE5">تشيري E5</option>
                        <option value="cheryE3">تشيري E3</option>
                        <option value="cheryOmoda5">تشيري أومودا 5</option>
                        <option value="cheryExeedTX">تشيري إكسيد TX</option>
                        <option value="cheryExeedVX">تشيري إكسيد VX</option>
                        <option value="cheryQQ">تشيري QQ</option>
                        <option value="cheryQQIceCream">تشيري QQ آيس كريم</option>
                        <option value="cheryFulwin">تشيري فولوين</option>
                        <option value="cheryM11">تشيري M11</option>
                        <option value="cheryTiggo4">تشيري تيغو 4</option>
                        <option value="cheryTiggo9">تشيري تيغو 9</option>
                        <option value="cherySQR">تشيري SQR</option>
                        <option value="cheryA1">تشيري A1</option>
                        <option value="cheryA3">تشيري A3</option>
                    </select>
                </div>

                <div v-if="category === '2'">
                    <select v-model="metaCategory" id="metaCategory" class="custom-select">
                        <option value="">اختر نوع العقار</option>
                        <option value="land">أراضي</option>
                        <option value="بيوت">بيوت</option>
                        <option value="شقق">شقق</option>
                    </select>
                </div>
                <div v-if="category === '6'">
                    <select v-model="metaCategory" id="metaCategory" class="custom-select">
                        <option value="">اختر نوع المستلزمات الشخصية</option>
                        <option value="watches">الساعات</option>
                        <option value="perfumes">العطور</option>
                        <option value="sportsAccessories">اكسسوارات رياضية</option>
                        <option value="glasses">النظارات</option>
                        <option value="manClothes">ملابس رجالية</option>
                        <option value="kidsClothes">ملابس أطفال</option>
                        <option value="womensFashion">أزياء نسائية</option>
                        <option value="gifts">الهدايا</option>
                        <option value="luggage">حقائب السفر</option>
                        <option value="healthAndBeauty">الصحة والجمال</option>
                    </select>
                </div>
                <div v-if="category === '1' && metaCategory === 'jetour'">
                    <select v-model="carType" id="carType" class="custom-select">
                        <option value=""> اختر موديل السيارة</option>
                        <option value="jetourDashing">جيتور داشينغ</option>
                        <option value="jetourX70">جيتور X70</option>
                        <option value="jetourX90">جيتور X90</option>
                        <option value="jetourX70S">جيتور X70S</option>
                        <option value="jetourX90S">جيتور X90S</option>
                        <option value="jetourX55">جيتور X55</option>
                    </select>
                </div>
                <div v-if="category === '3'">
                    <select v-model="metaCategory" class="custom-select">
                        <option value="">اختر نوع الجهاز</option>
                        <option value="screens">شاشات</option>
                        <option value="laptops">لابتوب</option>
                        <option value="phones">هواتف</option>
                        <option value="pc">كمبيوتر</option>
                        <option value="playstation">بلايستشين</option>
                    </select>
                </div>
                <div v-if="category === '3'">
                    <select v-model="carType" class="custom-select" v-if="metaCategory">
                        <option value="">اختر الماركة</option>
                        <option value="apple">آبل</option>
                        <option value="uncategorizedDevices">أجهزة غير مصنفة</option>
                        <option value="samsung">سامسونج</option>
                        <option value="sony">سوني</option>
                        <option value="specialNumber">رقم خاص</option>
                        <option value="homeKitchenAppliances">أجهزة المنزل والمطبخ</option>
                        <option value="blackberry">بلاك بيري</option>
                        <option value="canon">كانون</option>
                        <option value="lg">إل جي</option>
                        <option value="nokia">نوكيا</option>
                        <option value="microsoft">مايكروسوفت</option>
                        <option value="nikon">نيكون</option>
                        <option value="htc">إتش تي سي</option>
                        <option value="toshiba">توشيبا</option>
                        <option value="dell">ديل</option>
                        <option value="huawei">هواوي</option>
                        <option value="asus">أسوس</option>
                        <option value="acer">أيسر</option>
                        <option value="panasonic">باناسونيك</option>
                        <option value="fujifilm">فوجي فيلم</option>
                        <option value="hitachi">هيتاشي</option>
                        <option value="olympus">أوليمبوس</option>
                        <option value="computers">أجهزة الكمبيوتر</option>
                        <option value="gaming">الألعاب</option>
                        <option value="tvAudio">التلفاز والصوت</option>
                        <option value="generator">مولد كهرباء</option>
                        <option value="accountSubscription">الحساب والاشتراك</option>
                        <option value="digitalCamera">الكاميرا الرقمية</option>
                    </select>
                </div>
                <div v-if="category == '7'">
                    <select v-model="metaCategory" class="custom-select">
                        <option value="">اختر نوع الحيوان</option>
                        <option value="sheep">الأغنام</option>
                        <option value="goats">الماعز</option>
                        <option value="parrot">الببغاء</option>
                        <option value="pigeons">الحمام</option>
                        <option value="cats">القطط</option>
                        <option value="chicken">الدجاج</option>
                        <option value="camels">الجمال</option>
                        <option value="horses">الخيول</option>
                        <option value="dogs">الكلاب</option>
                        <option value="cows">الأبقار</option>
                        <option value="fishTurtles">الأسماك والسلاحف</option>
                        <option value="rabbits">الأرانب</option>
                        <option value="duck">البط</option>
                        <option value="squirrels">السناجب</option>
                        <option value="hamsters">الهامستر</option>
                        <option value="hyrax">الوبر الصخري</option>
                    </select>
                </div>

                <div v-if="category === 6">
                    <select v-model="metaCategory" class="custom-select">
                        <option value="">اختر نوع المستلزمات الشخصية</option>
                        <option value="watches">الساعات</option>
                        <option value="perfumes">العطور</option>
                        <option value="sportsAccessories">اكسسوارات رياضية</option>
                        <option value="glasses">النظارات</option>
                        <option value="manClothes">ملابس رجالية</option>
                        <option value="kidsClothes">ملابس أطفال</option>
                        <option value="womensFashion">أزياء نسائية</option>
                        <option value="gifts">الهدايا</option>
                        <option value="luggage">حقائب السفر</option>
                        <option value="healthAndBeauty">الصحة والجمال</option>
                    </select>
                </div>
                <div v-if="category === '4'">
                    <select v-model="metaCategory" class="custom-select">
                        <option value="">اختر نوع الأثاث</option>
                        <option value="outdoorFurniture">الأثاث الخارجي</option>
                        <option value="officeFurniture">الأثاث المكتبي</option>
                        <option value="houseware">الأدوات المنزلية</option>
                        <option value="bedsAndMattresses">الأسرة والمراتب</option>
                        <option value="antiquesAndDecor">التحف والديكور</option>
                        <option value="cabinetsAndCupboards">الخزائن والدولاب</option>
                        <option value="tablesAndChairs">الطاولات والكراسي</option>
                        <option value="sofasAndFurnishings">الأرائك والمفروشات</option>
                    </select>
                </div>

                <div v-if="category === '5'">
                    <select v-model="metaCategory" class="custom-select">
                        <option value="">اختر نوع الوظيفة</option>
                        <option value="administrative functions">الوظائف الإدارية</option>
                        <option value="costumes and beauty jobs">وظائف التجميل والزي</option>
                        <option value="security and safety job">وظائف الأمن والسلامة</option>
                        <option value="educational functions">وظائف تعليمية</option>
                        <option value="technical and design functions">وظائف تقنية وتصميم</option>
                        <option value="agricultural and grazing functions">وظائف زراعية ورعي</option>
                        <option value="Industrial Jobs">وظائف صناعية</option>
                        <option value="Jobs medical and nursing">وظائف طبية وتمريضية</option>
                        <option value="building jobs">وظائف البناء</option>
                        <option value="home employment jobs">وظائف توظيف منزلي</option>
                        <option value="restaurants jobs">وظائف المطاعم</option>
                    </select>
                </div>
                <div v-for="index in 5" :key="index" class="image-upload">
                    <div class="custom-file-input">
                        <label :for="'image' + index" class="file-label">Upload Image {{ index }}</label>
                        <input type="file" :id="'image' + index" @change="(event) => handleFileUpload(event, index)"
                            accept="image/*" />
                        <button v-if="images[index - 1]" @click="deleteImage(index)" class="delete-icon" type="button">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                    <div v-if="images[index - 1]" class="image-preview">
                        <img :src="images[index - 1]" alt="Image preview" />
                    </div>
                </div>
            </div>
            <!-- Move dialog-actions to the footer section -->
            <div class="dialog-footer">
                <template v-if="loading">
                    <div class="spinner"></div>
                </template>
                <template v-else>
                    <button class="btn btn-primary" @click="nextStep" v-if="!isLastStep">Next</button>
                    <button class="btn btn-primary" @click="previousStep" v-if="!isLastStep">Previous</button>
                    <button class="btn btn-primary" @click="submitPost" v-if="isLastStep">Post</button>
                    <button class="btn btn-secondary" style="color: red;" @click="close">Cancel</button>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: {
        isVisible: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {
            step: 0,
            title: "",
            description: "",
            content: "",
            city: "",
            carType: "",
            modelCar: "",
            special: "",
            category: "",
            metaCategory: "",
            price: "",
            images: Array(5).fill(null), // Initialize an array for 5 images
            loading: false, // Add loading state
            baseUrl: "https://heraj-backend.onrender.com"
        };
    },
    computed: {
        isLastStep() {
            return this.step === 1; // Change this based on your logic for last step
        }
    },
    methods: {
        close() {
            this.$emit("close");
            this.resetForm(); // Reset the form when closed
        },
        async nextStep() {
            if (this.step === 1) {
                await this.submitPost(); // Wait for the post to be submitted
                return;
            }
            if (this.step < 4) {
                this.step++;
            }
            console.log(this.step);
        },
        previousStep() {
            if (this.step > 1) {
                this.step--;
            }
        },
        filterByCategory(categoryName) {
            this.currentPage = 1;
            this.categoryFilter = categoryName;
            this.category = categoryName;
        },

        onCategoryChange() {
            // Reset carType when category changes
            if (this.category !== '1') {
                this.metaCategory = "";
            }
        },
        getSelectedCityText() {
            const cityOptions = {
                "1": "amman",
                "2": "irbid",
                "3": "zarqa",
                "4": "ajloun",
                "5": "mafraq",
                "6": "karak",
                "7": "madaba",
                "8": "jerash",
                "9": "ajloun",
                "10": "aqaba",
                "11": "ma'an",
                "12": "tafila"
            };
            return cityOptions[this.city] || ""; // Return the text based on the selected value
        },
        getSelectedCategoryText() {
            const categoryOptions = {
                "1": "سيارات",
                "2": "عقار",
                "3": "devices",
                "4": "اثاث",
                "5": "jobs",
                "6": "مستلزمات شخصية",
                "7": "حيوانات"
            };
            return categoryOptions[this.category] || ""; // Return the text based on the selected value
        },
        // getSelectedMetaCategoryText() {
        //     const categoryOptions = {
        //         "1": "فيات",
        //         "2": "فورد",
        //         "3": "بي ام دبليو",
        //         "4": "مرسيدس",
        //         "5": "",
        //         "6": "مستلزمات شخصية"
        //     };
        //     return categoryOptions[this.category] || ""; // Return the text based on the selected value
        // },
        handleFileUpload(event, index) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                    this.images[index - 1] = reader.result; // Store the base64 for preview
                };
                reader.readAsDataURL(file);
            }
        },

        async submitPost() {
            const id = localStorage.getItem('id');
            this.loading = true; // Show loader
            if (!this.city || !this.category) {
                alert('Please select both city and category.');
                this.loading = false;
                return;
            }
            console.log(this.city, "....", this.category)
            const formData = new FormData();
            formData.append('userId', id); // Replace with actual user ID
            formData.append('title', this.title);
            formData.append('description', this.description);
            formData.append('content', this.content);
            formData.append('category', this.getSelectedCategoryText());
            formData.append('metaCategory', this.metaCategory);
            formData.append('location', this.getSelectedCityText());
            formData.append('carType', this.carType.toLowerCase());
            formData.append('modelCar', this.modelCar.toLowerCase());
            formData.append('special', this.special);
            formData.append('price', this.price);
            // Append each selected image to the FormData
            this.images.forEach((image, index) => {
                if (image) {
                    const blob = this.dataURLToBlob(image);
                    formData.append('images', blob, `image${index + 1}.png`);
                }
            });

            try {
                const response = await axios.post(`${this.baseUrl}/product/posts`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                alert('Post Created Successfully');
                this.title = "",
                    this.description = "",
                    this.content = "",
                    this.images = [],
                    this.carType = "",
                    this.modelCar = "",
                    this.special = "",
                    this.metaCategory = "",
                    this.city = "",
                    this.category = "",
                    this.metaCategory,

                    console.log(response.data);
            } catch (error) {
                console.error(error.response?.data || error.message);
                alert('Error creating post: ' + (error.response?.data.message || error.message));
            } finally {
                this.loading = false; // Hide loader regardless of success or error
            }
        },
        dataURLToBlob(dataURL) {
            const arr = dataURL.split(',');
            const mime = arr[0].match(/:(.*?);/)[1];
            const bstr = atob(arr[1]);
            let n = bstr.length;
            const u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new Blob([u8arr], { type: mime });
        },

        resetForm() {
            this.title = "";
            this.description = "";
            this.content = "";
            this.images = Array(5).fill(null); // Reset images to empty
        },
        deleteImage(index) {
            this.images[index - 1] = null; // Clear the image
        },
        chooseCity(cityId, cityName) {
            console.log(cityId, cityName);
            // Call the updateLocation function with selected city details
            this.updateLocation(cityId, cityName);
        },
        updateLocation() {
            const postId = "66ff0f317cab97be463c698b"; // replace with your actual _id
            const selectedCity = "عمان"; // or the selected city

            axios.patch(`${this.baseUrl}/product/update-location`, {
                id: postId,
                location: selectedCity
            })
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error("Error updating location:", error.response ? error.response.data : error.message);
                });
        },

    },
};
</script>
<style>
/* Existing styles */

.spinner {
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top: 4px solid #007bff;
    /* Spinner color */
    width: 30px;
    height: 30px;
    animation: spin 1s linear infinite;
    margin: auto;
    /* Center the spinner */
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.card {
    transition: transform 0.2s;
}

.card:hover {
    transform: scale(1.05);
}


.dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.dialog-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 49vw;
    height: 71vh;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
}

.first-step {
    margin: auto;
}

.quraan {
    flex: 1;
    display: flex;
    /* Add this line */
    justify-content: center;
    /* Center horizontally */
    align-items: center;
    /* Center vertically */
}

.quraan-text {
    text-align: center;
    /* Center text horizontally */
}

.dialog-footer {
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    padding-top: 15px;
    border-top: 1px solid #ddd;
}

.image-upload {
    margin-bottom: 10px;
}

.image-preview {
    margin-top: 5px;
}

.image-preview img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 4px;
}

input {
    display: block;
    margin: auto;
    margin-top: 15px;
}

/* Media Queries */
@media (max-width: 768px) {
    .dialog-content {
        width: 90vw;
        height: auto;
        padding: 10px;
    }

    .dialog-footer {
        flex-direction: column;
        align-items: stretch;
    }

    .dialog-footer button {
        width: 100%;
        margin: 5px 0;
    }

    input {
        width: 100%;
    }
}

@media (min-width: 769px) and (max-width: 1024px) {
    .dialog-content {
        width: 70vw;
    }

    .dialog-footer {
        justify-content: space-between;
    }

    input {
        width: 80%;
    }
}

@media (min-width: 1025px) {
    .dialog-content {
        width: 49vw;
    }

    .dialog-footer {
        justify-content: space-between;
    }

    input {
        width: 60%;
    }
}

.custom-file-input {
    position: relative;
    display: inline-block;
}

input[type="file"] {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
}

.file-label {
    display: inline-block;
    background-color: #007bff;
    /* Custom button color */
    color: white;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    transition: background-color 0.3s ease;
}

.file-label:hover {
    background-color: #0056b3;
    /* Darker shade on hover */
}

.delete-icon {
    background: none;
    border: none;
    color: #d9534f;
    /* Red color for delete */
    font-size: 18px;
    margin-left: 10px;
    cursor: pointer;
    transition: color 0.3s ease;
}

.delete-icon:hover {
    color: #c9302c;
    /* Darker red on hover */
}

.dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}



h1,
h2 {
    color: #333;
}

p {
    color: #666;
}

input,
textarea,
.custom-select {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    transition: border-color 0.3s;
}

input:focus,
textarea:focus,
.custom-select:focus {
    border-color: #007BFF;
    outline: none;
}

.custom-select {
    -webkit-appearance: none;
    /* Remove default arrow */
    -moz-appearance: none;
    /* Remove default arrow */
    appearance: none;
    /* Remove default arrow */
    background-color: #fff;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAcAIAAADK8p7cAAAAUklEQVRIDbXBAQEAAAABIP6C/kZk1p4AAAABJRU5ErkJggg==');
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 12px;
}

button {
    background-color: #007BFF;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #0056b3;
}
</style>
