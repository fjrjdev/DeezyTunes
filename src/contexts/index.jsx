import { MusicsProvider } from "./MusicsContext";
import { QueueProvider } from "./QueueContext";

const Providers = ({ children }) => {
  return (
    <MusicsProvider>
      <QueueProvider>{children}</QueueProvider>
    </MusicsProvider>
  );
};

export default Providers;
