import Image from "next/image";


export default function Home() {
  return (
    <main className="">

      <section className="home-div">
        
        <main className="home-image-wrapper">
          <Image
            src="/images/bg/hollywood.jpg"
            alt="icon"
            fill // You can adjust the height based on the aspect ratio of the image
            className="home-image-wrapper-img"
          />
        </main>

        <main className="homepage-text-box  ">
          <h1 className="Heading md:hidden ">
            Create a <br /> Compelling and <br /> Engaging Website
          </h1>
          <p className="slogan">
           "Welcome to my website! Get ready to explore different aspects of my
            life through an enticing website. From my home to my favorite
            movies, music, and more, each page is a unique narrative that
            invites you to connect with my world."
          </p>
        </main>
      </section>
    </main>
  );
}
