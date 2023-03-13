import "@testing-library/jest-dom";
const originalConsoleWarn = console.warn;

// Override to suppress legacy lifecycle method warnings on CHOSEN components.
console.warn = (...args) => {
  const [firstArg, secondArg] = args;
  const componentsToSkip = ["LegacyComponent", "AnotherLegacyComponent"];

  const shouldSkip =
    typeof firstArg === "string" && // It could also be an object!
    firstArg.includes("In React 18.x, only the UNSAFE_ name will work.") &&
    typeof secondArg === "string" && // It could also be an object!
    secondArg
      .split(",")
      .every((name) => componentsToSkip.includes(name.trim()));

  !shouldSkip && originalConsoleWarn(...args);
};
