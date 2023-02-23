import Head from "next/head";
import Image from "next/image";
import SFW from "@/components/examples/SFW";
import Nsfw from "@/components/examples/Nsfw";
import Manga from "@/components/examples/Manga";
import Anime from "@/components/examples/Anime";
import Hentai from "@/components/examples/Hentai";
import Shorten from "@/components/examples/Shorten";
import Emotions from "@/components/examples/Emotions";
import Unsplash from "@/components/examples/Unsplash";
import Pinterest from "@/components/examples/Pinterest";
import Wallpaper from "@/components/examples/Wallpaper";
import Youtube_sr from "@/components/examples/Youtube_sr";
import Youtube_dl from "@/components/examples/Youtube_dl";
import Text2Speech from "@/components/examples/Text2Speech";
import OngoingAnime from "@/components/examples/OngoingAnime";

export default function magneum() {
return (
<>
<main className="bg-gradient-to-b from-black via-slate-900 to-slate-900 backdrop-blur-lg">
<section>
<div className="relative block w-full mx-auto md:mt-0">
<Image
alt="blob"
width={700}
height={700}
src="/Next_By_Vercel_White.png"
className="max-w-xs m-auto md:max-w-2xl animate-pulse"
></Image>
<div className="relative flex items-center backdrop-blur-lg">
<div className="container relative flex flex-col items-center justify-between px-6 py-8 mx-auto">
<div className="flex flex-col">
<h1 className="underline decoration-blue-50 w-full text-5xl font-sans font-extrabold text-center uppercase sm:text-5xl text-blue-50">
Get Started With Magneum Api
</h1>
</div>
</div>
</div>
</div>
</section>
{/* ============================================================================================================== */}
<section>
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="grid gap-10 row-gap-8 lg:grid-cols-5">
<div className="lg:col-span-2">
<div className="mb-3">
<p className="font-serif text-3xl font-extrabold leading-none tracking-tight text-blue-300">
<span className="text-white animate-ping text-5xl">● </span>
<span className="text-blue-300 decoration-blue-800 underline">
Api/Manga
</span>
</p>
<br></br>
<Image
className="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg border border-blue-900 shadow-sm shadow-blue-900"
src="/gify.gif"
alt="blob"
width={500}
height={500}
></Image>
</div>
</div>
<div className="flex flex-col space-y-8 lg:col-span-3">
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Informator:
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Use this module to get all information about any manga
from myanimelist.
</span>
<br></br>
<span className="text-blue-500 font-semibold">
● endpoint:{" "}
</span>
/api/manga?q=<br></br>
<span className="text-blue-500 font-semibold">
● example:{" "}
</span>
/api/manga?q=death note<br></br>
</p>
</div>
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Code Examples
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Examples are demonstrated using javascript & typescript.
</span>
<br></br>
<br></br>
<Manga />
</p>
</div>
</div>
</div>
</div>
<hr
className="blur animate-pulse"
style={{
backgroundColor: "#ffff",
height: 1,
}}
/>
{/* =========================================================================================== */}
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="grid gap-10 row-gap-8 lg:grid-cols-5">
<div className="lg:col-span-2">
<div className="mb-3">
<p className="font-serif text-3xl font-extrabold leading-none tracking-tight text-blue-300">
<span className="text-white animate-ping text-5xl">● </span>
<span className="text-blue-300 decoration-blue-800 underline">
Api/Emotions
</span>
</p>
<br></br>
<Image
className="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg border border-blue-900 shadow-sm shadow-blue-900"
src="/gify.gif"
alt="blob"
width={500}
height={500}
></Image>
</div>
</div>
<div className="flex flex-col space-y-8 lg:col-span-3">
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Informator:
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Use all below available emotions endpoints to get .gif
.png & .jpeg links.
</span>
<br></br>
<span className="text-blue-500 font-semibold">
● endpoint:{" "}
</span>
/api/emotions?q=<br></br>
<span className="text-blue-500 font-semibold">
● example:{" "}
</span>
/api/emotions?q=smile<br></br>
<span className="text-blue-500 font-semibold">
● querries available:{" "}
</span>
<br></br>
<span className="text-blue-200 italic">
bite, bonk, bored, confused, cry, cuddle, dance,<br></br>
happy, highfive, hug, kick, kill, kiss, nervous, pat,
poke, punch, sad, scream<br></br>
slap, smile, stare, wave, wink, yeet, thinking
</span>
<br></br>
</p>
</div>
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Code Examples
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Examples are demonstrated using javascript & typescript.
</span>
<br></br>
<br></br>
<Emotions />
</p>
</div>
</div>
</div>
</div>
<hr
className="blur animate-pulse"
style={{
backgroundColor: "#ffff",
height: 1,
}}
/>
{/* =========================================================================================== */}
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="grid gap-10 row-gap-8 lg:grid-cols-5">
<div className="lg:col-span-2">
<div className="mb-3">
<p className="font-serif text-3xl font-extrabold leading-none tracking-tight text-blue-300">
<span className="text-white animate-ping text-5xl">● </span>
<span className="text-blue-300 decoration-blue-800 underline">
Api/Anime
</span>
</p>
<br></br>
<Image
className="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg border border-blue-900 shadow-sm shadow-blue-900"
src="/gify.gif"
alt="blob"
width={500}
height={500}
></Image>
</div>
</div>
<div className="flex flex-col space-y-8 lg:col-span-3">
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Informator:
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Use this module to get all information about any anime.
</span>
<br></br>
<span className="text-blue-500 font-semibold">
● endpoint:{" "}
</span>
/api/anime?q=<br></br>
<span className="text-blue-500 font-semibold">
● example:{" "}
</span>
/api/anime?q=death note<br></br>
</p>
</div>
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Code Examples
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Examples are demonstrated using javascript & typescript.
</span>
<br></br>
<br></br>
<Anime />
</p>
</div>
</div>
</div>
</div>
<hr
className="blur animate-pulse"
style={{
backgroundColor: "#ffff",
height: 1,
}}
/>
{/* =========================================================================================== */}
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="grid gap-10 row-gap-8 lg:grid-cols-5">
<div className="lg:col-span-2">
<div className="mb-3">
<p className="font-serif text-3xl font-extrabold leading-none tracking-tight text-blue-300">
<span className="text-white animate-ping text-5xl">● </span>
<span className="text-blue-300 decoration-blue-800 underline">
Api/YouTube_Dl
</span>
</p>
<br></br>
<Image
className="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg border border-blue-900 shadow-sm shadow-blue-900"
src="/gify.gif"
alt="blob"
width={500}
height={500}
></Image>
</div>
</div>
<div className="flex flex-col space-y-8 lg:col-span-3">
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Informator:
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Use this module to get youtube direct audio & video
download links.
</span>
<br></br>
<span className="text-blue-500 font-semibold">
● endpoint:{" "}
</span>
/api/youtube_dl?q=<br></br>
<span className="text-blue-500 font-semibold">
● example: /api/youtube_dl?q=
<span className="italic text-blue-300">
ncs music 5 minutes
</span>
&quality=1080p
</span>
<br></br>
<span className="text-blue-500 font-semibold">
● example: /api/youtube_dl?q=
<span className="italic text-blue-300">
https://youtu.be/3gxus8LnMfI
</span>
&quality=1080p
</span>
<br></br>
<br></br>
<span className="italic text-blue-400 uppercase">
QUALITY:
</span>
<br></br>
&quality=<span className="italic text-blue-300">1080p</span>
<br></br>
&quality=<span className="italic text-blue-300">720p</span>
<br></br>
&quality=<span className="italic text-blue-300">480p</span>
<br></br>
&quality=<span className="italic text-blue-300">360p</span>
<br></br>
&quality=<span className="italic text-blue-300">240p</span>
<br></br>
(audio) &quality=
<span className="italic text-blue-300">128kbps</span>
</p>
</div>
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Code Examples
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Examples are demonstrated using javascript & typescript.
</span>
<br></br>
<br></br>
<Youtube_dl />
</p>
</div>
</div>
</div>
</div>
<hr
className="blur animate-pulse"
style={{
backgroundColor: "#ffff",
height: 1,
}}
/>
{/* ============================================================================================================== */}
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="grid gap-10 row-gap-8 lg:grid-cols-5">
<div className="lg:col-span-2">
<div className="mb-3">
<p className="font-serif text-3xl font-extrabold leading-none tracking-tight text-blue-300">
<span className="text-white animate-ping text-5xl">● </span>
<span className="text-blue-300 decoration-blue-800 underline">
Api/YouTube_Sr
</span>
</p>
<br></br>
<Image
className="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg border border-blue-900 shadow-sm shadow-blue-900"
src="/gify.gif"
alt="blob"
width={500}
height={500}
></Image>
</div>
</div>
<div className="flex flex-col space-y-8 lg:col-span-3">
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Informator:
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Use this module to get everything from youtube video meta
informations.
</span>
<br></br>
<span className="text-blue-500 font-semibold">
● endpoint:{" "}
</span>
/api/youtube_sr?q=<br></br>
<span className="text-blue-500 font-semibold">
● example:{" "}
</span>
/api/youtube_sr?q=ncs music 5 minutes<br></br>
<span className="text-blue-500 font-semibold">
● example:{" "}
</span>
/api/youtube_sr?q=https://youtu.be/3gxus8LnMfI<br></br>
</p>
</div>
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Code Examples
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Examples are demonstrated using javascript & typescript.
</span>
<br></br>
<br></br>
<Youtube_sr />
</p>
</div>
</div>
</div>
</div>
<hr
className="blur animate-pulse"
style={{
backgroundColor: "#ffff",
height: 1,
}}
/>
{/* ============================================================================================================== */}
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="grid gap-10 row-gap-8 lg:grid-cols-5">
<div className="lg:col-span-2">
<div className="mb-3">
<p className="font-serif text-3xl font-extrabold leading-none tracking-tight text-blue-300">
<span className="text-white animate-ping text-5xl">● </span>
<span className="text-blue-300 decoration-blue-800 underline">
Api/Pinterest
</span>
</p>
<br></br>
<Image
className="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg border border-blue-900 shadow-sm shadow-blue-900"
src="/gify.gif"
alt="blob"
width={500}
height={500}
></Image>
</div>
</div>
<div className="flex flex-col space-y-8 lg:col-span-3">
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Informator:
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Use this module to get high quality wallpapers from
pinterest.
</span>
<br></br>
<span className="text-blue-500 font-semibold">
● endpoint:{" "}
</span>
/api/pinterest?q=<br></br>
<span className="text-blue-500 font-semibold">
● example:{" "}
</span>
/api/pinterest?q=cat<br></br>
</p>
</div>
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Code Examples
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Examples are demonstrated using javascript & typescript.
</span>
<br></br>
<br></br>
<Pinterest />
</p>
</div>
</div>
</div>
</div>
<hr
className="blur animate-pulse"
style={{
backgroundColor: "#ffff",
height: 1,
}}
/>
{/* =========================================================================================== */}
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="grid gap-10 row-gap-8 lg:grid-cols-5">
<div className="lg:col-span-2">
<div className="mb-3">
<p className="font-serif text-3xl font-extrabold leading-none tracking-tight text-blue-300">
<span className="text-white animate-ping text-5xl">● </span>
<span className="text-blue-300 decoration-blue-800 underline">
Api/SFW
</span>
</p>
<br></br>
<Image
className="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg border border-blue-900 shadow-sm shadow-blue-900"
src="/gify.gif"
alt="blob"
width={500}
height={500}
></Image>
</div>
</div>
<div className="flex flex-col space-y-8 lg:col-span-3">
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Informator:
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Use all below available sfw endpoints to get .gif .mp4
.png & .jpeg links.
</span>
<br></br>
<span className="text-blue-500 font-semibold">
● endpoint:{" "}
</span>
/api/sfw?q=<br></br>
<span className="text-blue-500 font-semibold">
● example:{" "}
</span>
/api/sfw?q=waifu<br></br>
<span className="text-blue-500 font-semibold">
● querries available:{" "}
</span>
<br></br>
<span className="text-blue-200 italic">
waifu, neko, shinobu, megumin, bully, cuddle, cry, hug,
awoo, kiss<br></br>
lick, pat, smug, bonk, yeet, blush, smile, wave, highfive,
nom, bite, glomp<br></br>
slap, kill, kick, happy, wink, poke, dance, cringe,
handhold
</span>
<br></br>
</p>
</div>
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Code Examples
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Examples are demonstrated using javascript & typescript.
</span>
<br></br>
<br></br>
<SFW />
</p>
</div>
</div>
</div>
</div>
<hr
className="blur animate-pulse"
style={{
backgroundColor: "#ffff",
height: 1,
}}
/>
{/* ============================================================================================================== */}
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="grid gap-10 row-gap-8 lg:grid-cols-5">
<div className="lg:col-span-2">
<div className="mb-3">
<p className="font-serif text-3xl font-extrabold leading-none tracking-tight text-blue-300">
<span className="text-white animate-ping text-5xl">● </span>
<span className="text-blue-300 decoration-blue-800 underline">
Api/Shorten
</span>
</p>
<br></br>
<Image
className="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg border border-blue-900 shadow-sm shadow-blue-900"
src="/gify.gif"
alt="blob"
width={500}
height={500}
></Image>
</div>
</div>
<div className="flex flex-col space-y-8 lg:col-span-3">
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Informator:
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Use this module to get a shortened url from tinyurl.
</span>
<br></br>
<span className="text-blue-500 font-semibold">
● endpoint:{" "}
</span>
/api/shorten?q=<br></br>
<span className="text-blue-500 font-semibold">
● example:{" "}
</span>
/api/shorten?q=https://google.com<br></br>
</p>
</div>
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Code Examples
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Examples are demonstrated using javascript & typescript.
</span>
<br></br>
<br></br>
<Shorten />
</p>
</div>
</div>
</div>
</div>
<hr
className="blur animate-pulse"
style={{
backgroundColor: "#ffff",
height: 1,
}}
/>
{/* ============================================================================================================== */}
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="grid gap-10 row-gap-8 lg:grid-cols-5">
<div className="lg:col-span-2">
<div className="mb-3">
<p className="font-serif text-3xl font-extrabold leading-none tracking-tight text-blue-300">
<span className="text-white animate-ping text-5xl">● </span>
<span className="text-blue-300 decoration-blue-800 underline">
Api/Text2Speech
</span>
</p>
<br></br>
<Image
className="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg border border-blue-900 shadow-sm shadow-blue-900"
src="/gify.gif"
alt="blob"
width={500}
height={500}
></Image>
</div>
</div>
<div className="flex flex-col space-y-8 lg:col-span-3">
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Informator:
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Use this module to get speech url from google-api using
text.
</span>
<br></br>
<span className="text-blue-500 font-semibold">
● endpoint:{" "}
</span>
/api/text2speech?q=<br></br>
<span className="text-blue-500 font-semibold">
● example:{" "}
</span>
/api/text2speech?q=Hello. How are You?<br></br>
</p>
</div>
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Code Examples
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Examples are demonstrated using javascript & typescript.
</span>
<br></br>
<br></br>
<Text2Speech />
</p>
</div>
</div>
</div>
</div>
<hr
className="blur animate-pulse"
style={{
backgroundColor: "#ffff",
height: 1,
}}
/>
{/* ============================================================================================================== */}
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="grid gap-10 row-gap-8 lg:grid-cols-5">
<div className="lg:col-span-2">
<div className="mb-3">
<p className="font-serif text-3xl font-extrabold leading-none tracking-tight text-blue-300">
<span className="text-white animate-ping text-5xl">● </span>
<span className="text-blue-300 decoration-blue-800 underline">
Api/Unsplash
</span>
</p>
<br></br>
<Image
className="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg border border-blue-900 shadow-sm shadow-blue-900"
src="/gify.gif"
alt="blob"
width={500}
height={500}
></Image>
</div>
</div>
<div className="flex flex-col space-y-8 lg:col-span-3">
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Informator:
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Use this module to get high resolution wallpapers from
unsplash.
</span>
<br></br>
<span className="text-blue-500 font-semibold">
● endpoint:{" "}
</span>
/api/unsplash?q=<br></br>
<span className="text-blue-500 font-semibold">
● example:{" "}
</span>
/api/unsplash?q=Tom and Jerry<br></br>
</p>
</div>
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Code Examples
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Examples are demonstrated using javascript & typescript.
</span>
<br></br>
<br></br>
<Unsplash />
</p>
</div>
</div>
</div>
</div>
<hr
className="blur animate-pulse"
style={{
backgroundColor: "#ffff",
height: 1,
}}
/>
{/* ============================================================================================================== */}
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="grid gap-10 row-gap-8 lg:grid-cols-5">
<div className="lg:col-span-2">
<div className="mb-3">
<p className="font-serif text-3xl font-extrabold leading-none tracking-tight text-blue-300">
<span className="text-white animate-ping text-5xl">● </span>
<span className="text-blue-300 decoration-blue-800 underline">
Api/Wallpaper
</span>
</p>
<br></br>
<Image
className="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg border border-blue-900 shadow-sm shadow-blue-900"
src="/gify.gif"
alt="blob"
width={500}
height={500}
></Image>
</div>
</div>
<div className="flex flex-col space-y-8 lg:col-span-3">
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Informator:
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Use this module to get high quality wallpapers.
</span>
<br></br>
<span className="text-blue-500 font-semibold">
● endpoint:{" "}
</span>
/api/wallpaper?q=<br></br>
<span className="text-blue-500 font-semibold">
● example:{" "}
</span>
/api/wallpaper?q=Asus Tuf<br></br>
</p>
</div>
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Code Examples
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Examples are demonstrated using javascript & typescript.
</span>
<br></br>
<br></br>
<Wallpaper />
</p>
</div>
</div>
</div>
</div>
<hr
className="blur animate-pulse"
style={{
backgroundColor: "#ffff",
height: 1,
}}
/>
{/* ============================================================================================================== */}
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="grid gap-10 row-gap-8 lg:grid-cols-5">
<div className="lg:col-span-2">
<div className="mb-3">
<p className="font-serif text-3xl font-extrabold leading-none tracking-tight text-blue-300">
<span className="text-white animate-ping text-5xl">● </span>
<span className="text-blue-300 decoration-blue-800 underline">
Api/OngoingAnime
</span>
</p>
<br></br>
<Image
className="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg border border-blue-900 shadow-sm shadow-blue-900"
src="/gify.gif"
alt="blob"
width={500}
height={500}
></Image>
</div>
</div>
<div className="flex flex-col space-y-8 lg:col-span-3">
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Informator:
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Use this module to get all latest on going anime.
</span>
<br></br>
<span className="text-blue-500 font-semibold">
● endpoint:{" "}
</span>
/api/ongoinganime<br></br>
</p>
</div>
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Code Examples
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Examples are demonstrated using javascript & typescript.
</span>
<br></br>
<br></br>
<OngoingAnime />
</p>
</div>
</div>
</div>
</div>
<hr
className="blur animate-pulse"
style={{
backgroundColor: "#ffff",
height: 1,
}}
/>
{/* ============================================================================================================== */}
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="grid gap-10 row-gap-8 lg:grid-cols-5">
<div className="lg:col-span-2">
<div className="mb-3">
<p className="font-serif text-3xl font-extrabold leading-none tracking-tight text-blue-300">
<span className="text-white animate-ping text-5xl">● </span>
<span className="text-blue-300 decoration-blue-800 underline">
Api/Hentai
</span>
</p>
<br></br>
<Image
className="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg border border-blue-900 shadow-sm shadow-blue-900"
src="/gify.gif"
alt="blob"
width={500}
height={500}
></Image>
</div>
</div>
<div className="flex flex-col space-y-8 lg:col-span-3">
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Informator:
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Use all below available hentai endpoints to get .gif .png
& .jpeg links.
</span>
<br></br>
<span className="text-blue-500 font-semibold">
● endpoint:{" "}
</span>
/api/hentai?q=<br></br>
<span className="text-blue-500 font-semibold">
● example:{" "}
</span>
/api/hentai?q=ass<br></br>
<span className="text-blue-500 font-semibold">
● querries available:{" "}
</span>
<br></br>
<span className="text-blue-200 italic">
ass, bdsm, blowjob, cum, doujin, feet, femdom, foxgirl,
hentai<br></br>
netorare, maid, masturbation, orgy, panties, pussy,
school, succubus,<br></br>
tentacles, thighs, uglyBastard, uniform, yuri<br></br>
</span>
<br></br>
</p>
</div>
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Code Examples
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Examples are demonstrated using javascript & typescript.
</span>
<br></br>
<br></br>
<Hentai />
</p>
</div>
</div>
</div>
</div>
<hr
className="blur animate-pulse"
style={{
backgroundColor: "#ffff",
height: 1,
}}
/>
{/* =========================================================================================== */}
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="grid gap-10 row-gap-8 lg:grid-cols-5">
<div className="lg:col-span-2">
<div className="mb-3">
<p className="font-serif text-3xl font-extrabold leading-none tracking-tight text-blue-300">
<span className="text-white animate-ping text-5xl">● </span>
<span className="text-blue-300 decoration-blue-800 underline">
Api/NSFW
</span>
</p>
<br></br>
<Image
className="lg:h-48 md:h-36 w-full object-cover object-center rounded-lg border border-blue-900 shadow-sm shadow-blue-900"
src="/gify.gif"
alt="blob"
width={500}
height={500}
></Image>
</div>
</div>
<div className="flex flex-col space-y-8 lg:col-span-3">
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Informator:
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Use all below available nsfw endpoints to get .gif .mp4
.png & .jpeg links.
</span>
<br></br>
<span className="text-blue-500 font-semibold">
● endpoint:{" "}
</span>
/api/nsfw?q=<br></br>
<span className="text-blue-500 font-semibold">
● example:{" "}
</span>
/api/nsfw?q=nsfw<br></br>
<span className="text-blue-500 font-semibold">
● querries available:{" "}
</span>
<br></br>
<span className="text-blue-200 italic">
nsfw, nsfw2, bonermaterial, nsfw411, iwanttofuckher,
exxxtras, distension, bimbofetish, christiangirls,
dirtygaming<br></br>
sexybutnotporn, femalepov, omgbeckylookathiscock,
sexygirls, breedingmaterial, canthold, toocuteforporn,
justhotwomen, stripgirls, hotstuffnsfw, uncommonposes,
gifsofremoval<br></br>
nostalgiafapping, truefmk, nudes, 4k, realgirls, blowjobs,
milf, milk, milking, lactating, pussy, slut, cumslut
</span>
<br></br>
</p>
</div>
<div>
<div className="mb-3">
<p className="font-sans text-2xl font-extrabold leading-none tracking-tight lg:text-2xl text-blue-600">
- Code Examples
</p>
</div>
<p className="mb-4 text-base text-blue-50 md:text-lg">
<span className="text-blue-200 font-semibold">
Examples are demonstrated using javascript & typescript.
</span>
<br></br>
<br></br>
<Nsfw />
</p>
</div>
</div>
</div>
</div>
<hr
className="blur animate-pulse"
style={{
backgroundColor: "#ffff",
height: 1,
}}
/>
</section>
</main>
{/* =========================================================================================== */}
<footer className="footer footer-center p-10 bg-slate-900 text-base-content rounded">
<div>
<p className="font-bold italic text-slate-400">
Copyright © 2023 - All right reserved by Magneum Industries Ltd
</p>
</div>
</footer>
</>
);
}
