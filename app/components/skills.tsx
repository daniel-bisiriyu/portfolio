export default function Skills() {
  return (
    <div className="px-6 sm:px-24 pt-12 pb-34">
      <h1 className="hidden sm:block text-[14rem] font-extrabold text-center">
        Skills
      </h1>
      <div className="w-full sm:w-3/4 mx-auto">
        <div className="pt-12">
          <small>01</small>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="w-full sm:w-1/3">
            <h1 className="text-2xl font-semibold">
              &lt; Languages & Framework / &gt;
            </h1>
          </div>
          <div className="w-full sm:w-2/3 sm:px-24">
            <div className="flex justify-between">
              <p className="text-lg pt-6 sm:pt-0 sm:text-2xl">
                Javascript, TypeScript, Node.Js, React, Next.js, Vue, Nuxt,
                Angular, GSAP
              </p>
            </div>
          </div>
        </div>
        <div className="pt-12">
          <small>02</small>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="w-full sm:w-1/3">
            <h1 className="text-2xl font-semibold">&lt; Testing / &gt;</h1>
          </div>
          <div className="w-full sm:w-2/3 sm:px-24">
            <div className="flex justify-between">
              <p className="text-lg pt-6 sm:pt-0 sm:text-2xl">
                Jest, Cypress, Cucumber.js, Gherkin
              </p>
            </div>
          </div>
        </div>
        <div className="pt-12">
          <small>03</small>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="w-full sm:w-1/3">
            <h1 className="text-2xl font-semibold">
              &lt; Tooling & Devops / &gt;
            </h1>
          </div>
          <div className="w-full sm:w-2/3 sm:px-24">
            <div className="flex justify-between">
              <p className="text-lg pt-6 sm:pt-0 sm:text-2xl">
                Docker, Kubernetes, Storybook
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
