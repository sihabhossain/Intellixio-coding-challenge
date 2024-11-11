import { UserAgentProvider } from "../components/providers/userAgentProvider";
import "./globals.css";
import { Layout } from "@/components/layout";

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <UserAgentProvider>
          <Layout>{children}</Layout>
        </UserAgentProvider>
      </body>
    </html>
  );
};

export default RootLayout;
