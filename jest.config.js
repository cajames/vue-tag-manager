module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true,
  testURL: "http://localhost/",
  collectCoverageFrom: [
    "src/**/*.ts",
    "!**/*.d.ts",
    "!**/node_modules/**",
  ],
  moduleNameMapper: {
    "@/(.*)": "src/$1"
  }
};
