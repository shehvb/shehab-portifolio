import "translations";
import { ThemeProvider } from "./providers/ThemeProvider";
import { LocaleProvider } from "./providers/LocaleProvider";
import { MainLayout } from "./layout/MainLayout";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <LocaleProvider>
          <MainLayout />
        </LocaleProvider>
      </ThemeProvider>
    </>

  );
}
