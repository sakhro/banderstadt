import packageJson from "../../../package.json";

export const Version = () => (
  <p className="text-sm text-center text-white/50">v{packageJson.version}</p>
);
