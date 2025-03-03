<script>
    import { Label, Input } from 'flowbite-svelte';
    import { Button } from 'flowbite-svelte';
    import { Textarea } from 'flowbite-svelte';
    let textareaprops = {
        id: 'message',
        name: 'message',
        label: 'Your message',
        rows: 4,
        placeholder: 'Message:'
    };
</script>

<section class="inline-flex h-screen font-serif">

    <div class="flex-auto w-6/12 bg-gradient-to-b from-[#092417] to-[#0D2201] text-white ">

        <div class="m-24">

        <h1 class="text-[#E0B87A] text-4xl mt-24 mb-4">Contact Us</h1>

        <p class="mb-12 text-xl">
            Have questions or need assistance?<br>Contact us, we're happy to help!
        </p>


        <div class="grid grid-cols-2 grid-rows-2">

            <div class="mb-6 mr-2">
                <Input id="default-input" placeholder="First Name" />
            </div>
            <div class="mb-6 ml-2">
                
                <Input id="default-input" placeholder="Last Name" />
            </div>
            <div class="mb-6 mr-2">
                
                <Input id="default-input" placeholder="Email Address" />
            </div>
            <div class="mb-6 ml-2">
                <Input id="default-input" placeholder="Phone Number" />
            </div>

        </div>

        <div class="mb-2">
            <Textarea {...textareaprops} />
        </div>

        <Button size="lg" class="px-12 py-2 bg-white text-black focus:border-[#E0B87A]" href="">Submit</Button>
        
        </div>

    </div>

    <div class="flex-auto">
        <img src="../wongchunhei_wallpaper.jpg" class="h-full object-cover" alt=""/>
    </div>



</section>