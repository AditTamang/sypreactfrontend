import { Button } from "@/components/ui/button";

const navLinks= [{name: "Home", href:"/"}, {name: "About", href:"/about"},{name: "consultDoctor", href:"/consultDoctor"},{name:"appointment", href:"/appointment"},{name:"Health Packages", href:"#"},{name:"FAQ", href:"/faq"}]

export default function HeaderSection() {
    return(<header className="fixed top-0 left-0 right-0 bg-white z-50 border-b">
        <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
      <img className="logo w-12 h-auto" src="/image/Logo1.png" alt="Logo" />
      <div className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
        MedDoc</div>
    </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/"
              className="text-gray-600 hover:text-blue-600 cursor-pointer"
            >
              Home
            </a>
            <a
              href="/consultDoctor"
              className="text-gray-600 hover:text-blue-600 cursor-pointer"
            >
              Consult Doctor
            </a>
            <a
              href="/appointment"
              className="text-gray-600 hover:text-blue-600 cursor-pointer"
            >
              Book Appointment
            </a>
            <a
              href="/package"
              className="text-gray-600 hover:text-blue-600 cursor-pointer"
            >
              Health Packages
            </a>
            <a
              href="/about"
              className="text-gray-600 hover:text-blue-600 cursor-pointer"
            >
              About Us
            </a>
            <a
              href="/faq"
              className="text-gray-600 hover:text-blue-600 cursor-pointer"
            >
              FAQ
            </a>
          </nav>

          <Button variant="outline" className="!rounded-button">
            <a href="/login">Login</a>
          </Button>
        </div>
      </header>)
}