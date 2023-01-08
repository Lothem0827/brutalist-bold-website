<script>
  //components

  //assets

  import arrow from "@images/svg/arrow.svg";
  import arrowDown from "@images/svg/arrow-down.svg";
  import featured1 from "@images/projects/featured_1.png";
</script>

<main class="flex h-screen lg:flex-col lg:h-full">
  <div
    class="w-1/2  bg-primary grid grid-cols-6 grid-rows-5 gap-5s lg:w-full lg:h-screen"
  >
    <div class="col-span-5 row-span-2 h-fit px-[32px] pt-[32px]">
      <h1 class="text-primaryLight">
        Carolino Villarta Jr. Visual Designer — <span
          class="font-italic italic ">based</span
        > in Cebu, Ph.
      </h1>
    </div>
    <div class="col-span-full row-span-1 self-center px-[32px]">
      <div
        class="text-6s font-normal	tracking-tightest flex justify-between items-end text-primaryLight"
      >
        <p class="">January 2023</p>
        <p class="">— Available for freelance work</p>
      </div>
    </div>

    <div
      class="col-span-5 row-span-2 bg-accent p-[32px] flex flex-col justify-between"
    >
      <h2 class="text-accentLight">
        I focused on designing digital experience on both web and mobile
        applications.
      </h2>
      <div class="text-accentLight flex justify-between items-center">
        <a href="/">Know Me More</a>
        <a href="/"><img src={arrow} alt="" srcset="" /></a>
      </div>
    </div>
  </div>
  <div
    class="w-1/2  bg-dark grid grid-cols-6 grid-rows-5 gap-5s lg:w-full lg:h-screen"
  >
    <div class="col-span-full row-span-1  pt-[32px] px-[32px]">
      <nav class="flex justify-between text-light  ">
        <div><a href="/">All Works (6)</a></div>
        <div><a href="/">Contact</a></div>
      </nav>
    </div>
    <div class="col-span-full row-span-3 flex justify-center relative ">
      <div
        class="h-full aspect-[4/5] bg-primary p-8s hover:-rotate-12 ease-out duration-300 xl:bg-dark lg:bg-primary"
      >
        <div class="overflow-hidden select-none ">
          <img
            class="object-cover h-full aspect-[4/5]"
            src={featured1}
            alt=""
          />
        </div>
      </div>
      <div class="absolute bottom-0 w-[66%]  flex justify-between text-light">
        <h2>Teeraco</h2>
        <h2>— 2022</h2>
      </div>
    </div>
    <div
      class="col-span-full row-span-1 flex items-center justify-between px-[32px] self-end pb-[20px]"
    >
      <div class="text-darkLight ">
        <a href="#project-details"
          ><h1>
            Featured <span class="font-italic italic ">work</span>
          </h1>
        </a>
      </div>
      <div class="animate-bounce">
        <a href="/"><img src={arrowDown} alt="" srcset="" /></a>
      </div>
    </div>
  </div>
</main>
