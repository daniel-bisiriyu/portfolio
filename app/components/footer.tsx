export default function Footer() {
  return (
    <div className="pt-12 md:pt-12 xl:pt-34">
      <div className="flex flex-col md:px-38 md:flex-row justify-between py-12 px-4 xl:px-48">
        <div>
          <p className="text-2xl font-semibold text-center xl:text-left pb-6 xl:pb-0">
            daniel.bisiriyu.o@gmail.com
          </p>
        </div>
        <div className="flex justify-between">
          <a
            href="https://drive.google.com/file/d/1GbPoQXjfyl34CjNW5sf1XdDUvv2jN1Zp/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            [ RESUME ]
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-bisiriyu/"
            target="_blank"
            rel="noopener noreferrer"
            className="pl-12"
          >
            [ LINKEDIN ]
          </a>
          <a
            href="https://medium.com/@daniel.bisiriyu.o"
            target="_blank"
            rel="noopener noreferrer"
            className="pl-12"
          >
            [ MEDIUM ]
          </a>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-7xl md:text-9xl xl:text-[14rem] font-extrabold leading-[99%]">
          DANIEL BISIRIYU
        </h1>
      </div>
      <p className="text-center py-6 text-[#aaa] text-xs">
        © 2025 Daniel Bisiriyu. All Rights Reserved.
      </p>
    </div>
  );
}
