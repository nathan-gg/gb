<script lang="ts">
    import Careers from '/src/components/careers.svelte';

    const careers = {
        thisRef: 'Careers',
        goTo: 'Server',
        title: 'Careers',
        thaiTitle: 'อาชีพ',
        body: 'Green Basil Thai Restaurant (GBTR) promotes a fun, respectful and encouraging work environment. We acknowledge the importance of quality staff because this will become our primary success factor. Thus, we welcome energetic, responsible and positive team players to join us. Join the team and send your resume to <a href="mailto:textinfo@greenbasilthai.com" target="_blank" class="focus: font-bold focus:underline hover:underline">textinfogreenbasilthai.com</a>.',
        arrowText: 'Servers',
        image: '/webp/identityHead.webp'
	};

    const server = {
        thisRef: 'Server',
        goTo: 'Food Runner',
        goBack: 'Careers',
        title: 'Server',
        thaiTitle: 'เซิร์ฟเวอร์',
        body: "GA server at Green Basil plays a vital role in delivering an exceptional dining experience. This position involves warmly welcoming guests, guiding them through the menu with expertise, and ensuring their needs are met with attentiveness and care. Servers are responsible for taking accurate orders, coordinating with the kitchen staff, and maintaining a clean and inviting dining area. At Green Basil, the focus is on creating a friendly and professional atmosphere that reflects the restaurant's commitment to authentic Thai cuisine and outstanding customer service.",
        arrowText: 'Food Runner',
        prevArrowText: 'All Careers',
        image: '/webp/careersServer.webp'
	};
    const foodRunner = {
        thisRef: 'Food Runner',
        goTo: 'Driver',
        goBack: 'Server',
        title: 'Food Runner',
        thaiTitle: 'นักวิ่งด้านอาหาร',
        body: 'Green Basil Thai Restaurant (GBTR) promotes a fun, respectful and encouraging work environment. We acknowledge the importance of quality staff because this will become our primary success factor. Thus, we welcome energetic, responsible and positive team players to join us. Join the team and send your resume to <a href="mailto:textinfo@greenbasilthai.com" target="_blank" class="focus: font-bold focus:underline hover:underline">textinfogreenbasilthai.com</a>.',
        arrowText: 'Driver',
        prevArrowText: 'Server',
        image: '/webp/careersFoodRunner.webp'
	};
    const driver = {
        thisRef: 'Driver',
        goTo: 'Kitchen Helper',
        goBack: 'Food Runner',
        title: 'Driver',
        thaiTitle: 'คนขับ',
        body: 'Green Basil Thai Restaurant (GBTR) promotes a fun, respectful and encouraging work environment. We acknowledge the importance of quality staff because this will become our primary success factor. Thus, we welcome energetic, responsible and positive team players to join us. Join the team and send your resume to <a href="mailto:textinfo@greenbasilthai.com" target="_blank" class="focus: font-bold focus:underline hover:underline">textinfogreenbasilthai.com</a>.',
        arrowText: 'Kitchen Helper',
        prevArrowText: 'Food Runner',
        image: '/webp/identityHead.webp'
	};
    const kitchenHelper = {
        thisRef: 'Kitchen Helper',
        goTo: 'Careers',
        goBack: 'Driver',
        title: 'Kitchen Helper',
        thaiTitle: 'ผู้ช่วยครัว',
        body: 'Green Basil Thai Restaurant (GBTR) promotes a fun, respectful and encouraging work environment. We acknowledge the importance of quality staff because this will become our primary success factor. Thus, we welcome energetic, responsible and positive team players to join us. Join the team and send your resume to <a href="mailto:textinfo@greenbasilthai.com" target="_blank" class="focus: font-bold focus:underline hover:underline">textinfogreenbasilthai.com</a>.',
        prevArrowText: 'Driver',
        topArrowText: 'Back to Careers',
        image: '/webp/careersKitchenHelper.webp'
	};


</script>

<Careers 
    thisRef={careers.thisRef}
    goTo={careers.goTo}
    title={careers.title}
    thaiTitle={careers.thaiTitle}
    body={careers.body}
    arrowText={careers.arrowText}
    image={careers.image}
/>

<Careers 
    thisRef={server.thisRef}
    goTo={server.goTo}
    goBack={server.goBack}
    title={server.title}
    thaiTitle={server.thaiTitle}
    body={server.body}
    arrowText={server.arrowText}
    prevArrow={true}
    prevArrowText={server.prevArrowText}
    image={server.image}
/>

<Careers 
    thisRef={foodRunner.thisRef}
    goTo={foodRunner.goTo}
    goBack={foodRunner.goBack}
    title={foodRunner.title}
    thaiTitle={foodRunner.thaiTitle}
    body={foodRunner.body}
    arrowText={foodRunner.arrowText}
    prevArrow={true}
    prevArrowText={foodRunner.prevArrowText}
    image={foodRunner.image}
/>

<Careers 
    thisRef={driver.thisRef}
    goTo={driver.goTo}
    goBack={driver.goBack}
    title={driver.title}
    thaiTitle={driver.thaiTitle}
    body={driver.body}
    arrowText={driver.arrowText}
    prevArrow={true}
    prevArrowText={driver.prevArrowText}
    image={driver.image}
/>

<Careers 
    thisRef={kitchenHelper.thisRef}
    goTo={kitchenHelper.goTo}
    goBack={kitchenHelper.goBack}
    title={kitchenHelper.title}
    thaiTitle={kitchenHelper.thaiTitle}
    body={kitchenHelper.body}
    arrow={false}
    prevArrow={true}
    prevArrowText={kitchenHelper.prevArrowText}
    topArrow={true}
    topArrowText={kitchenHelper.topArrowText}
    image={kitchenHelper.image}
/>
