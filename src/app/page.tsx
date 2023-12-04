import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="Home-S1 flex flex-col md:flex-col-reverse gap-y-4 lg:flex-row  my-Box  ">
        <div className="h-[30%] w-full md:h-[40%] flex flex-col gap-y-2 lg:w-[50%]   ">
          <div className="my-Box mx-3 p-4 font-[orb-var] text-blue-950 leading-[125%] md:leading-[110%]  flex flex-col  my-Box text-[40px]  md:text-[50px] lg:text-xl font-bold ">
            <span>Create a</span>
            <span>Compelling and</span>
            <span>Engaging Website</span>
          </div>
          <p className="bg-neutral-100 p-6 md:p-12 lg:p-16 mx-2 text-blue-950 font-semibold font-[orb-var] text-[100%] leading-7 tracking-wider rounded-3xl  ">
            " Welcome to my website! Get ready to explore different aspects of
            my life through an enticing website. From my home to my favorite
            movies, music, and more, each page is a unique narrative that
            invites you to connect with my world. "
          </p>
        </div>
      </section>

      <section className="hero-grid">
        <Link href="/Family" className="hero-link">
          <div className="hero-div">
            <Image
              src="/images/hero-img/hero-family-2.jpg"
              fill
              alt="hero-images"
              className="hero-img"
            />
          </div>
          <span className="hero-span relative ">Family</span>
        </Link>
        <Link href="/Friends" className="hero-link">
          <div className="hero-div">
            <Image
              src="/images/hero-img/hero-friends-2.jpg"
              fill
              alt="hero-images"
              className="hero-img"
            />
          </div>
          <span className="hero-span  ">Friends</span>
        </Link>
        <Link href="/Journey" className="hero-link">
          <div className="hero-div">
            <Image
              src="/images/hero-img/hero-journey.jpg"
              fill
              alt="hero-images"
              className="hero-img"
            />
          </div>
          <span className="hero-span  ">Journey</span>
        </Link>
        <Link href="/Movies" className="hero-link">
          <div className="hero-div">
            <Image
              src="/images/hero-img/hero-movies.jpg"
              fill
              alt="hero-images"
              className="hero-img"
            />
          </div>
          <span className="hero-span ">Movies</span>
        </Link>
        <Link href="/Music" className="hero-link">
          <div className="hero-div">
            <Image
              src="/images/hero-img/hero-music.jpg"
              fill
              alt="hero-images"
              className="hero-img"
            />
          </div>
          <span className="hero-span  ">Music</span>
        </Link>
        <Link href="/Social" className="hero-link">
          <div className="hero-div">
            <Image
              src="/images/hero-img/hero-social.jpg"
              fill
              alt="hero-images"
              className="hero-img"
            />
          </div>
          <span className="hero-span  ">Social</span>
        </Link>
        <Link href="/VideoGames" className="hero-link">
          <div className="hero-div">
            <Image
              src="/images/hero-img/hero-games.jpg"
              fill
              alt="hero-images"
              className="hero-img"
            />
          </div>
          <span className="hero-span  ">VideoGames</span>
        </Link>
        <Link href="/More" className="hero-link">
          <div className="hero-div">
            <Image
              src="/images/hero-img/hero-more.jpg"
              fill
              alt="hero-images"
              className="hero-img"
            />
          </div>
          <span className="hero-span  ">More</span>
        </Link>
      </section>
    </main>
  );
}
