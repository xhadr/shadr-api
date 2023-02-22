import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
const TryApi = dynamic(() => import("../components/TryApi"));
const NavHome = dynamic(() => import("../components/NavHome"));
const NavFetch = dynamic(() => import("../components/NavFetch"));

export default function magneum() {
return (
<>
<Head>
<title>Magneum Ui</title>
<meta name="description" content="Generated by create next app" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="icon" href="/favicon.ico" />
</Head>
<main className="">
<header className="font-serif text-orange-100 body-font">
<div className="relative">
<Image
src="/magneum_ui.png"
className="absolute inset-0 object-cover w-full h-full md:blur-sm lg:blur-sm xl:blur-sm"
alt="content"
width={1270}
height={720}
/>
<div className="relative bg-stone-900 bg-opacity-75">
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
<div className="flex flex-col items-center justify-between xl:flex-row">
<h1 className="mb-5 font-bold tracking-tight text-orange-100 text-4xl sm:leading-none justify-center">
When you have a dream, <br className="hidden md:block" />
you have got to{" "}
<span className="inline-block text-orange-500">
grab
</span>{" "}
it and
<span className="inline-block text-orange-500">
never{" "}
</span>{" "}
let go.
</h1>
<p className="lg:w-2/3 text-orange-100">
✧ Hi, I am{" "}
<span className="inline-block text-orange-500 font-bold">
Magneum (▀͜͞ʖ▀) ▄︻̷̿┻̿═━━ ~~
</span>
<br></br>✧ A Front/Back-end self-taught developer.
<br></br>✧ Have been developing Whatsapp,Telegram,Discord
bots since 2k21.
<br></br>✧ Below you can find all my work including{" "}
<span className="inline-block text-orange-500">
Magneum-Api
</span>
</p>
</div>
</div>
</div>
</div>
</header>
<hr
className="blur animate-pulse"
style={{
backgroundColor: "#42231b ",
height: 4,
}}
/>
<section className="text-orange-600 body-font bg-gradient-to-br from-[#202020] via-[#1f1414] to-[#141414]">
<div className="container px-5 py-24 mx-auto">
<div className="flex flex-col">
<div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
<h1 className="sm:w-2/5 text-orange-500 font-bold title-font text-2xl mb-2 sm:mb-0">
Lets head over to different places:
</h1>
<p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0"></p>
<div className="h-1 bg-orange-100 rounded overflow-hidden">
<div className="w-24 h-full bg-orange-600"></div>
</div>
</div>
</div>
<div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
<div className="p-4 md:w-1/3 sm:mb-0 mb-6">
<div className="h-64 overflow-y-hidden border-orange-800 border-2 rounded-lg hover:scale-105 shadow-lg shadow-orange-800">
<Link href="https://github.com/magneum">
<Image
alt="content"
width={500}
height={500}
className="object-cover animate-pulse object-center h-full w-full"
src="/github.jpeg"
></Image>
</Link>
</div>
<h2 className="text-xl font-bold title-font text-orange-500 mt-5 uppercase">
🛵Github.com/magneum
</h2>
<p className="text-base leading-relaxed mt-2 text-orange-100 hover:text-orange-300">
GitHub, Inc. is an Internet hosting service for software
development and version control using Git. It provides the
distributed version control of Git plus access control, bug
tracking, software feature requests, task management,
continuous integration, and wikis for every project.
</p>
</div>

<div className="p-4 md:w-1/3 sm:mb-0 mb-6">
<div className="h-64 overflow-y-hidden border-orange-800 border-2 rounded-lg hover:scale-105 shadow-lg shadow-orange-800 contrast-125">
<Link href="https://bit.ly/premiumdl">
<Image
alt="content"
width={500}
height={500}
className="object-cover animate-pulse object-center h-full w-full contrast-75"
src="/premiumdl.png"
></Image>
</Link>
</div>
<h2 className="text-xl font-bold title-font text-orange-500 mt-5 uppercase">
🎹 bit.ly/premiumdl
</h2>
<p className="text-base leading-relaxed mt-2 text-orange-100 hover:text-orange-300">
- PREMIUMDL allows you to convert & download video and audio
from YouTube, Spotify in HD quality. Available formats are
.webm .mp4. You can easily download for free thousands of
videos from YouTube and other websites. Once the required
video url or song name is provided, all the meta informations
are shown in the page.
</p>
</div>

<div className="p-4 md:w-1/3 sm:mb-0 mb-6">
<div className="h-64 overflow-y-hidden border-orange-800 border-2 rounded-lg hover:scale-105 shadow-lg shadow-orange-800 contrast-125">
<Link href="/application">
<Image
alt="content"
width={500}
height={500}
className="object-cover animate-pulse object-center h-full w-full"
src="/api.jpg"
></Image>
</Link>
</div>
<h2 className="text-xl font-bold title-font text-orange-500 mt-5 uppercase">
🛰️ Magneum Api
</h2>
<p className="text-base leading-relaxed mt-2 text-orange-100 hover:text-orange-300">
With Magneum you can fetch different types of informations
without needing to install any dependencies or worrying about
servers or configurations.
</p>
</div>
<div className="p-4 md:w-1/3 sm:mb-0 mb-6">
<div className="h-64 overflow-y-hidden border-orange-800 border-2 rounded-lg hover:scale-105 shadow-lg shadow-orange-800">
<Link href="https://www.npmjs.com/settings/magneum/packages">
<Image
alt="content"
width={500}
height={500}
className="object-cover animate-pulse object-center h-full w-full"
src="/node.png"
></Image>
</Link>
</div>
<h2 className="text-xl font-bold title-font text-orange-500 mt-5 uppercase">
🔥 Node NPM Packages
</h2>
<p className="text-base leading-relaxed mt-2 text-orange-100 hover:text-orange-300">
NPM is the worlds largest software registry.<br></br>
Open source developers from every continent use npm to share
and borrow packages,and many organizations use npm to manage
private development as well.
</p>
</div>
<div className="p-4 md:w-1/3 sm:mb-0 mb-6">
<div className="h-64 overflow-y-hidden border-orange-800 border-2 rounded-lg hover:scale-105 shadow-lg shadow-orange-800">
<Link href="https://vlkyre.up.railway.app/vlkyre.html">
<Image
alt="content"
width={500}
height={500}
className="object-cover animate-pulse object-center h-full w-full contrast-150"
src="/whatsapp.png"
></Image>
</Link>
</div>
<h2 className="text-xl font-bold title-font text-orange-500 mt-5 uppercase">
🦇 Vlkyre Home Page
</h2>
<p className="text-base leading-relaxed mt-2 text-orange-100 hover:text-orange-300">
Vlkyre is a whatsapp bot with automation, moderation, music,
games and 200+ commands! You can easily deploy your own vlkyre
by using npm. To Find Out What Vlkyre Offers, Join Any Vlkyre
Official Groups in vlkyre-home-page.
</p>
</div>
<div className="p-4 md:w-1/3 sm:mb-0 mb-6">
<div className="h-64 overflow-y-hidden border-orange-800 border-2 rounded-lg hover:scale-105 shadow-lg shadow-orange-800">
<Link href="https://www.youtube.com/channel/UC5_VwWIUIdmv96OvR5rFvaA">
<Image
alt="content"
width={500}
height={500}
className="object-cover animate-pulse object-center h-full w-full"
src="/YouTube.jpg"
></Image>
</Link>
</div>
<h2 className="text-xl font-bold title-font text-orange-500 mt-5 uppercase">
🦇 Vlkyre YouTube
</h2>
<p className="text-base leading-relaxed mt-2 text-orange-100 hover:text-orange-300">
YouTube is a global online video sharing and social media
platform headquartered in San Bruno, California. It was
launched on February 14, 2005, by Steve Chen, Chad Hurley, and
Jawed Karim. It is owned by Google, and is the second most
visited website, after Google Search
</p>
</div>
<div className="p-4 md:w-1/3 sm:mb-0 mb-6">
<div className="h-64 overflow-y-hidden border-orange-800 border-2 rounded-lg hover:scale-105 shadow-lg shadow-orange-800">
<Link href="https://hub.docker.com/repositories/magneum">
<Image
alt="content"
width={500}
height={500}
className="object-cover animate-pulse object-center h-full w-full contrast-125"
src="/Docker.jpg"
></Image>
</Link>
</div>
<h2 className="text-xl font-bold title-font text-orange-500 mt-5 uppercase">
🦇 Magneum Docker
</h2>
<p className="text-base leading-relaxed mt-2 text-orange-100 hover:text-orange-300">
Docker is a set of platform as a service products that use
OS-level virtualization to deliver software in packages called
containers. The service has both free and premium tiers. The
software that hosts the containers is called Docker Engine.
</p>
</div>

<div className="p-4 md:w-1/3 sm:mb-0 mb-6">
<div className="h-64 overflow-y-hidden border-orange-800 border-2 rounded-lg hover:scale-105 shadow-lg shadow-orange-800">
<Link href="https://premiumdl-git-main-magneum.vercel.app/anime">
<Image
alt="content"
width={500}
height={500}
className="object-cover animate-pulse object-center h-full w-full"
src="/anime_hub.png"
></Image>
</Link>
</div>
<h2 className="text-xl font-bold title-font text-orange-500 mt-5 uppercase">
🦇 Anime Hub
</h2>
<p className="text-base leading-relaxed mt-2 text-orange-100 hover:text-orange-300">
Anime is hand-drawn and computer-generated animation
originating from Japan. Outside of Japan and in English, anime
refers specifically to animation produced in Japan. However,
in Japan and in Japanese, anime describes all animated works,
regardless of style or origin.
</p>
</div>
</div>
</div>
</section>
</main>{" "}
<hr
className="blur animate-pulse"
style={{
backgroundColor: "#42231b ",
height: 4,
}}
/>
<footer className="footer footer-center p-10 bg-zinc-900 text-base-content rounded">
<div>
<p className="font-bold italic text-slate-400">
Copyright © 2023 - All right reserved by Magneum Industries Ltd
</p>
</div>
</footer>
</>
);
}
