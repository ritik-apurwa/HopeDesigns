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

      <section className="section-grid-container">
        <Link
          href="/"
          className="section-grid-link"
        >
          <Image
            src="/images/bg/family.jpg"
            height={600}
            width={800}
            alt="icon"
            className="section-grid-link-img "
          />
          <span className="section-grid-link-img-tag ">
            Family
          </span>
        </Link>
        <Link
          href="/"
          className="section-grid-link"
        >
          <Image
            src="/images/bg/Friends.jpg"
            height={600}
            width={800}
            alt="icon"
            className="section-grid-link-img "
          />
          <span className="section-grid-link-img-tag ">
            Friends
          </span>
        </Link>
        <Link
          href="/"
          className="section-grid-link"
        >
          <Image
            src="/images/bg/games.jpg"
            height={600}
            width={800}
            alt="icon"
            className="section-grid-link-img "
          />
          <span className="section-grid-link-img-tag ">
            Games
          </span>
        </Link>
        <Link
          href="/"
          className="section-grid-link"
        >
          <Image
            src="/images/bg/cinema.jpg"
            height={600}
            width={800}
            alt="icon"
            className="section-grid-link-img "
          />
          <span className="section-grid-link-img-tag ">
            Movies
          </span>
        </Link>
        <Link
          href="/"
          className="section-grid-link"
        >
          <Image
            src="/images/bg/hh.jpg"
            height={600}
            width={800}
            alt="icon"
            className="section-grid-link-img "
          />
          <span className="section-grid-link-img-tag ">
            About Me
          </span>
        </Link>
        <Link
          href="/"
          className="section-grid-link"
        >
          <Image
            src="/images/bg/movies.jpg"
            height={600}
            width={800}
            alt="icon"
            className="section-grid-link-img "
          />
          <span className="section-grid-link-img-tag ">
            Social
          </span>
        </Link>
        <Link
          href="/"
          className="section-grid-link"
        >
          <Image
            src="/images/bg/homepage.jpg"
            height={600}
            width={800}
            alt="icon"
            className="section-grid-link-img "
          />
          <span className="section-grid-link-img-tag ">
            Music
          </span>
        </Link>
      </section>
    </main>
  );
}
