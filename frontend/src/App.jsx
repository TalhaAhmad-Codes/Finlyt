import "./App.css";

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 p-6">
      <section className="max-w-lg rounded-2xl bg-white p-8 shadow-xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
          Expense Tracker
        </p>

        <h1 className="text-3xl font-bold text-slate-900">
          Welcome to your finances.
        </h1>

        <p className="mt-4 text-slate-600">
          Track expenses, manage budgets, and work toward your savings goals.
        </p>

        <button className="mt-6 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700">
          Get Started
        </button>
      </section>
    </main>
  );
}

export default App;
