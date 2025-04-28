 <script>
	import MenuSection from './menu-section.svelte';
	import { menuData } from '../data/menu-data.js';
  </script>
  
  {#each Object.entries(menuData) as [section, data], index}
	<MenuSection
	  id={section}
	  title={data.title}
	  thaiTitle={data.thaiTitle}
	  previousSection={index > 0 ? Object.keys(menuData)[index-1] : ""}
	  nextSection={index < Object.keys(menuData).length-1 ? Object.keys(menuData)[index+1] : ""}
	  menuItems={data.items}
	  imagePath={data.imagePath || "/webp/careersKitchenHelper.webp"}
	  mobilePath={data.mobilePath || "/webp/careersKitchenHelperMobile.webp"}
	/>
  {/each}