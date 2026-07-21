import { render, screen } from "@testing-library/react";
import { ContactSection } from "sections/Contact/ContactSection";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { LocaleProvider } from "app/providers/LocaleProvider";
import "translations";

test("renders contact fields", () => {
  render(
    <ThemeProvider>
      <LocaleProvider>
        <ContactSection />
      </LocaleProvider>
    </ThemeProvider>
  );
  expect(screen.getByLabelText(/name|الاسم/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email|البريد/i)).toBeInTheDocument();
});
