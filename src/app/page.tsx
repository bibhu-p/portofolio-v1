import HeroSection from "@components/screen/HeroSection";
import { HeroParallax } from "@components/ui/hero/parallax";
import { TracingBeam } from "@components/ui/scrollBars/TracingBeam";

export default function Home() {

  const products = [
    {
      title: "Product 1",
      link: "https://example.com/product1",
      thumbnail: "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU"
    },
    {
      title: "Product 2",
      link: "https://example.com/product2",
      thumbnail: "https://fastly.picsum.photos/id/5/5000/3334.jpg?hmac=R_jZuyT1jbcfBlpKFxAb0Q3lof9oJ0kREaxsYV3MgCc"
    },
    {
      title: "Product 3",
      link: "https://example.com/product3",
      thumbnail: "https://fastly.picsum.photos/id/6/5000/3333.jpg?hmac=pq9FRpg2xkAQ7J9JTrBtyFcp9-qvlu8ycAi7bUHlL7I"
    },
    {
      title: "Product 4",
      link: "https://example.com/product1",
      thumbnail: "https://fastly.picsum.photos/id/8/5000/3333.jpg?hmac=OeG5ufhPYQBd6Rx1TAldAuF92lhCzAhKQKttGfawWuA"
    },
    {
      title: "Product 5",
      link: "https://example.com/product2",
      thumbnail: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
    },
    {
      title: "Product 6",
      link: "https://example.com/product3",
      thumbnail: "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE"
    },
    {
      title: "Product 7",
      link: "https://example.com/product1",
      thumbnail: "https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA"
    },
    {
      title: "Product 8",
      link: "https://example.com/product2",
      thumbnail: "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU"
    },
    {
      title: "Product 9",
      link: "https://example.com/product3",
      thumbnail: "https://fastly.picsum.photos/id/36/4179/2790.jpg?hmac=OCuYYm0PkDCMwxWhrtoSefG5UDir4O0XCcR2x-aSPjs"
    },
  ];
  return (
    <main className="flex flex-col min-h-screen">
      <TracingBeam className="px-1">
        <HeroSection />
        <HeroParallax products={products} />
      </TracingBeam>
    </main>
  );
}
