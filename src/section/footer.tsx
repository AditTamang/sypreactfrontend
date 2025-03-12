export default function FooterSection() {
    return( <footer className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 py-16">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <img src="/image/Logo1.png" className="mr-5 h-10" alt="logo" />
              <p className="max-w-xs mt-4 text-sm text-gray-600">
                MedDoc is commited to providing the exceptional healthcare services, ensuring that the patients can
                schedule the appointment easily and giving the access
                to choose the best doctor according to the your needs.
              </p>
              <div className="flex mt-8 space-x-6 text-gray-600">
                <a className="hover:text-blue-600 hover:scale-110 hover:shadow-lg transition duration-300 ease-in-out"
                  href="https://www.facebook.com/YourProfile" target="_blank" rel="noreferrer">
                  <span className="sr-only"> Facebook </span>
                  <img src="/image/facebooklogo.png" alt="Facebook Logo" className="w-6 h-6" />
                </a>
                <a className="hover:text-pink-500 hover:scale-110 hover:shadow-lg transition duration-300 ease-in-out"
                  href="https://www.instagram.com/YourProfile" target="_blank" rel="noreferrer">
                  <span className="sr-only"> Instagram </span>
                  <img src="/image/insta logo footer.png" alt="Instagram Logo" className="w-6 h-6" />
                </a>
                <a className="hover:text-gray-800 hover:scale-110 hover:shadow-lg transition duration-300 ease-in-out"
                  href="https://github.com/AditTamang?tab=repositories" target="_blank" rel="noreferrer">
                  <span className="sr-only"> GitHub </span>
                  <img src="/image/github_logo.png" alt="GitHub Logo" className="w-6 h-6" />
                </a>
                <a className="hover:text-blue-500 hover:scale-110 hover:shadow-lg transition duration-300 ease-in-out"
                  href="https://www.linkedin.com/in/adit-tamang-78650b208/" target="_blank" rel="noreferrer">
                  <span className="sr-only"> LinkedIn </span>
                  <img src="/image/linkedin-logo.png" alt="LinkedIn Logo" className="w-6 h-6" />
                </a>
                <a className="hover:text-black hover:scale-110 hover:shadow-lg transition duration-300 ease-in-out"
                  href="https://www.threads.com/YourProfile" target="_blank" rel="noreferrer">
                  <span className="sr-only"> Threads </span>
                  <img src="/image/threads.png" alt="Threads Logo" className="w-6 h-6" />
                </a>
              </div>
            </div>
  
            <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="font-semibold text-gray-800">Company</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-600">
                  <a className="hover:text-teal-500 hover:bg-teal-100 hover:px-2 hover:py-1 hover:rounded-lg hover:shadow-lg transition duration-300 ease-in-out"
                    href="/about"> About Us </a>
                  <a className="hover:text-teal-500 hover:bg-teal-100 hover:px-2 hover:py-1 hover:rounded-lg hover:shadow-lg transition duration-300 ease-in-out"
                    href="#"> Company Review </a>
                  <a className="hover:text-teal-500 hover:bg-teal-100 hover:px-2 hover:py-1 hover:rounded-lg hover:shadow-lg transition duration-300 ease-in-out"
                    href="#"> Meet the Team </a>
                  <a className="hover:text-teal-500 hover:bg-teal-100 hover:px-2 hover:py-1 hover:rounded-lg hover:shadow-lg transition duration-300 ease-in-out"
                    href="#"> History </a>
                </nav>
              </div>
  
              <div>
                <p className="font-semibold text-gray-800">Services</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-600">
                  <a className="hover:text-teal-500 hover:bg-teal-100 hover:px-2 hover:py-1 hover:rounded-lg hover:shadow-lg transition duration-300 ease-in-out"
                    href="/ambulance"> Ambulance </a>
                  <a className="hover:text-teal-500 hover:bg-teal-100 hover:px-2 hover:py-1 hover:rounded-lg hover:shadow-lg transition duration-300 ease-in-out"
                    href="#"> Doctors Consultations</a>
                  <a className="hover:text-teal-500 hover:bg-teal-100 hover:px-2 hover:py-1 hover:rounded-lg hover:shadow-lg transition duration-300 ease-in-out"
                    href="#"> Book Hospital Appointment </a>
                </nav>
              </div>
  
              <div>
                <p className="font-semibold text-gray-800">Helpful Links</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-600">
                  <a className="hover:text-teal-500 hover:bg-teal-100 hover:px-2 hover:py-1 hover:rounded-lg hover:shadow-lg transition duration-300 ease-in-out"
                    href="#contactUs"> Contact </a>
                  <a className="hover:text-teal-500 hover:bg-teal-100 hover:px-2 hover:py-1 hover:rounded-lg hover:shadow-lg transition duration-300 ease-in-out"
                    href="/faq"> FAQs </a>
                  <a className="hover:text-teal-500 hover:bg-teal-100 hover:px-2 hover:py-1 hover:rounded-lg hover:shadow-lg transition duration-300 ease-in-out"
                    href="#"> Live Chat </a>
                </nav>
              </div>
  
              <div>
                <p className="font-semibold text-gray-800">Quick Links</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-600">
                  <a className="hover:text-teal-500 hover:bg-teal-100 hover:px-2 hover:py-1 hover:rounded-lg hover:shadow-lg transition duration-300 ease-in-out"
                    href="#"> Doctor </a>
                  <a className="hover:text-teal-500 hover:bg-teal-100 hover:px-2 hover:py-1 hover:rounded-lg hover:shadow-lg transition duration-300 ease-in-out"
                    href="#"> Patients </a>
                  <a className="hover:text-teal-500 hover:bg-teal-100 hover:px-2 hover:py-1 hover:rounded-lg hover:shadow-lg transition duration-300 ease-in-out"
                    href="/hospital"> Hospital </a>
                </nav>
              </div>
            </div>
          </div>
  
  
          <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 lg:px-8">
            <div
              className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl rounded-2xl sm:rounded-3xl sm:px-24 xl:py-32">
              <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">Keep
                Updated</h2>
              <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
                Never miss an latest updates! Join our mailing list for personalized health tips, and expert advice from
                our expertise doctors.
              </p>
              <form action="https://formsubmit.co/205759e13fd989dc5ce77ba65e9bc4c1" method="POST" className="mx-auto mt-10 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input id="email-address" name="email" type="email" autoComplete="email" required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  placeholder="Enter your email"/>
                <button type="submit"
                  className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Notify
                  me</button>
              </form>
              <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
                aria-hidden="true">
                <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7">
                </circle>
                <defs>
                  <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641" cx="0" cy="0" r="1"
                    gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)">
                    <stop stopColor="#7775D6"></stop>
                    <stop offset="1" stopColor="#7ED321" stop-opacity="0"></stop>
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
          </div>

          <p
    className="mt-8 text-center text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
    © 2024 MedDoc.
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"> All rights
      reserved.</span>
  </p>


      </footer>)

      
}