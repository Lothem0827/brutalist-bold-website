<script>
  //components

  //assets

  import teeracoLogo from "@images/projects/teeracoLogo.png";
  import arrowDown from "@images/svg/arrow-down.svg";
  import featured1 from "@images/projects/featured_1.png";
</script>

<main id="project-details" class="flex h-screen lg:flex-col lg:h-full ">
  <div
    class="w-1/2  bg-dark grid grid-cols-6 grid-rows-5 gap-5s px-[32px] py-[32px] lg:w-full lg:h-screen"
  >
    <div class="col-span-4 row-span-1 h-fit ">
      <h1 class="text-accent">
        Teeraco Visual <span class="font-italic italic ">identity</span>
      </h1>
    </div>

    <div class="col-span-6 row-span-2 self-end flex justify-between">
      <div class="overflow-hidden select-none ">
        <!-- <img
          class="object-cover h-[293px] aspect-square"
          src={teeracoLogo}
          alt=""
        /> -->
      </div>
      <h2 class="text-darkLight">— 2022</h2>
    </div>

    <div class="col-span-5 row-span-2 self-end text-light">
      <h2>
        Teeraco is a print-on-demand store that sells plant-inspired products
        such as t-shirts, sweatshirts, and mugs.
      </h2>
    </div>
  </div>

  <div
    class="w-1/2  bg-primary grid grid-cols-6 grid-rows-5 gap-5s lg:w-full lg:h-screen relative overflow-hidden"
  >
    <div class="col-span-full row-span-1  pt-[32px] px-[32px]">
      <nav class="flex justify-between text-light  ">
        <div><a href="/">All Works (6)</a></div>
        <div><a href="/">Contact</a></div>
      </nav>
    </div>

    <div class="col-span-full row-span-3 flex justify-center relative ">
      <div class="h-full aspect-[4/5] bg-primary   xl:bg-dark lg:bg-primary">
        <div class="overflow-hidden select-none ">
          <img
            class="object-cover h-full aspect-[4/5]"
            src={featured1}
            alt=""
          />
        </div>
      </div>
    </div>

    <div
      class="absolute bottom-0 left-0 pb-[32px]  whitespace-nowrap 	-translate-x-1/4	"
    >
      <h2 class="text-primaryLight ">
        Branding • Visual Identity • Illustration • Branding • Visual Identity •
        Illustration
      </h2>
    </div>
  </div>
</main>
