<template>
  <div class="parent">
    <div class="first-nav">
      <div class="w-full bg-background-card">
        <div class="flex items-center justify-between gap-4 px-4 py-2 mx-auto overflow-x-auto max-w-7xl md:px-0">
          <div class="text-sm whitespace-nowrap">
            <a @click="filterSupplies()">أخري</a>
          </div>
          <div class="text-sm whitespace-nowrap">
            <a @click="filterSupplies()">مستلزمات شخصية</a>
          </div>
          <div class="text-sm whitespace-nowrap">
            <a @click="filterjobs()">وظائف</a>
          </div>
          <div class="text-sm whitespace-nowrap">
            <a @click="filterDevices()">أثاث</a>
          </div>
          <div class="text-sm whitespace-nowrap">
            <a @click="filterDevices()">أجهزة</a>
          </div>
          <div class="text-sm whitespace-nowrap">
            <a @click="filterbuilding()">عقارات</a>
          </div>
          <div class="text-sm whitespace-nowrap">
            <a @click="filtercars()">حراج السيارات</a>
          </div>
          <div class="text-sm whitespace-nowrap">
            <a @click="filterMain()">الرئيسية</a>
          </div>
        </div>
      </div>
    </div>
    <div class="second-nav">
      <div>
        <a data-testid="logo-link" href="/">
          <img alt="حراج" src="https://v8-cdn.haraj.com.sa/assets/images/haraj-logo.png" />
        </a>
      </div>
      <div>
        <a href="profile">
          <h3 v-if="username" style="color: white;">{{ username }}</h3>
        </a>
        <button class="btn btn-danger" v-if="username" @click="signOut" style="color: white;">تسجيل الخروج</button>
        <button @click="openauth" class="btn btn-primary btn-sm" v-if="!username">تسجيل الدخول</button>
      </div>
    </div>
    <div class="parent2">
      <div class="right-side">
        <select v-if="categoryFilter === 'jobs' || categoryFilter === 'وظائف'">
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
      <div class="right-side">
        <select v-if="categoryFilter === 'سيارات'" v-model="metaCategory">
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
          <option value="landrover">لاند روفر</option>
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
          <option value="rollsroyce">رولز رويس</option>
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
        <select v-if="metaCategory === 'saab'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="saab9-3">ساب 9-3</option>
          <option value="saab9-5">ساب 9-5</option>
          <option value="saab900">ساب 900</option>
          <option value="saab93">ساب 93</option>
          <option value="saab9-4x">ساب 9-4X</option>
          <option value="saabsonett">ساب سونيت</option>
          <option value="saab95">ساب 95</option>
          <option value="saabsonettiii">ساب سونيت III</option>
          <option value="saab99">ساب 99</option>
          <option value="saab9000">ساب 9000</option>
        </select>

        <select v-if="metaCategory === 'daewoo'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="daewoolanos">دايو لانوس</option>
          <option value="daewoonexia">دايو نكزيا</option>
          <option value="daewoomatiz">دايو ماتيزي</option>
          <option value="daewootico">دايو تيكو</option>
          <option value="daewooleganza">دايو ليغانزا</option>
          <option value="daewookalos">دايو كالس</option>
          <option value="daewoomusso">دايو موسو</option>
          <option value="daewooracer">دايو ريسر</option>
          <option value="daewootico">دايو تيكو</option>
          <option value="daewoodamas">دايو داماس</option>
        </select>

        <select v-if="metaCategory === 'skoda'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="skodaoctavia">شوكودا أوكتافيا</option>
          <option value="skodafabia">شوكودا فابيا</option>
          <option value="skodasuperb">شوكودا سوبرب</option>
          <option value="skodakodiaq">شوكودا كودياك</option>
          <option value="skodakaroq">شوكودا كاروك</option>
          <option value="skodascala">شوكودا سكالا</option>
          <option value="skodacitigo">شوكودا سيتغو</option>
          <option value="skodayeti">شوكودا يتي</option>
          <option value="skodaroomster">شوكودا رومستر</option>
          <option value="skodarapid">شوكودا رابد</option>
        </select>

        <select v-if="metaCategory === 'opel'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="opelastra">أوبل أسترا</option>
          <option value="opelcorsa">أوبل كورسا</option>
          <option value="opelinsignia">أوبل إنسيغنيا</option>
          <option value="opelmokka">أوبل موكا</option>
          <option value="opelzafira">أوبل زافيرا</option>
          <option value="opelgrandland">أوبل غراند لاند</option>
          <option value="opeladam">أوبل آدم</option>
          <option value="opelmeriva">أوبل ميريفا</option>
          <option value="opelcombo">أوبل كومبو</option>
          <option value="opelastrak">أوبل أسترا ك</option>
          <option value="opelvectra">أوبل فيكترا</option>
          <option value="opelantara">أوبل أنطارة</option>
          <option value="opelgtc">أوبل جي تي سي</option>
          <option value="opelkarl">أوبل كارل</option>
          <option value="opelfrontera">أوبل فرونتيرا</option>
          <option value="opelkadett">أوبل كاديت</option>
          <option value="opelmovano">أوبل موفانو</option>
          <option value="opelomega">أوبل أوميغا</option>
          <option value="opelsignum">أوبل سيغنوم</option>
        </select>

        <select v-if="metaCategory === 'lynkco'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="lynk01">لينك & كو 01</option>
          <option value="lynk02">لينك & كو 02</option>
          <option value="lynk03">لينك & كو 03</option>
          <option value="lynk04">لينك & كو 04</option>
          <option value="lynk05">لينك & كو 05</option>
          <option value="lynk06">لينك & كو 06</option>
        </select>

        <select v-if="metaCategory === 'tank'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="tank300">تانك 300</option>
          <option value="tank500">تانك 500</option>
          <option value="tank700">تانك 700</option>
          <option value="tank800">تانك 800</option>
        </select>

        <select v-if="metaCategory === 'rollsroyce'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="rollsroycephantom">رولز رويس فانتوم</option>
          <option value="rollsroyceghost">رولز رويس غاست</option>
          <option value="rollsroycecullinan">رولز رويس كولينان</option>
          <option value="rollsroycewraith">رولز رويس رايث</option>
          <option value="rollsroycedawn">رولز رويس داون</option>
          <option value="rollsroycesilvershadow">رولز رويس سيلفر شادو</option>
          <option value="rollsroycesilverspirit">رولز رويس سيلفر سبيريت</option>
          <option value="rollsroycesilvercloud">رولز رويس سيلفر كلاود</option>
          <option value="rollsroycecorniche">رولز رويس كورنيش</option>
          <option value="rollsroycephantomdrophead">رولز رويس فانتوم دروب هيد</option>
        </select>
        <select v-if="metaCategory === 'lamborghini'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="lamborghinihuracan">لامبورغيني هوراكان</option>
          <option value="lamborghiniaventador">لامبورغيني أفينتادور</option>
          <option value="lamborghiniurus">لامبورغيني أوروس</option>
          <option value="lamborghinigallardo">لامبورغيني غالاردو</option>
          <option value="lamborghinidiablo">لامبورغيني ديابلو</option>
          <option value="lamborghinicountach">لامبورغيني كونتاش</option>
          <option value="lamborghinimurcielago">لامبورغيني مورسيلاجو</option>
          <option value="lamborghinisian">لامبورغيني سيان</option>
          <option value="lamborghinireventon">لامبورغيني ريفينتون</option>
          <option value="lamborghinicentenario">لامبورغيني سنتيناريو</option>
          <option value="lamborghinimiura">لامبورغيني ميوارا</option>
          <option value="lamborghiniasterion">لامبورغيني أستريوس</option>
        </select>
        <select v-if="metaCategory === 'citroen'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="citroenc3">سيتروين C3</option>
          <option value="citroenc4">سيتروين C4</option>
          <option value="citroenc5">سيتروين C5</option>
          <option value="citroenc1">سيتروين C1</option>
          <option value="citroenberlingo">سيتروين برلينغو</option>
          <option value="citroencactus">سيتروين كاكتوس</option>
          <option value="citroends3">سيتروين DS3</option>
          <option value="citroends5">سيتروين DS5</option>
          <option value="citroenc4picasso">سيتروين C4 بيكاسو</option>
          <option value="citroengrandc4picasso">سيتروين جراند C4 بيكاسو</option>
        </select>
        <select v-if="metaCategory === 'ferrari'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="ferrari488">فيراري 488</option>
          <option value="ferrariportofino">فيراري بورتوفينو</option>
          <option value="ferrarif8tributo">فيراري F8 تريبيوتو</option>
          <option value="ferrariroma">فيراري روما</option>
          <option value="ferrarilaferrari">فيراري لافيراري</option>
          <option value="ferrarienzo">فيراري إنزو</option>
          <option value="ferrari458">فيراري 458</option>
          <option value="ferraricalifornia">فيراري كاليفورنيا</option>
          <option value="ferraritestarossa">فيراري تيستاروسا</option>
          <option value="ferrarif40">فيراري F40</option>
          <option value="ferrarif50">فيراري F50</option>
        </select>
        <select v-if="metaCategory === 'seat'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="seatleon">SEAT ليون</option>
          <option value="seattibiza">SEAT إيبيزا</option>
          <option value="seatarona">SEAT أرونا</option>
          <option value="seattarraco">SEAT تارّاقو</option>
          <option value="seatalhambra">SEAT ألهمبرا</option>
          <option value="seatmii">SEAT مي</option>
          <option value="seattoledo">SEAT توليدو</option>
          <option value="seatexeo">SEAT إكسييو</option>
          <option value="seatateca">SEAT أتيكا</option>
          <option value="seatcupra">SEAT كوبره</option>
        </select>

        <select v-if="metaCategory === 'zxauto'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="zxautolandwind">ZXAuto لاندويند</option>
          <option value="zxautojmc">ZXAuto JMC</option>
          <option value="zxautocoolbear">ZXAuto كولبير</option>
          <option value="zxautoaoxin">ZXAuto آوكسين</option>
          <option value="zxautozs">ZXAuto ZS</option>
          <option value="zxautoeado">ZXAuto إيدو</option>
          <option value="zxautotana">ZXAuto تانا</option>
          <option value="zxautohuoyun">ZXAuto هويوان</option>
          <option value="zxautot8">ZXAuto T8</option>
          <option value="zxautodadi">ZXAuto دادي</option>
        </select>

        <select v-if="metaCategory === 'changan'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="changancs35">شانجان CS35</option>
          <option value="changancs55">شانجان CS55</option>
          <option value="changancs75">شانجان CS75</option>
          <option value="changancs95">شانجان CS95</option>
          <option value="changaneado">شانجان إيدو</option>
          <option value="changanalsvin">شانجان ألسفين</option>
          <option value="changanhunter">شانجان هانتر</option>
          <option value="changanvan">شانجان فان</option>
          <option value="changancx70">شانجان CX70</option>
          <option value="changanbenni">شانجان بيني</option>
          <option value="changanraeton">شانجان ريتون</option>
          <option value="changancs15">شانجان CS15</option>
          <option value="changankaicheng">شانجان كايتشنغ</option>
          <option value="changana800">شانجان A800</option>
        </select>

        <select v-if="metaCategory === 'renault'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="renaultclio">رينو كليو</option>
          <option value="renaultcaptur">رينو كابتور</option>
          <option value="renaultmegane">رينو ميغان</option>
          <option value="renaultkoleos">رينو كوليوس</option>
          <option value="renaultkadjar">رينو كادجار</option>
          <option value="renaultarkana">رينو أركانا</option>
          <option value="renaulttalisman">رينو تاليسمان</option>
          <option value="renaultzoe">رينو زوي</option>
          <option value="renaultespace">رينو إسباس</option>
          <option value="renaultlaguna">رينو لاغونا</option>
          <option value="renaultscenic">رينو سينيك</option>
          <option value="renaulttrafic">رينو ترافك</option>
          <option value="renaultkangoo">رينو كانغو</option>
          <option value="renault5">رينو 5</option>
          <option value="renault12">رينو 12</option>
        </select>

        <select v-if="metaCategory === 'buick'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="buickenclave">بويك إنكلاف</option>
          <option value="buickencore">بويك إنكور</option>
          <option value="buickencoregx">بويك إنكور GX</option>
          <option value="buicklacrosse">بويك لاكروس</option>
          <option value="buickregal">بويك ريجال</option>
          <option value="buickverano">بويك فيرانيو</option>
          <option value="buickcascada">بويك كاسكادا</option>
          <option value="buickcentury">بويك سنتشوري</option>
          <option value="buickelectra">بويك إليكترا</option>
          <option value="buickskylark">بويك سكايلاك</option>
          <option value="buickriviera">بويك ريفييرا</option>
          <option value="buickroadmaster">بويك رودماستر</option>
          <option value="buickterraza">بويك تيرازا</option>
          <option value="buickrainier">بويك راينيير</option>
          <option value="buicklucerne">بويك لوسيرن</option>
        </select>

        <select v-if="metaCategory === 'maserati'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="maseratighibli">مازيراتي غيبلي</option>
          <option value="maseratilevante">مازيراتي ليفانتي</option>
          <option value="maseratiquattroporte">مازيراتي كواتروبورتي</option>
          <option value="maseratialfieri">مازيراتي ألفيري</option>
          <option value="maseratigranturismo">مازيراتي غران توريزمو</option>
          <option value="maseratigrancabrio">مازيراتي غران كابريو</option>
          <option value="maseratikhamsin">مازيراتي خميسين</option>
          <option value="maseratibora">مازيراتي بورا</option>
          <option value="maseratibiturbo">مازيراتي بي توربو</option>
          <option value="maserati3200gt">مازيراتي 3200 GT</option>
          <option value="maseratimistral">مازيراتي ميسtral</option>
          <option value="maseratisebring">مازيراتي سيبرينغ</option>
        </select>

        <select v-if="metaCategory === 'daihatsu'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="daihatsuterios">دايهاتسو تيريوس</option>
          <option value="daihatsurocky">دايهاتسو روكي</option>
          <option value="daihatsuayla">دايهاتسو أيلة</option>
          <option value="daihatsusirion">دايهاتسو سيريون</option>
          <option value="daihatsumira">دايهاتسو ميرا</option>
          <option value="daihatsucuore">دايهاتسو كوري</option>
          <option value="daihatsugranmax">دايهاتسو جراند ماكس</option>
          <option value="daihatsuhijet">دايهاتسو هايجي</option>
          <option value="daihatsucharade">دايهاتسو شيراد</option>
          <option value="daihatsuapplause">دايهاتسو أبلاوز</option>
          <option value="daihatsumax">دايهاتسو ماكس</option>
          <option value="daihatsumateria">دايهاتسو ماتيريا</option>
          <option value="daihatsudelta">دايهاتسو دلتا</option>
        </select>

        <select v-if="metaCategory === 'mercury'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="mercurygrandmarquis">ميركوري غراند ماركيز</option>
          <option value="mercurymountaineer">ميركوري ماونتنير</option>
          <option value="mercurymariner">ميركوري مارينر</option>
          <option value="mercurymilan">ميركوري ميلان</option>
          <option value="mercurysable">ميركوري سابل</option>
          <option value="mercurycougar">ميركوري كوغار</option>
          <option value="mercurymystique">ميركوري ميستيك</option>
          <option value="mercuryvillager">ميركوري فيلاجر</option>
          <option value="mercurycomet">ميركوري كوميت</option>
          <option value="mercurycapri">ميركوري كابري</option>
          <option value="mercurymarauder">ميركوري مارودر</option>
          <option value="mercurymontego">ميركوري مونتيغو</option>
          <option value="mercurytracer">ميركوري تريسر</option>
          <option value="mercuryzephyr">ميركوري زيفير</option>
        </select>

        <select v-if="metaCategory === 'volvo'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="volvos60">فولفو S60</option>
          <option value="volvos90">فولفو S90</option>
          <option value="volvov60">فولفو V60</option>
          <option value="volvov90">فولفو V90</option>
          <option value="volvoxc40">فولفو XC40</option>
          <option value="volvoxc60">فولفو XC60</option>
          <option value="volvoxc90">فولفو XC90</option>
          <option value="volvoc30">فولفو C30</option>
          <option value="volvoc70">فولفو C70</option>
          <option value="volvos40">فولفو S40</option>
          <option value="volvos70">فولفو S70</option>
          <option value="volvov70">فولفو V70</option>
          <option value="volvov40">فولفو V40</option>
          <option value="volvo240">فولفو 240</option>
          <option value="volvo850">فولفو 850</option>
        </select>
        <select v-if="metaCategory === 'porsche'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="porsche 911">بورش 911</option>
          <option value="porsche 718 cayman">بورش 718 كايمان</option>
          <option value="porsche 718 boxster">بورش 718 بوكستر</option>
          <option value="porsche panamera">بورش باناميرا</option>
          <option value="porsche macan">بورش ماكان</option>
          <option value="porsche cayenne">بورش كايين</option>
          <option value="porsche taycan">بورش تايكان</option>
          <option value="porsche 944">بورش 944</option>
          <option value="porsche 968">بورش 968</option>
          <option value="porsche 928">بورش 928</option>
          <option value="porsche carrera gt">بورش كاريرا GT</option>
          <option value="porsche 356">بورش 356</option>
          <option value="porsche 917">بورش 917</option>
          <option value="porsche boxster">بورش بوكستر</option>
        </select>
        <select v-if="metaCategory === 'lincoln'">
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
        <select v-if="metaCategory === 'volkswagen'">
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
        <select v-if="metaCategory === 'daihatsu'">
          <option value="">اختر موديل السيارة</option>
          <option value="daihatsuterios">دايهاتسو تيريوس</option>
          <option value="daihatsurocky">دايهاتسو روكي</option>
          <option value="daihatsuayla">دايهاتسو أيلة</option>
          <option value="daihatsusirion">دايهاتسو سيريون</option>
          <option value="daihatsumira">دايهاتسو ميرا</option>
          <option value="daihatsucuore">دايهاتسو كوري</option>
          <option value="daihatsugranmax">دايهاتسو جراند ماكس</option>
          <option value="daihatsuhijet">دايهاتسو هايجي</option>
          <option value="daihatsucharade">دايهاتسو شيراد</option>
          <option value="daihatsuapplause">دايهاتسو أبلاوز</option>
          <option value="daihatsumax">دايهاتسو ماكس</option>
          <option value="daihatsumateria">دايهاتسو ماتيريا</option>
          <option value="daihatsudelta">دايهاتسو دلتا</option>
        </select>

        <select v-if="metaCategory === 'mercury'">
          <option value="">اختر موديل السيارة</option>
          <option value="mercurygrandmarquis">ميركوري غراند ماركيز</option>
          <option value="mercurymountaineer">ميركوري ماونتنير</option>
          <option value="mercurymariner">ميركوري مارينر</option>
          <option value="mercurymilan">ميركوري ميلان</option>
          <option value="mercurysable">ميركوري سابل</option>
          <option value="mercurycougar">ميركوري كوغار</option>
          <option value="mercurymystique">ميركوري ميستيك</option>
          <option value="mercuryvillager">ميركوري فيلاجر</option>
          <option value="mercurycomet">ميركوري كوميت</option>
          <option value="mercurycapri">ميركوري كابري</option>
          <option value="mercurymarauder">ميركوري مارودر</option>
          <option value="mercurymontego">ميركوري مونتيغو</option>
          <option value="mercurytracer">ميركوري تريسر</option>
          <option value="mercuryzephyr">ميركوري زيفير</option>
        </select>

        <select v-if="metaCategory === 'volvo'">
          <option value="">اختر موديل السيارة</option>
          <option value="volvos60">فولفو S60</option>
          <option value="volvos90">فولفو S90</option>
          <option value="volvov60">فولفو V60</option>
          <option value="volvov90">فولفو V90</option>
          <option value="volvoxc40">فولفو XC40</option>
          <option value="volvoxc60">فولفو XC60</option>
          <option value="volvoxc90">فولفو XC90</option>
          <option value="volvoc30">فولفو C30</option>
          <option value="volvoc70">فولفو C70</option>
          <option value="volvos40">فولفو S40</option>
          <option value="volvos70">فولفو S70</option>
          <option value="volvov70">فولفو V70</option>
          <option value="volvov40">فولفو V40</option>
          <option value="volvo240">فولفو 240</option>
          <option value="volvo850">فولفو 850</option>
        </select>

        <select v-if="metaCategory === 'audi'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="audi a1">أودي A1</option>
          <option value="audi a3">أودي A3</option>
          <option value="audi a4">أودي A4</option>
          <option value="audi a5">أودي A5</option>
          <option value="audi a6">أودي A6</option>
          <option value="audi a7">أودي A7</option>
          <option value="audi a8">أودي A8</option>
          <option value="audi q2">أودي Q2</option>
          <option value="audi q3">أودي Q3</option>
          <option value="audi q4 e-tron">أودي Q4 e-tron</option>
          <option value="audi q5">أودي Q5</option>
          <option value="audi q7">أودي Q7</option>
          <option value="audi q8">أودي Q8</option>
          <option value="audi tt">أودي TT</option>
          <option value="audi r8">أودي R8</option>
          <option value="audi s1">أودي S1</option>
          <option value="audi s3">أودي S3</option>
          <option value="audi s4">أودي S4</option>
          <option value="audi s5">أودي S5</option>
          <option value="audi s6">أودي S6</option>
          <option value="audi s7">أودي S7</option>
          <option value="audi s8">أودي S8</option>
          <option value="audi rs3">أودي RS3</option>
          <option value="audi rs4">أودي RS4</option>
          <option value="audi rs5">أودي RS5</option>
          <option value="audi rs6">أودي RS6</option>
          <option value="audi rs7">أودي RS7</option>
          <option value="audi q5 sportback">أودي Q5 سبورت باك</option>
          <option value="audi a3 sportback">أودي A3 سبورت باك</option>
        </select>

        <select v-if="metaCategory === 'suzuki'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="jimny">سوزوكي جيمني</option>
          <option value="vitara">سوزوكي فيتارا</option>
          <option value="scross">سوزوكي S-Cross</option>
          <option value="swift">سوزوكي سويفت</option>
          <option value="baleno">سوزوكي بالينو</option>
          <option value="alto">سوزوكي ألتو</option>
          <option value="ertiga">سوزوكي إرتيجا</option>
          <option value="celerio">سوزوكي سيليريو</option>
          <option value="sx4">سوزوكي SX4</option>
          <option value="grandvitara">سوزوكي غراند فيتارا</option>
          <option value="forenza">سوزوكي فورينزا</option>
          <option value="kizashi">سوزوكي كيزاشي</option>
          <option value="wagonr">سوزوكي واغن R</option>
          <option value="swiftsport">سوزوكي سويفت سبورت</option>
          <option value="equator">سوزوكي إكويتر</option>
          <option value="cappuccino">سوزوكي كابوتشينو</option>
        </select>

        <select v-if="metaCategory === 'infiniti'" v-model="carType">
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

        <select v-if="metaCategory === 'hummer'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="h1">همر H1</option>
          <option value="h2">همر H2</option>
          <option value="h3">همر H3</option>
          <option value="h3t">همر H3T</option>
          <option value="ev">همر EV</option>
        </select>

        <select v-if="metaCategory === 'mitsubishi'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="mitsubishi outlander">ميتسوبيشي أوتلاندر</option>
          <option value="mitsubishi outlander sport (asx)">ميتسوبيشي أوتلاندر سبورت (ASX)</option>
          <option value="mitsubishi eclipse cross">ميتسوبيشي إكليبس كروس</option>
          <option value="mitsubishi mirage">ميتسوبيشي ميرانج</option>
          <option value="mitsubishi galant">ميتسوبيشي غالانت</option>
          <option value="mitsubishi lancer">ميتسوبيشي لانسر</option>
          <option value="mitsubishi lancer evolution">ميتسوبيشي لانسر إيفولوشن</option>
          <option value="mitsubishi pajero">ميتسوبيشي باجيرو</option>
          <option value="mitsubishi montero">ميتسوبيشي مونتيرو</option>
          <option value="mitsubishi rvr">ميتسوبيشي RVR</option>
          <option value="mitsubishi i-miev">ميتسوبيشي i-MiEV</option>
          <option value="mitsubishi 3000gt">ميتسوبيشي 3000GT</option>
          <option value="mitsubishi mighty max">ميتسوبيشي مايتي ماكس</option>
          <option value="mitsubishi eclipse">ميتسوبيشي إكليبس</option>
        </select>

        <select v-if="metaCategory === 'isuzu'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="isuzu d-max">إيسوزو D-Max</option>
          <option value="isuzu mu-x">إيسوزو MU-X</option>
          <option value="isuzu trooper">إيسوزو تروبر</option>
          <option value="isuzu rodeo">إيسوزو روديو</option>
          <option value="isuzu ascender">إيسوزو أسيتر</option>
          <option value="isuzu amigo">إيسوزو أميغو</option>
          <option value="isuzu hombre">إيسوزو أومبري</option>
          <option value="isuzu npr">إيسوزو NPR</option>
          <option value="isuzu n-series">إيسوزو N-Series</option>
          <option value="isuzu f-series">إيسوزو F-Series</option>
          <option value="isuzu elf">إيسوزو إلف</option>
          <option value="isuzu wizard">إيسوزو ويزارد</option>
          <option value="isuzu bellett">إيسوزو بيلت</option>
        </select>

        <select v-if="metaCategory === 'landrover'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="land rover defender">لاند روفر ديفندر</option>
          <option value="land rover discovery">لاند روفر ديسكفري</option>
          <option value="land rover discovery sport">لاند روفر ديسكفري سبورت</option>
          <option value="land rover range rover">لاند روفر رينج روفر</option>
          <option value="land rover range rover sport">لاند روفر رينج روفر سبورت</option>
          <option value="land rover range rover velar">لاند روفر رينج روفر فيلار</option>
          <option value="land rover range rover evoque">لاند روفر رينج روفر إيفوك</option>
          <option value="land rover freelander">لاند روفر فري لاندير</option>
          <option value="land rover series i">لاند روفر سلسلة I</option>
          <option value="land rover series ii">لاند روفر سلسلة II</option>
          <option value="land rover series iii">لاند روفر سلسلة III</option>
          <option value="land rover lr2">لاند روفر LR2</option>
          <option value="land rover lr3">لاند روفر LR3</option>
          <option value="land rover lr4">لاند روفر LR4</option>
        </select>

        <select v-if="metaCategory === 'cadillac'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="cadillac escalade">كاديلاك إسكاليد</option>
          <option value="cadillac xt4">كاديلاك XT4</option>
          <option value="cadillac xt5">كاديلاك XT5</option>
          <option value="cadillac xt6">كاديلاك XT6</option>
          <option value="cadillac ct4">كاديلاك CT4</option>
          <option value="cadillac ct5">كاديلاك CT5</option>
          <option value="cadillac ct6">كاديلاك CT6</option>
          <option value="cadillac ats">كاديلاك ATS</option>
          <option value="cadillac cts">كاديلاك CTS</option>
          <option value="cadillac srx">كاديلاك SRX</option>
          <option value="cadillac sts">كاديلاك STS</option>
          <option value="cadillac xts">كاديلاك XTS</option>
          <option value="cadillac deville">كاديلاك ديفيل</option>
          <option value="cadillac fleetwood">كاديلاك فليتوود</option>
          <option value="cadillac seville">كاديلاك سيفيل</option>
        </select>

        <select v-if="metaCategory === 'geely'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="geely emgrand">جيلي إمجراند</option>
          <option value="geely coolray">جيلي كولراي</option>
          <option value="geely azkarra">جيلي أزكارا</option>
          <option value="geely atlas">جيلي أتلانتيك</option>
          <option value="geely preface">جيلي بريفيس</option>
          <option value="geely boyue">جيلي بويي</option>
          <option value="geely gc6">جيلي GC6</option>
          <option value="geely gc9">جيلي GC9</option>
          <option value="geely ge">جيلي GE</option>
          <option value="geely jingang">جيلي جينغنغ</option>
          <option value="geely binyue">جيلي بينيوا</option>
          <option value="geely haoyue">جيلي هايوي</option>
          <option value="geely geometry a">جيلي جيو متري A</option>
          <option value="geely geometry c">جيلي جيو متري C</option>
          <option value="geely starlink">جيلي ستارلينك</option>
        </select>

        <select v-if="metaCategory === 'dodge'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="dodge charger">دودج تشارجر</option>
          <option value="dodge challenger">دودج تشالنجر</option>
          <option value="dodge durango">دودج دورانغو</option>
          <option value="dodge journey">دودج جيرني</option>
          <option value="dodge viper">دودج فايبر</option>
          <option value="dodge neon">دودج نيون</option>
          <option value="dodge dart">دودج دارت</option>
          <option value="dodge ram 1500">دودج رام 1500</option>
          <option value="dodge ram 2500">دودج رام 2500</option>
          <option value="dodge ram 3500">دودج رام 3500</option>
          <option value="dodge magnum">دودج ماغنوم</option>
          <option value="dodge dakota">دودج داكوتا</option>
          <option value="dodge grand caravan">دودج غراند كارافان</option>
          <option value="dodge avenger">دودج أفنجر</option>
          <option value="dodge intrepid">دودج إنتربيد</option>
        </select>

        <select v-if="metaCategory === 'jeep'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="jeep wrangler">جيب رانجلر</option>
          <option value="jeep gladiator">جيب غلادياتور</option>
          <option value="jeep cherokee">جيب شيروكي</option>
          <option value="jeep grand cherokee">جيب جراند شيروكي</option>
          <option value="jeep compass">جيب كومباس</option>
          <option value="jeep renegade">جيب رينيغيد</option>
          <option value="jeep wagoneer">جيب واگونير</option>
          <option value="jeep grand wagoneer">جيب جراند واجونير</option>
          <option value="jeep liberty">جيب ليبرتي</option>
          <option value="jeep patriot">جيب باتريوت</option>
          <option value="jeep cj series">جيب CJ سيريز</option>
          <option value="jeep cherokee xj">جيب شيروكي XJ</option>
        </select>

        <select v-if="metaCategory === 'chrysler'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="chrysler 300">كرايسلر 300</option>
          <option value="chrysler pacifica">كرايسلر باسيفيكا</option>
          <option value="chrysler voyager">كرايسلر فويجر</option>
          <option value="chrysler aspen">كرايسلر آسبن</option>
          <option value="chrysler sebring">كرايسلر سيبرينغ</option>
          <option value="chrysler town & country">كرايسلر تاون آند كانتري</option>
          <option value="chrysler crossfire">كرايسلر كروس فاير</option>
          <option value="chrysler 200">كرايسلر 200</option>
          <option value="chrysler newport">كرايسلر نيو بورت</option>
          <option value="chrysler saratoga">كرايسلر ساراتوجا</option>
          <option value="chrysler pt cruiser">كرايسلر بي تي كروزر</option>
          <option value="chrysler concorde">كرايسلر كونكورد</option>
          <option value="chrysler lebaron">كرايسلر لي بارون</option>
          <option value="chrysler imperial">كرايسلر إمبريال</option>
          <option value="chrysler windsor">كرايسلر ويندسور</option>
        </select>
        <select v-if="metaCategory === 'genesis'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="genesisg70">جينيسيس G70</option>
          <option value="genesisg80">جينيسيس G80</option>
          <option value="genesisg90">جينيسيس G90</option>
          <option value="genesisgv70">جينيسيس GV70</option>
          <option value="genesisgv80">جينيسيس GV80</option>
          <option value="genesisessentia">جينيسيس Essentia</option>
          <option value="genesismint">جينيسيس Mint</option>
          <option value="genesisg80electrified">جينيسيس G80 Electrified</option>
          <option value="genesisgv60">جينيسيس GV60</option>
        </select>

        <select v-if="metaCategory === 'gmc'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="gmcsierra1500">جي إم سي سييرا 1500</option>
          <option value="gmcsierrahd">جي إم سي سييرا HD</option>
          <option value="gmccanyon">جي إم سي كانيون</option>
          <option value="gmcterrain">جي إم سي تيرين</option>
          <option value="gmcacadia">جي إم سي أكاديا</option>
          <option value="gmcyukon">جي إم سي يوكون</option>
          <option value="gmcyukonxl">جي إم سي يوكون XL</option>
          <option value="gmcsavana">جي إم سي سافانا</option>
          <option value="gmchummerev">جي إم سي همر EV</option>
          <option value="gmchummerh2">جي إم سي همر H2</option>
          <option value="gmcenvoy">جي إم سي إنفوي</option>
          <option value="gmcjimmy">جي إم سي جيمي</option>
          <option value="gmcsierraDenali">جي إم سي سييرا دينالي</option>
          <option value="gmcterrainDenali">جي إم سي تيرين دينالي</option>
        </select>

        <select v-if="metaCategory === 'trucks'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="fordfseries">فورد F-Series</option>
          <option value="chevroletsilverado">شيفروليه سيلفرادو</option>
          <option value="ram1500">رام 1500</option>
          <option value="toyotatundra">تويوتا تندرا</option>
          <option value="nissantitan">نيسان تيتان</option>
          <option value="gmcsierra">جي إم سي سييرا</option>
          <option value="freightlinercascadia">فريتلاينر كاسكاديا</option>
          <option value="kenwortht680">كنوورث T680</option>
          <option value="peterbilt579">بيتر بيلت 579</option>
          <option value="mackanthem">ماك أنثيم</option>
          <option value="internationalltseries">إنترناشونال LT Series</option>
          <option value="volvovnlseries">فولفو VNL Series</option>
          <option value="cat797f">CAT 797F (Dump Truck)</option>
          <option value="catd11">CAT D11 (Bulldozer)</option>
          <option value="komatsupc8000">كوماتسو PC8000 (Excavator)</option>
          <option value="johndeere744l">جون دير 744L (Wheel Loader)</option>
          <option value="hitachizw370">هيتاشي ZW370 (Wheel Loader)</option>
          <option value="casecx250d">كيس CX250D (Excavator)</option>
          <option value="bobcate165">بوبكات E165 (Excavator)</option>
          <option value="jcb3cx">JCB 3CX (Backhoe Loader)</option>
          <option value="caterpillar320">كاتربيلر 320 (Excavator)</option>
        </select>

        <select v-if="metaCategory === 'mercedes'" v-model="carType">
          <option value=""> اختر موديل السيارة</option>
          <option value="mercedesaclass">مرسيدس A-Class</option>
          <option value="mercedesbclass">مرسيدس B-Class</option>
          <option value="mercedescclass">مرسيدس C-Class</option>
          <option value="mercedeseclass">مرسيدس E-Class</option>
          <option value="mercedessclass">مرسيدس S-Class</option>
          <option value="mercedescla">مرسيدس CLA</option>
          <option value="mercedescls">مرسيدس CLS</option>
          <option value="mercedesgla">مرسيدس GLA</option>
          <option value="mercedesglc">مرسيدس GLC</option>
          <option value="mercedesgle">مرسيدس GLE</option>
          <option value="mercedesgls">مرسيدس GLS</option>
          <option value="mercedesgclass">مرسيدس G-Class</option>
          <option value="mercedessl">مرسيدس SL</option>
          <option value="mercedesslsamg">مرسيدس SLS AMG</option>
          <option value="mercedeseqc">مرسيدس EQC</option>
        </select>

        <select v-if="metaCategory === 'bmw'" v-model="carType">
          <option value=""> اختر موديل السيارة</option>
          <option value="bmwseries1">بي إم دبليو سيريس 1</option>
          <option value="bmwseries2">بي إم دبليو سيريس 2</option>
          <option value="bmwseries3">بي إم دبليو سيريس 3</option>
          <option value="bmwseries4">بي إم دبليو سيريس 4</option>
          <option value="bmwseries5">بي إم دبليو سيريس 5</option>
          <option value="bmwseries6">بي إم دبليو سيريس 6</option>
          <option value="bmwseries7">بي إم دبليو سيريس 7</option>
          <option value="bmwseries8">بي إم دبليو سيريس 8</option>
          <option value="bmwx1">بي إم دبليو X1</option>
          <option value="bmwx2">بي إم دبليو X2</option>
          <option value="bmwx3">بي إم دبليو X3</option>
          <option value="bmwx4">بي إم دبليو X4</option>
          <option value="bmwx5">بي إم دبليو X5</option>
          <option value="bmwx6">بي إم دبليو X6</option>
          <option value="bmwz3">بي إم دبليو Z3</option>
          <option value="bmwz4">بي إم دبليو Z4</option>
          <option value="bmwm2">بي إم دبليو M2</option>
          <option value="bmwm3">بي إم دبليو M3</option>
          <option value="bmwm4">بي إم دبليو M4</option>
          <option value="bmwm5">بي إم دبليو M5</option>
        </select>
        <!-- Chery Models -->
        <select v-if="metaCategory === 'chery'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="cherytiggo2">تشيري تيغو 2</option>
          <option value="cherytiggo3">تشيري تيغو 3</option>
          <option value="cherytiggo5">تشيري تيغو 5</option>
          <option value="cherytiggo7">تشيري تيغو 7</option>
          <option value="cherytiggo8">تشيري تيغو 8</option>
          <option value="cheryarrizo5">تشيري أريزو 5</option>
          <option value="cheryarrizo6">تشيري أريزو 6</option>
          <option value="cheryarrizogx">تشيري أريزو GX</option>
          <option value="cherye5">تشيري E5</option>
          <option value="cherye3">تشيري E3</option>
          <option value="cheryomoda5">تشيري أومودا 5</option>
          <option value="cheryexeedtx">تشيري إكسيد TX</option>
          <option value="cheryexeedvx">تشيري إكسيد VX</option>
          <option value="cheryqq">تشيري QQ</option>
          <option value="cheryqqicecream">تشيري QQ آيس كريم</option>
          <option value="cheryfulwin">تشيري فولوين</option>
          <option value="cherym11">تشيري M11</option>
          <option value="cherytiggo4">تشيري تيغو 4</option>
          <option value="cherytiggo9">تشيري تيغو 9</option>
          <option value="cherysqr">تشيري SQR</option>
          <option value="cherya1">تشيري A1</option>
          <option value="cherya3">تشيري A3</option>
        </select>


        <!-- MG Models -->
        <select v-if="metaCategory === 'mg'" v-model="carType">
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

        <!-- Kia Models -->
        <select v-if="metaCategory === 'kia'" v-model="carType">
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

        <select v-if="metaCategory === 'nissan'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="nissanaltima">نيسان ألتيما</option>
          <option value="nissanmaxima">نيسان ماكسيما</option>
          <option value="nissansentra">نيسان سنترا</option>
          <option value="nissanversa">نيسان فيرسا</option>
          <option value="nissan370z">نيسان 370Z</option>
          <option value="nissangtr">نيسان GT-R</option>
          <option value="nissanleaf">نيسان ليف (كهربائي)</option>
          <option value="nissanrogue">نيسان روغ</option>
          <option value="nissanmurano">نيسان مورانو</option>
          <option value="nissanpathfinder">نيسان باثفايندر</option>
          <option value="nissanarmada">نيسان أرمادا</option>
          <option value="nissankicks">نيسان كيكس</option>
          <option value="nissanjuke">نيسان جوك (متوقف في بعض الأسواق)</option>
          <option value="nissanfrontier">نيسان فرونتير</option>
          <option value="nissantitan">نيسان تيتان</option>
          <option value="nissanxterra">نيسان إكستيرا (متوقف)</option>
          <option value="nissannvcargo">نيسان NV كارجو (متوقف)</option>
          <option value="nissanpulsar">نيسان بلسار (متوقف في بعض الأسواق)</option>
          <option value="nissanqashqai">نيسان قاشقاي (روج سبورت في بعض الأسواق)</option>
        </select>

        <select v-if="metaCategory === 'lexus'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="lexuses">لكزس ES</option>
          <option value="lexusgs">لكزس GS</option>
          <option value="lexusis">لكزس IS</option>
          <option value="lexusnx">لكزس NX</option>
          <option value="lexusrx">لكزس RX</option>
          <option value="lexusgx">لكزس GX</option>
          <option value="lexuslx">لكزس LX</option>
          <option value="lexusrc">لكزس RC</option>
          <option value="lexuslc">لكزس LC</option>
          <option value="lexusux">لكزس UX</option>
          <option value="lexusls">لكزس LS</option>
          <option value="lexusrz">لكزس RZ (كهربائي)</option>
          <option value="lexusct">لكزس CT (متوقف في بعض الأسواق)</option>
        </select>
        <select v-if="metaCategory === 'mazda'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="mazda2">مازدا 2</option>
          <option value="mazda3">مازدا 3</option>
          <option value="mazda6">مازدا 6</option>
          <option value="mazdacx3">مازدا CX-3</option>
          <option value="mazdacx30">مازدا CX-30</option>
          <option value="mazdacx5">مازدا CX-5</option>
          <option value="mazdacx9">مازدا CX-9</option>
          <option value="mazdamx5miata">مازدا MX-5 مياتا</option>
          <option value="mazdamx30">مازدا MX-30 (موديل كهربائي جديد)</option>
          <option value="mazdarx7">مازدا RX-7 (متوقف)</option>
          <option value="mazdarx8">مازدا RX-8 (متوقف)</option>
          <option value="mazdatribute">مازدا تريبيوت (متوقف)</option>
          <option value="mazdamillenia">مازدا ميلينيا (متوقف)</option>
          <option value="mazda3axela">مازدا 3 أكسيلا (اسم مستخدم في بعض الأسواق)</option>
          <option value="mazda5">مازدا 5 (متوقف)</option>
          <option value="mazdampv">مازدا MPV (متوقف)</option>
          <option value="mazdabseries">مازدا B-سيريز (شاحنات بيك آب، متوقفة)</option>
        </select>

        <select v-if="metaCategory === 'chevrolet'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="chevroletspark">شيفروليه سبارك</option>
          <option value="chevroletsonic">شيفروليه سونيك</option>
          <option value="chevroletmalibu">شيفروليه ماليبو</option>
          <option value="chevroletcamaro">شيفروليه كامارو</option>
          <option value="chevroletcorvette">شيفروليه كورفيت</option>
          <option value="chevroletimpala">شيفروليه إمبالا (متوقف)</option>
          <option value="chevroletvolt">شيفروليه فولت (متوقف)</option>
          <option value="chevroletboltev">شيفروليه بولت EV</option>
          <option value="chevrolettrailblazer">شيفروليه تريل بليزر</option>
          <option value="chevroletequinox">شيفروليه إكينوكس</option>
          <option value="chevrolettraverse">شيفروليه ترافرس</option>
          <option value="chevrolettahoe">شيفروليه تاهو</option>
          <option value="chevroletsurburban">شيفروليه سوبربان</option>
          <option value="chevroletcolorado">شيفروليه كولورادو</option>
          <option value="chevroletsilverado1500">شيفروليه سيلفرادو 1500</option>
          <option value="chevroletsilveradohd">شيفروليه سيلفرادو HD</option>
          <option value="chevroletblazer">شيفروليه بليزر</option>
          <option value="chevroletastro">شيفروليه أسترو (متوقف)</option>
          <option value="chevrolethhr">شيفروليه HHR (متوقف)</option>
          <option value="chevrolets10">شيفروليه S10 (متوقف)</option>
          <option value="chevroletcaprice">شيفروليه كابريس (متوقف)</option>
          <option value="chevroletelcamino">شيفروليه إل كامينو (متوقف)</option>
        </select>

        <select v-if="metaCategory === 'honda'">
          <option value="">اختر موديل السيارة</option>
          <option value="hondaaccord">هوندا أكورد</option>
          <option value="hondacivic">هوندا سيفيك</option>
          <option value="hondacrv">هوندا CR-V</option>
          <option value="hondahrv">هوندا HR-V</option>
          <option value="hondainsight">هوندا إنسايت</option>
          <option value="hondaodyssey">هوندا أوديسي</option>
          <option value="hondapassport">هوندا باسبورت</option>
          <option value="hondapilot">هوندا بايلوت</option>
          <option value="hondaridgeline">هوندا ريدج لاين</option>
          <option value="hondafit">هوندا فيت (متوقف في بعض الأسواق)</option>
          <option value="hondas2000">هوندا S2000 (متوقف)</option>
          <option value="hondaclarity">هوندا كلاريتي (متوقف في بعض الأسواق)</option>
          <option value="hondazrv">هوندا ZR-V (موديل جديد في بعض الأسواق)</option>
        </select>

        <select v-if="metaCategory === 'jetour'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="jetourdashing">جيتور داشينغ</option>
          <option value="jetourx70">جيتور X70</option>
          <option value="jetourx90">جيتور X90</option>
          <option value="jetourx70s">جيتور X70S</option>
          <option value="jetourx90s">جيتور X90S</option>
          <option value="jetourx55">جيتور X55</option>
        </select>

        <select v-if="metaCategory === 'hyundai'">
          <option value="">اختر موديل السيارة</option>
          <option value="sonata">هيونداي سوناتا</option>
          <option value="elantra">هيونداي إلنترا</option>
          <option value="accent">هيونداي أكسنت</option>
          <option value="azera">هيونداي أزيرا</option>
          <option value="santavi">هيونداي سنتافي</option>
          <option value="tucson">هيونداي توكسون</option>
          <option value="veloster">هيونداي فيلوستر</option>
          <option value="kona">هيونداي كونا</option>
          <option value="creta">هيونداي كريتا</option>
          <option value="venue">هيونداي فينيو</option>
          <option value="palisade">هيونداي باليسايد</option>
          <option value="grandsantafe">هيونداي جراند سانتا في</option>
          <option value="trajet">هيونداي تراجيت</option>
          <option value="h1">هيونداي H1</option>
          <option value="staria">هيونداي ستاريا</option>
          <option value="stargazer">هيونداي سترا غازر</option>
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

        <!-- Fiat Models -->
        <select v-if="metaCategory === 'fiat'" v-model="carType">
          <option value=""> اختر موديل السيارة</option>
          <option value="fiat500">فيات 500</option>
          <option value="fiatpanda">فيات باندا</option>
          <option value="fiattipo">فيات تيبو</option>
          <option value="fiat124spider">فيات 124 سبايدر</option>
          <option value="fiatducato">فيات دوكاتو</option>
          <option value="fiatdoblo">فيات دوبلو</option>
          <option value="fiat500x">فيات 500X</option>
          <option value="fiatfreemont">فيات فريمنت</option>
          <option value="fiat126">فيات 126</option>
          <option value="fiat147">فيات 147</option>
          <option value="fiatpunto">فيات Punto</option>
          <option value="fiatqubo">فيات Qubo</option>
          <option value="fiatabarth500">فيات Abarth 500</option>
          <option value="fiatabarth124spider">فيات Abarth 124 سبايدر</option>
          <option value="fiatmultipla">فيات Multipla</option>
        </select>

        <!-- Subaru Models -->
        <select v-if="metaCategory === 'subaru'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="subaruoutback">سوبارو أوتباك</option>
          <option value="subaruforester">سوبارو فوريستر</option>
          <option value="subarucrosstrek">سوبارو كروس تريك</option>
          <option value="subaruimpreza">سوبارو إمبريزا</option>
          <option value="subarulegacy">سوبارو ليجاسي</option>
          <option value="subaruascent">سوبارو أسنت</option>
          <option value="subaruwrx">سوبارو WRX</option>
          <option value="subaruwrx_sti">سوبارو WRX STI</option>
          <option value="subarubrz">سوبارو BRZ</option>
          <option value="subarubaja">سوبارو باجا</option>
          <option value="subarutribeca">سوبارو تريبيكا</option>
          <option value="subarusvx">سوبارو SVX</option>
          <option value="subaruloyale">سوبارو لوالي</option>
          <option value="subarujusty">سوبارو جاستي</option>
        </select>

        <!-- Ford Models -->
        <select v-if="metaCategory === 'ford'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="fordfseries">فورد F-Series</option>
          <option value="chevroletsilverado">شيفروليه سيلفرادو</option>
          <option value="ram1500">رام 1500</option>
          <option value="toyotatundra">تويوتا تندرا</option>
          <option value="nissantitan">نيسان تيتان</option>
          <option value="gmcsierra">جي إم سي سييرا</option>
          <option value="freightlinercascadia">فريتلاينر كاسكاديا</option>
          <option value="kenwortht680">كنوورث T680</option>
          <option value="peterbilt579">بيتر بيلت 579</option>
          <option value="mackanthem">ماك أنثيم</option>
          <option value="internationalltseries">إنترناشونال LT Series</option>
          <option value="volvovnlseries">فولفو VNL Series</option>
          <option value="cat797f">CAT 797F (Dump Truck)</option>
          <option value="catd11">CAT D11 (Bulldozer)</option>
          <option value="komatsupc8000">كوماتسو PC8000 (Excavator)</option>
          <option value="johndeere744l">جون دير 744L (Wheel Loader)</option>
          <option value="hitachizw370">هيتاشي ZW370 (Wheel Loader)</option>
          <option value="casecx250d">كيس CX250D (Excavator)</option>
          <option value="bobcate165">بوبكات E165 (Excavator)</option>
          <option value="jcb3cx">JCB 3CX (Backhoe Loader)</option>
          <option value="caterpillar320">كاتربيلر 320 (Excavator)</option>
        </select>

        <!-- Toyota Models -->
        <select v-if="metaCategory === 'toyota'" v-model="carType">
          <option value="">اختر موديل السيارة</option>
          <option value="toyota4runner">تويوتا 4Runner</option>
          <option value="toyotaavalon">تويوتا أفالون</option>
          <option value="toyotacamry">تويوتا كامري</option>
          <option value="toyotacorolla">تويوتا كورولا</option>
          <option value="toyotahighlander">تويوتا هايلاندر</option>
          <option value="toyotalandcruiser">تويوتا لاند كروزر</option>
          <option value="toyotaprius">تويوتا بريوس</option>
          <option value="toyotasienna">تويوتا سيينا</option>
          <option value="toyotasequoia">تويوتا سيكويا</option>
          <option value="toyotatacoma">تويوتا تاكوما</option>
          <option value="toyotatundra">تويوتا تندرا</option>
          <option value="toyotavenza">تويوتا فينزا</option>
          <option value="toyotayaris">تويوتا ياريس</option>
          <option value="toyotasupra">تويوتا سوبرا</option>
        </select>
      </div>

      <div class="right-side">
        <select v-if="categoryFilter === 'حيوانات'" v-model="metaCategory">
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
      <div class="right-side">
        <select v-if="categoryFilter === 'مستلزمات شخصية'" v-model="metaCategory">
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

      <div class="right-side">
        <select v-if="categoryFilter === 'devices'" v-model="metaCategory">
          <option value="">اختر نوع الجهاز</option>
          <option value="screens">شاشات</option>
          <option value="laptops">لابتوب</option>
          <option value="phones">هواتف</option>
          <option value="pc">كمبيوتر</option>
          <option value="playstation">بلايستشين</option>
        </select>
        <select v-if="categoryFilter === 'devices'" v-model="carType">
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
      <div class="right-side">
        <select v-if="categoryFilter === 'عقار'" v-model="special">
          <option value="">بيع ام ايجار</option>
          <option value="buy">بيع</option>
          <option value="rent">ايجار</option>
        </select>
        <select v-model="metaCategory" v-if="categoryFilter === 'عقار' && special === 'buy'">
          <option value="">اختر نوع العقار</option>
          <option value="شقق">شقق للبيع</option>
          <option value="بيوت">بيوت للبيع</option>
          <option value="land">اراضي للبيع</option>
        </select>
        <select v-model="metaCategory" v-if="categoryFilter === 'عقار' && special === 'rent'">
          <option value="">اختر نوع العقار</option>
          <option value="شقق">شقق للايجار</option>
          <option value="بيوت">بيوت للايجار</option>
          <option value="land">اراضي للايجار</option>
        </select>
        <button v-if="categoryFilter !== null" class="btn btn-primary" style="margin-top: 15px;"
          @click="filterAllCategory()">Filter</button>
        <div class="create-post flex justify-between items-center mb-4 px-4">
          <input type="text" v-model="searchTerm" placeholder="Search posts..." class="search-input" />
          <div class="container" style="width: 100%;">
            <div class="row g-2">
              <div class="col">
                <button type="button" class="btn btn-primary w-100" @click="openBottomSheet">Create Post</button>
              </div>
              <div class="col">
                <select v-model="location" class="form-select w-100" style="text-align: center;">
                  <option value="">كل المناطق</option>
                  <option value="amman">عمان</option>
                  <option value="irbid">اربد</option>
                  <option value="zarqa">الزرقاء</option>
                  <option value="ajloun">السلط</option>
                  <option value="mafraq">المفرق</option>
                  <option value="karak">الكرك</option>
                  <option value="madaba">مادبا</option>
                  <option value="jerash">جرش</option>
                  <option value="ajloun">عجلون</option>
                  <option value="aqaba">العقبة</option>
                  <option value="ma'an">معان</option>
                  <option value="tafila">الطفيلة</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <authComponent :isVisible="authVisible" @close="closeAuth" />
        <div class="container">
          <div>
            <CreatePostDialog :isVisible="isDialogVisible" @close="closeDialog" @create-post="handleCreatePost" />
            <div class="products">
              <div class="contain">
                <div v-for="product in paginatedProducts" :key="product._id" class="card surprise-card mb-3"
                  style="height: 32vh;">
                  <div class="row no-gutters" style="display: flex; justify-content: space-between; height: 100%;">
                    <!-- Image Column -->
                    <div class="col-md-4" style="height: 100%;">
                      <img class="card-img-left" :src="product.images[0]" alt=""
                        style="width: 100%; height: 100%; object-fit: cover;" />
                    </div>
                    <!-- Card Body Column -->
                    <div class="col-md-8" style="height: 100%;">
                      <div class="card-body"
                        style="display: flex; flex-direction: column; justify-content: center; height: 100%;">
                        <h1 class="card-title">{{ product.title }}</h1>
                        <!-- <h3 class="card-description">{{ product.description }}</h3> -->
                        <h3 class="card-username" v-if="product.user && product.user.username">{{ product.user.username
                          }}</h3>
                        <h3 class="card-phone" v-if="product.user && product.user.phoneNumber">{{
                          product.user.phoneNumber }}</h3>
                        <h3 class="card-price">{{ product.price }}</h3>
                        <router-link :to="`/details/${product._id}`" class="details-link">التفاصيل</router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="showloading === true">
              <div class="loader-container" v-if="showloading === true">
                <div class="loader"></div>
              </div>
            </div>
            <div v-if="filteredProductsProp.length === 0 && !showloading">
              <p>No products available.</p>
            </div>
            <div class="pagination" style="margin-top: 50px;">
              <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
              <span>Page {{ currentPage }} of {{ totalPages }}</span>
              <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CreatePostDialog from '../components/bottomSheet.vue';
import authComponent from './authComponent.vue';
export default {
  name: "HomeView",
  data() {
    return {
      allProducts: [],
      filteredProductsProp: [],
      currentPage: 1,
      showloading: true,
      itemsPerPage: 10,
      searchTerm: "",
      filterWord: "",
      isDialogVisible: false,
      categoryFilter: null, // New data property for category filter
      baseUrl: "https://heraj-backend.onrender.com",
      location: "", // Change from city to location
      metaCategory: "",
      special: "",
      carType: "",
      modelCar: "",
      authVisible: false,
      username: localStorage.getItem('username')
    };
  },
  components: {
    CreatePostDialog,
    authComponent
  },
  computed: {
    localStorageData() {
      return localStorage.getItem('myKey') || 'No data';
    },
    lowercaseMetaCategory() {
      // Regular expression to match only English characters (A-Z, a-z)
      const isEnglish = /^[A-Za-z]+$/.test(this.metaCategory);

      // Convert to lowercase if it's English, else return the original value
      return isEnglish ? this.metaCategory.toLowerCase() : this.metaCategory;
    },
    totalPages() {
      return Math.ceil(this.filteredProducts.length / this.itemsPerPage);
    },
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.filteredProducts.slice(start, start + this.itemsPerPage);
    },
    filteredProducts() {
      let filtered = this.allProducts;
      this.metaCategory.toLowerCase();
      // Filter by category if selected
      if (this.categoryFilter) {
        filtered = filtered.filter(product => product.category === this.categoryFilter);
      }

      // Filter by search term if any
      if (this.searchTerm) {
        filtered = filtered.filter(product =>
          product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      }

      // Filter by location
      if (this.location) {
        filtered = filtered.filter(product => product.location === this.location);
      }

      return filtered; // Return the final filtered products
    },
  },
  watch: {
    username(newValue) {
      console.log("Username updated:", newValue);
    },
    metaCategory(newVal, oldVal) {
      // Call fetchProducts if metaCategory changes
      console.log("old val : ", oldVal);
      console.log("new Val : ", newVal);

      this.allProducts = this.filteredProductsProp;
    },
    special(newVal, oldVal) {
      // Call fetchProducts if special changes
      console.log("old val : ", oldVal);
      console.log("new Val : ", newVal);
      this.allProducts = this.filteredProductsProp;
    },
    carType(newVal, oldVal) {
      // Call fetchProducts if special changes
      console.log("old val : ", oldVal);
      console.log("new Val : ", newVal);
      this.allProducts = this.filteredProductsProp;
    },
  },
  methods: {
    handleCategoryChange(event) {
      // Get the selected value from the dropdown
      let selectedValue = event.target.value;

      // Check if it's English characters, then convert to lowercase
      const isEnglish = /^[A-Za-z]+$/.test(selectedValue);
      this.metaCategory = isEnglish ? selectedValue.toLowerCase() : selectedValue;
    },
    signOut() {
      localStorage.removeItem('username');
      localStorage.removeItem('email');
      localStorage.removeItem('phoneNumber');
      localStorage.removeItem('password');
      localStorage.removeItem('id');
      window.location.href = "/";
    },
    filterAllCategory() {
      console.log("categoryFilter:", this.categoryFilter);
      console.log("metaCategory:", this.metaCategory);
      console.log("special:", this.special);
      console.log("carType:", this.carType); // Log carType for debugging

      // Ensure products are fetched before filtering
      if (!this.allProducts.length) {
        console.warn('Products not fetched. Fetching products now.');
        // Fetch products here if necessary
      }
      if (this.categoryFilter) {
        this.allProducts = this.allProducts.filter(product => product.category === this.categoryFilter);
        console.log(this.allProducts);
      }
      if (this.categoryFilter && this.metaCategory && !this.carType) {
        this.allProducts = this.allProducts.filter(product => product.category === this.categoryFilter
          && product.metaCategory === this.metaCategory
        );
        console.log(this.allProducts);
      }
      if (this.categoryFilter && this.metaCategory && this.carType) {
        this.allProducts = this.allProducts.filter(product => product.category === this.categoryFilter
          && product.metaCategory === this.metaCategory && product.carType === this.carType
        );
        console.log(this.allProducts);
      }
      if (this.categoryFilter && this.metaCategory && this.carType && this.special) {
        this.allProducts = this.allProducts.filter(product => product.category === this.categoryFilter
          && product.metaCategory === this.metaCategory && product.carType === this.carType && product.special === this.special
        );
        console.log(this.allProducts);
      }
      if (this.categoryFilter && this.metaCategory && this.carType && this.special && this.modelCar) {
        this.allProducts = this.allProducts.filter(product => product.category === this.categoryFilter
          && product.metaCategory === this.metaCategory && product.carType === this.carType && product.special === this.special && this.modelCar
        );
        console.log(this.allProducts);
      }
      this.currentPage = 1;
    },

    updateUsername() {
      this.username = localStorage.getItem('username');
      console.log(this.username)
    },

    openBottomSheet() {
      this.isDialogVisible = true;
    },
    openauth() {
      this.authVisible = true;
      console.log(this.authVisible);
    },
    closeAuth() {
      this.authVisible = false;
    },
    closeDialog() {
      this.isDialogVisible = false;
    },
    handleCreatePost(newPost) {
      this.allProducts.unshift(newPost);
      this.currentPage = 1;
      this.isDialogVisible = false;
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    fetchProducts() {
      this.showloading = true; // Set loading to true at the start of the fetch
      const userId = localStorage.getItem("id");
      const url = userId ? `${this.baseUrl}/product/posts/${userId}` : `${this.baseUrl}/product/posts/null`;

      axios.get(url)
        .then(response => {
          this.allProducts = response.data.reverse();
          this.filteredProductsProp = this.allProducts;
          this.currentPage = 1;

          console.log(this.filteredProductsProp);
        })
        .catch(error => {
          console.error("There was an error fetching the products:", error);
        })
        .finally(() => {
          this.showloading = false; // Ensure loading is stopped after the API call
        });
    },

    filterDevices() {
      this.currentPage = 1;
      this.categoryFilter = 'devices';
      this.category = "devices";
      this.metaCategory = "",
        this.carType = "";
      this.special = "";
    },
    filterbuilding() {
      this.currentPage = 1;
      this.categoryFilter = 'عقار';
      this.metaCategory = "",
        this.carType = "";
      this.special = "";
    },
    filterAnimals() {
      this.currentPage = 1;
      this.categoryFilter = 'حيوانات';
      this.metaCategory = "",
        this.carType = "";
      this.special = "";
    },
    filtercars() {
      this.paginatedProducts = this.allProducts.filter(product => product.categoryFilter === 'سيارات');
      this.currentPage = 1;
      this.categoryFilter = 'سيارات';
      this.metaCategory = "",
        this.carType = "";
      this.special = "";
    },
    filterjobs(){
      this.paginatedProducts = this.allProducts.filter(product => product.categoryFilter === 'jobs' || product.categoryFilter === 'وظائف');
      this.currentPage = 1;
      this.categoryFilter = 'jobs';
      this.metaCategory = "",
        this.carType = "";
      this.special = "";
    },
    filterSupplies() {
      this.currentPage = 1;
      this.categoryFilter = 'مستلزمات شخصية';
      this.metaCategory = "",
        this.carType = "";
      this.special = "";
    },
    filterMain() {
      this.currentPage = 1;
      this.categoryFilter = null;
      this.category = null;
      this.metaCategory = "",
        this.special = "";
      this.fetchProducts();
    },

  },
  created() {
    // Set up event listener for localStorage changes (for multiple tabs)
    window.addEventListener('storage', this.updateUsername);
  },
  mounted() {
    this.fetchProducts();
    this.updateUsername(); // Ensure username is updated on mount
    this.username = localStorage.getItem('username')
  },
};
</script>
<style scoped>
.w-full {
  width: 100%;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
}

.pagination-controls {
  display: flex;
  justify-content: center;
  margin-top: 50px;

}

.pagination-controls button {
  margin: 0 5px;
}

select {
  width: 100%;
  padding: 10px;
  border: 2px solid black;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  color: #333;
  appearance: none;
  /* Removes default arrow in some browsers */
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml;charset=US-ASCII,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14'><polygon fill='%23333' points='7 10 3 5 11 5'/></svg>");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 14px;
}

.custom-select:focus {
  outline: none;
  border-color: #007bff;
}

.custom-select option {
  color: #333;
}

/* Optional for larger screens */
@media (min-width: 768px) {
  .custom-select {
    width: 50%;
  }
}

.custom-select {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  color: #333;
  appearance: none;
  /* Removes default arrow in some browsers */
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml;charset=US-ASCII,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14'><polygon fill='%23333' points='7 10 3 5 11 5'/></svg>");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 14px;
}

.custom-select:focus {
  outline: none;
  border-color: #007bff;
}

.custom-select option {
  color: #333;
}

/* Optional for larger screens */
@media (min-width: 768px) {
  .custom-select {
    width: 50%;
  }
}


.custom-select option {
  color: #333;
}

/* Optional for larger screens */
@media (min-width: 768px) {
  .custom-select {
    width: 50%;
  }
}

.create-post {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.search-input {
  flex-grow: 1;
  /* Make input take available space */
  margin-right: 1rem;
  /* Space between input and button */
  padding: 0.5rem;
  /* Padding for better appearance */
  border: 1px solid #ccc;
  /* Border styling */
  border-radius: 4px;
  /* Rounded corners */
}

.bg-background-card {
  background-color: #f8f9fa;
  /* Adjust as needed */
}

a {
  cursor: pointer;
}

.whitespace-nowrap {
  white-space: nowrap;
}

.text-sm {
  font-size: 0.875rem;
}

.flex {
  display: flex;
  flex-wrap: wrap;
}

.items-center {
  align-items: center;
}

.justify-between {
  justify-content: space-between;
}

.flex-container {
  display: flex;
  justify-content: center;
  /* or any other justify rule */
}

.gap-4 {
  gap: 1rem;
}

.second-nav div img {
  width: 357px;
  height: 84px;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.overflow-x-auto {
  overflow-x: auto;
}

.max-w-7xl {
  max-width: 80rem;
}

.md\:px-0 {
  padding-left: 0;
  padding-right: 0;
}

a {
  font-size: larger;
  text-decoration: none;
  color: rgb(164, 158, 158);
  font-weight: bold;
}

.box-border {
  display: flex;
  justify-content: space-between;
}

.second-nav {
  display: flex;
  justify-content: space-around;
  flex-direction: row-reverse;
  background-color: rgb(60, 60, 207);
  align-items: center;
}

.second-nav a {
  color: white;
  font-size: larger;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

img {
  width: 300px;
}

.card {
  display: flex;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.02);
  /* Scale up on hover */
}

.card-img-left {
  width: 100%;
  /* Full width of the image container */
  height: auto;
  /* Maintain aspect ratio */
  object-fit: cover;
  /* Cover the space without stretching */
}

.card-body {
  padding: 16px;
  /* Add padding for content */
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.card-description,
.card-username,
.card-phone {
  color: #666;
  /* Grey color for text */
  margin: 0.5rem 0;
  /* Margin for spacing */
}


@media (max-width: 425px) {
  .flex {
    flex-direction: column;
    flex-direction: column-reverse;
  }

  .second-nav div img {
    width: 133px;
    height: 84px;
  }

  .text-right {
    text-align: right;
    margin-right: 0;
  }
}

.card {
  display: flex;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.02);
}

.create-post {
  margin-top: 30px;
  margin-bottom: 30px;
}

.btn-primary {
  background-color: orange;
  padding: 15px;
  border: none;
  border-radius: 10px;
}

.card-body {
  padding: 16px;
  /* Adjust padding as needed */
  display: flex;
  flex-direction: column;
  /* Ensure content stacks vertically */
  justify-content: center;
  /* Center text vertically */
}

.card-img-left {
  width: 100%;
  /* Ensure the image takes full width of its container */
  height: auto;
  /* Maintain aspect ratio */
  object-fit: cover;
  /* Ensure the image covers its space */
}

.no-gutters {
  display: flex;
  justify-content: space-between;
  width: 95%;
  align-items: center;
  flex-wrap: wrap;
}

.loader-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

.loader {
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.loader-container p {
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #555;
}

.surprise-card {
  /* Bright yellow */
  border-radius: 15px;
  /* Rounded corners */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  /* Floating effect */
  transition: transform 0.2s, box-shadow 0.2s;
  /* Smooth animation */
}

.surprise-card:hover {
  transform: scale(1.05);
  /* Slightly enlarge on hover */
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  /* Deeper shadow on hover */
}

.card-title {
  color: #d50000;
  /* Red color for title */
  font-family: 'Comic Sans MS', cursive, sans-serif;
  /* Playful font */
}

.card-description,
.card-username,
.card-phone {
  color: #000;
  /* Default text color */
}

.details-link {
  color: #007bff;
  /* Link color */
  font-weight: bold;
  /* Bold link */
  text-decoration: underline;
  /* Underline link */
}

.details-link:hover {
  color: #0056b3;
  /* Darker link color on hover */
}
</style>