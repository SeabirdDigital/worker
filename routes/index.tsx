import { Head } from "$fresh/runtime.ts";
import Button from "../components/button.tsx";
import MenuSection from "../components/menuSection.tsx";
import menu from "../data/menu.ts";

export default function Home() {
    return (
        <>
            <Head>
                <title>Fresh App</title>

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Lora:wght@400;600&family=Nunito+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <div class="overflow-hidden font-nunito">
                <div class="relative py-56 md:py-72 md:w-[95vw] mx-auto md:my-16 mx-auto flex flex-col justify-center bg-si-red bg-opacity-10 overflow-hidden md:rounded-3xl">
                    <div class="absolute bottom-0 md:bottom-auto md:top-0 w-full bg-si-red text-white text-lg flex justify-center text-center py-3">
                        <p>
                            <b>SUPER DEAL</b>: 30% på dina favoriträtter på
                            Foodora.{" "}
                            <a class="underline hover:no-underline" href="">
                                Läs mer
                            </a>
                        </p>
                    </div>
                    <div class="absolute top-12 md:top-24 w-full ">
                        <div class="container flex items-center">
                            <img src="/logo.svg" alt="" class="w-32 md:w-44" />
                        </div>
                    </div>
                    <img
                        src="/background.png"
                        class="absolute hidden sm:block left-[60%] lg:left-[50%] h-full object-cover object-left"
                        alt=""
                    />

                    <div class="container flex flex-col justify-center gap-9">
                        <div class="flex flex-col gap-4">
                            <h1 class="text-5xl md:text-7xl font-lora font-semibold">
                                Bara utsökt <br /> italiensk mat
                            </h1>
                        </div>

                        <div class="flex gap-3">
                            <Button class="bg-si-red border-si-red text-white">
                                Se menyn
                            </Button>
                            <Button class="border-black">Hitta hit</Button>
                        </div>
                    </div>
                </div>

                <div class="container lg:grid grid-cols-2 py-24">
                    <div class="h-full flex justify-center">
                        <div
                            class="relative hidden lg:block h-96"
                            style="aspect-ratio: 1;"
                        >
                            <div class="absolute bottom-[10%] h-full w-full">
                                <div class="absolute bottom-[20%] left-0 h-2/5 w-2/3 bg-gray-100 rounded-3xl"></div>
                                <div class="absolute bottom-0 right-0 h-2/5 w-2/3 bg-si-red rounded-3xl"></div>
                                <img
                                    src="/hand.png"
                                    class="absolute right-0 h-full"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col justify-center">
                        <h2 class="font-lora text-4xl font-semibold mb-2.5">
                            Lipsum
                        </h2>

                        <p class="text-xl max-w-2xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ducimus iste rem veritatis reiciendis
                            deleniti! Laboriosam accusantium culpa vitae
                            eligendi quia vero reiciendis dignissimos,
                            consequuntur id laborum, blanditiis maiores cum
                            dolore.
                            <br />
                            <br />
                            Följ oss online:
                            <br />
                            <a class="underline hover:no-underline" href="#">
                                Facebook
                            </a>
                            <br />
                            <a class="underline hover:no-underline" href="#">
                                Instagram
                            </a>
                        </p>
                    </div>
                </div>

                <div class="relative w-[95vw] mx-auto my-16 mx-auto flex justify-center bg-black text-white overflow-hidden rounded-3xl">
                    <div class="container py-12 flex flex-col lg:flex-row justify-between items-baseline lg:items-center gap-8">
                        <div>
                            <h2 class="font-lora text-4xl font-semibold mb-2.5">
                                Har du bråttom?
                            </h2>
                            <p class="text-xl">
                                Beställ enkelt online eller via telefon!
                            </p>
                        </div>

                        <div class="flex flex-col sm:flex-row gap-2 sm:gap-6">
                            <Button class="border-white gap-3">
                                <svg width="18" height="18" viewBox="0 0 36 36">
                                    <path
                                        fill="currentColor"
                                        d="M27.73 35.44a4.72 4.72 0 0 1-1-.11a33.91 33.91 0 0 1-16.62-8.75a32.71 32.71 0 0 1-9-16.25a4.58 4.58 0 0 1 1.35-4.28l4-3.85A2 2 0 0 1 8 1.66a2 2 0 0 1 1.45.87l5 7.39a1.6 1.6 0 0 1-.11 1.9l-2.51 3A18.94 18.94 0 0 0 16 20.71a19.26 19.26 0 0 0 6.07 4.09l3.11-2.47a1.64 1.64 0 0 1 1.86-.12l7.55 4.88A2 2 0 0 1 35 30.2l-3.9 3.86a4.74 4.74 0 0 1-3.37 1.38ZM7.84 3.64l-4 3.85a2.54 2.54 0 0 0-.75 2.4a30.7 30.7 0 0 0 8.41 15.26a31.9 31.9 0 0 0 15.64 8.23a2.75 2.75 0 0 0 2.5-.74l3.9-3.86l-7.29-4.71l-3.34 2.66a1 1 0 0 1-.92.17a20.06 20.06 0 0 1-7.36-4.75a19.49 19.49 0 0 1-4.87-7.2A1 1 0 0 1 10 14l2.7-3.23Z"
                                    />
                                    <path fill="none" d="M0 0h36v36H0z" />
                                </svg>
                                (1)23-456 78 90
                            </Button>
                            <div className="">
                                <Button class="bg-white text-black gap-4">
                                    Foodora
                                    <svg
                                        class="rotate-90"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 36 36"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M27.66 15.61L18 6l-9.66 9.61A1 1 0 1 0 9.75 17L17 9.81v19.13a1 1 0 1 0 2 0V9.81L26.25 17a1 1 0 0 0 1.41-1.42Z"
                                        />
                                        <path fill="none" d="M0 0h36v36H0z" />
                                    </svg>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container py-24">
                    <h2 class="font-lora text-5xl font-semibold mb-2.5">
                        Meny
                    </h2>
                    <p class="text-xl max-w-2xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus eleifend lectus neque, eget euismod velit
                        maximus convallis.
                    </p>

                    <MenuSection menu={menu}></MenuSection>
                </div>

                <div class="bg-si-red text-white">
                    <footer class="container flex justify-center text-center py-6">
                        <span>
                            Copyright 2022 &copy;{" "}
                            <a
                                class="underline hover:no-underline"
                                href="https://seabird.digital"
                            >
                                Seabird Digital UD
                            </a>
                            . Alla rättigheter förbehållna.
                        </span>
                    </footer>
                </div>
            </div>
        </>
    );
}
