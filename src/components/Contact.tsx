"use client";

export default function Contact() {
  return (
    <>
      <section id="contact" className="px-6 md:px-16 lg:px-32 pt-10 pb-24 text-white">
        <p className="text-purple-400 mb-2 text-lg">Let’s talk</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Contact</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT TEXT */}
          <div>
            <p className="text-white/70 text-lg max-w-lg mb-6">
              Have a question or a project in mind? Feel free to reach out.
            </p>

            <p className="text-white/70 text-lg">
              <span className="font-semibold text-white">Location: </span>
              Indonesia, Yogyakarta
            </p>
          </div>

          {/* RIGHT FORM */}
          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Name"
              className="bg-black/20 border border-white/10 px-4 py-3 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-500"
            />

            <input
              type="email"
              placeholder="Email"
              className="bg-black/20 border border-white/10 px-4 py-3 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-500"
            />

            <textarea
              placeholder="Message"
              rows={6}
              className="bg-black/20 border border-white/10 px-4 py-3 rounded-xl text-white placeholder-white/40 resize-none focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 transition text-white font-semibold py-3 rounded-xl"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
