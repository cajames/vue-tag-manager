import { warn } from "../utils";

describe("Utils", () => {
  describe("warn", () => {
    it('should prefix messages with "vue-tag-manager"', () => {
      const warnSpy = jest.spyOn(console, "warn");
      warn("some message");
      expect(warnSpy).toHaveBeenCalledWith(
        "[vue-tag-manager]:",
        "some message"
      );
    });

    it("should accept more than one argument", () => {
      const warnSpy = jest.spyOn(console, "warn");
      warn("message1", "message2");
      expect(warnSpy).toHaveBeenCalledWith(
        "[vue-tag-manager]:",
        "message1",
        "message2"
      );
    });
  });
});
