import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Freelances from "../pages/Freelance";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "../features/Context/ThemProvider";
import QueryProvider from "../features/Query/QueryProvider";

describe("Testing Freelance Page", () => {
  test("Should be call API  without crash", async () => {
    render(
      <QueryProvider>
        <MemoryRouter>
          <ThemeProvider>
            <Freelances />
          </ThemeProvider>
        </MemoryRouter>
      </QueryProvider>,
    );
  });
});
