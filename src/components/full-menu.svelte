<script>
	import MenuSection from './menu-section.svelte';
	import { menuData } from '../data/menu-data.js';

	const menuSections = Object.entries(menuData);
  </script>
  
  {#each menuSections as [section, data], index}
	<MenuSection
	  id={section}
	  title={data.title}
	  thaiTitle={data.thaiTitle}
	  previousSection={index > 0 ? menuSections[index-1][0] : ""}
	  nextSection={index < menuSections.length-1 ? menuSections[index+1][0] : ""}
	  prevTitle={index > 0 ? menuSections[index-1][1].title : ""}
	  nextTitle={index < menuSections.length-1 ? menuSections[index+1][1].title : ""}
	  menuItems={data.items}
	  imagePath={data.imagePath || "/webp/careersKitchenHelper.webp"}
	  mobilePath={data.mobilePath || "/webp/careersKitchenHelperMobile.webp"}
	/>
  {/each}