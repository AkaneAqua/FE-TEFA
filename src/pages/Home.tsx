import React, {useState, useEffect, useRef} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="flex flex-col items-center px-6 max-sm:px-0 lg:px-0 z-10">
      {/* Halaman 1 (Home Section) */}
      <div className="flex-grow bg-gradient-to-t w-full from-[#4942E4] to-[#dfdeff] min-h-screen">
        <Navbar />
        <div className="w-full max-w-3xl mx-auto p-2 mt-16">
          <div className="text-center mt-24">
            <h1 className="text-6xl font-bold text-neutral-100 mb-4">
              Digital
            </h1>
            <h1 className="text-6xl font-bold text-neutral-100 mb-4">
              Platform For
            </h1>
            <h2 className="text-6xl font-bold text-black">All Employee</h2>
            <p className="text-lg mt-6 text-neutral-100 px-1 space-y-64 drop-shadow-2xl font-sans">
              Practical and accurate web attendance makes it easy to record
              attendance in real-time with automatic recap and notification
              features. Secure digital presence solution to increase your
              organization's efficiency.
            </p>
          </div>
        </div>
      </div>

      {/* Halaman 2 (Presensi Section) */}
      <div className="bg-[#4942E4] py-16 w-full min-h-screen flex items-center justify-center">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center max-w-2xl mx-auto px-4 sm:px-6 lg:px-2 space-y-8 lg:space-y-0 lg:space-x-12">
          <div className="flex-shrink-0 lg:max-w-xs w-full lg:mb-0 mb-8">
            <img
              src="/public/image/Home2.png"
              alt="Illustration"
              className="w-full mx-auto"
            />
          </div>
          <div className="flex flex-col text-white px-0 space-y-6 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold">
              Presensi From Our <br /> Online Platform
            </h2>
            <div className="space-y-2">
              <div className="flex items-start justify-center lg:justify-start">
                <img
                  src="https://img.icons8.com/ios-filled/50/ffffff/clock.png"
                  alt="Masuk Icon"
                  className="w-8 h-8 mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">Masuk</h3>
                  <p>
                    Getting to work on time is key to productivity. With the
                    discipline of showing up every day, you contribute to the
                    success of your team and company.
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-center lg:justify-start">
                <img
                  src="https://img.icons8.com/ios-filled/50/ffffff/suitcase.png"
                  alt="Izin Icon"
                  className="w-8 h-8 mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">Izin</h3>
                  <p>
                    Work permits are granted for urgent needs or emergencies.
                    Employees must apply for permission and get approval before
                    being absent.
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-center lg:justify-start">
                <img
                  src="https://img.icons8.com/ios-filled/50/ffffff/beach.png"
                  alt="Cuti Icon"
                  className="w-8 h-8 mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">Cuti</h3>
                  <p>
                    A leave of absence is an employee's right to be away from
                    work for a period of time, usually for rest or personal
                    purposes. Leave must be planned and approved in advance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Halaman 3 (About Section) */}
      <div
        id="about"
        className="bg-gradient-to-t from-[#dfdeff] to-[#4942E4] py-16 w-full min-h-screen flex flex-col items-center"
      >
        <div className="flex flex-col max-w-4xl text-center justify-center items-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our platform is designed to help organizations optimize their
            presence tracking and attendance management. With real-time
            attendance data, automated summaries, and intuitive features, we
            strive to make employee management as seamless as possible.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Founded in 2023, we have been continuously improving our platform to
            ensure we meet the growing needs of businesses and organizations of
            all sizes. Our mission is to provide a reliable, secure, and
            user-friendly solution that empowers teams to work more efficiently.
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
