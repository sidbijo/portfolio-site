export default function Home() {
  const projects = [
    {
      title: "Stock Market Data Pipeline",
      stack: "Python • Apache Airflow • AWS S3 • PostgreSQL • Pandas",
      bullets: [
        "Built a fully automated ETL pipeline to extract, transform, and load stock market data into an analytics-ready warehouse.",
        "Orchestrated daily pipeline execution with Apache Airflow, implementing task sequencing and failure handling.",
        "Processed and enriched time-series data using Pandas.",
        "Implemented a data lake pattern in AWS S3 to store raw and processed datasets.",
        "Integrated PostgreSQL as a data warehouse for downstream SQL analytics.",
      ],
      // add links when you have them
      github: "https://github.com/sidbijo/stock-market-data-pipeline",
      demo: "",
    },
    {
      title: "Personal Expense Tracker Web Application",
      stack: "Python • Flask • SQLAlchemy • SQLite • Bootstrap",
      bullets: [
        "Designed and developed a full-stack financial tracking application managing expenses, budgets, and incomes.",
        "Implemented relational models and CRUD operations in SQLite to store and query structured financial data.",
        "Developed interactive dashboards for trend analysis and financial forecasting.",
        "Delivered a polished, responsive UI with Bootstrap and reusable templates for improved usability.",
      ],
      github: "https://github.com/sidbijo/personal-expense-tracker",
      demo: "",
    },
    {
      title: "NBA Player Probability Calculator",
      stack: "Python • NumPy • SciPy • Pandas",
      bullets: [
        "Calculates the likelihood of an NBA player exceeding performance lines using historical stats.",
        "Uses statistical analysis and probability distribution functions to provide insights.",
        "Includes optional filtering by specific opponents.",
      ],
      github: "https://github.com/sidbijo/nba-player-probability-calculator",
      demo: "",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <main className="mx-auto max-w-5xl px-6 py-20">
        {/* HERO */}
        <section className="mb-14">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Sidharth Bijo
          </h1>
          <p className="mt-3 text-xl text-zinc-600 dark:text-zinc-400">
            Data Analyst • Data Engineer • Data Scientist
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            I build data pipelines, analytics tools, and end-to-end applications
            that turn messy data into clear insights. Strong in Python, SQL, ETL,
            and dashboarding.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              className="rounded-lg bg-black px-6 py-3 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              Resume
            </a>

            <a
              href="https://github.com/sidbijo"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-zinc-300 px-6 py-3 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sidharth-bijo-79990123b/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-zinc-300 px-6 py-3 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              LinkedIn
            </a>
          </div>
        </section>

        {/* PROJECTS */}
        <section>
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Selected work
            </span>
          </div>

          <div className="grid gap-6">
            {projects.map((p) => (
              <article
                key={p.title}
                className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                      {p.stack}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    {p.github ? (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md border border-zinc-300 px-3 py-2 text-sm hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
                      >
                        GitHub
                      </a>
                    ) : null}

                    {p.demo ? (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md bg-black px-3 py-2 text-sm text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                      >
                        Live Demo
                      </a>
                    ) : null}
                  </div>
                </div>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {p.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 text-sm text-zinc-500 dark:text-zinc-400">
          <p>
            © {new Date().getFullYear()} Sidharth Bijo • Built with Next.js &
            Vercel
          </p>
        </footer>
      </main>
    </div>
  );
}
