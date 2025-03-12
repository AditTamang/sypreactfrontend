import { Button } from "@/components/ui/button";

const navLinks= [{name: "Home", href:"/"}, {name: "About", href:"/about"},{name: "Services", href:"/services"},{name:"contact", href:"/contact"}]

export default function HeaderSection() {
    return(<header className="fixed top-0 left-0 right-0 bg-white z-50 border-b">
        <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <i className="fas fa-stethoscope text-blue-600 text-2xl"></i>
            <span className="text-xl font-semibold text-blue-600">MedDoc</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 cursor-pointer"
            >
              Consult Doctor
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 cursor-pointer"
            >
              Book Appointment
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 cursor-pointer"
            >
              Health Packages
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 cursor-pointer"
            >
              Hospital
            </a>
            <a
              href="/about"
              className="text-gray-600 hover:text-blue-600 cursor-pointer"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 cursor-pointer"
            >
              Visit Us
            </a>
          </nav>

          <Button variant="outline" className="!rounded-button">
            Login
          </Button>
        </div>
      </header>)
}