import { ThemeProvider } from "../features/Context/ThemProvider";
import Footer from "../features/Footer";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Testing Fotter render successfully", () => {
  test("Should be render without crash", () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>,
    );
    const nightModeButton = screen.getByRole("button");
    expect(nightModeButton.textContent).toBe("Changer de mode : ☀️");
    fireEvent.click(nightModeButton);
    expect(nightModeButton.textContent).toBe("Changer de mode : 🌙");
  });
});
