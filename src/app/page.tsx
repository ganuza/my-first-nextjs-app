export default function Home() {
  return (
    <main className = "flex flex-col items-center justify-between py-12 px-24">
      <div className = "z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-5xl font-extralight mb-4">Hello, I'm Adrian</h1>
        <p className = "text-xl">A React developer learning Next.js and Tailwind CSS</p>
      </div>

      <div>
        <img
          src = "/images/68DF3F75-A761-4820-9EDD-D8746252EF9D_1_105_c.jpeg"
          alt = "Black and white mountains picture"
          className="w-full h-auto mt-8 mb-24 rounded-lg shadow-lg"
        />
      </div>

      {/* <div className="w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path 
            fill="#f3f4f6" 
            fillOpacity="1" 
            d="M0,128L48,117.3C96,107,192,85,288,90.7C384,96,480,128,576,138.7C672,149,768,139,864,122.7C960,107,1056,85,1152,80C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div> */}

      <div className="w-full max-w-5xl h-24 relative overflow-hidden">
        <div 
          className="absolute bottom-0 w-full h-full bg-gray-100" 
          style={{ 
            borderTopLeftRadius: '50% 100%', 
            borderTopRightRadius: '50% 100%' 
          }} 
        />
      </div>

      

      <div className = "mb-12 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <div className = "group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
          <h2 className="mb-3 text-2xl font-semibold">About</h2>
          <p className = "m-0 max-w-[30ch] text-sm opacity-50">Wright a brief bio about yourself here.
          </p>
        </div>

        <div className = "group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
          <h2 className="mb-3 text-2xl font-semibold">Skills</h2>
          <p className = "m-0 max-w-[30ch] text-sm opacity-50">List some of your technical skills here.
          </p>
        </div>

        <div className = "group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
          <h2 className="mb-3 text-2xl font-semibold">Projects</h2>
          <p className = "m-0 max-w-[30ch] text-sm opacity-50">Highlight some projects you've worked on.
          </p>
        </div>
      </div>
    </main>
  )
}