<template>
    <FadeInWrapper>
        <div class="h-full bg-primary">
            <div class="pb-16">
                <HomeNavbar/>
                <main>
                    <HomeHero class="relative container overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 "/>
                    <div class="container mx-auto items-center max-w-7xl mx-auto px-4 sm:px-6 snap-none">

                        <HomeAbout/>
                        <HomeExperience/>
                        <HomeProjects/>

                    </div>

                    <HomePhotography/>

                    <div class="container mx-auto items-center max-w-7xl mx-auto px-4 sm:px-6 snap-none">
                        <HomeContact/>

                        <Footer/>

                    </div>
                </main>
            </div>
        </div>
    </FadeInWrapper>
</template>