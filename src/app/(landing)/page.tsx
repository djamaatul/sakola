import SchoolModel from "@/model/schools";
import MiniCard from "./components/mini_card";
import Button from "@/components/button";
import Link from "next/link";

export default async function Home() {
  const school = await SchoolModel.getSchoolById();

  return (
    <>
      <section className="hero-gradient py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight font-heading">
                SAKOLA
              </h1>
              <p className="mt-4 text-xl text-foreground/50">
                Bikin website sekolah cuma dalam hitungan menit
              </p>
              <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button>Get Started</Button>

                <Link href={"/schools/" + school?.id}>
                  <Button.outline>View Demo</Button.outline>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-foreground/10 rounded-xl shadow-xl p-2 transform rotate-2">
                <div className="rounded-lg w-full h-auto -rotate-2 transition-transform duration-300 hover:rotate-0 p-8 bg-foreground/10">
                  <div className="bg-foreground/10 p-4 rounded-lg shadow mb-4">
                    <div className="h-4 w-3/4 bg-primary-500 rounded mb-2"></div>
                    <div className="h-4 w-1/2 bg-primary-300 rounded"></div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-foreground/10 p-4 rounded-lg shadow">
                      <div className="h-20 bg-primary-100/10 rounded-lg mb-2 flex items-center justify-center">
                        <i className="fas fa-calendar-alt text-primary-600 text-2xl"></i>
                      </div>
                      <div className="h-4 w-3/4 bg-primary-200 rounded mx-auto"></div>
                    </div>
                    <div className="bg-foreground/10 p-4 rounded-lg shadow">
                      <div className="h-20 bg-primary-100/10 rounded-lg mb-2 flex items-center justify-center">
                        <i className="fas fa-image text-primary-600 text-2xl"></i>
                      </div>
                      <div className="h-4 w-3/4 bg-primary-200 rounded mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 bg-foreground/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-heading">
              Semua yang Sekolah Lo Butuhin Ada di Sini
            </h2>
            <p className="mt-4 text-xl">
              Didesain khusus buat sekolah & lembaga pendidikan, dengan
              fitur-fitur yang paling penting.
            </p>
          </div>

          <div className="mt-16 flex flex-wrap gap-8">
            <MiniCard
              title="Desain Responsive"
              description="Website lo tetap cakep di semua device — dari PC, tablet, sampe HP."
            />

            <MiniCard
              title="Kelola Event Sekolah"
              description="Bikin & atur acara sekolah dengan gampang, plus reminder otomatis buat orang tua."
            />

            <MiniCard
              title="Berita & Pengumuman"
              description="Kasih info penting langsung ke siswa & ortu lewat section berita khusus."
            />

            <MiniCard
              title="Galeri Foto Keren"
              description="Pamerin acara, kegiatan, & prestasi sekolah dengan galeri foto kece badai."
            />

            <MiniCard
              title="Kelola Data Sekolah"
              description="Atur data siswa, guru, sampe kelas dengan rapi & gampang di-manage"
            />
          </div>
        </div>
      </section>
    </>
  );
}
