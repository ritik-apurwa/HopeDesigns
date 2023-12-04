import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section id="home-s1">
        <div className="home-s1-parenet-div">
          <div className="home-s1-child-div">
            <span>Create a</span>
            <span>Compelling and</span>
            <span>Engaging Website</span>
          </div>
          <p className="home-s1-p">
            " Welcome to my website! Get ready to explore different aspects of
            my life through an enticing website. From my home to my favorite
            movies, music, and more, each page is a unique narrative that
            invites you to connect with my world. "
          </p>
        </div>
      </section>

      <section id="hero-grid">
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
