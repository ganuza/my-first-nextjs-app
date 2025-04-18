export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>

      <div className="max-w-2xl">
        <p className="mb-4">
          Hello! I'm a frontend developer specializing in React and now learning Next.js. I recently graduated from the Frontend Engineering Program at Turing School of Software and Design and I'm excited to expand my skills.
        </p>

        <p className="mb-4">
          My background includes many roles in the wine industry including sales, logistics, imports, buying, and brand management. I also spent many years in hospitality and service in the restaurant industry.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Education</h2>
        <ul className="list-disc pl-5">
          <li>Frontend Engineering Program at Turing School of Software and Design</li>
          <li>Certification: GOOGLE IT Fundamentals</li>
          <li>BS in Biology | Minor in Chemistry at the University of North Carolina at Chapel Hill</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">Hobbies</h2>
        <ul className="list-disc pl-5">
          <li>Mountaineering</li>
          <li>Fly Fishing</li>
          <li>Live Music</li>
        </ul>
      </div>
    </main>
  )
}