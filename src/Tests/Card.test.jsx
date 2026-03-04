import Card from "../features/Card";
import { render, screen, it, fireEvent } from "@testing-library/react";

describe("Card Testing", () => {
  test("Should render without crashes", () => {
    render(
      <Card
        label={"test"}
        title={"testbis"}
        picture={"http://localhost:8000/images/4.jpeg"}
      />,
    );

    const image = screen.getByRole("img");
    expect(image.src).toBe("http://localhost:8000/images/4.jpeg");
    const title = screen.getByText("testbis");
    const favoris = title.closest("div");
    expect(title.textContent).toBe("testbis");
    fireEvent.click(favoris);
    expect(title.textContent).toBe("🌟testbis");
  });
});
