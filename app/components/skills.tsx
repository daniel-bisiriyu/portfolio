export default function Skills() {
  return (
    <div className="px-24 pt-12 pb-34">
      <h1 className="text-9xl font-extrabold">Skills</h1>
      <div className="pt-12">
        <small>01</small>
      </div>
      <div className="flex justify-between items-center">
        <div className="w-1/3">
          <h1 className="text-2xl font-semibold">
            &lt; Languages & Framework / &gt;
          </h1>
        </div>
        <div className="w-2/3 px-24">
          <div className="flex justify-between">
            <p className="">
              Javascript, TypeScript, Node.Js, React, Next.js, Vue, Nuxt,
              Angular, GSAP
            </p>
          </div>
        </div>
      </div>
      <div className="pt-12">
        <small>02</small>
      </div>
      <div className="flex justify-between items-center">
        <div className="w-1/3">
          <h1 className="text-2xl font-semibold">&lt; Testing / &gt;</h1>
        </div>
        <div className="w-2/3 px-24">
          <div className="flex justify-between">
            <p className="">Jest, Cypress, Cucumber.js, Gherkin</p>
          </div>
        </div>
      </div>
      <div className="pt-12">
        <small>03</small>
      </div>
      <div className="flex justify-between items-center">
        <div className="w-1/3">
          <h1 className="text-2xl font-semibold">
            &lt; Tooling & Devops / &gt;
          </h1>
        </div>
        <div className="w-2/3 px-24">
          <div className="flex justify-between">
            <p className="">Docker, Kubernetes, Storybook</p>
          </div>
        </div>
      </div>
    </div>
  );
}
