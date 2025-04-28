<script>
    export let id = "";
    export let title = "";
    export let thaiTitle = "";
    export let previousSection = "";
    export let nextSection = "";
    export let prevTitle = ""; // Added this variable for previous section title
    export let nextTitle = ""; // Added this variable for next section title
    export let menuItems = [];
    export let imagePath = "/webp/careersKitchenHelper.webp";
    export let mobilePath = "/webp/careersKitchenHelperMobile.webp";
    
    import { scrollTo } from 'svelte-scrolling';
  </script>
  
  <section {id} class="bg-tertiary relative flex flex-col sm:flex-row h-fit">
    <div class="flex sm:hidden">
      <img src={mobilePath} class="w-screen object-cover" alt="" />
    </div>
    <div class="text-darkText flex sm:w-1/2 justify-center items-center flex-col font-instrument">
      {#if previousSection}
        <div class="mt-6 md:mt-12">
          <div use:scrollTo={{ ref: previousSection, offset:-64 }} class="font-DMSans text-lightText hover:text-darkText">
            <p>{prevTitle}</p>
          </div>
        </div>
      {/if}
      
      <div class="mx-8 sm:mx-16 xl:mx-50 mt-12 mb-12 sm:my-16 md:my-24 xl:my-36 flex flex-col">
        <h1 class="text-darkText text-6xl mb-4">{title}</h1>
        <h1 class="text-lightText mb-12 text-4xl">{thaiTitle}</h1>
        
        {#each menuItems as item}
          <div class="text-darkText font-DMSans {item === menuItems[0] ? 'mt-8' : ''} mb-4 flex">
            <div class="flex w-full flex-row justify-between">
              <div class="pr-8">
                <p class="font-normal">{item.name} {#if item.tag}<span class="text-[#D08111] font-semibold">{item.tag}</span>{/if}</p>
                {#if item.description}
                  <p class="font-light">{item.description}</p>
                {/if}
              </div>
              <div>
                <p>{item.price}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
      
      {#if nextSection}
        <div class="mb-6 md:mb-12">
          <div use:scrollTo={{ ref: nextSection, offset:-64 }} class="font-DMSans text-lightText hover:text-darkText">
            <p>{nextTitle}</p>
          </div>
        </div>
      {/if}
    </div>
  
    <div class="w-1/2 flex-auto sm:flex hidden">
      <img src={imagePath} class="h-full object-cover w-full" alt="" />
    </div>
  </section>