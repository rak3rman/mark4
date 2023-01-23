<template>
    <div>
        <Header num="01." title="About Me" id="about" fade/>
        <div class="mt-4">
            <div class="relative lg:float-right lg:pl-5 lg:pb-5 lg:pt-1">
                <div class="relative text-base mx-auto max-w-prose lg:max-w-md">
                    <figure class="lg:w-[40rem] lg:h-[40rem]">
                        <div class="lg:hidden aspect-w-12 aspect-h-7 lg:aspect-none fade-in">
                            <img class="rounded-lg shadow-lg object-cover object-top"
                                 src="https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/60165710-ba66-465f-f366-ba1c3b73cd00/xl"
                                 alt="Portrait of Radison"/>
                        </div>
						<div class="hidden lg:block ml-[2rem] fade-in">
                            <img class="rounded-lg shadow-lg object-cover object-top w-[19rem]"
                                 src="https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/60165710-ba66-465f-f366-ba1c3b73cd00/xl"
                                 alt="Portrait of Radison"/>
                        </div>
						<div class="hidden lg:block absolute top-0 left-0 mt-[26rem] ml-[0rem] overflow-hidden rounded-lg shadow-xl fade-in">
                            <img class="object-cover object-top w-[16rem] h-[15rem]"
                                 src="https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/b6b21ae7-e308-443c-a354-976ae0a02300/2xl"
                                 alt="Radison Lecturing at UIC"/>
						 </div>
						<div class="hidden lg:block absolute top-0 left-0 mt-[13rem] ml-[12rem] overflow-hidden rounded-lg shadow-xl fade-in">
                            <img class="object-cover object-top scale-[135%] -translate-x-2 w-[18rem]"
                                 src="https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/b6cd4c78-5828-4edf-7ce0-603681a5cf00/2xl"
                                 alt="Radison Biking"/>
                        </div>
                    </figure>
                </div>
            </div>
            <div class="mt-8 lg:mt-0">
                <div class="text-neutral mx-auto lg:max-w-full lg:row-start-1 lg:col-start-1">
                    <p class="fade-in">Hello there! I’m Radison, a creative leader, project manager, computer science
                        student, and professional photographer. My interest in digital technology started back in middle
                        school when I tinkered with microcontrollers and competed in FIRST LEGO League competitions — it
                        turns out you can learn a lot from bits of plastic and expensive servos.</p>
                    <p class="fade-in">Fast-forward to today, where I’ve had the privilege of working at a
                        <NuxtLink class="text-secondary underline underline-offset-2" to="https://uic.edu">R1 research university</NuxtLink>,
                        <NuxtLink class="text-secondary underline underline-offset-2" to="https://www.va.gov">a department of the U.S. government</NuxtLink>,
                        <NuxtLink class="text-secondary underline underline-offset-2" to="https://www.stevenolikara.com">a U.S. Senate campaign</NuxtLink>,
                        <NuxtLink class="text-secondary underline underline-offset-2" to="https://www.monteltech.com">a start-up</NuxtLink>, and
                        <NuxtLink class="text-secondary underline underline-offset-2" to="https://my.lifetime.life/athletic-events.html">an event management group</NuxtLink>.
						Nowadays, you’ll find me relentlessly building and operationally leading
                        <NuxtLink class="text-secondary underline underline-offset-2" to="https://pulqra.com">Pulqra</NuxtLink>,
						a creative marketing collective with over 200 collaborations worldwide.
                    </p>
                    <p class="fade-in">I’m also juggling quite a few responsibilities at the
                        <NuxtLink class="text-secondary underline underline-offset-2" to="https://uic.edu">University of Illinois Chicago</NuxtLink>.
						For starters, I am studying computer science and business full-time (with a 4.0 GPA, whoop!).
                        I also project manage 7 web and database developers working on over 10 full-stack web
                        applications for the College of Engineering.
                    </p>
                    <p class="fade-in">
						Making an impact is part of my DNA, especially when it comes to personal
                        projects. I recently gave
                        <NuxtLink class="text-secondary underline underline-offset-2" to="https://youtu.be/cD53M7NHQoM">two separate 300-level guest lectures</NuxtLink> at UIC about
                        <NuxtLink class="text-secondary underline underline-offset-2" to="https://chickens.rakerman.com">Exploding Chickens</NuxtLink> —
						a popular full-stack card game I built with my friends. We dove deep into project management,
                        design patterns, code review, and test coverage.
                    </p>
                    <p class="fade-in">
						Huge projects like Exploding Chickens (built with over 30,000 lines of code!)
                        necessitated an almost business-like structure to coordinate development. The RAkerman
                        Foundation answered this call and now hosts over
                        <NuxtLink class="text-secondary underline underline-offset-2" to="https://status.rakerman.com">10 web services</NuxtLink>,
						2 web products generating revenue, and 5 organizational members.
                    </p>
					<p class="fade-in">
						In my spare time, I love to building things with my hands (woodworking, small electronics) and competing in endurance triathlons.
						Just this past summer, I finished <NuxtLink class="text-secondary underline underline-offset-2" to="https://www.athlinks.com/event/30585/results/Event/1019369/Course/2251422/Bib/3435">214th out of 2,456</NuxtLink> in the Chicago Triathlon, Olympic distance &mdash; my first ever multisport race.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>