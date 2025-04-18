export default function Home() {
  return (
    <main className = "flex min-h-screen flex-col items-center justify-between p-24">
      <div className = "z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-5xl font-extralight mb-4">Hello, I'm Adrian</h1>
        <p className = "text-xl">A React developer learning Next.js</p>
      </div>

      <div>
        <img
          src = "/images/68DF3F75-A761-4820-9EDD-D8746252EF9D_1_105_c.jpeg"
          alt = "Black and white mountains picture"
        />
      </div>

      <div className = "mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
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