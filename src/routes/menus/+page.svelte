<script>
    import Menus from '/src/components/menus.svelte';

    const curry = {
        thisRef: 'Curry',
        goTo: 'Noodles',
        title: 'Curry',
        thaiTitle: 'แกง',
        dishName: 'Haawy Maaeng Phuu Ob Maaw Din',
        dishDesc: 'its good af trust',
        arrowText: 'Noodles',
	};
</script>

<Menus 
    thisRef={curry.thisRef}
    goTo={curry.goTo}
    title={curry.title}
    thaiTitle={curry.thaiTitle}
    dishName={curry.dishName}
    dishDesc={curry.dishDesc}
    arrowText={curry.arrowText}
/>