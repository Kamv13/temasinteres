import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { TopicsProvider } from './Providers/TopicsProvider';

export const metadata = {
  title: 'Temas disponibles',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <TopicsProvider>
          {children}
        </TopicsProvider>
      </body>
    </html>
  );
}