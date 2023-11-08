import sonicLogo from "../../public/images/sonic.png";
export default function Custom404() {
  return (
    <div className="w-full relative flex justify-center items-center min-h-screen   sm:pt-3 stripe_gradient_light px-3">
      <div className="flex flex-col justify-center w-full max-w-sm">
        <img src={sonicLogo.src} className="w-20 h-20" />
        <p className="mt-1 text-sm font-medium">
          404.{" "}
          <span className="text-surfaceMixed500 font-normal">
            That's an error
          </span>
        </p>

        <p className="mt-4 text-sm">
          The requested URL was not found on this server.{" "}
          <span className="text-surfaceMixed500">That’s all we know.</span>
        </p>
      </div>
      <p className="absolute bottom-1 right-2 text-xs font-mono text-surface500">
        Sonic Auth Service | sonicesports.com
      </p>
    </div>
  );
}
