function hasValidInputs(parsedWorkflow) {
  const stepToValidate = parsedWorkflow.jobs["CodeQL-Build"].steps[1];
  const stepKeys = Object.keys(stepToValidate);
  const validStep =
    stepKeys.length >= 2 &&
    stepKeys.includes("name") &&
    stepKeys.includes("uses")
      ? true
      : false;
  if (validStep) {
    if (stepKeys.includes("with")) {
      const inputValues = Object.keys(stepToValidate.with);
      if (inputValues.includes("config-file")) {
        const configFilePath = stepToValidate.with["config-file"];
        if (configFilePath === "./.github/codeql/codeql-config.yml") {
          return { isValid: true, message: "Valid query config file" };
        }
        return {
          isValid: false,
          message: "Please change the config-file path to a valid path",
        };
      }
      return {
        isValid: false,
        message:
          "Missing 'config-file' parameter for the Initialize CodeQL step",
      };
    }

    return {
      isValid: false,
      message: "Missing 'with' parameter for the Initialize CodeQL step",
    };
  }
  return {
    isValid: false,
    message:
      "Missing inputs for the Initialize CodeQL step.  Step should have AT LEAST 'name' and 'uses' parameters",
  };
}

module.exports = hasValidInputs;
